import { useState, useMemo } from 'react';
import { Home, Users, FileCheck, User, Eye, X, CheckCircle, XCircle, Search, Filter, ChevronUp, ChevronDown, FileText, Activity } from 'lucide-react';
import CollapsibleSidebar from '../components/CollapsibleSidebar';

type TipoUsuario = 'rancho_comercial' | 'rancho_traspatio' | 'veterinario' | 'administrador';
type EstadoUsuario = 'activo' | 'cambios_pendientes' | 'rechazado';
type SortField = 'id' | 'nombre' | 'tipo' | 'fechaCambio';
type SortDirection = 'asc' | 'desc';

interface CambioPendiente {
  campo: string;
  valorActual: string;
  valorNuevo: string;
  fecha: string;
  estado: 'pendiente' | 'aprobado' | 'rechazado';
}

interface Documento {
  nombre: string;
  archivo: string;
  tipo: string;
}

interface UsuarioRanchoComercial {
  id: string;
  tipo: 'rancho_comercial';
  estado: EstadoUsuario;
  nombre: string;
  email: string;
  telefono: string;
  ciudad: string;
  nombreRancho: string;
  capacidad: number;
  superficie: number;
  registroDate: string;
  cambiosPendientes: CambioPendiente[];
  documentos: Documento[];
}

interface UsuarioRanchoTraspatio {
  id: string;
  tipo: 'rancho_traspatio';
  estado: EstadoUsuario;
  nombre: string;
  email: string;
  telefono: string;
  ciudad: string;
  nombreRancho: string;
  capacidad: number;
  registroDate: string;
  cambiosPendientes: CambioPendiente[];
  documentos: Documento[];
}

interface UsuarioVeterinario {
  id: string;
  tipo: 'veterinario';
  estado: EstadoUsuario;
  nombre: string;
  email: string;
  telefono: string;
  ciudad: string;
  cedula: string;
  especialidad: string;
  universidad: string;
  registroDate: string;
  cambiosPendientes: CambioPendiente[];
  documentos: Documento[];
}

interface UsuarioAdministrador {
  id: string;
  tipo: 'administrador';
  estado: EstadoUsuario;
  nombre: string;
  email: string;
  telefono: string;
  departamento: string;
  rol: string;
  registroDate: string;
  cambiosPendientes: CambioPendiente[];
  documentos: Documento[];
}

type Usuario = UsuarioRanchoComercial | UsuarioRanchoTraspatio | UsuarioVeterinario | UsuarioAdministrador;

