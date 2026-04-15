import { useState, useMemo } from "react";
import {
  Home,
  FileCheck,
  User,
  Eye,
  X,
  CheckCircle,
  XCircle,
  Search,
  Filter,
  ChevronUp,
  ChevronDown,
  Clock,
  Users,
  Activity
} from "lucide-react";
import CollapsibleSidebar from "../components/CollapsibleSidebar";

type TipoSolicitud =
  | "rancho_comercial"
  | "rancho_traspatio"
  | "veterinario";
type EstadoSolicitud = "pendiente" | "aprobada" | "rechazada";
type SortField = "id" | "fechaSolicitud" | "nombre" | "tipo";
type SortDirection = "asc" | "desc";

interface DocumentoSolicitud {
  nombre: string;
  archivo: string;
  tipo: string;
}

interface SolicitudRanchoComercial {
  id: string;
  tipo: "rancho_comercial";
  estado: EstadoSolicitud;
  nombre: string;
  email: string;
  telefono: string;
  ciudad: string;
  direccion: string;
  nombreRancho: string;
  capacidad: number;
  superficie: number;
  fechaSolicitud: string;
  documentos: DocumentoSolicitud[];
}

interface SolicitudRanchoTraspatio {
  id: string;
  tipo: "rancho_traspatio";
  estado: EstadoSolicitud;
  nombre: string;
  email: string;
  telefono: string;
  ciudad: string;
  direccion: string;
  nombreRancho: string;
  capacidad: number;
  superficie: number;
  fechaSolicitud: string;
  documentos: DocumentoSolicitud[];
}

interface SolicitudVeterinario {
  id: string;
  tipo: "veterinario";
  estado: EstadoSolicitud;
  nombre: string;
  email: string;
  telefono: string;
  ciudad: string;
  direccion: string;
  cedula: string;
  especialidad: string;
  universidad: string;
  fechaSolicitud: string;
  documentos: DocumentoSolicitud[];
}

type Solicitud =
  | SolicitudRanchoComercial
  | SolicitudRanchoTraspatio
  | SolicitudVeterinario;

const todasLasSolicitudes: Solicitud[] = [
  {
    id: "SOL-R001",
    tipo: "rancho_comercial",
    estado: "pendiente",
    nombre: "Carlos Mendoza García",
    email: "carlos.mendoza@email.com",
    telefono: "5551234567",
    ciudad: "Guadalajara",
    direccion: "Calle Morelos #456, Apartado 10",
    nombreRancho: "Rancho La Esperanza",
    capacidad: 500,
    superficie: 50,
    fechaSolicitud: "2025-02-20",
    documentos: [
      {
        nombre: "Identificación Oficial",
        archivo: "img1.pdf",
        tipo: "pdf",
      },
      {
        nombre: "Acta Constitutiva",
        archivo: "doc1.pdf",
        tipo: "pdf",
      },
    ],
  },
  {
    id: "SOL-R002",
    tipo: "rancho_traspatio",
    estado: "pendiente",
    nombre: "Luis García López",
    email: "luis.garcia@email.com",
    telefono: "5556789012",
    ciudad: "Zapopan",
    direccion: "Calle 5 de Mayo #123",
    nombreRancho: "Traspatio El Carmen",
    capacidad: 50,
    superficie: 2,
    fechaSolicitud: "2025-02-22",
    documentos: [
      {
        nombre: "Identificación Oficial",
        archivo: "img2.pdf",
        tipo: "pdf",
      },
      {
        nombre: "Comprobante de Domicilio",
        archivo: "comp1.pdf",
        tipo: "pdf",
      },
    ],
  },
  {
    id: "SOL-V001",
    tipo: "veterinario",
    estado: "pendiente",
    nombre: "Dr. Ana López Martínez",
    email: "ana.lopez@email.com",
    telefono: "5559876543",
    ciudad: "Ciudad de México",
    direccion: "Avenida Paseo de la Reforma #505",
    cedula: "1234567890",
    especialidad: "Medicina Veterinaria de Grandes Animales",
    universidad: "UNAM",
    fechaSolicitud: "2025-02-21",
    documentos: [
      {
        nombre: "Identificación Oficial",
        archivo: "img3.pdf",
        tipo: "pdf",
      },
      {
        nombre: "Cédula Profesional",
        archivo: "cedula1.pdf",
        tipo: "pdf",
      },
    ],
  },
  {
    id: "SOL-R003",
    tipo: "rancho_comercial",
    estado: "aprobada",
    nombre: "María Rodríguez Castillo",
    email: "maria.rodriguez@email.com",
    telefono: "5552876543",
    ciudad: "Monterrey",
    direccion: "Carretera Nacional #789, Km 15",
    nombreRancho: "Rancho San Francisco",
    capacidad: 800,
    superficie: 120,
    fechaSolicitud: "2025-02-10",
    documentos: [],
  },
  {
    id: "SOL-V002",
    tipo: "veterinario",
    estado: "rechazada",
    nombre: "Dr. Roberto Sánchez Flores",
    email: "roberto.sanchez@email.com",
    telefono: "5555432109",
    ciudad: "Guadalajara",
    direccion: "Avenida López Mateos #234",
    cedula: "9876543210",
    especialidad: "Medicina Veterinaria General",
    universidad: "Universidad de Guadalajara",
    fechaSolicitud: "2025-02-05",
    documentos: [],
  },
  {
    id: "SOL-R004",
    tipo: "rancho_traspatio",
    estado: "aprobada",
    nombre: "Patricia Gómez Herrera",
    email: "patricia.gomez@email.com",
    telefono: "5553456789",
    ciudad: "Toluca",
    direccion: "Calle Hidalgo #67",
    nombreRancho: "Traspatio Dos Corazones",
    capacidad: 30,
    superficie: 1,
    fechaSolicitud: "2025-01-25",
    documentos: [],
  },
  {
    id: "SOL-R005",
    tipo: "rancho_comercial",
    estado: "pendiente",
    nombre: "Fernando Torres Jiménez",
    email: "fernando.torres@email.com",
    telefono: "5557654321",
    ciudad: "Querétaro",
    direccion: "Carretera Federal #345",
    nombreRancho: "Rancho Los Andes",
    capacidad: 600,
    superficie: 80,
    fechaSolicitud: "2025-02-18",
    documentos: [],
  },
];

