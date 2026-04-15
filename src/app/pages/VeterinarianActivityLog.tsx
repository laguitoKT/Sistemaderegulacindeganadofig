import { useState, useMemo } from 'react';
import { Home, FileCheck, User, Search, ChevronUp, ChevronDown, Activity, Calendar } from 'lucide-react';
import CollapsibleSidebar from '../components/CollapsibleSidebar';

type TipoAccion = 'crear' | 'actualizar' | 'desactivar';
type TipoEntidad = 'Certificación' | 'Evaluación' | 'Perfil' | 'Documento' | 'Otro';
type SortField = 'timestamp' | 'accion';
type SortDirection = 'asc' | 'desc';

interface VeterinarianActivityLog {
  id: string;
  timestamp: string;
  accion: TipoAccion;
  entidad: TipoEntidad;
  detalles: string;
  animalId?: string;
}

const todasLasActividades: VeterinarianActivityLog[] = [
  {
    id: 'VET-ACT-001',
    timestamp: '2026-03-13T16:30:00',
    accion: 'crear',
    entidad: 'Certificación',
    detalles: 'Creó certificación de salud para animal Res-045',
    animalId: 'Res-045',
  },
  {
    id: 'VET-ACT-002',
    timestamp: '2026-03-13T14:15:00',
    accion: 'actualizar',
    entidad: 'Perfil',
    detalles: 'Actualizó especialidad profesional a Medicina Veterinaria de Grandes Animales',
  },
  {
    id: 'VET-ACT-003',
    timestamp: '2026-03-13T11:45:00',
    accion: 'crear',
    entidad: 'Evaluación',
    detalles: 'Realizó evaluación clínica de animal Angus-123',
    animalId: 'Angus-123',
  },
  {
    id: 'VET-ACT-004',
    timestamp: '2026-03-12T15:20:00',
    accion: 'desactivar',
    entidad: 'Documento',
    detalles: 'Desactivó certificado vencido para animal Hol-067',
    animalId: 'Hol-067',
  },
  {
    id: 'VET-ACT-005',
    timestamp: '2026-03-12T10:00:00',
    accion: 'crear',
    entidad: 'Certificación',
    detalles: 'Emitió certificado de trazabilidad para lote de 8 bovinos',
  },
  {
    id: 'VET-ACT-006',
    timestamp: '2026-03-11T16:45:00',
    accion: 'actualizar',
    entidad: 'Evaluación',
    detalles: 'Actualizó resultados de evaluación para animal Brah-089',
    animalId: 'Brah-089',
  },
  {
    id: 'VET-ACT-007',
    timestamp: '2026-03-11T13:30:00',
    accion: 'crear',
    entidad: 'Documento',
    detalles: 'Generó reporte de certificaciones emitidas en marzo',
  },
  {
    id: 'VET-ACT-008',
    timestamp: '2026-03-10T15:15:00',
    accion: 'desactivar',
    entidad: 'Certificación',
    detalles: 'Anuló certificación duplicada para animal Sim-045',
    animalId: 'Sim-045',
  },
  {
    id: 'VET-ACT-009',
    timestamp: '2026-03-10T11:00:00',
    accion: 'actualizar',
    entidad: 'Perfil',
    detalles: 'Actualizó teléfono de contacto profesional',
  },
  {
    id: 'VET-ACT-010',
    timestamp: '2026-03-09T14:45:00',
    accion: 'crear',
    entidad: 'Evaluación',
    detalles: 'Evaluó estado de salud de animal Char-123',
    animalId: 'Char-123',
  },
  {
    id: 'VET-ACT-011',
    timestamp: '2026-03-09T10:20:00',
    accion: 'crear',
    entidad: 'Certificación',
    detalles: 'Creó certificado libre de tuberculosis para animal How-012',
    animalId: 'How-012',
  },
  {
    id: 'VET-ACT-012',
    timestamp: '2026-03-08T16:00:00',
    accion: 'actualizar',
    entidad: 'Documento',
    detalles: 'Actualizó documentación de certificaciones anteriores',
  },
  {
    id: 'VET-ACT-013',
    timestamp: '2026-03-08T12:30:00',
    accion: 'desactivar',
    entidad: 'Evaluación',
    detalles: 'Desactivó evaluación rechazada para animal Jer-034',
    animalId: 'Jer-034',
  },
  {
    id: 'VET-ACT-014',
    timestamp: '2026-03-07T15:45:00',
    accion: 'crear',
    entidad: 'Certificación',
    detalles: 'Emitió certificado sanitario para rancho comercial',
  },
  {
    id: 'VET-ACT-015',
    timestamp: '2026-03-07T11:15:00',
    accion: 'actualizar',
    entidad: 'Perfil',
    detalles: 'Actualizó correo electrónico profesional en el sistema',
  },
  {
    id: 'VET-ACT-016',
    timestamp: '2026-03-06T14:30:00',
    accion: 'crear',
    entidad: 'Evaluación',
    detalles: 'Realizó inspección sanitaria a 3 animales del traspatio',
  },
  {
    id: 'VET-ACT-017',
    timestamp: '2026-03-06T10:00:00',
    accion: 'desactivar',
    entidad: 'Certificación',
    detalles: 'Canceló certificación expirada para animal Germ-089',
    animalId: 'Germ-089',
  },
  {
    id: 'VET-ACT-018',
    timestamp: '2026-03-05T15:20:00',
    accion: 'crear',
    entidad: 'Documento',
    detalles: 'Preparó informe de actividades del mes',
  },
  {
    id: 'VET-ACT-019',
    timestamp: '2026-03-05T11:45:00',
    accion: 'actualizar',
    entidad: 'Evaluación',
    detalles: 'Corrigió datos de evaluación para animal Lim-056',
    animalId: 'Lim-056',
  },
  {
    id: 'VET-ACT-020',
    timestamp: '2026-03-04T14:00:00',
    accion: 'crear',
    entidad: 'Certificación',
    detalles: 'Certificó 5 animales de rancho traspatio para venta local',
  },
  {
    id: 'VET-ACT-021',
    timestamp: '2026-03-04T10:30:00',
    accion: 'desactivar',
    entidad: 'Documento',
    detalles: 'Removió documento borrador sin sentido',
  },
  {
    id: 'VET-ACT-022',
    timestamp: '2026-03-03T16:15:00',
    accion: 'actualizar',
    entidad: 'Perfil',
    detalles: 'Actualizó información de disponibilidad horaria',
  },
  {
    id: 'VET-ACT-023',
    timestamp: '2026-03-03T12:45:00',
    accion: 'crear',
    entidad: 'Evaluación',
    detalles: 'Evaluó condición de sanidad de lote de 12 bovinos',
  },
  {
    id: 'VET-ACT-024',
    timestamp: '2026-03-02T15:30:00',
    accion: 'crear',
    entidad: 'Certificación',
    detalles: 'Emitió certificado de trazabilidad para animal Pre-078',
    animalId: 'Pre-078',
  },
  {
    id: 'VET-ACT-025',
    timestamp: '2026-03-02T11:00:00',
    accion: 'actualizar',
    entidad: 'Documento',
    detalles: 'Actualizó historial de certificaciones emitidas',
  },
];

