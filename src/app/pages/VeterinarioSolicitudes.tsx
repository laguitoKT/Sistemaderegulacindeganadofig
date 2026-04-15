import { useState, useMemo, useEffect } from 'react';
import { Home, FileCheck, User, Eye, X, CheckCircle, XCircle, Search, Filter, ChevronUp, ChevronDown, Edit3, Lock, Baby, ShieldCheck, Syringe, Plus, Trash2, Activity } from 'lucide-react';
import CollapsibleSidebar from '../components/CollapsibleSidebar';

type SortField = 'id' | 'fechaSolicitud' | 'productor' | 'raza' | 'pesoEstimado';
type SortDirection = 'asc' | 'desc';
type EstadoFilter = 'todos' | 'pendiente' | 'aprobada' | 'rechazada';

interface Solicitud {
  id: string;
  animalId: string;
  productor: string;
  rancho: string;
  tipoAnimal: string;
  raza: string;
  sexo: string;
  edad: number;
  pesoEstimado: number;
  condicion: string;
  hasCrias: boolean;
  numCrias: number;
  certificacionesExtras: { nombre: string; aprobada: boolean | null }[];
  fechaSolicitud: string;
  estado: 'pendiente' | 'aprobada' | 'rechazada';
}

const razasPorAnimal: Record<string, string[]> = {
  bovino: ['Holstein', 'Jersey', 'Angus', 'Hereford', 'Charolais', 'Brahman', 'Simmental', 'Limousin', 'Brangus'],
  porcino: ['Yorkshire', 'Landrace', 'Duroc', 'Hampshire', 'Pietrain', 'Berkshire', 'Poland China'],
  ovino: ['Suffolk', 'Dorper', 'Merino', 'Hampshire Down', 'Katahdin', 'Rambouillet', 'Columbia'],
  caprino: ['Nubia', 'Saanen', 'Alpina', 'Boer', 'Toggenburg', 'LaMancha', 'Oberhasli'],
  equino: ['Cuarto de Milla', 'Pura Sangre', 'Criollo', 'Azteca', 'Appaloosa', 'Paint', 'Árabe'],
};

