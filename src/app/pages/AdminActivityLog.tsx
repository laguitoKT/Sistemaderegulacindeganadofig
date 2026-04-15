import { useState, useMemo } from 'react';
import { Home, Users, FileCheck, User, Search, Filter, ChevronUp, ChevronDown, Activity, Check, PenTool, Trash2, Calendar } from 'lucide-react';
import CollapsibleSidebar from '../components/CollapsibleSidebar';

type TipoAccion = 'crear' | 'actualizar' | 'desactivar';
type TipoUsuario = 'rancho_comercial' | 'rancho_traspatio' | 'veterinario';
type TipoEntidad = 'Animal' | 'Solicitud de Certificación' | 'Información de Rancho' | 'Perfil' | 'Otro';
type SortField = 'timestamp' | 'usuarioNombre' | 'accion' | 'entidad';
type SortDirection = 'asc' | 'desc';

interface ActivityLog {
  id: string;
  timestamp: string;
  usuarioId: string;
  usuarioNombre: string;
  usuarioTipo: TipoUsuario;
  accion: TipoAccion;
  entidad: TipoEntidad;
  detalles: string;
  ciudad: string;
}

const todasLasActividades: ActivityLog[] = [
  {
    id: 'ACT-001',
    timestamp: '2026-03-13T14:30:00',
    usuarioId: 'USR-001',
    usuarioNombre: 'Carlos Mendoza García',
    usuarioTipo: 'rancho_comercial',
    accion: 'crear',
    entidad: 'Animal',
    detalles: 'Registró nuevo bovino "Res-001" para engorda',
    ciudad: 'Guadalajara',
  },
  {
    id: 'ACT-002',
    timestamp: '2026-03-13T10:15:00',
    usuarioId: 'USR-004',
    usuarioNombre: 'Luis García López',
    usuarioTipo: 'rancho_traspatio',
    accion: 'actualizar',
    entidad: 'Información de Rancho',
    detalles: 'Actualizó capacidad del rancho: 50 → 60 animales',
    ciudad: 'Zapopan',
  },
  {
    id: 'ACT-003',
    timestamp: '2026-03-12T16:45:00',
    usuarioId: 'USR-007',
    usuarioNombre: 'Dr. Ana López Martínez',
    usuarioTipo: 'veterinario',
    accion: 'crear',
    entidad: 'Solicitud de Certificación',
    detalles: 'Creó solicitud de certificación para animal ID: 12345',
    ciudad: 'Ciudad de México',
  },
  {
    id: 'ACT-004',
    timestamp: '2026-03-12T13:20:00',
    usuarioId: 'USR-002',
    usuarioNombre: 'María Rodríguez Castillo',
    usuarioTipo: 'rancho_comercial',
    accion: 'desactivar',
    entidad: 'Animal',
    detalles: 'Desactivó registro de bovino vendido "Res-045"',
    ciudad: 'Monterrey',
  },
  {
    id: 'ACT-005',
    timestamp: '2026-03-11T11:00:00',
    usuarioId: 'USR-005',
    usuarioNombre: 'Patricia Gómez Herrera',
    usuarioTipo: 'rancho_traspatio',
    accion: 'crear',
    entidad: 'Animal',
    detalles: 'Registró gallinas para producción de huevo',
    ciudad: 'Toluca',
  },
  {
    id: 'ACT-006',
    timestamp: '2026-03-10T15:30:00',
    usuarioId: 'USR-008',
    usuarioNombre: 'Dr. Juan Carlos López',
    usuarioTipo: 'veterinario',
    accion: 'actualizar',
    entidad: 'Perfil',
    detalles: 'Actualizó especialidad en su perfil profesional',
    ciudad: 'Guadalajara',
  },
  {
    id: 'ACT-007',
    timestamp: '2026-03-10T09:15:00',
    usuarioId: 'USR-006',
    usuarioNombre: 'Roberto Sánchez Flores',
    usuarioTipo: 'rancho_traspatio',
    accion: 'crear',
    entidad: 'Animal',
    detalles: 'Registró cerdos para crianza de traspatio',
    ciudad: 'Guadalajara',
  },
  {
    id: 'ACT-008',
    timestamp: '2026-03-09T14:00:00',
    usuarioId: 'USR-001',
    usuarioNombre: 'Carlos Mendoza García',
    usuarioTipo: 'rancho_comercial',
    accion: 'actualizar',
    entidad: 'Información de Rancho',
    detalles: 'Actualizó contacto de emergencia del rancho',
    ciudad: 'Guadalajara',
  },
  {
    id: 'ACT-009',
    timestamp: '2026-03-08T10:45:00',
    usuarioId: 'USR-009',
    usuarioNombre: 'Dra. Sofía Díaz Morales',
    usuarioTipo: 'veterinario',
    accion: 'crear',
    entidad: 'Solicitud de Certificación',
    detalles: 'Emitió certificado de salud para lote de 15 animales',
    ciudad: 'Monterrey',
  },
  {
    id: 'ACT-010',
    timestamp: '2026-03-07T13:30:00',
    usuarioId: 'USR-003',
    usuarioNombre: 'Fernando Torres Jiménez',
    usuarioTipo: 'rancho_comercial',
    accion: 'desactivar',
    entidad: 'Animal',
    detalles: 'Desactivó registro duplicado de bovino "Res-089"',
    ciudad: 'Querétaro',
  },
  {
    id: 'ACT-011',
    timestamp: '2026-03-06T16:20:00',
    usuarioId: 'USR-004',
    usuarioNombre: 'Luis García López',
    usuarioTipo: 'rancho_traspatio',
    accion: 'actualizar',
    entidad: 'Animal',
    detalles: 'Actualizó estado de salud de gallina "Gall-012"',
    ciudad: 'Zapopan',
  },
  {
    id: 'ACT-012',
    timestamp: '2026-03-05T11:15:00',
    usuarioId: 'USR-007',
    usuarioNombre: 'Dr. Ana López Martínez',
    usuarioTipo: 'veterinario',
    accion: 'crear',
    entidad: 'Solicitud de Certificación',
    detalles: 'Evaluó y certificó 8 animales de rancho comercial',
    ciudad: 'Ciudad de México',
  },
  {
    id: 'ACT-013',
    timestamp: '2026-03-04T14:45:00',
    usuarioId: 'USR-005',
    usuarioNombre: 'Patricia Gómez Herrera',
    usuarioTipo: 'rancho_traspatio',
    accion: 'crear',
    entidad: 'Animal',
    detalles: 'Registró patos para producción de huevo de pato',
    ciudad: 'Toluca',
  },
  {
    id: 'ACT-014',
    timestamp: '2026-03-03T09:30:00',
    usuarioId: 'USR-002',
    usuarioNombre: 'María Rodríguez Castillo',
    usuarioTipo: 'rancho_comercial',
    accion: 'actualizar',
    entidad: 'Información de Rancho',
    detalles: 'Actualizó información de licencia sanitaria',
    ciudad: 'Monterrey',
  },
  {
    id: 'ACT-015',
    timestamp: '2026-03-02T15:00:00',
    usuarioId: 'USR-006',
    usuarioNombre: 'Roberto Sánchez Flores',
    usuarioTipo: 'rancho_traspatio',
    accion: 'actualizar',
    entidad: 'Perfil',
    detalles: 'Actualizó número de teléfono en su perfil',
    ciudad: 'Guadalajara',
  },
  {
    id: 'ACT-016',
    timestamp: '2026-03-01T12:15:00',
    usuarioId: 'USR-008',
    usuarioNombre: 'Dr. Juan Carlos López',
    usuarioTipo: 'veterinario',
    accion: 'crear',
    entidad: 'Solicitud de Certificación',
    detalles: 'Certificó 5 animales de traspatio para venta',
    ciudad: 'Guadalajara',
  },
  {
    id: 'ACT-017',
    timestamp: '2026-02-28T16:30:00',
    usuarioId: 'USR-001',
    usuarioNombre: 'Carlos Mendoza García',
    usuarioTipo: 'rancho_comercial',
    accion: 'crear',
    entidad: 'Animal',
    detalles: 'Registró nuevo lote de 12 novillos',
    ciudad: 'Guadalajara',
  },
  {
    id: 'ACT-018',
    timestamp: '2026-02-27T10:00:00',
    usuarioId: 'USR-009',
    usuarioNombre: 'Dra. Sofía Díaz Morales',
    usuarioTipo: 'veterinario',
    accion: 'actualizar',
    entidad: 'Perfil',
    detalles: 'Actualizó información de especialización',
    ciudad: 'Monterrey',
  },
  {
    id: 'ACT-019',
    timestamp: '2026-02-26T13:45:00',
    usuarioId: 'USR-004',
    usuarioNombre: 'Luis García López',
    usuarioTipo: 'rancho_traspatio',
    accion: 'desactivar',
    entidad: 'Animal',
    detalles: 'Desactivó registro de animal sacrificado "Cerdo-067"',
    ciudad: 'Zapopan',
  },
  {
    id: 'ACT-020',
    timestamp: '2026-02-25T11:20:00',
    usuarioId: 'USR-003',
    usuarioNombre: 'Fernando Torres Jiménez',
    usuarioTipo: 'rancho_comercial',
    accion: 'actualizar',
    entidad: 'Información de Rancho',
    detalles: 'Actualizó dirección del rancho',
    ciudad: 'Querétaro',
  },
  {
    id: 'ACT-021',
    timestamp: '2026-02-24T14:30:00',
    usuarioId: 'USR-005',
    usuarioNombre: 'Patricia Gómez Herrera',
    usuarioTipo: 'rancho_traspatio',
    accion: 'actualizar',
    entidad: 'Animal',
    detalles: 'Actualizó información de vacunación de gallinas',
    ciudad: 'Toluca',
  },
  {
    id: 'ACT-022',
    timestamp: '2026-02-23T09:00:00',
    usuarioId: 'USR-007',
    usuarioNombre: 'Dr. Ana López Martínez',
    usuarioTipo: 'veterinario',
    accion: 'crear',
    entidad: 'Solicitud de Certificación',
    detalles: 'Realizó inspección sanitaria a 3 ranchos',
    ciudad: 'Ciudad de México',
  },
  {
    id: 'ACT-023',
    timestamp: '2026-02-22T15:15:00',
    usuarioId: 'USR-002',
    usuarioNombre: 'María Rodríguez Castillo',
    usuarioTipo: 'rancho_comercial',
    accion: 'crear',
    entidad: 'Animal',
    detalles: 'Registró 8 becerros recién nacidos',
    ciudad: 'Monterrey',
  },
  {
    id: 'ACT-024',
    timestamp: '2026-02-21T10:45:00',
    usuarioId: 'USR-006',
    usuarioNombre: 'Roberto Sánchez Flores',
    usuarioTipo: 'rancho_traspatio',
    accion: 'crear',
    entidad: 'Animal',
    detalles: 'Registró borregos para producción de lana',
    ciudad: 'Guadalajara',
  },
  {
    id: 'ACT-025',
    timestamp: '2026-02-20T12:30:00',
    usuarioId: 'USR-008',
    usuarioNombre: 'Dr. Juan Carlos López',
    usuarioTipo: 'veterinario',
    accion: 'actualizar',
    entidad: 'Solicitud de Certificación',
    detalles: 'Actualizó historial de certificaciones emitidas',
    ciudad: 'Guadalajara',
  },
  {
    id: 'ACT-026',
    timestamp: '2026-02-19T16:00:00',
    usuarioId: 'USR-001',
    usuarioNombre: 'Carlos Mendoza García',
    usuarioTipo: 'rancho_comercial',
    accion: 'desactivar',
    entidad: 'Animal',
    detalles: 'Desactivó registro de animal con muerte accidental',
    ciudad: 'Guadalajara',
  },
  {
    id: 'ACT-027',
    timestamp: '2026-02-18T11:00:00',
    usuarioId: 'USR-009',
    usuarioNombre: 'Dra. Sofía Díaz Morales',
    usuarioTipo: 'veterinario',
    accion: 'crear',
    entidad: 'Solicitud de Certificación',
    detalles: 'Emitió certificado de trazabilidad para 20 animales',
    ciudad: 'Monterrey',
  },
  {
    id: 'ACT-028',
    timestamp: '2026-02-17T13:30:00',
    usuarioId: 'USR-004',
    usuarioNombre: 'Luis García López',
    usuarioTipo: 'rancho_traspatio',
    accion: 'actualizar',
    entidad: 'Perfil',
    detalles: 'Actualizó correo electrónico de contacto',
    ciudad: 'Zapopan',
  },
  {
    id: 'ACT-029',
    timestamp: '2026-02-16T15:45:00',
    usuarioId: 'USR-005',
    usuarioNombre: 'Patricia Gómez Herrera',
    usuarioTipo: 'rancho_traspatio',
    accion: 'desactivar',
    entidad: 'Animal',
    detalles: 'Desactivó registro de gallina que escapó',
    ciudad: 'Toluca',
  },
  {
    id: 'ACT-030',
    timestamp: '2026-02-15T10:20:00',
    usuarioId: 'USR-003',
    usuarioNombre: 'Fernando Torres Jiménez',
    usuarioTipo: 'rancho_comercial',
    accion: 'crear',
    entidad: 'Animal',
    detalles: 'Registró nuevos animales para programa de mejora genética',
    ciudad: 'Querétaro',
  },
];