export default function VeterinarianActivityLog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [accionFilter, setAccionFilter] = useState('todos');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [sortField, setSortField] = useState<SortField>('timestamp');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const accionLabels: Record<TipoAccion, string> = {
    crear: 'Crear',
    actualizar: 'Actualizar',
    desactivar: 'Desactivar',
  };

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const filteredActividades = useMemo(() => {
    let result = [...todasLasActividades];

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (a) =>
          (a.animalId?.toLowerCase().includes(query)) ||
          a.detalles.toLowerCase().includes(query)
      );
    }

    if (accionFilter !== 'todos') {
      result = result.filter((a) => a.accion === accionFilter);
    }

    if (dateFrom) {
      const fromDate = new Date(dateFrom);
      result = result.filter((a) => new Date(a.timestamp) >= fromDate);
    }

    if (dateTo) {
      const toDate = new Date(dateTo);
      toDate.setHours(23, 59, 59, 999);
      result = result.filter((a) => new Date(a.timestamp) <= toDate);
    }

    result.sort((a, b) => {
      let comparison = 0;
      switch (sortField) {
        case 'timestamp':
          comparison = new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime();
          break;
        case 'accion':
          comparison = a.accion.localeCompare(b.accion);
          break;
      }
      return sortDirection === 'asc' ? comparison : -comparison;
    });

    return result;
  }, [searchQuery, accionFilter, dateFrom, dateTo, sortField, sortDirection]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredActividades.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedActividades = filteredActividades.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  const handleFilterChange = (callback: () => void) => {
    setCurrentPage(1);
    callback();
  };

  const accionBadge = (accion: TipoAccion) => {
    const styles = {
      crear: 'bg-green-100 text-green-800',
      actualizar: 'bg-blue-100 text-blue-800',
      desactivar: 'bg-yellow-100 text-yellow-800',
    };
    return (
      <span className={`px-3 py-1 text-xs font-medium rounded-full ${styles[accion]}`}>
        {accionLabels[accion]}
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

  const countByAccion = (accion: string) => {
    if (accion === 'todos') return todasLasActividades.length;
    return todasLasActividades.filter((a) => a.accion === accion).length;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <CollapsibleSidebar
        userName="Dr. Alberto Méndez"
        userRole="Veterinario Certificador"
        activeKey="actividades"
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

      <main className="flex-1 p-10">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Mis Actividades</h1>
          <p className="text-lg text-gray-600">Revisa tu historial de acciones en el sistema</p>
        </div>

        {/* Resumen por acción */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {(['todos', 'crear', 'actualizar', 'desactivar'] as const).map((accion) => {
            const isActive = accionFilter === accion;
            const colors = {
              todos: { bg: isActive ? 'bg-[#357324] text-white' : 'bg-white', dot: 'bg-gray-500' },
              crear: { bg: isActive ? 'bg-green-600 text-white' : 'bg-white', dot: 'bg-green-500' },
              actualizar: { bg: isActive ? 'bg-blue-600 text-white' : 'bg-white', dot: 'bg-blue-500' },
              desactivar: { bg: isActive ? 'bg-yellow-600 text-white' : 'bg-white', dot: 'bg-yellow-500' },
            };
            const labels = { todos: 'Todas', crear: 'Creaciones', actualizar: 'Actualizaciones', desactivar: 'Desactivaciones' };
            const count = countByAccion(accion);

            return (
              <button
                key={accion}
                onClick={() => handleFilterChange(() => setAccionFilter(accion))}
                className={`rounded-xl shadow p-5 text-left transition-colors cursor-pointer ${colors[accion].bg} ${!isActive ? 'hover:bg-gray-50' : ''}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-2.5 h-2.5 rounded-full ${isActive ? 'bg-white' : colors[accion].dot}`} />
                  <span className={`text-sm ${isActive ? 'text-white/90' : 'text-gray-500'}`}>{labels[accion]}</span>
                </div>
                <p className={`text-3xl font-bold ${isActive ? '' : 'text-gray-900'}`}>{count}</p>
              </button>
            );
          })}
        </div>

        {/* Filtros */}
        <div className="bg-white rounded-xl shadow mb-6">
          <div className="p-5 flex flex-wrap items-center gap-4">
            <div className="relative flex-1 min-w-[280px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar por ID de animal o detalles..."
                value={searchQuery}
                onChange={(e) => handleFilterChange(() => setSearchQuery(e.target.value))}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#357324] focus:border-transparent"
              />
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gray-500" />
              <input
                type="date"
                value={dateFrom}
                onChange={(e) => handleFilterChange(() => setDateFrom(e.target.value))}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#357324] focus:border-transparent bg-white"
              />
            </div>

            <span className="text-gray-400">hasta</span>

            <input
              type="date"
              value={dateTo}
              onChange={(e) => handleFilterChange(() => setDateTo(e.target.value))}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#357324] focus:border-transparent bg-white"
            />

            {(searchQuery || accionFilter !== 'todos' || dateFrom || dateTo) && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setAccionFilter('todos');
                  setDateFrom('');
                  setDateTo('');
                  setCurrentPage(1);
                }}
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
                  <th
                    className="text-left px-6 py-4 text-sm font-semibold text-gray-700 cursor-pointer hover:bg-gray-100 select-none"
                    onClick={() => handleSort('timestamp')}
                  >
                    <div className="flex items-center gap-1">
                      Fecha/Hora
                      <SortIcon field="timestamp" />
                    </div>
                  </th>
                  <th
                    className="text-left px-6 py-4 text-sm font-semibold text-gray-700 cursor-pointer hover:bg-gray-100 select-none"
                    onClick={() => handleSort('accion')}
                  >
                    <div className="flex items-center gap-1">
                      Acción
                      <SortIcon field="accion" />
                    </div>
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Entidad</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Detalles</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {paginatedActividades.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-6 py-16 text-center text-gray-500">
                      <Search className="w-10 h-10 text-gray-300 mx-auto mb-3" />
                      <p className="text-lg font-medium">No se encontraron actividades</p>
                      <p className="text-sm mt-1">Intenta ajustar los filtros o la búsqueda</p>
                    </td>
                  </tr>
                ) : (
                  paginatedActividades.map((actividad) => (
                    <tr key={actividad.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {new Date(actividad.timestamp).toLocaleDateString('es-MX', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}{' '}
                        {new Date(actividad.timestamp).toLocaleTimeString('es-MX', {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </td>
                      <td className="px-6 py-4">{accionBadge(actividad.accion)}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{actividad.entidad}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{actividad.detalles}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Mostrando <span className="font-semibold">{paginatedActividades.length > 0 ? startIndex + 1 : 0}</span> a{' '}
              <span className="font-semibold">{Math.min(endIndex, filteredActividades.length)}</span> de{' '}
              <span className="font-semibold">{filteredActividades.length}</span> actividades
            </p>

            {totalPages > 1 && (
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 text-gray-700 text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1"
                >
                  ← Anterior
                </button>

                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        currentPage === page
                          ? 'bg-[#357324] text-white'
                          : 'border border-gray-300 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 text-gray-700 text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1"
                >
                  Siguiente →
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