const todasLasSolicitudes: Solicitud[] = [
  { id: 'SOL-001', animalId: 'A-002', productor: 'Juan Pérez', rancho: 'Rancho El Paraíso', tipoAnimal: 'bovino', raza: 'Angus', sexo: 'macho', edad: 2.5, pesoEstimado: 450, condicion: 'bueno', hasCrias: false, numCrias: 0, certificacionesExtras: [{ nombre: 'Libre de Brucelosis', aprobada: null }, { nombre: 'Vacunación Aftosa', aprobada: null }], fechaSolicitud: '2025-01-15', estado: 'pendiente' },
  { id: 'SOL-002', animalId: 'A-004', productor: 'María González', rancho: 'Rancho San José', tipoAnimal: 'bovino', raza: 'Brahman', sexo: 'hembra', edad: 3.5, pesoEstimado: 490, condicion: 'excelente', hasCrias: true, numCrias: 2, certificacionesExtras: [{ nombre: 'Libre de Tuberculosis', aprobada: null }], fechaSolicitud: '2025-02-18', estado: 'pendiente' },
  { id: 'SOL-003', animalId: 'B-105', productor: 'Carlos Ramírez', rancho: 'Traspatio', tipoAnimal: 'bovino', raza: 'Holstein', sexo: 'hembra', edad: 4, pesoEstimado: 520, condicion: 'regular', hasCrias: true, numCrias: 1, certificacionesExtras: [], fechaSolicitud: '2025-02-20', estado: 'pendiente' },
  { id: 'SOL-004', animalId: 'A-008', productor: 'Roberto Sánchez', rancho: 'Rancho La Esperanza', tipoAnimal: 'bovino', raza: 'Hereford', sexo: 'macho', edad: 2, pesoEstimado: 410, condicion: 'bueno', hasCrias: false, numCrias: 0, certificacionesExtras: [{ nombre: 'Libre de Brucelosis', aprobada: null }, { nombre: 'Certificación Orgánica', aprobada: null }], fechaSolicitud: '2025-01-28', estado: 'pendiente' },
  { id: 'SOL-005', animalId: 'C-012', productor: 'Laura Hernández', rancho: 'Rancho Los Pinos', tipoAnimal: 'bovino', raza: 'Charolais', sexo: 'macho', edad: 3, pesoEstimado: 530, condicion: 'excelente', hasCrias: false, numCrias: 0, certificacionesExtras: [{ nombre: 'Vacunación Aftosa', aprobada: null }], fechaSolicitud: '2025-03-01', estado: 'pendiente' },
  { id: 'SOL-006', animalId: 'B-207', productor: 'Fernando Torres', rancho: 'Traspatio', tipoAnimal: 'porcino', raza: 'Duroc', sexo: 'macho', edad: 1.5, pesoEstimado: 380, condicion: 'regular', hasCrias: false, numCrias: 0, certificacionesExtras: [], fechaSolicitud: '2025-02-05', estado: 'pendiente' },
  { id: 'SOL-007', animalId: 'A-015', productor: 'Ana López', rancho: 'Rancho El Roble', tipoAnimal: 'bovino', raza: 'Angus', sexo: 'hembra', edad: 3, pesoEstimado: 470, condicion: 'bueno', hasCrias: true, numCrias: 1, certificacionesExtras: [{ nombre: 'Libre de Brucelosis', aprobada: true }], fechaSolicitud: '2024-12-10', estado: 'aprobada' },
  { id: 'SOL-008', animalId: 'B-310', productor: 'Pedro Martínez', rancho: 'Traspatio', tipoAnimal: 'bovino', raza: 'Holstein', sexo: 'hembra', edad: 5, pesoEstimado: 560, condicion: 'regular', hasCrias: false, numCrias: 0, certificacionesExtras: [], fechaSolicitud: '2024-11-22', estado: 'aprobada' },
  { id: 'SOL-009', animalId: 'A-022', productor: 'Sofía Díaz', rancho: 'Rancho Santa Fe', tipoAnimal: 'bovino', raza: 'Brahman', sexo: 'hembra', edad: 2, pesoEstimado: 400, condicion: 'mal', hasCrias: false, numCrias: 0, certificacionesExtras: [{ nombre: 'Libre de Tuberculosis', aprobada: false }], fechaSolicitud: '2025-01-05', estado: 'rechazada' },
  { id: 'SOL-010', animalId: 'C-045', productor: 'Miguel Ángel Ruiz', rancho: 'Rancho Las Palmas', tipoAnimal: 'bovino', raza: 'Charolais', sexo: 'macho', edad: 4.5, pesoEstimado: 550, condicion: 'excelente', hasCrias: false, numCrias: 0, certificacionesExtras: [{ nombre: 'Certificación Orgánica', aprobada: true }], fechaSolicitud: '2024-12-28', estado: 'aprobada' },
];

const razasUnicas = [...new Set(todasLasSolicitudes.map((s) => s.raza))].sort();
const tiposUnicos = [...new Set(todasLasSolicitudes.map((s) => s.tipoAnimal))].sort();