const todosLosUsuarios: Usuario[] = [
  {
    id: 'USR-001',
    tipo: 'rancho_comercial',
    estado: 'cambios_pendientes',
    nombre: 'Carlos Mendoza García',
    email: 'carlos.mendoza@email.com',
    telefono: '5551234567',
    ciudad: 'Guadalajara',
    nombreRancho: 'Rancho La Esperanza',
    capacidad: 500,
    superficie: 50,
    registroDate: '2024-06-15',
    cambiosPendientes: [
      { campo: 'Capacidad', valorActual: '500', valorNuevo: '600', fecha: '2026-03-10', estado: 'pendiente' },
      { campo: 'Teléfono', valorActual: '5551234567', valorNuevo: '5551234568', fecha: '2026-03-10', estado: 'pendiente' },
    ],
    documentos: [
      { nombre: 'Identificación Oficial (INE/Pasaporte)', archivo: 'ine_carlos.pdf', tipo: 'pdf' },
      { nombre: 'Acta Constitutiva o Registro Comercial', archivo: 'acta_constituiva.pdf', tipo: 'pdf' },
      { nombre: 'RFC con Constancia de Situación Fiscal', archivo: 'rfc_situacion.pdf', tipo: 'pdf' },
      { nombre: 'Comprobante de Domicilio', archivo: 'comprobante_domicilio.pdf', tipo: 'pdf' },
      { nombre: 'Permisos Sanitarios (SAGARPA/SENASICA)', archivo: 'permisos_sanitarios.pdf', tipo: 'pdf' },
      { nombre: 'Licencia de Uso de Suelo', archivo: 'licencia_suelo.pdf', tipo: 'pdf' },
      { nombre: 'Fotografías de las Instalaciones', archivo: 'fotos_instalaciones.jpg', tipo: 'jpg' },
      { nombre: 'Plan de Manejo Sanitario', archivo: 'plan_manejo_sanitario.pdf', tipo: 'pdf' },
    ],
  },
  {
    id: 'USR-002',
    tipo: 'rancho_comercial',
    estado: 'activo',
    nombre: 'María Rodríguez Castillo',
    email: 'maria.rodriguez@email.com',
    telefono: '5552876543',
    ciudad: 'Monterrey',
    nombreRancho: 'Rancho San Francisco',
    capacidad: 800,
    superficie: 120,
    registroDate: '2024-05-10',
    cambiosPendientes: [],
    documentos: [
      { nombre: 'Identificación Oficial (INE/Pasaporte)', archivo: 'ine_maria.pdf', tipo: 'pdf' },
      { nombre: 'Acta Constitutiva o Registro Comercial', archivo: 'acta_maria.pdf', tipo: 'pdf' },
      { nombre: 'RFC con Constancia de Situación Fiscal', archivo: 'rfc_maria.pdf', tipo: 'pdf' },
      { nombre: 'Comprobante de Domicilio', archivo: 'comprobante_maria.pdf', tipo: 'pdf' },
      { nombre: 'Permisos Sanitarios (SAGARPA/SENASICA)', archivo: 'permisos_maria.pdf', tipo: 'pdf' },
      { nombre: 'Licencia de Uso de Suelo', archivo: 'licencia_maria.pdf', tipo: 'pdf' },
      { nombre: 'Fotografías de las Instalaciones', archivo: 'fotos_maria.jpg', tipo: 'jpg' },
      { nombre: 'Plan de Manejo Sanitario', archivo: 'plan_maria.pdf', tipo: 'pdf' },
    ],
  },
  {
    id: 'USR-003',
    tipo: 'rancho_comercial',
    estado: 'rechazado',
    nombre: 'Fernando Torres Jiménez',
    email: 'fernando.torres@email.com',
    telefono: '5557654321',
    ciudad: 'Querétaro',
    nombreRancho: 'Rancho Los Andes',
    capacidad: 600,
    superficie: 80,
    registroDate: '2024-07-20',
    cambiosPendientes: [
      { campo: 'Nombre del Rancho', valorActual: 'Rancho Los Andes', valorNuevo: 'Rancho Los Andes Nuevo', fecha: '2026-03-05', estado: 'rechazado' },
    ],
    documentos: [
      { nombre: 'Identificación Oficial (INE/Pasaporte)', archivo: 'ine_fernando.pdf', tipo: 'pdf' },
      { nombre: 'Acta Constitutiva o Registro Comercial', archivo: 'acta_fernando.pdf', tipo: 'pdf' },
      { nombre: 'RFC con Constancia de Situación Fiscal', archivo: 'rfc_fernando.pdf', tipo: 'pdf' },
      { nombre: 'Comprobante de Domicilio', archivo: 'comprobante_fernando.pdf', tipo: 'pdf' },
      { nombre: 'Permisos Sanitarios (SAGARPA/SENASICA)', archivo: 'permisos_fernando.pdf', tipo: 'pdf' },
      { nombre: 'Licencia de Uso de Suelo', archivo: 'licencia_fernando.pdf', tipo: 'pdf' },
      { nombre: 'Fotografías de las Instalaciones', archivo: 'fotos_fernando.jpg', tipo: 'jpg' },
      { nombre: 'Plan de Manejo Sanitario', archivo: 'plan_fernando.pdf', tipo: 'pdf' },
    ],
  },
  {
    id: 'USR-004',
    tipo: 'rancho_traspatio',
    estado: 'activo',
    nombre: 'Luis García López',
    email: 'luis.garcia@email.com',
    telefono: '5556789012',
    ciudad: 'Zapopan',
    nombreRancho: 'Traspatio El Carmen',
    capacidad: 50,
    registroDate: '2024-08-05',
    cambiosPendientes: [],
    documentos: [
      { nombre: 'Identificación Oficial (INE/Pasaporte)', archivo: 'ine_luis.pdf', tipo: 'pdf' },
      { nombre: 'Comprobante de Domicilio', archivo: 'comprobante_luis.pdf', tipo: 'pdf' },
      { nombre: 'Constancia de Residencia', archivo: 'constancia_luis.pdf', tipo: 'pdf' },
      { nombre: 'Fotografías del Rancho', archivo: 'fotos_luis.jpg', tipo: 'jpg' },
    ],
  },
  {
    id: 'USR-005',
    tipo: 'rancho_traspatio',
    estado: 'cambios_pendientes',
    nombre: 'Patricia Gómez Herrera',
    email: 'patricia.gomez@email.com',
    telefono: '5553456789',
    ciudad: 'Toluca',
    nombreRancho: 'Traspatio Dos Corazones',
    capacidad: 30,
    registroDate: '2024-07-30',
    cambiosPendientes: [
      { campo: 'Capacidad', valorActual: '30', valorNuevo: '50', fecha: '2026-03-08', estado: 'pendiente' },
    ],
    documentos: [
      { nombre: 'Identificación Oficial (INE/Pasaporte)', archivo: 'ine_patricia.pdf', tipo: 'pdf' },
      { nombre: 'Comprobante de Domicilio', archivo: 'comprobante_patricia.pdf', tipo: 'pdf' },
      { nombre: 'Constancia de Residencia', archivo: 'constancia_patricia.pdf', tipo: 'pdf' },
      { nombre: 'Fotografías del Rancho', archivo: 'fotos_patricia.jpg', tipo: 'jpg' },
    ],
  },
  {
    id: 'USR-006',
    tipo: 'rancho_traspatio',
    estado: 'activo',
    nombre: 'Roberto Sánchez Flores',
    email: 'roberto.sanchez@email.com',
    telefono: '5555432109',
    ciudad: 'Guadalajara',
    nombreRancho: 'Traspatio Familiar',
    capacidad: 25,
    registroDate: '2024-09-12',
    cambiosPendientes: [],
    documentos: [
      { nombre: 'Identificación Oficial (INE/Pasaporte)', archivo: 'ine_roberto.pdf', tipo: 'pdf' },
      { nombre: 'Comprobante de Domicilio', archivo: 'comprobante_roberto.pdf', tipo: 'pdf' },
      { nombre: 'Constancia de Residencia', archivo: 'constancia_roberto.pdf', tipo: 'pdf' },
      { nombre: 'Fotografías del Rancho', archivo: 'fotos_roberto.jpg', tipo: 'jpg' },
    ],
  },
  {
    id: 'USR-007',
    tipo: 'veterinario',
    estado: 'activo',
    nombre: 'Dr. Ana López Martínez',
    email: 'ana.lopez@email.com',
    telefono: '5559876543',
    ciudad: 'Ciudad de México',
    cedula: '1234567890',
    especialidad: 'Medicina Veterinaria de Grandes Animales',
    universidad: 'UNAM',
    registroDate: '2024-04-20',
    cambiosPendientes: [],
    documentos: [
      { nombre: 'Identificación Oficial (INE/Pasaporte)', archivo: 'ine_ana.pdf', tipo: 'pdf' },
      { nombre: 'Comprobante de Domicilio', archivo: 'comprobante_ana.pdf', tipo: 'pdf' },
      { nombre: 'Cédula Profesional', archivo: 'cedula_ana.pdf', tipo: 'pdf' },
      { nombre: 'Certificado de Especialización (Opcional)', archivo: 'certificado_ana.pdf', tipo: 'pdf' },
      { nombre: 'Carta de Antecedentes No Penales', archivo: 'antecedentes_ana.pdf', tipo: 'pdf' },
    ],
  },
  {
    id: 'USR-008',
    tipo: 'veterinario',
    estado: 'cambios_pendientes',
    nombre: 'Dr. Juan Carlos López',
    email: 'juancarlos.lopez@email.com',
    telefono: '5557654123',
    ciudad: 'Guadalajara',
    cedula: '9876543210',
    especialidad: 'Medicina Veterinaria General',
    universidad: 'Universidad de Guadalajara',
    registroDate: '2024-08-15',
    cambiosPendientes: [
      { campo: 'Especialidad', valorActual: 'Medicina Veterinaria General', valorNuevo: 'Medicina Veterinaria de Grandes Animales', fecha: '2026-03-09', estado: 'pendiente' },
    ],
    documentos: [
      { nombre: 'Identificación Oficial (INE/Pasaporte)', archivo: 'ine_juan.pdf', tipo: 'pdf' },
      { nombre: 'Comprobante de Domicilio', archivo: 'comprobante_juan.pdf', tipo: 'pdf' },
      { nombre: 'Cédula Profesional', archivo: 'cedula_juan.pdf', tipo: 'pdf' },
      { nombre: 'Certificado de Especialización (Opcional)', archivo: 'certificado_juan.pdf', tipo: 'pdf' },
      { nombre: 'Carta de Antecedentes No Penales', archivo: 'antecedentes_juan.pdf', tipo: 'pdf' },
    ],
  },
  {
    id: 'USR-009',
    tipo: 'veterinario',
    estado: 'activo',
    nombre: 'Dra. Sofía Díaz Morales',
    email: 'sofia.diaz@email.com',
    telefono: '5552901234',
    ciudad: 'Monterrey',
    cedula: '5555555555',
    especialidad: 'Medicina Veterinaria Alternativa',
    universidad: 'ITESM',
    registroDate: '2024-07-10',
    cambiosPendientes: [],
    documentos: [
      { nombre: 'Identificación Oficial (INE/Pasaporte)', archivo: 'ine_sofia.pdf', tipo: 'pdf' },
      { nombre: 'Comprobante de Domicilio', archivo: 'comprobante_sofia.pdf', tipo: 'pdf' },
      { nombre: 'Cédula Profesional', archivo: 'cedula_sofia.pdf', tipo: 'pdf' },
      { nombre: 'Certificado de Especialización (Opcional)', archivo: 'certificado_sofia.pdf', tipo: 'pdf' },
      { nombre: 'Carta de Antecedentes No Penales', archivo: 'antecedentes_sofia.pdf', tipo: 'pdf' },
    ],
  },
  {
    id: 'USR-010',
    tipo: 'administrador',
    estado: 'activo',
    nombre: 'Carlos Alberto Reyes',
    email: 'admin@sistema-ganado.gob.mx',
    telefono: '5559001234',
    departamento: 'Regulación Pecuaria',
    rol: 'Administrador General',
    registroDate: '2023-01-15',
    cambiosPendientes: [],
    documentos: [],
  },
  {
    id: 'USR-011',
    tipo: 'administrador',
    estado: 'cambios_pendientes',
    nombre: 'Laura Hernández García',
    email: 'laura.hernandez@sistema-ganado.gob.mx',
    telefono: '5559012345',
    departamento: 'Fiscalización',
    rol: 'Administrador Regional',
    registroDate: '2023-06-20',
    cambiosPendientes: [
      { campo: 'Correo Electrónico', valorActual: 'laura.hernandez@sistema-ganado.gob.mx', valorNuevo: 'laura.h.garcia@sistema-ganado.gob.mx', fecha: '2026-03-11', estado: 'pendiente' },
      { campo: 'Teléfono', valorActual: '5559012345', valorNuevo: '5559012346', fecha: '2026-03-11', estado: 'pendiente' },
    ],
    documentos: [],
  },
];