export default function AdminActivityLog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [accionFilter, setAccionFilter] = useState('todos');
  const [tipoFilter, setTipoFilter] = useState('todos');
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

  const tipoLabels: Record<TipoUsuario, string> = {
    rancho_comercial: 'Rancho Comercial',
    rancho_traspatio: 'Rancho Traspatio',
    veterinario: 'Veterinario',
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
          a.usuarioId.toLowerCase().includes(query) ||
          a.usuarioNombre.toLowerCase().includes(query)
      );
    }

    if (accionFilter !== 'todos') {
      result = result.filter((a) => a.accion === accionFilter);
    }

    if (tipoFilter !== 'todos') {
      result = result.filter((a) => a.usuarioTipo === tipoFilter);
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
        case 'usuarioNombre':
          comparison = a.usuarioNombre.localeCompare(b.usuarioNombre);
          break;
        case 'accion':
          comparison = a.accion.localeCompare(b.accion);
          break;
        case 'entidad':
          comparison = a.entidad.localeCompare(b.entidad);
          break;
      }
      return sortDirection === 'asc' ? comparison : -comparison;
    });

    return result;
  }, [searchQuery, accionFilter, tipoFilter, dateFrom, dateTo, sortField, sortDirection]);

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
      <span className={`px-3 py-1 text-xs font-medium rounded-full ${styles[accion]} inline-flex items-center gap-1`}>
        {accion === 'crear'}
        {accion === 'actualizar'}
        {accion === 'desactivar'}
        {accionLabels[accion]}
      </span>
    );
  };

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) return <ChevronUp className="w-4 h-4 text-gray-300" />;
    return sortDirection === 'asc' ? (
      <ChevronUp className="w-4 h-4 text-[#5B321A]" />
    ) : (
      <ChevronDown className="w-4 h-4 text-[#5B321A]" />
    );
  };

  const countByAccion = (accion: string) => {
    if (accion === 'todos') return todasLasActividades.length;
    return todasLasActividades.filter((a) => a.accion === accion).length;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <CollapsibleSidebar
        userName="Admin Sistema"
        userRole="Administrador"
        activeKey="actividades"
        theme={{
          avatarBg: '#5B321A',
          avatarText: '#ffffff',
          activeBg: '#f0e8e3',
          activeText: '#5B321A',
        }}
          navItems={[
          { key: 'dashboard', label: 'Panel Principal', icon: Home, to: '/admin' },
          { key: 'usuarios', label: 'Gestionar Usuarios', icon: Users, to: '/admin/usuarios' },
          { key: 'solicitudes', label: 'Todas las Solicitudes', icon: FileCheck, to: '/admin/solicitudes' },
          { key: 'actividades', label: 'Log de Actividades', icon: Activity, to: '/admin/actividades' },
          { key: 'actividades-admin', label: 'Actividades Administrativas', icon: Activity, to: '/admin/actividades-admin' },
          { key: 'perfil', label: 'Mi Perfil', icon: User, to: '/admin/perfil' },
        ]}
      />

      <main className="flex-1 p-10">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Log de Actividades</h1>
          <p className="text-lg text-gray-600">Revisa todas las acciones realizadas por usuarios del sistema</p>
        </div>

        {/* Resumen por acción */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {(['todos', 'crear', 'actualizar', 'desactivar'] as const).map((accion) => {
            const isActive = accionFilter === accion;
            const colors = {
              todos: { bg: isActive ? 'bg-[#5B321A] text-white' : 'bg-white', dot: 'bg-gray-500' },
              crear: { bg: isActive ? 'bg-green-600 text-white' : 'bg-white', dot: 'bg-green-500' },
              actualizar: { bg: isActive ? 'bg-blue-600 text-white' : 'bg-white', dot: 'bg-blue-500' },
              desactivar: { bg: isActive ? 'bg-yellow-600 text-white' : 'bg-white', dot: 'bg-yellow-500' },
            };
            const labels = { todos: 'Todas', crear: 'Creaciones', actualizar: 'Actualizaciones', desactivar: 'Desactivaciones' };
            const count = countByAccion(accion);

            return (
              <button
                key={accion}
                onClick={() => setAccionFilter(accion)}
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
          <div className="p-5 space-y-4">
            <div className="relative max-w-1sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar por nombre o ID de usuario..."
                value={searchQuery}
                onChange={(e) => handleFilterChange(() => setSearchQuery(e.target.value))}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B321A] focus:border-transparent"
              />
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-gray-500" />
                <select
                  value={tipoFilter}
                  onChange={(e) => handleFilterChange(() => setTipoFilter(e.target.value))}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B321A] focus:border-transparent bg-white"
                >
                  <option value="todos">Todos los tipos</option>
                  <option value="rancho_comercial">Rancho Comercial</option>
                  <option value="rancho_traspatio">Rancho Traspatio</option>
                  <option value="veterinario">Veterinario</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-500" />
                <input
                  type="date"
                  value={dateFrom}
                  onChange={(e) => handleFilterChange(() => setDateFrom(e.target.value))}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B321A] focus:border-transparent bg-white"
                />
              </div>

              <span className="text-gray-400">hasta</span>

              <input
                type="date"
                value={dateTo}
                onChange={(e) => handleFilterChange(() => setDateTo(e.target.value))}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B321A] focus:border-transparent bg-white"
              />

              {(searchQuery || accionFilter !== 'todos' || tipoFilter !== 'todos' || dateFrom || dateTo) && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setAccionFilter('todos');
                    setTipoFilter('todos');
                    setDateFrom('');
                    setDateTo('');
                    setCurrentPage(1);
                  }}
                  className="px-4 py-3 text-sm text-[#5B321A] hover:bg-[#f0e8e3] rounded-lg font-medium transition-colors"
                >
                  Limpiar filtros
                </button>
              )}
            </div>
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
                    onClick={() => handleSort('usuarioNombre')}
                  >
                    <div className="flex items-center gap-1">
                      Usuario
                      <SortIcon field="usuarioNombre" />
                    </div>
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Tipo Usuario</th>
                  <th
                    className="text-left px-6 py-4 text-sm font-semibold text-gray-700 cursor-pointer hover:bg-gray-100 select-none"
                    onClick={() => handleSort('accion')}
                  >
                    <div className="flex items-center gap-1">
                      Acción
                      <SortIcon field="accion" />
                    </div>
                  </th>
                  <th
                    className="text-left px-6 py-4 text-sm font-semibold text-gray-700 cursor-pointer hover:bg-gray-100 select-none"
                    onClick={() => handleSort('entidad')}
                  >
                    <div className="flex items-center gap-1">
                      Entidad
                      <SortIcon field="entidad" />
                    </div>
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Detalles</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Ciudad</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {paginatedActividades.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-6 py-16 text-center text-gray-500">
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
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{actividad.usuarioNombre}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{tipoLabels[actividad.usuarioTipo]}</td>
                      <td className="px-6 py-4">{accionBadge(actividad.accion)}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{actividad.entidad}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{actividad.detalles}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{actividad.ciudad}</td>
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
                          ? 'bg-[#5B321A] text-white'
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