export default function VeterinarioSolicitudes() {
  const [searchQuery, setSearchQuery] = useState('');
  const [estadoFilter, setEstadoFilter] = useState<EstadoFilter>('todos');
  const [razaFilter, setRazaFilter] = useState('todas');
  const [tipoFilter, setTipoFilter] = useState('todos');
  const [sortField, setSortField] = useState<SortField>('fechaSolicitud');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');

  const [selectedSolicitud, setSelectedSolicitud] = useState<Solicitud | null>(null);
  const [pesoValidado, setPesoValidado] = useState('');
  const [observaciones, setObservaciones] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  // Editable fields state
  const [editRaza, setEditRaza] = useState('');
  const [editEdad, setEditEdad] = useState('');
  const [editSexo, setEditSexo] = useState('');
  const [editCondicion, setEditCondicion] = useState('');
  const [editHasCrias, setEditHasCrias] = useState(false);
  const [editNumCrias, setEditNumCrias] = useState('');
  const [editCertExtras, setEditCertExtras] = useState<{ nombre: string; aprobada: boolean | null }[]>([]);
  const [vacunaciones, setVacunaciones] = useState<{ nombre: string; lote: string; fecha: string }[]>([]);
  const [nuevaVacuna, setNuevaVacuna] = useState({ nombre: '', lote: '', fecha: '' });

  // Initialize editable fields when a solicitud is selected
  useEffect(() => {
    if (selectedSolicitud) {
      setEditRaza(selectedSolicitud.raza);
      setEditEdad(String(selectedSolicitud.edad));
      setEditSexo(selectedSolicitud.sexo);
      setEditCondicion(selectedSolicitud.condicion);
      setEditHasCrias(selectedSolicitud.hasCrias);
      setEditNumCrias(String(selectedSolicitud.numCrias));
      setEditCertExtras(selectedSolicitud.certificacionesExtras.map(c => ({ ...c })));
      setPesoValidado(String(selectedSolicitud.pesoEstimado));
      setVacunaciones([]);
      setNuevaVacuna({ nombre: '', lote: '', fecha: '' });
    }
  }, [selectedSolicitud]);

  const condicionLabels: Record<string, string> = {
    'excelente': 'Excelente',
    'bueno': 'Bueno',
    'regular': 'Regular',
    'mal': 'Mal',
  };

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const filteredSolicitudes = useMemo(() => {
    let result = [...todasLasSolicitudes];

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (s) =>
          s.id.toLowerCase().includes(query) ||
          s.animalId.toLowerCase().includes(query) ||
          s.productor.toLowerCase().includes(query) ||
          s.rancho.toLowerCase().includes(query) ||
          s.raza.toLowerCase().includes(query)
      );
    }

    if (estadoFilter !== 'todos') {
      result = result.filter((s) => s.estado === estadoFilter);
    }

    if (razaFilter !== 'todas') {
      result = result.filter((s) => s.raza === razaFilter);
    }

    if (tipoFilter !== 'todos') {
      result = result.filter((s) => s.tipoAnimal === tipoFilter);
    }

    result.sort((a, b) => {
      let comparison = 0;
      switch (sortField) {
        case 'id': comparison = a.id.localeCompare(b.id); break;
        case 'fechaSolicitud': comparison = new Date(a.fechaSolicitud).getTime() - new Date(b.fechaSolicitud).getTime(); break;
        case 'productor': comparison = a.productor.localeCompare(b.productor); break;
        case 'raza': comparison = a.raza.localeCompare(b.raza); break;
        case 'pesoEstimado': comparison = a.pesoEstimado - b.pesoEstimado; break;
      }
      return sortDirection === 'asc' ? comparison : -comparison;
    });

    return result;
  }, [searchQuery, estadoFilter, razaFilter, tipoFilter, sortField, sortDirection]);

  const handleApprove = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setSelectedSolicitud(null);
      setShowSuccess(false);
      setPesoValidado('');
      setObservaciones('');
      setEditRaza('');
      setEditEdad('');
      setEditSexo('');
      setEditCondicion('');
      setEditHasCrias(false);
      setEditNumCrias('');
      setEditCertExtras([]);
      setVacunaciones([]);
      setNuevaVacuna({ nombre: '', lote: '', fecha: '' });
    }, 2000);
  };

  const handleReject = () => {
    if (confirm('¿Estás seguro de rechazar esta certificación?')) {
      setSelectedSolicitud(null);
      setPesoValidado('');
      setObservaciones('');
      setEditRaza('');
      setEditEdad('');
      setEditSexo('');
      setEditCondicion('');
      setEditHasCrias(false);
      setEditNumCrias('');
      setEditCertExtras([]);
      setVacunaciones([]);
      setNuevaVacuna({ nombre: '', lote: '', fecha: '' });
    }
  };

  const estadoBadge = (estado: Solicitud['estado']) => {
    const styles = {
      pendiente: 'bg-yellow-100 text-yellow-800',
      aprobada: 'bg-green-100 text-green-800',
      rechazada: 'bg-red-100 text-red-800',
    };
    const labels = { pendiente: 'Pendiente', aprobada: 'Aprobada', rechazada: 'Rechazada' };
    return (
      <span className={`px-3 py-1 text-xs font-medium rounded-full ${styles[estado]}`}>
        {labels[estado]}
      </span>
    );
  };

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) return <ChevronUp className="w-4 h-4 text-gray-300" />;
    return sortDirection === 'asc' ? (
      <ChevronUp className="w-4 h-4 text-[#357324]" />
    ) : (
      <ChevronDown className="w-4 h-4 text-[#357324]" />
    );
  };

  const countByEstado = (estado: EstadoFilter) => {
    if (estado === 'todos') return todasLasSolicitudes.length;
    return todasLasSolicitudes.filter((s) => s.estado === estado).length;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <CollapsibleSidebar
        userName="Dr. Alberto Méndez"
        userRole="Veterinario Certificador"
        activeKey="solicitudes"
        theme={{
          avatarBg: '#D1EEC9',
          avatarText: '#357324',
          activeBg: '#D1EEC9',
          activeText: '#357324',
        }}
        navItems={[
          { key: 'dashboard', label: 'Panel Principal', icon: Home, to: '/veterinario' },
          { key: 'solicitudes', label: 'Todas las Solicitudes', icon: FileCheck, to: '/veterinario/solicitudes' },
          { key: 'actividades', label: 'Mis Actividades', icon: Activity, to: '/veterinario/actividades' },
          { key: 'perfil', label: 'Mi Perfil', icon: User, to: '/veterinario/perfil' },
        ]}
      />

      {/* Contenido Principal */}
      <main className="flex-1 p-4 pt-20 lg:p-10 lg:pt-10">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Todas las Solicitudes</h1>
          <p className="text-lg text-gray-600">
            Gestiona y consulta el historial completo de solicitudes de certificación
          </p>
        </div>

        {/* Resumen por estado */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {(['todos', 'pendiente', 'aprobada', 'rechazada'] as EstadoFilter[]).map((estado) => {
            const isActive = estadoFilter === estado;
            const colors = {
              todos: { bg: isActive ? 'bg-[#357324] text-white' : 'bg-white', dot: 'bg-gray-500' },
              pendiente: { bg: isActive ? 'bg-yellow-500 text-white' : 'bg-white', dot: 'bg-yellow-500' },
              aprobada: { bg: isActive ? 'bg-green-600 text-white' : 'bg-white', dot: 'bg-green-500' },
              rechazada: { bg: isActive ? 'bg-red-600 text-white' : 'bg-white', dot: 'bg-red-500' },
            };
            const labels = { todos: 'Todas', pendiente: 'Pendientes', aprobada: 'Aprobadas', rechazada: 'Rechazadas' };

            return (
              <button
                key={estado}
                onClick={() => setEstadoFilter(estado)}
                className={`rounded-xl shadow p-5 text-left transition-colors cursor-pointer ${colors[estado].bg} ${!isActive ? 'hover:bg-gray-50' : ''}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-2.5 h-2.5 rounded-full ${isActive ? 'bg-white' : colors[estado].dot}`} />
                  <span className={`text-sm ${isActive ? 'text-white/90' : 'text-gray-500'}`}>{labels[estado]}</span>
                </div>
                <p className={`text-3xl font-bold ${isActive ? '' : 'text-gray-900'}`}>{countByEstado(estado)}</p>
              </button>
            );
          })}
        </div>

        {/* Barra de búsqueda y filtros */}
        <div className="bg-white rounded-xl shadow mb-6">
          <div className="p-5 flex flex-wrap items-center gap-4">
            <div className="relative flex-1 min-w-[280px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar por ID, animal, productor, rancho o raza..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#357324] focus:border-transparent"
              />
            </div>

            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <select
                value={razaFilter}
                onChange={(e) => setRazaFilter(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#357324] focus:border-transparent bg-white"
              >
                <option value="todas">Todas las razas</option>
                {razasUnicas.map((raza) => (
                  <option key={raza} value={raza}>{raza}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <select
                value={tipoFilter}
                onChange={(e) => setTipoFilter(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#357324] focus:border-transparent bg-white"
              >
                <option value="todos">Todos los tipos</option>
                {tiposUnicos.map((tipo) => (
                  <option key={tipo} value={tipo}>{tipo.charAt(0).toUpperCase() + tipo.slice(1)}</option>
                ))}
              </select>
            </div>

            {(searchQuery || estadoFilter !== 'todos' || razaFilter !== 'todas' || tipoFilter !== 'todos') && (
              <button
                onClick={() => { setSearchQuery(''); setEstadoFilter('todos'); setRazaFilter('todas'); setTipoFilter('todos'); }}
                className="px-4 py-3 text-sm text-[#357324] hover:bg-[#D1EEC9] rounded-lg font-medium transition-colors"
              >
                Limpiar filtros
              </button>
            )}
          </div>
        </div>

        {/* Tabla */}
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700 cursor-pointer hover:bg-gray-100 select-none" onClick={() => handleSort('id')}>
                    <div className="flex items-center gap-1">Solicitud<SortIcon field="id" /></div>
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Animal</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Tipo</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700 cursor-pointer hover:bg-gray-100 select-none" onClick={() => handleSort('productor')}>
                    <div className="flex items-center gap-1">Productor<SortIcon field="productor" /></div>
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Rancho</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700 cursor-pointer hover:bg-gray-100 select-none" onClick={() => handleSort('raza')}>
                    <div className="flex items-center gap-1">Raza<SortIcon field="raza" /></div>
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Edad</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700 cursor-pointer hover:bg-gray-100 select-none" onClick={() => handleSort('pesoEstimado')}>
                    <div className="flex items-center gap-1">Peso Est.<SortIcon field="pesoEstimado" /></div>
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700 cursor-pointer hover:bg-gray-100 select-none" onClick={() => handleSort('fechaSolicitud')}>
                    <div className="flex items-center gap-1">Fecha<SortIcon field="fechaSolicitud" /></div>
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Estado</th>
                  <th className="text-center px-6 py-4 text-sm font-semibold text-gray-700">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredSolicitudes.length === 0 ? (
                  <tr>
                    <td colSpan={11} className="px-6 py-16 text-center text-gray-500">
                      <Search className="w-10 h-10 text-gray-300 mx-auto mb-3" />
                      <p className="text-lg font-medium">No se encontraron solicitudes</p>
                      <p className="text-sm mt-1">Intenta ajustar los filtros o la búsqueda</p>
                    </td>
                  </tr>
                ) : (
                  filteredSolicitudes.map((solicitud) => (
                    <tr key={solicitud.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">{solicitud.id}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{solicitud.animalId}</td>
                      <td className="px-6 py-4 text-sm text-gray-700 capitalize">{solicitud.tipoAnimal}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{solicitud.productor}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{solicitud.rancho}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{solicitud.raza}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{solicitud.edad} años</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{solicitud.pesoEstimado} kg</td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {new Date(solicitud.fechaSolicitud).toLocaleDateString('es-MX', {
                          year: 'numeric', month: 'short', day: 'numeric',
                        })}
                      </td>
                      <td className="px-6 py-4">{estadoBadge(solicitud.estado)}</td>
                      <td className="px-6 py-4 text-center">
                        {solicitud.estado === 'pendiente' ? (
                          <button
                            onClick={() => setSelectedSolicitud(solicitud)}
                            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#357324] hover:bg-[#2a5c1d] text-white text-sm rounded-lg font-medium transition-colors"
                          >
                            <Eye className="w-4 h-4" />Revisar
                          </button>
                        ) : (
                          <button
                            onClick={() => setSelectedSolicitud(solicitud)}
                            className="inline-flex items-center gap-1.5 px-4 py-2 border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm rounded-lg font-medium transition-colors"
                          >
                            <Eye className="w-4 h-4" />Ver
                          </button>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Mostrando <span className="font-semibold">{filteredSolicitudes.length}</span> de{' '}
              <span className="font-semibold">{todasLasSolicitudes.length}</span> solicitudes
            </p>
          </div>
        </div>
      </main>

      {/* Modal de Detalle */}
      {selectedSolicitud && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto">
            {showSuccess ? (
              <div className="p-16 text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-[#D1EEC9] rounded-full mb-6">
                  <CheckCircle className="w-14 h-14 text-[#357324]" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">¡Certificación Aprobada!</h2>
                <p className="text-lg text-gray-600">Se ha generado el código QR y calculado el precio automáticamente</p>
              </div>
            ) : (
              <>
                <div className="p-8 border-b border-gray-200 flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">
                      {selectedSolicitud.estado === 'pendiente'
                        ? `Revisión de Certificación - ${selectedSolicitud.animalId}`
                        : `Detalle de Solicitud - ${selectedSolicitud.animalId}`}
                    </h2>
                    <div className="mt-2">{estadoBadge(selectedSolicitud.estado)}</div>
                  </div>
                  <button
                    onClick={() => { setSelectedSolicitud(null); setPesoValidado(''); setObservaciones(''); }}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-600" />
                  </button>
                </div>

                <div className="p-8 space-y-8">
                  {/* Información del Productor - Solo lectura */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Lock className="w-5 h-5 text-gray-400" />
                      <h3 className="text-xl font-semibold text-gray-900">Información del Productor</h3>
                      
                    </div>
                    <div className="bg-gray-50 rounded-lg p-6 grid grid-cols-2 gap-6 border border-gray-200">
                      <div>
                        <p className="text-sm text-gray-500">Nombre</p>
                        <p className="font-medium text-gray-900">{selectedSolicitud.productor}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Rancho/Ubicación</p>
                        <p className="font-medium text-gray-900">{selectedSolicitud.rancho}</p>
                      </div>
                    </div>
                  </div>

                  {/* Campos NO editables del animal */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Lock className="w-5 h-5 text-gray-400" />
                      <h3 className="text-xl font-semibold text-gray-900">Datos del Animal</h3>
                      
                    </div>
                    <div className="bg-gray-50 rounded-lg p-6 grid grid-cols-3 gap-6 border border-gray-200">
                      <div>
                        <p className="text-sm text-gray-500">Identificación</p>
                        <p className="font-medium text-gray-900">{selectedSolicitud.animalId}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Tipo de Animal</p>
                        <p className="font-medium text-gray-900 capitalize">{selectedSolicitud.tipoAnimal}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Fecha de Solicitud</p>
                        <p className="font-medium text-gray-900">
                          {new Date(selectedSolicitud.fechaSolicitud).toLocaleDateString('es-MX', {
                            year: 'numeric', month: 'long', day: 'numeric',
                          })}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Campos editables del animal (solo en pendiente) */}
                  {selectedSolicitud.estado === 'pendiente' ? (
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Edit3 className="w-5 h-5 text-[#357324]" />
                        <h3 className="text-xl font-semibold text-gray-900">Datos del Animal</h3>
                        
                      </div>
                      <div className="bg-white rounded-lg p-6 border-2 border-[#357324]/30 grid grid-cols-3 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Raza *</label>
                          <select
                            value={editRaza}
                            onChange={(e) => setEditRaza(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#357324] focus:border-transparent bg-white"
                          >
                            {(razasPorAnimal[selectedSolicitud.tipoAnimal] || []).map((raza) => (
                              <option key={raza} value={raza}>{raza}</option>
                            ))}
                          </select>
                          {editRaza !== selectedSolicitud.raza && (
                            <p className="text-xs text-amber-600 mt-1">Original: {selectedSolicitud.raza}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Edad (años) *</label>
                          <input
                            type="number"
                            min="0"
                            step="0.5"
                            value={editEdad}
                            onChange={(e) => setEditEdad(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#357324] focus:border-transparent"
                          />
                          {editEdad !== String(selectedSolicitud.edad) && (
                            <p className="text-xs text-amber-600 mt-1">Original: {selectedSolicitud.edad} años</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Sexo *</label>
                          <select
                            value={editSexo}
                            onChange={(e) => setEditSexo(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#357324] focus:border-transparent bg-white"
                          >
                            <option value="macho">Macho</option>
                            <option value="hembra">Hembra</option>
                          </select>
                          {editSexo !== selectedSolicitud.sexo && (
                            <p className="text-xs text-amber-600 mt-1">Original: {selectedSolicitud.sexo}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Peso Validado (kg) *</label>
                          <input
                            type="number"
                            min="0"
                            value={pesoValidado}
                            onChange={(e) => setPesoValidado(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#357324] focus:border-transparent"
                            placeholder="Ingresa el peso real"
                          />
                          <p className="text-xs text-gray-500 mt-1">Peso estimado por productor: {selectedSolicitud.pesoEstimado} kg</p>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Condición Corporal *</label>
                          <select
                            value={editCondicion}
                            onChange={(e) => setEditCondicion(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#357324] focus:border-transparent bg-white"
                          >
                            <option value="excelente">Excelente</option>
                            <option value="bueno">Bueno</option>
                            <option value="regular">Regular</option>
                            <option value="mal">Mal</option>
                          </select>
                          {editCondicion !== selectedSolicitud.condicion && (
                            <p className="text-xs text-amber-600 mt-1">Original: {condicionLabels[selectedSolicitud.condicion]}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">¿Tiene crías?</label>
                          <div className="flex items-center gap-4 pt-1">
                            <label className="flex items-center cursor-pointer">
                              <input
                                type="radio"
                                name="editHasCrias"
                                checked={editHasCrias}
                                onChange={() => setEditHasCrias(true)}
                                className="w-4 h-4 text-[#357324] focus:ring-[#357324]"
                              />
                              <span className="ml-2 text-gray-700">Sí</span>
                            </label>
                            <label className="flex items-center cursor-pointer">
                              <input
                                type="radio"
                                name="editHasCrias"
                                checked={!editHasCrias}
                                onChange={() => { setEditHasCrias(false); setEditNumCrias('0'); }}
                                className="w-4 h-4 text-[#357324] focus:ring-[#357324]"
                              />
                              <span className="ml-2 text-gray-700">No</span>
                            </label>
                          </div>
                        </div>
                        {editHasCrias && (
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              <span className="flex items-center gap-1"><Baby className="w-4 h-4" />No. de Crías</span>
                            </label>
                            <input
                              type="number"
                              min="1"
                              value={editNumCrias}
                              onChange={(e) => setEditNumCrias(e.target.value)}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#357324] focus:border-transparent"
                              placeholder="1"
                            />
                            {editNumCrias !== String(selectedSolicitud.numCrias) && (
                              <p className="text-xs text-amber-600 mt-1">Original: {selectedSolicitud.numCrias}</p>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Datos del Animal</h3>
                      <div className="bg-gray-50 rounded-lg p-6 grid grid-cols-3 gap-6 border border-gray-200">
                        <div>
                          <p className="text-sm text-gray-500">Raza</p>
                          <p className="font-medium text-gray-900">{selectedSolicitud.raza}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Edad</p>
                          <p className="font-medium text-gray-900">{selectedSolicitud.edad} años</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Sexo</p>
                          <p className="font-medium text-gray-900 capitalize">{selectedSolicitud.sexo}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Peso</p>
                          <p className="font-medium text-gray-900">{selectedSolicitud.pesoEstimado} kg</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Condición Corporal</p>
                          <p className="font-medium text-gray-900">{condicionLabels[selectedSolicitud.condicion] || selectedSolicitud.condicion}</p>
                        </div>
                        {selectedSolicitud.hasCrias && (
                          <div>
                            <p className="text-sm text-gray-500">No. de Crías</p>
                            <p className="font-medium text-gray-900">{selectedSolicitud.numCrias}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Certificaciones Extras */}
                  {selectedSolicitud.certificacionesExtras.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <ShieldCheck className="w-5 h-5 text-[#357324]" />
                        <h3 className="text-xl font-semibold text-gray-900">Certificaciones Extras</h3>
                        {selectedSolicitud.estado === 'pendiente' && (
                          null
                        )}
                      </div>
                      <div className="space-y-3">
                        {selectedSolicitud.estado === 'pendiente' ? (
                          editCertExtras.map((cert, idx) => (
                            <div key={idx} className="flex items-center justify-between bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-[#357324]/30 transition-colors">
                              <div className="flex items-center gap-3">
                                <ShieldCheck className="w-5 h-5 text-gray-400" />
                                <span className="font-medium text-gray-900">{cert.nombre}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <button
                                  type="button"
                                  onClick={() => {
                                    const updated = [...editCertExtras];
                                    updated[idx] = { ...updated[idx], aprobada: true };
                                    setEditCertExtras(updated);
                                  }}
                                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                    cert.aprobada === true
                                      ? 'bg-[#357324] text-white'
                                      : 'bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-700'
                                  }`}
                                >
                                  <span className="flex items-center gap-1.5">
                                    <CheckCircle className="w-4 h-4" />Aprobar
                                  </span>
                                </button>
                                <button
                                  type="button"
                                  onClick={() => {
                                    const updated = [...editCertExtras];
                                    updated[idx] = { ...updated[idx], aprobada: false };
                                    setEditCertExtras(updated);
                                  }}
                                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                    cert.aprobada === false
                                      ? 'bg-red-600 text-white'
                                      : 'bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-700'
                                  }`}
                                >
                                  <span className="flex items-center gap-1.5">
                                    <XCircle className="w-4 h-4" />Rechazar
                                  </span>
                                </button>
                              </div>
                            </div>
                          ))
                        ) : (
                          selectedSolicitud.certificacionesExtras.map((cert, idx) => (
                            <div key={idx} className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg p-4">
                              <div className="flex items-center gap-3">
                                <ShieldCheck className="w-5 h-5 text-gray-400" />
                                <span className="font-medium text-gray-900">{cert.nombre}</span>
                              </div>
                              <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                                cert.aprobada === true ? 'bg-green-100 text-green-800' :
                                cert.aprobada === false ? 'bg-red-100 text-red-800' :
                                'bg-yellow-100 text-yellow-800'
                              }`}>
                                {cert.aprobada === true ? 'Aprobada' : cert.aprobada === false ? 'Rechazada' : 'Pendiente'}
                              </span>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  )}

                  {/* Vacunaciones */}
                  {selectedSolicitud.estado === 'pendiente' && (
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Syringe className="w-5 h-5 text-[#357324]" />
                        <h3 className="text-xl font-semibold text-gray-900">Vacunaciones Aplicadas</h3>
                        <span className="text-xs text-[#357324] bg-[#D1EEC9] px-2 py-0.5 rounded-full ml-1">Opcional</span>
                      </div>
                      <p className="text-sm text-gray-500 mb-4">Registra las vacunas aplicadas durante la revisión veterinaria</p>
                      <div className="space-y-3">
                        {vacunaciones.map((vacuna, idx) => (
                          <div key={idx} className="flex items-center justify-between bg-white border-2 border-[#357324]/20 rounded-lg p-4">
                            <div className="flex items-center gap-4">
                              <Syringe className="w-5 h-5 text-[#357324]" />
                              <div>
                                <p className="font-medium text-gray-900">{vacuna.nombre}</p>
                                <p className="text-xs text-gray-500">Lote: {vacuna.lote} &middot; Fecha: {new Date(vacuna.fecha).toLocaleDateString('es-MX', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={() => {
                                const updated = [...vacunaciones];
                                updated.splice(idx, 1);
                                setVacunaciones(updated);
                              }}
                              className="p-2 rounded-lg text-red-500 hover:bg-red-50 transition-colors"
                              title="Eliminar vacunación"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                        <div className="bg-gray-50 border border-dashed border-gray-300 rounded-lg p-4">
                          <div className="grid grid-cols-3 gap-3 mb-3">
                            <div>
                              <label className="block text-xs font-medium text-gray-600 mb-1">Nombre de la vacuna</label>
                              <input
                                type="text"
                                placeholder="Ej: Vacuna contra Aftosa"
                                value={nuevaVacuna.nombre}
                                onChange={(e) => setNuevaVacuna({ ...nuevaVacuna, nombre: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#357324] focus:border-transparent text-sm"
                              />
                            </div>
                            <div>
                              <label className="block text-xs font-medium text-gray-600 mb-1">No. de Lote</label>
                              <input
                                type="text"
                                placeholder="Ej: LOT-2025-001"
                                value={nuevaVacuna.lote}
                                onChange={(e) => setNuevaVacuna({ ...nuevaVacuna, lote: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#357324] focus:border-transparent text-sm"
                              />
                            </div>
                            <div>
                              <label className="block text-xs font-medium text-gray-600 mb-1">Fecha de aplicación</label>
                              <input
                                type="date"
                                value={nuevaVacuna.fecha}
                                onChange={(e) => setNuevaVacuna({ ...nuevaVacuna, fecha: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#357324] focus:border-transparent text-sm"
                              />
                            </div>
                          </div>
                          <button
                            type="button"
                            disabled={!nuevaVacuna.nombre || !nuevaVacuna.lote || !nuevaVacuna.fecha}
                            onClick={() => {
                              if (nuevaVacuna.nombre && nuevaVacuna.lote && nuevaVacuna.fecha) {
                                setVacunaciones([...vacunaciones, { ...nuevaVacuna }]);
                                setNuevaVacuna({ nombre: '', lote: '', fecha: '' });
                              }
                            }}
                            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#357324] hover:bg-[#2a5c1d] text-white text-sm rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <Plus className="w-4 h-4" />Agregar Vacunación
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Observaciones - Solo en pendiente */}
                  {selectedSolicitud.estado === 'pendiente' && (
                    <div className="border-t border-gray-200 pt-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-6">Observaciones Veterinarias</h3>
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Observaciones Técnicas *</label>
                          <textarea
                            value={observaciones}
                            onChange={(e) => setObservaciones(e.target.value)}
                            rows={4}
                            className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#357324] focus:border-transparent"
                            placeholder="Agrega tus observaciones profesionales sobre el estado del animal..."
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedSolicitud.estado === 'pendiente' && (
                    <div className="flex gap-6 pt-6">
                      <button
                        onClick={handleReject}
                        className="flex-1 px-8 py-4 border-2 border-red-600 text-red-600 hover:bg-red-50 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                      >
                        <XCircle className="w-5 h-5" />Rechazar Certificación
                      </button>
                      <button
                        onClick={handleApprove}
                        disabled={!pesoValidado || !observaciones}
                        className="flex-1 px-8 py-4 bg-[#357324] hover:bg-[#2a5c1d] text-white rounded-lg text-lg font-semibold flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <CheckCircle className="w-5 h-5" />Aprobar y Certificar
                      </button>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}