export default function AdminUsuarios() {
  const [searchQuery, setSearchQuery] = useState('');
  const [tipoFilter, setTipoFilter] = useState('todos');
  const [estadoFilter, setEstadoFilter] = useState('todos');
  const [sortField, setSortField] = useState<SortField>('nombre');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const [selectedUsuario, setSelectedUsuario] = useState<Usuario | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [actionType, setActionType] = useState<'aprobar' | 'rechazar' | 'pendiente' | null>(null);
  const [razonRechazo, setRazonRechazo] = useState('');
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [adminNotas, setAdminNotas] = useState('');

  const tipoLabels: Record<TipoUsuario, string> = {
    rancho_comercial: 'Rancho Comercial',
    rancho_traspatio: 'Rancho Traspatio',
    veterinario: 'Veterinario',
    administrador: 'Administrador',
  };

  const estadoLabels: Record<EstadoUsuario, string> = {
    activo: 'Activo',
    cambios_pendientes: 'Actualización',
    rechazado: 'Rechazado',
  };

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const filteredUsuarios = useMemo(() => {
    let result = [...todosLosUsuarios];

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (u) =>
          u.id.toLowerCase().includes(query) ||
          u.nombre.toLowerCase().includes(query) ||
          u.email.toLowerCase().includes(query)
      );
    }

    if (tipoFilter !== 'todos') {
      result = result.filter((u) => u.tipo === tipoFilter);
    }

    if (estadoFilter !== 'todos') {
      result = result.filter((u) => u.estado === estadoFilter);
    }

    result.sort((a, b) => {
      let comparison = 0;
      switch (sortField) {
        case 'id':
          comparison = a.id.localeCompare(b.id);
          break;
        case 'nombre':
          comparison = a.nombre.localeCompare(b.nombre);
          break;
        case 'tipo':
          comparison = a.tipo.localeCompare(b.tipo);
          break;
        case 'fechaCambio':
          const fechaA = a.cambiosPendientes.length > 0 ? new Date(a.cambiosPendientes[0].fecha).getTime() : 0;
          const fechaB = b.cambiosPendientes.length > 0 ? new Date(b.cambiosPendientes[0].fecha).getTime() : 0;
          comparison = fechaA - fechaB;
          break;
      }
      return sortDirection === 'asc' ? comparison : -comparison;
    });

    return result;
  }, [searchQuery, tipoFilter, estadoFilter, sortField, sortDirection]);

  const handleApprove = () => {
    setActionType('aprobar');
    setShowSuccess(true);
    setTimeout(() => {
      setSelectedUsuario(null);
      setShowSuccess(false);
      setActionType(null);
      setAdminNotas('');
    }, 2000);
  };

  const handlePending = () => {
    setActionType('pendiente');
    setShowSuccess(true);
    setTimeout(() => {
      setSelectedUsuario(null);
      setShowSuccess(false);
      setActionType(null);
      setAdminNotas('');
    }, 2000);
  };

  const handleRejectClick = () => {
    setShowRejectModal(true);
  };

  const confirmReject = () => {
    setShowRejectModal(false);
    setActionType('rechazar');
    setShowSuccess(true);
    setTimeout(() => {
      setSelectedUsuario(null);
      setShowSuccess(false);
      setActionType(null);
      setRazonRechazo('');
      setAdminNotas('');
    }, 2000);
  };

  const estadoBadge = (estado: EstadoUsuario) => {
    const styles = {
      activo: 'bg-green-100 text-green-800',
      cambios_pendientes: 'bg-yellow-100 text-yellow-800',
      rechazado: 'bg-red-100 text-red-800',
    };
    return (
      <span className={`px-3 py-1 text-xs font-medium rounded-full ${styles[estado]}`}>
        {estadoLabels[estado]}
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

  const countByEstado = (estado: string) => {
    if (estado === 'todos') return todosLosUsuarios.length;
    return todosLosUsuarios.filter((u) => u.estado === estado as EstadoUsuario).length;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <CollapsibleSidebar
        userName="Admin Sistema"
        userRole="Administrador"
        activeKey="usuarios"
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Gestionar Usuarios</h1>
          <p className="text-lg text-gray-600">Revisa y gestiona la información de todos los usuarios registrados en el sistema</p>
        </div>

        {/* Resumen por estado */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {(['todos', 'activo', 'cambios_pendientes', 'rechazado'] as const).map((estado) => {
            const isActive = estadoFilter === estado;
            const colors = {
              todos: { bg: isActive ? 'bg-[#5B321A] text-white' : 'bg-white', dot: 'bg-gray-500' },
              activo: { bg: isActive ? 'bg-green-600 text-white' : 'bg-white', dot: 'bg-green-500' },
              cambios_pendientes: { bg: isActive ? 'bg-yellow-500 text-white' : 'bg-white', dot: 'bg-yellow-500' },
              rechazado: { bg: isActive ? 'bg-red-600 text-white' : 'bg-white', dot: 'bg-red-500' },
            };
            const labels = { todos: 'Todos', activo: 'Activos', cambios_pendientes: 'Con Cambios', rechazado: 'Rechazados' };
            const count = countByEstado(estado);

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
                <p className={`text-3xl font-bold ${isActive ? '' : 'text-gray-900'}`}>{count}</p>
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
                placeholder="Buscar por ID, nombre, email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B321A] focus:border-transparent"
              />
            </div>

            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <select
                value={tipoFilter}
                onChange={(e) => setTipoFilter(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B321A] focus:border-transparent bg-white"
              >
                <option value="todos">Todos los tipos</option>
                <option value="rancho_comercial">Rancho Comercial</option>
                <option value="rancho_traspatio">Rancho Traspatio</option>
                <option value="veterinario">Veterinario</option>
                <option value="administrador">Administrador</option>
              </select>
            </div>

            {(searchQuery || tipoFilter !== 'todos' || estadoFilter !== 'todos') && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setTipoFilter('todos');
                  setEstadoFilter('todos');
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
                    onClick={() => handleSort('id')}
                  >
                    <div className="flex items-center gap-1">
                      ID
                      <SortIcon field="id" />
                    </div>
                  </th>
                  <th
                    className="text-left px-6 py-4 text-sm font-semibold text-gray-700 cursor-pointer hover:bg-gray-100 select-none"
                    onClick={() => handleSort('nombre')}
                  >
                    <div className="flex items-center gap-1">
                      Nombre
                      <SortIcon field="nombre" />
                    </div>
                  </th>
                  <th
                    className="text-left px-6 py-4 text-sm font-semibold text-gray-700 cursor-pointer hover:bg-gray-100 select-none"
                    onClick={() => handleSort('tipo')}
                  >
                    <div className="flex items-center gap-1">
                      Tipo
                      <SortIcon field="tipo" />
                    </div>
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Email</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Teléfono</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Estado</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Solicitud Cambios</th>
                  <th className="text-center px-6 py-4 text-sm font-semibold text-gray-700">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredUsuarios.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="px-6 py-16 text-center text-gray-500">
                      <Search className="w-10 h-10 text-gray-300 mx-auto mb-3" />
                      <p className="text-lg font-medium">No se encontraron usuarios</p>
                      <p className="text-sm mt-1">Intenta ajustar los filtros o la búsqueda</p>
                    </td>
                  </tr>
                ) : (
                  filteredUsuarios.map((usuario) => (
                    <tr key={usuario.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">{usuario.id}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{usuario.nombre}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{tipoLabels[usuario.tipo]}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{usuario.email}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{usuario.telefono}</td>
                      <td className="px-6 py-4">{estadoBadge(usuario.estado)}</td>
                      <td className="px-6 py-4 text-sm">
                        {usuario.cambiosPendientes.length > 0 ? (
                          <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-medium">
                            {usuario.cambiosPendientes.length}
                          </span>
                        ) : (
                          <span className="text-gray-400">—</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button
                          onClick={() => setSelectedUsuario(usuario)}
                          className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#5B321A] hover:bg-[#4a2815] text-white text-sm rounded-lg font-medium transition-colors"
                        >
                          <Eye className="w-4 h-4" />
                          Ver
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Mostrando <span className="font-semibold">{filteredUsuarios.length}</span> de{' '}
              <span className="font-semibold">{todosLosUsuarios.length}</span> usuarios
            </p>
          </div>
        </div>
      </main>

      {/* Modal de Detalle */}
      {selectedUsuario && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            {showSuccess ? (
              <div className="p-16 text-center">
                <div
                  className={`inline-flex items-center justify-center w-24 h-24 ${
                    actionType === 'aprobar' ? 'bg-[#f0e8e3]' : actionType === 'rechazar' ? 'bg-red-100' : 'bg-yellow-100'
                  } rounded-full mb-6`}
                >
                  {actionType === 'aprobar' ? (
                    <CheckCircle className="w-14 h-14 text-[#5B321A]" />
                  ) : actionType === 'rechazar' ? (
                    <XCircle className="w-14 h-14 text-red-600" />
                  ) : (
                    <CheckCircle className="w-14 h-14 text-yellow-600" />
                  )}
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {actionType === 'aprobar'
                    ? '¡Cambios Aprobados!'
                    : actionType === 'rechazar'
                      ? 'Cambios Rechazados'
                      : 'Solicitud Dejada en Pendiente'}
                </h2>
                <p className="text-lg text-gray-600">
                  {actionType === 'aprobar'
                    ? 'Los cambios del usuario han sido aprobados y aplicados al sistema'
                    : actionType === 'rechazar'
                      ? 'Se ha notificado al usuario sobre el rechazo de su solicitud de cambios'
                      : 'La solicitud permanece en estado pendiente para revisión posterior'}
                </p>
              </div>
            ) : (
              <>
                <div className="p-8 border-b border-gray-200 flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">Revisar Usuario - {selectedUsuario.id}</h2>
                    <div className="mt-2">{estadoBadge(selectedUsuario.estado)}</div>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedUsuario(null);
                      setShowRejectModal(false);
                      setRazonRechazo('');
                      setAdminNotas('');
                    }}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-600" />
                  </button>
                </div>

                <div className="p-8 space-y-8">
                  {/* Información del Usuario */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Información del Usuario</h3>
                    <div className="bg-gray-50 rounded-lg p-6 grid grid-cols-2 gap-6 border border-gray-200">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Nombre Completo</p>
                        <p className="font-medium text-gray-900">{selectedUsuario.nombre}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Correo Electrónico</p>
                        <p className="font-medium text-gray-900">{selectedUsuario.email}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Teléfono</p>
                        <p className="font-medium text-gray-900">{selectedUsuario.telefono}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Tipo de Usuario</p>
                        <p className="font-medium text-gray-900">{tipoLabels[selectedUsuario.tipo]}</p>
                      </div>
                    </div>
                  </div>

                  {/* Información Específica por Tipo */}
                  {(selectedUsuario.tipo === 'rancho_comercial' || selectedUsuario.tipo === 'rancho_traspatio') && (
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Información del Rancho</h3>
                      <div className="bg-gray-50 rounded-lg p-6 grid grid-cols-2 gap-6 border border-gray-200">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Nombre del Rancho</p>
                          <p className="font-medium text-gray-900">
                            {'nombreRancho' in selectedUsuario ? selectedUsuario.nombreRancho : 'N/A'}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Ciudad</p>
                          <p className="font-medium text-gray-900">
                            {'ciudad' in selectedUsuario ? selectedUsuario.ciudad : 'N/A'}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Capacidad</p>
                          <p className="font-medium text-gray-900">
                            {'capacidad' in selectedUsuario ? selectedUsuario.capacidad + ' animales' : 'N/A'}
                          </p>
                        </div>
                        {selectedUsuario.tipo === 'rancho_comercial' && 'superficie' in selectedUsuario && (
                          <div>
                            <p className="text-sm text-gray-600 mb-1">Superficie</p>
                            <p className="font-medium text-gray-900">{selectedUsuario.superficie} hectáreas</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {selectedUsuario.tipo === 'veterinario' && (
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Información Profesional</h3>
                      <div className="bg-gray-50 rounded-lg p-6 grid grid-cols-2 gap-6 border border-gray-200">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Cédula Profesional</p>
                          <p className="font-medium text-gray-900">
                            {'cedula' in selectedUsuario ? selectedUsuario.cedula : 'N/A'}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Especialidad</p>
                          <p className="font-medium text-gray-900">
                            {'especialidad' in selectedUsuario ? selectedUsuario.especialidad : 'N/A'}
                          </p>
                        </div>
                        <div className="col-span-2">
                          <p className="text-sm text-gray-600 mb-1">Universidad</p>
                          <p className="font-medium text-gray-900">
                            {'universidad' in selectedUsuario ? selectedUsuario.universidad : 'N/A'}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedUsuario.tipo === 'administrador' && (
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Información Administrativa</h3>
                      <div className="bg-gray-50 rounded-lg p-6 grid grid-cols-2 gap-6 border border-gray-200">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Rol</p>
                          <p className="font-medium text-gray-900">
                            {'rol' in selectedUsuario ? selectedUsuario.rol : 'N/A'}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Departamento</p>
                          <p className="font-medium text-gray-900">
                            {'departamento' in selectedUsuario ? selectedUsuario.departamento : 'N/A'}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Documentación Adjunta */}
                  {selectedUsuario.documentos.length > 0 && (
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Documentación Adjunta</h3>
                      {selectedUsuario.tipo === 'rancho_comercial' && (
                        <div className="space-y-3">
                          {selectedUsuario.documentos.map((doc, idx) => (
                            <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                              <div className="flex items-center space-x-3">
                                <FileText className="w-5 h-5 text-gray-600" />
                                <span className="text-gray-900 font-medium">{doc.nombre}</span>
                              </div>
                              <button className="text-[#5B321A] hover:text-[#4a2815] font-medium text-sm">
                                Ver documento →
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                      {selectedUsuario.tipo === 'rancho_traspatio' && (
                        <div className="space-y-3">
                          {selectedUsuario.documentos.map((doc, idx) => (
                            <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                              <div className="flex items-center space-x-3">
                                <FileText className="w-5 h-5 text-gray-600" />
                                <span className="text-gray-900 font-medium">{doc.nombre}</span>
                              </div>
                              <button className="text-[#5B321A] hover:text-[#4a2815] font-medium text-sm">
                                Ver documento →
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                      {selectedUsuario.tipo === 'veterinario' && (
                        <div className="space-y-3">
                          {selectedUsuario.documentos.map((doc, idx) => (
                            <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                              <div className="flex items-center space-x-3">
                                <FileText className="w-5 h-5 text-gray-600" />
                                <span className="text-gray-900 font-medium">{doc.nombre}</span>
                              </div>
                              <button className="text-[#5B321A] hover:text-[#4a2815] font-medium text-sm">
                                Ver documento →
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                  {selectedUsuario.cambiosPendientes.length > 0 && (
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Solicitudes de Cambio Pendientes</h3>
                      <div className="space-y-3">
                        {selectedUsuario.cambiosPendientes.map((cambio, idx) => (
                          <div key={idx} className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <p className="font-medium text-gray-900 mb-1">{cambio.campo}</p>
                                <p className="text-sm text-gray-600">
                                  <span className="line-through text-gray-500">{cambio.valorActual}</span>
                                  <span className="mx-2 text-gray-400">→</span>
                                  <span className="font-medium text-amber-800">{cambio.valorNuevo}</span>
                                </p>
                                <p className="text-xs text-gray-500 mt-1">
                                  Solicitado el{' '}
                                  {new Date(cambio.fecha).toLocaleDateString('es-MX', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                  })}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Notas del Administrador */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Notas del Administrador</h3>
                    <textarea
                      value={adminNotas}
                      onChange={(e) => setAdminNotas(e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B321A] focus:border-transparent"
                      placeholder="Agrega observaciones sobre la revisión de este usuario..."
                    ></textarea>
                  </div>

                  {selectedUsuario.estado === 'cambios_pendientes' && (
                    <div className="flex gap-4 pt-6 border-t border-gray-200">
                      <button
                        onClick={handleRejectClick}
                        className="flex-1 px-8 py-4 border-2 border-red-600 text-red-600 hover:bg-red-50 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                      >
                        <XCircle className="w-5 h-5" />
                        Rechazar Cambios
                      </button>
                      <button
                        onClick={handlePending}
                        className="flex-1 px-8 py-4 border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-50 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                      >
                        Dejar Pendiente
                      </button>
                      <button
                        onClick={handleApprove}
                        className="flex-1 px-8 py-4 bg-[#5B321A] hover:bg-[#4a2815] text-white rounded-lg text-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                      >
                        <CheckCircle className="w-5 h-5" />
                        Aprobar Cambios
                      </button>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Modal Confirmar Rechazo */}
      {showRejectModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">Rechazar Solicitud de Cambios</h2>
              <p className="text-sm text-gray-500 mt-1">
                Por favor, indica la razón por la que rechazas la solicitud de cambios de este usuario
              </p>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Razón del Rechazo *</label>
                <textarea
                  value={razonRechazo}
                  onChange={(e) => setRazonRechazo(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B321A] focus:border-transparent"
                  placeholder="Explica por qué rechazas esta solicitud de cambios..."
                ></textarea>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex gap-3">
              <button
                onClick={() => {
                  setShowRejectModal(false);
                  setRazonRechazo('');
                }}
                className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg font-medium transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={confirmReject}
                disabled={!razonRechazo.trim()}
                className="flex-1 px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <XCircle className="w-4 h-4" />
                Confirmar Rechazo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