export default function AdminSolicitudes() {
  const [searchQuery, setSearchQuery] = useState("");
  const [tipoFilter, setTipoFilter] = useState("todos");
  const [estadoFilter, setEstadoFilter] = useState("todos");
  const [sortField, setSortField] =
    useState<SortField>("fechaSolicitud");
  const [sortDirection, setSortDirection] =
    useState<SortDirection>("desc");
  const [selectedSolicitud, setSelectedSolicitud] =
    useState<Solicitud | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [actionType, setActionType] = useState<
    "aprobar" | "rechazar" | "pendiente" | null
  >(null);
  const [notas, setNotas] = useState("");

  const tipoLabels: Record<TipoSolicitud, string> = {
    rancho_comercial: "Rancho Comercial",
    rancho_traspatio: "Rancho Traspatio",
    veterinario: "Veterinario",
  };

  const estadoLabels: Record<EstadoSolicitud, string> = {
    pendiente: "Pendiente",
    aprobada: "Aprobada",
    rechazada: "Rechazada",
  };

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(
        sortDirection === "asc" ? "desc" : "asc",
      );
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const filteredSolicitudes = useMemo(() => {
    let result = [...todasLasSolicitudes];

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (s) =>
          s.id.toLowerCase().includes(query) ||
          s.nombre.toLowerCase().includes(query) ||
          s.email.toLowerCase().includes(query) ||
          ("nombreRancho" in s &&
            s.nombreRancho.toLowerCase().includes(query)) ||
          ("cedula" in s &&
            s.cedula.toLowerCase().includes(query)),
      );
    }

    if (tipoFilter !== "todos") {
      result = result.filter((s) => s.tipo === tipoFilter);
    }

    if (estadoFilter !== "todos") {
      result = result.filter((s) => s.estado === estadoFilter);
    }

    result.sort((a, b) => {
      let comparison = 0;
      switch (sortField) {
        case "id":
          comparison = a.id.localeCompare(b.id);
          break;
        case "fechaSolicitud":
          comparison =
            new Date(a.fechaSolicitud).getTime() -
            new Date(b.fechaSolicitud).getTime();
          break;
        case "nombre":
          comparison = a.nombre.localeCompare(b.nombre);
          break;
        case "tipo":
          comparison = a.tipo.localeCompare(b.tipo);
          break;
      }
      return sortDirection === "asc" ? comparison : -comparison;
    });

    return result;
  }, [
    searchQuery,
    tipoFilter,
    estadoFilter,
    sortField,
    sortDirection,
  ]);

  const handleApprove = () => {
    setActionType("aprobar");
    setShowSuccess(true);
    setTimeout(() => {
      setSelectedSolicitud(null);
      setShowSuccess(false);
      setActionType(null);
      setNotas("");
    }, 2000);
  };

  const handleReject = () => {
    if (confirm("¿Estás seguro de rechazar esta solicitud?")) {
      setActionType("rechazar");
      setShowSuccess(true);
      setTimeout(() => {
        setSelectedSolicitud(null);
        setShowSuccess(false);
        setActionType(null);
        setNotas("");
      }, 2000);
    }
  };

  const handlePending = () => {
    setActionType("pendiente");
    setShowSuccess(true);
    setTimeout(() => {
      setSelectedSolicitud(null);
      setShowSuccess(false);
      setActionType(null);
      setNotas("");
    }, 2000);
  };

  const estadoBadge = (estado: EstadoSolicitud) => {
    const styles = {
      pendiente: "bg-yellow-100 text-yellow-800",
      aprobada: "bg-green-100 text-green-800",
      rechazada: "bg-red-100 text-red-800",
    };
    return (
      <span
        className={`px-3 py-1 text-xs font-medium rounded-full ${styles[estado]}`}
      >
        {estadoLabels[estado]}
      </span>
    );
  };

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field)
      return <ChevronUp className="w-4 h-4 text-gray-300" />;
    return sortDirection === "asc" ? (
      <ChevronUp className="w-4 h-4 text-[#5B321A]" />
    ) : (
      <ChevronDown className="w-4 h-4 text-[#5B321A]" />
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <CollapsibleSidebar
        userName="Admin Sistema"
        userRole="Administrador"
        activeKey="solicitudes"
        theme={{
          avatarBg: "#5B321A",
          avatarText: "#ffffff",
          activeBg: "#f0e8e3",
          activeText: "#5B321A",
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Todas las Solicitudes
          </h1>
          <p className="text-lg text-gray-600">
            Gestiona y revisa las solicitudes de registro
            pendientes
          </p>
        </div>

        {/* Resumen por estado */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {(
            [
              "todos",
              "pendiente",
              "aprobada",
              "rechazada",
            ] as const
          ).map((estado) => {
            const isActive = estadoFilter === estado;
            const colors = {
              todos: {
                bg: isActive
                  ? "bg-[#5B321A] text-white"
                  : "bg-white",
                dot: "bg-gray-500",
              },
              pendiente: {
                bg: isActive
                  ? "bg-yellow-500 text-white"
                  : "bg-white",
                dot: "bg-yellow-500",
              },
              aprobada: {
                bg: isActive
                  ? "bg-green-600 text-white"
                  : "bg-white",
                dot: "bg-green-500",
              },
              rechazada: {
                bg: isActive
                  ? "bg-red-600 text-white"
                  : "bg-white",
                dot: "bg-red-500",
              },
            };
            const labels = {
              todos: "Todas",
              pendiente: "Pendientes",
              aprobada: "Aprobadas",
              rechazada: "Rechazadas",
            };
            const count =
              estado === "todos"
                ? todasLasSolicitudes.length
                : todasLasSolicitudes.filter(
                    (s) => s.estado === estado,
                  ).length;

            return (
              <button
                key={estado}
                onClick={() => setEstadoFilter(estado)}
                className={`rounded-xl shadow p-5 text-left transition-colors cursor-pointer ${colors[estado].bg} ${!isActive ? "hover:bg-gray-50" : ""}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className={`w-2.5 h-2.5 rounded-full ${isActive ? "bg-white" : colors[estado].dot}`}
                  />
                  <span
                    className={`text-sm ${isActive ? "text-white/90" : "text-gray-500"}`}
                  >
                    {labels[estado]}
                  </span>
                </div>
                <p
                  className={`text-3xl font-bold ${isActive ? "" : "text-gray-900"}`}
                >
                  {count}
                </p>
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
                <option value="rancho_comercial">
                  Rancho Comercial
                </option>
                <option value="rancho_traspatio">
                  Rancho Traspatio
                </option>
                <option value="veterinario">Veterinario</option>
              </select>
            </div>

            {(searchQuery ||
              tipoFilter !== "todos" ||
              estadoFilter !== "todos") && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setTipoFilter("todos");
                  setEstadoFilter("todos");
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
                    onClick={() => handleSort("id")}
                  >
                    <div className="flex items-center gap-1">
                      Solicitud
                      <SortIcon field="id" />
                    </div>
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                    Tipo
                  </th>
                  <th
                    className="text-left px-6 py-4 text-sm font-semibold text-gray-700 cursor-pointer hover:bg-gray-100 select-none"
                    onClick={() => handleSort("nombre")}
                  >
                    <div className="flex items-center gap-1">
                      Nombre
                      <SortIcon field="nombre" />
                    </div>
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                    Email
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                    Teléfono
                  </th>
                  <th
                    className="text-left px-6 py-4 text-sm font-semibold text-gray-700 cursor-pointer hover:bg-gray-100 select-none"
                    onClick={() => handleSort("fechaSolicitud")}
                  >
                    <div className="flex items-center gap-1">
                      Fecha
                      <SortIcon field="fechaSolicitud" />
                    </div>
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                    Estado
                  </th>
                  <th className="text-center px-6 py-4 text-sm font-semibold text-gray-700">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredSolicitudes.length === 0 ? (
                  <tr>
                    <td
                      colSpan={8}
                      className="px-6 py-16 text-center text-gray-500"
                    >
                      <Search className="w-10 h-10 text-gray-300 mx-auto mb-3" />
                      <p className="text-lg font-medium">
                        No se encontraron solicitudes
                      </p>
                      <p className="text-sm mt-1">
                        Intenta ajustar los filtros o la
                        búsqueda
                      </p>
                    </td>
                  </tr>
                ) : (
                  filteredSolicitudes.map((solicitud) => (
                    <tr
                      key={solicitud.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                        {solicitud.id}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {tipoLabels[solicitud.tipo]}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {solicitud.nombre}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {solicitud.email}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {solicitud.telefono}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {new Date(
                          solicitud.fechaSolicitud,
                        ).toLocaleDateString("es-MX", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </td>
                      <td className="px-6 py-4">
                        {estadoBadge(solicitud.estado)}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button
                          onClick={() =>
                            setSelectedSolicitud(solicitud)
                          }
                          className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#5B321A] hover:bg-[#4a2815] text-white text-sm rounded-lg font-medium transition-colors"
                        >
                          <Eye className="w-4 h-4" />
                          Revisar
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
              Mostrando{" "}
              <span className="font-semibold">
                {filteredSolicitudes.length}
              </span>{" "}
              de{" "}
              <span className="font-semibold">
                {todasLasSolicitudes.length}
              </span>{" "}
              solicitudes
            </p>
          </div>
        </div>
      </main>

      {/* Modal de Detalle */}
      {selectedSolicitud && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            {showSuccess ? (
              <div className="p-16 text-center">
                <div
                  className={`inline-flex items-center justify-center w-24 h-24 ${
                    actionType === "aprobar"
                      ? "bg-[#f0e8e3]"
                      : actionType === "rechazar"
                        ? "bg-red-100"
                        : "bg-yellow-100"
                  } rounded-full mb-6`}
                >
                  {actionType === "aprobar" ? (
                    <CheckCircle className="w-14 h-14 text-[#5B321A]" />
                  ) : actionType === "rechazar" ? (
                    <XCircle className="w-14 h-14 text-red-600" />
                  ) : (
                    <Clock className="w-14 h-14 text-yellow-600" />
                  )}
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {actionType === "aprobar"
                    ? "¡Solicitud Aprobada!"
                    : actionType === "rechazar"
                      ? "Solicitud Rechazada"
                      : "Solicitud Dejada en Pendiente"}
                </h2>
                <p className="text-lg text-gray-600">
                  {actionType === "aprobar"
                    ? "El usuario ha sido activado y puede acceder al sistema"
                    : actionType === "rechazar"
                      ? "Se ha notificado al usuario sobre el rechazo de su solicitud"
                      : "La solicitud permanece en estado pendiente para revisión posterior"}
                </p>
              </div>
            ) : (
              <>
                <div className="p-8 border-b border-gray-200 flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">
                      Revisión de{" "}
                      {tipoLabels[selectedSolicitud.tipo]} -{" "}
                      {selectedSolicitud.id}
                    </h2>
                    <div className="mt-2">
                      {estadoBadge(selectedSolicitud.estado)}
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedSolicitud(null)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-600" />
                  </button>
                </div>

                <div className="p-8 space-y-8">
                  {/* Datos Personales */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Datos Personales
                    </h3>
                    <div className="bg-gray-50 rounded-lg p-6 grid grid-cols-2 gap-6 border border-gray-200">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">
                          Nombre Completo
                        </p>
                        <p className="font-medium text-gray-900">
                          {selectedSolicitud.nombre}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">
                          Correo Electrónico
                        </p>
                        <p className="font-medium text-gray-900">
                          {selectedSolicitud.email}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">
                          Teléfono
                        </p>
                        <p className="font-medium text-gray-900">
                          {selectedSolicitud.telefono}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">
                          Ciudad
                        </p>
                        <p className="font-medium text-gray-900">
                          {selectedSolicitud.ciudad}
                        </p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-sm text-gray-600 mb-1">
                          Dirección Completa
                        </p>
                        <p className="font-medium text-gray-900">
                          {selectedSolicitud.direccion}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Datos específicos por tipo */}
                  {selectedSolicitud.tipo ===
                    "rancho_comercial" && (
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Información del Rancho
                      </h3>
                      <div className="bg-gray-50 rounded-lg p-6 grid grid-cols-2 gap-6 border border-gray-200">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">
                            Nombre del Rancho
                          </p>
                          <p className="font-medium text-gray-900">
                            {selectedSolicitud.nombreRancho}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">
                            Capacidad (Animales)
                          </p>
                          <p className="font-medium text-gray-900">
                            {selectedSolicitud.capacidad}{" "}
                            animales
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">
                            Superficie (Hectáreas)
                          </p>
                          <p className="font-medium text-gray-900">
                            {selectedSolicitud.superficie}{" "}
                            hectáreas
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedSolicitud.tipo ===
                    "rancho_traspatio" && (
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Información del Rancho
                      </h3>
                      <div className="bg-gray-50 rounded-lg p-6 grid grid-cols-2 gap-6 border border-gray-200">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">
                            Nombre del Rancho
                          </p>
                          <p className="font-medium text-gray-900">
                            {selectedSolicitud.nombreRancho}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">
                            Capacidad (Animales)
                          </p>
                          <p className="font-medium text-gray-900">
                            {selectedSolicitud.capacidad}{" "}
                            animales
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">
                            Superficie (Hectáreas)
                          </p>
                          <p className="font-medium text-gray-900">
                            {selectedSolicitud.superficie}{" "}
                            hectáreas
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedSolicitud.tipo === "veterinario" && (
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Información Profesional
                      </h3>
                      <div className="bg-gray-50 rounded-lg p-6 grid grid-cols-2 gap-6 border border-gray-200">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">
                            Cédula Profesional
                          </p>
                          <p className="font-medium text-gray-900">
                            {selectedSolicitud.cedula}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">
                            Especialidad
                          </p>
                          <p className="font-medium text-gray-900">
                            {selectedSolicitud.especialidad}
                          </p>
                        </div>
                        <div className="col-span-2">
                          <p className="text-sm text-gray-600 mb-1">
                            Universidad
                          </p>
                          <p className="font-medium text-gray-900">
                            {selectedSolicitud.universidad}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Documentación */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Documentación Adjunta
                    </h3>
                    {selectedSolicitud.tipo ===
                      "rancho_comercial" && (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                          <span className="text-gray-900 font-medium">
                            Identificación Oficial
                            (INE/Pasaporte)
                          </span>
                          <button className="text-[#5B321A] hover:text-[#4a2815] font-medium text-sm">
                            Ver documento →
                          </button>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                          <span className="text-gray-900 font-medium">
                            Acta Constitutiva o Registro
                            Comercial
                          </span>
                          <button className="text-[#5B321A] hover:text-[#4a2815] font-medium text-sm">
                            Ver documento →
                          </button>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                          <span className="text-gray-900 font-medium">
                            RFC con Constancia de Situación
                            Fiscal
                          </span>
                          <button className="text-[#5B321A] hover:text-[#4a2815] font-medium text-sm">
                            Ver documento →
                          </button>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                          <span className="text-gray-900 font-medium">
                            Comprobante de Domicilio
                          </span>
                          <button className="text-[#5B321A] hover:text-[#4a2815] font-medium text-sm">
                            Ver documento →
                          </button>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                          <span className="text-gray-900 font-medium">
                            Permisos Sanitarios
                            (SAGARPA/SENASICA)
                          </span>
                          <button className="text-[#5B321A] hover:text-[#4a2815] font-medium text-sm">
                            Ver documento →
                          </button>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                          <span className="text-gray-900 font-medium">
                            Licencia de Uso de Suelo
                          </span>
                          <button className="text-[#5B321A] hover:text-[#4a2815] font-medium text-sm">
                            Ver documento →
                          </button>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                          <span className="text-gray-900 font-medium">
                            Fotografías de las Instalaciones
                          </span>
                          <button className="text-[#5B321A] hover:text-[#4a2815] font-medium text-sm">
                            Ver documento →
                          </button>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                          <span className="text-gray-900 font-medium">
                            Plan de Manejo Sanitario
                          </span>
                          <button className="text-[#5B321A] hover:text-[#4a2815] font-medium text-sm">
                            Ver documento →
                          </button>
                        </div>
                      </div>
                    )}

                    {selectedSolicitud.tipo ===
                      "rancho_traspatio" && (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                          <span className="text-gray-900 font-medium">
                            Identificación Oficial
                            (INE/Pasaporte)
                          </span>
                          <button className="text-[#5B321A] hover:text-[#4a2815] font-medium text-sm">
                            Ver documento →
                          </button>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                          <span className="text-gray-900 font-medium">
                            Comprobante de Domicilio
                          </span>
                          <button className="text-[#5B321A] hover:text-[#4a2815] font-medium text-sm">
                            Ver documento →
                          </button>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                          <span className="text-gray-900 font-medium">
                            Constancia de Residencia
                          </span>
                          <button className="text-[#5B321A] hover:text-[#4a2815] font-medium text-sm">
                            Ver documento →
                          </button>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                          <span className="text-gray-900 font-medium">
                            Fotografías del Rancho
                          </span>
                          <button className="text-[#5B321A] hover:text-[#4a2815] font-medium text-sm">
                            Ver documento →
                          </button>
                        </div>
                      </div>
                    )}

                    {selectedSolicitud.tipo ===
                      "veterinario" && (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                          <span className="text-gray-900 font-medium">
                            Identificación Oficial
                            (INE/Pasaporte)
                          </span>
                          <button className="text-[#5B321A] hover:text-[#4a2815] font-medium text-sm">
                            Ver documento →
                          </button>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                          <span className="text-gray-900 font-medium">
                            Comprobante de Domicilio
                          </span>
                          <button className="text-[#5B321A] hover:text-[#4a2815] font-medium text-sm">
                            Ver documento →
                          </button>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                          <span className="text-gray-900 font-medium">
                            Cédula Profesional
                          </span>
                          <button className="text-[#5B321A] hover:text-[#4a2815] font-medium text-sm">
                            Ver documento →
                          </button>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                          <span className="text-gray-900 font-medium">
                            Certificado de Especialización
                            (Opcional)
                          </span>
                          <button className="text-[#5B321A] hover:text-[#4a2815] font-medium text-sm">
                            Ver documento →
                          </button>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                          <span className="text-gray-900 font-medium">
                            Carta de Antecedentes No Penales
                          </span>
                          <button className="text-[#5B321A] hover:text-[#4a2815] font-medium text-sm">
                            Ver documento →
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Notas del Administrador */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Notas del Administrador
                    </h3>
                    <textarea
                      value={notas}
                      onChange={(e) => setNotas(e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B321A] focus:border-transparent"
                      placeholder="Agrega tus observaciones sobre la revisión de esta solicitud..."
                    ></textarea>
                  </div>

                  {/* Acciones */}
                  <div className="flex gap-4 pt-6 border-t border-gray-200">
                    <button
                      onClick={handleReject}
                      className="flex-1 px-8 py-4 border-2 border-red-600 text-red-600 hover:bg-red-50 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                    >
                      <XCircle className="w-5 h-5" />
                      Rechazar
                    </button>
                    <button
                      onClick={handlePending}
                      className="flex-1 px-8 py-4 border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-50 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                    >
                      <Clock className="w-5 h-5" />
                      Dejar Pendiente
                    </button>
                    <button
                      onClick={handleApprove}
                      className="flex-1 px-8 py-4 bg-[#5B321A] hover:bg-[#4a2815] text-white rounded-lg text-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                    >
                      <CheckCircle className="w-5 h-5" />
                      Aprobar
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}