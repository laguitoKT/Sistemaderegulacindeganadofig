import { useState, useMemo } from 'react';
import { Home, Users, FileCheck, User, Search, Filter, ChevronUp, ChevronDown, Activity, Calendar } from 'lucide-react';
import CollapsibleSidebar from '../components/CollapsibleSidebar';

type TipoAccion = 'crear' | 'actualizar' | 'desactivar';
type TipoEntidad = 'Usuario' | 'Solicitud' | 'Reporte' | 'Configuración' | 'Otro';
type SortField = 'timestamp' | 'adminNombre' | 'accion';
type SortDirection = 'asc' | 'desc';

interface ActivityLogAdmin {
  id: string;
  timestamp: string;
  adminId: string;
  adminNombre: string;
  accion: TipoAccion;
  entidad: TipoEntidad;
  detalles: string;
}

const todasLasActividades: ActivityLogAdmin[] = [
  {
    id: 'ADMIN-ACT-001',
    timestamp: '2026-03-13T15:45:00',
    adminId: 'ADM-001',
    adminNombre: 'Carlos Alberto Reyes',
    accion: 'crear',
    entidad: 'Usuario',
    detalles: 'Creó nueva cuenta de administrador regional para Laura Hernández',
  },
  {
    id: 'ADMIN-ACT-002',
    timestamp: '2026-03-13T14:20:00',
    adminId: 'ADM-002',
    adminNombre: 'Laura Hernández García',
    accion: 'desactivar',
    entidad: 'Usuario',
    detalles: 'Desactivó cuenta de usuario USR-045 (rancho comercial)',
  },
  {
    id: 'ADMIN-ACT-003',
    timestamp: '2026-03-13T10:30:00',
    adminId: 'ADM-001',
    adminNombre: 'Carlos Alberto Reyes',
    accion: 'actualizar',
    entidad: 'Configuración',
    detalles: 'Actualizó configuración de límite diario de registros',
  },
  {
    id: 'ADMIN-ACT-004',
    timestamp: '2026-03-12T16:15:00',
    adminId: 'ADM-002',
    adminNombre: 'Laura Hernández García',
    accion: 'crear',
    entidad: 'Reporte',
    detalles: 'Generó reporte mensual de actividades de veterinarios',
  },
  {
    id: 'ADMIN-ACT-005',
    timestamp: '2026-03-12T13:45:00',
    adminId: 'ADM-001',
    adminNombre: 'Carlos Alberto Reyes',
    accion: 'desactivar',
    entidad: 'Solicitud',
    detalles: 'Rechazó y cerró solicitud de registro SOL-R045',
  },
  {
    id: 'ADMIN-ACT-006',
    timestamp: '2026-03-12T09:00:00',
    adminId: 'ADM-002',
    adminNombre: 'Laura Hernández García',
    accion: 'actualizar',
    entidad: 'Usuario',
    detalles: 'Actualizó permisos de acceso para administrador regional',
  },
  {
    id: 'ADMIN-ACT-007',
    timestamp: '2026-03-11T17:30:00',
    adminId: 'ADM-001',
    adminNombre: 'Carlos Alberto Reyes',
    accion: 'crear',
    entidad: 'Solicitud',
    detalles: 'Creó nueva solicitud de certificación masiva para 45 animales',
  },
  {
    id: 'ADMIN-ACT-008',
    timestamp: '2026-03-11T14:00:00',
    adminId: 'ADM-002',
    adminNombre: 'Laura Hernández García',
    accion: 'actualizar',
    entidad: 'Configuración',
    detalles: 'Actualizó horarios de cierre de solicitudes',
  },
  {
    id: 'ADMIN-ACT-009',
    timestamp: '2026-03-11T11:20:00',
    adminId: 'ADM-001',
    adminNombre: 'Carlos Alberto Reyes',
    accion: 'desactivar',
    entidad: 'Usuario',
    detalles: 'Desactivó cuenta de veterinario USR-089 por incumplimiento',
  },
  {
    id: 'ADMIN-ACT-010',
    timestamp: '2026-03-10T15:50:00',
    adminId: 'ADM-002',
    adminNombre: 'Laura Hernández García',
    accion: 'crear',
    entidad: 'Reporte',
    detalles: 'Generó reporte de auditoría de cambios de usuarios',
  },
  {
    id: 'ADMIN-ACT-011',
    timestamp: '2026-03-10T13:10:00',
    adminId: 'ADM-001',
    adminNombre: 'Carlos Alberto Reyes',
    accion: 'actualizar',
    entidad: 'Solicitud',
    detalles: 'Actualizó estado de 12 solicitudes pendientes a aprobadas',
  },
  {
    id: 'ADMIN-ACT-012',
    timestamp: '2026-03-10T09:35:00',
    adminId: 'ADM-002',
    adminNombre: 'Laura Hernández García',
    accion: 'crear',
    entidad: 'Usuario',
    detalles: 'Creó nueva cuenta de administrador general temporal',
  },
  {
    id: 'ADMIN-ACT-013',
    timestamp: '2026-03-09T16:45:00',
    adminId: 'ADM-001',
    adminNombre: 'Carlos Alberto Reyes',
    accion: 'desactivar',
    entidad: 'Configuración',
    detalles: 'Desactivó período de mantenimiento del sistema',
  },
  {
    id: 'ADMIN-ACT-014',
    timestamp: '2026-03-09T14:20:00',
    adminId: 'ADM-002',
    adminNombre: 'Laura Hernández García',
    accion: 'actualizar',
    entidad: 'Reporte',
    detalles: 'Actualizó parámetros de generación de reporte de trazabilidad',
  },
  {
    id: 'ADMIN-ACT-015',
    timestamp: '2026-03-09T10:00:00',
    adminId: 'ADM-001',
    adminNombre: 'Carlos Alberto Reyes',
    accion: 'crear',
    entidad: 'Solicitud',
    detalles: 'Creó manual de procedimientos y lo adjuntó al sistema',
  },
  {
    id: 'ADMIN-ACT-016',
    timestamp: '2026-03-08T15:30:00',
    adminId: 'ADM-002',
    adminNombre: 'Laura Hernández García',
    accion: 'desactivar',
    entidad: 'Usuario',
    detalles: 'Desactivó acceso de usuario con credenciales comprometidas',
  },
  {
    id: 'ADMIN-ACT-017',
    timestamp: '2026-03-08T12:45:00',
    adminId: 'ADM-001',
    adminNombre: 'Carlos Alberto Reyes',
    accion: 'actualizar',
    entidad: 'Usuario',
    detalles: 'Actualizó información de contacto de administrador regional',
  },
  {
    id: 'ADMIN-ACT-018',
    timestamp: '2026-03-08T09:15:00',
    adminId: 'ADM-002',
    adminNombre: 'Laura Hernández García',
    accion: 'crear',
    entidad: 'Reporte',
    detalles: 'Generó reporte estadístico de satisfacción de usuarios',
  },
  {
    id: 'ADMIN-ACT-019',
    timestamp: '2026-03-07T17:00:00',
    adminId: 'ADM-001',
    adminNombre: 'Carlos Alberto Reyes',
    accion: 'desactivar',
    entidad: 'Solicitud',
    detalles: 'Eliminó solicitud duplicada y consolidó con la solicitud original',
  },
  {
    id: 'ADMIN-ACT-020',
    timestamp: '2026-03-07T14:30:00',
    adminId: 'ADM-002',
    adminNombre: 'Laura Hernández García',
    accion: 'actualizar',
    entidad: 'Configuración',
    detalles: 'Actualizó política de privacidad y términos de uso',
  },
  {
    id: 'ADMIN-ACT-021',
    timestamp: '2026-03-07T11:00:00',
    adminId: 'ADM-001',
    adminNombre: 'Carlos Alberto Reyes',
    accion: 'crear',
    entidad: 'Usuario',
    detalles: 'Creó nueva cuenta para inspector de SAGARPA integrado',
  },
  {
    id: 'ADMIN-ACT-022',
    timestamp: '2026-03-06T15:45:00',
    adminId: 'ADM-002',
    adminNombre: 'Laura Hernández García',
    accion: 'actualizar',
    entidad: 'Solicitud',
    detalles: 'Actualizó criterios de validación de documentos requeridos',
  },
  {
    id: 'ADMIN-ACT-023',
    timestamp: '2026-03-06T13:20:00',
    adminId: 'ADM-001',
    adminNombre: 'Carlos Alberto Reyes',
    accion: 'desactivar',
    entidad: 'Usuario',
    detalles: 'Desactivó cuenta de ex-empleado administrativo',
  },
  {
    id: 'ADMIN-ACT-024',
    timestamp: '2026-03-06T10:15:00',
    adminId: 'ADM-002',
    adminNombre: 'Laura Hernández García',
    accion: 'crear',
    entidad: 'Reporte',
    detalles: 'Exportó base de datos de usuarios activos para auditoría',
  },
  {
    id: 'ADMIN-ACT-025',
    timestamp: '2026-03-05T16:00:00',
    adminId: 'ADM-001',
    adminNombre: 'Carlos Alberto Reyes',
    accion: 'actualizar',
    entidad: 'Configuración',
    detalles: 'Actualizó protocolos de seguridad y autenticación de dos factores',
  },
  {
    id: 'ADMIN-ACT-026',
    timestamp: '2026-03-05T13:30:00',
    adminId: 'ADM-002',
    adminNombre: 'Laura Hernández García',
    accion: 'crear',
    entidad: 'Usuario',
    detalles: 'Creó cuenta temporal para consultor externo de sistemas',
  },
  {
    id: 'ADMIN-ACT-027',
    timestamp: '2026-03-05T10:45:00',
    adminId: 'ADM-001',
    adminNombre: 'Carlos Alberto Reyes',
    accion: 'desactivar',
    entidad: 'Reporte',
    detalles: 'Desaprobó generación automática de reporte defectuoso',
  },
];

export default function AdminActivityLogAdmins() {
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
          a.adminId.toLowerCase().includes(query) ||
          a.adminNombre.toLowerCase().includes(query)
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
        case 'adminNombre':
          comparison = a.adminNombre.localeCompare(b.adminNombre);
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
        activeKey="actividades-admin"
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

      <main className="flex-1 p-4 pt-20 lg:p-10 lg:pt-10">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Actividades Administrativas</h1>
          <p className="text-lg text-gray-600">Revisa todas las acciones realizadas por administradores en el sistema</p>
        </div>

        {/* Resumen por acción */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
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
                placeholder="Buscar por nombre o ID de administrador..."
                value={searchQuery}
                onChange={(e) => handleFilterChange(() => setSearchQuery(e.target.value))}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B321A] focus:border-transparent"
              />
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

            {(searchQuery || accionFilter !== 'todos' || dateFrom || dateTo) && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setAccionFilter('todos');
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
                    onClick={() => handleSort('adminNombre')}
                  >
                    <div className="flex items-center gap-1">
                      Administrador
                      <SortIcon field="adminNombre" />
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
                    <td colSpan={5} className="px-6 py-16 text-center text-gray-500">
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
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{actividad.adminNombre}</td>
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