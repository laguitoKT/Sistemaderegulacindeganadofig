import { useState } from 'react';
import { Home, Users, FileCheck, FileText, User, Eye, X, CheckCircle, XCircle, Download, Activity, Shield } from 'lucide-react';
import CollapsibleSidebar from '../components/CollapsibleSidebar';

const usuariosPendientes = [
  {
    id: 'REG-001',
    nombre: 'Carlos Mendoza',
    tipo: 'Rancho Comercial',
    email: 'carlos.mendoza@email.com',
    telefono: '5551234567',
    rancho: 'Rancho La Esperanza',
    municipio: 'Guadalajara',
    estado: 'Jalisco',
    fechaSolicitud: '2025-02-20',
  },
  {
    id: 'REG-002',
    nombre: 'Ana López',
    tipo: 'Veterinario Certificador',
    email: 'ana.lopez@email.com',
    telefono: '5559876543',
    cedula: '1234567',
    universidad: 'UNAM',
    municipio: 'Ciudad de México',
    estado: 'CDMX',
    fechaSolicitud: '2025-02-21',
  },
  {
    id: 'REG-003',
    nombre: 'Luis García',
    tipo: 'Productor Traspatio',
    email: 'luis.garcia@email.com',
    telefono: '5556789012',
    ubicacion: 'Calle 5 de Mayo #123',
    municipio: 'Zapopan',
    estado: 'Jalisco',
    fechaSolicitud: '2025-02-22',
  },
];

const usuariosActivos = [
  { tipo: 'Ranchos Comerciales', cantidad: 45},
  { tipo: 'Productores Traspatio', cantidad: 128},
  { tipo: 'Veterinarios Certificadores', cantidad: 12},
];

export default function AdminDashboard() {
  const [selectedUsuario, setSelectedUsuario] = useState<typeof usuariosPendientes[0] | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [actionType, setActionType] = useState<'aprobar' | 'rechazar' | null>(null);

  const handleApprove = () => {
    setActionType('aprobar');
    setShowSuccess(true);
    setTimeout(() => {
      setSelectedUsuario(null);
      setShowSuccess(false);
      setActionType(null);
    }, 2000);
  };

  const handleReject = () => {
    if (confirm('¿Estás seguro de rechazar esta solicitud?')) {
      setActionType('rechazar');
      setShowSuccess(true);
      setTimeout(() => {
        setSelectedUsuario(null);
        setShowSuccess(false);
        setActionType(null);
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-white flex">
      <CollapsibleSidebar
        userName="Admin Sistema"
        userRole="Administrador"
        activeKey="dashboard"
        theme={{
          avatarBg: '#5B321A',
          avatarText: '#ffffff',
          activeBg: 'rgba(91,50,26,0.1)',
          activeText: '#5B321A',
        }}
        navItems={[
          { key: 'dashboard', label: 'Panel Principal', icon: Home, to: '/admin' },
          { key: 'usuarios', label: 'Gestión de Usuarios', icon: Users, to: '/admin/usuarios' },
          { key: 'solicitudes', label: 'Solicitudes de Registro', icon: FileText, to: '/admin/solicitudes' },
          { key: 'actividades', label: 'Actividad del Sistema', icon: Activity, to: '/admin/actividades' },
          { key: 'actividadesAdmin', label: 'Actividad Admins', icon: Shield, to: '/admin/actividades-admin' },
          { key: 'perfil', label: 'Mi Perfil', icon: User, to: '/admin/perfil' },
        ]}
      />

      {/* Contenido Principal */}
      <main className="flex-1 p-4 pt-20 lg:p-10 lg:pt-10">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Panel de Administración</h1>
          <p className="text-lg text-gray-600">Gestiona usuarios y genera reportes del sistema</p>
        </div>

        {/* Estadísticas de Usuarios Activos */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          {usuariosActivos.map((tipo) => (
            <div key={tipo.tipo} className="bg-white rounded-xl shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-500 text-sm">{tipo.tipo}</h3>
              </div>
              <p className="text-4xl font-bold text-gray-900">{tipo.cantidad}</p>
              <p className="text-sm text-gray-500 mt-2">Usuarios activos</p>
            </div>
          ))}
        </div>

        {/* Solicitudes Pendientes */}
        <div className="bg-white rounded-xl shadow mb-6">
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Solicitudes de Registro Pendientes</h2>
              <p className="text-sm text-gray-600 mt-1">Revisa y aprueba los nuevos registros</p>
            </div>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-full">
              {usuariosPendientes.length} pendientes
            </span>
          </div>
          <div className="divide-y divide-gray-200">
            {usuariosPendientes.map((usuario) => (
              <div key={usuario.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="font-semibold text-gray-900 text-lg">{usuario.nombre}</h3>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                        {usuario.tipo}
                      </span>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
                      <div>
                        <span className="font-medium text-gray-700">Email:</span> {usuario.email}
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Teléfono:</span> {usuario.telefono}
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Ubicación:</span> {usuario.municipio}, {usuario.estado}
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      Solicitado el {new Date(usuario.fechaSolicitud).toLocaleDateString('es-MX', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedUsuario(usuario)}
                    className="ml-4 px-6 py-2 bg-[#5B321A] hover:bg-[#4a2815] text-white rounded-lg font-medium flex items-center gap-2 transition-colors"
                  >
                    <Eye className="w-5 h-5" />
                    Revisar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>      </main>

      {/* Modal de Detalle */}
      {selectedUsuario && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            {showSuccess ? (
              <div className="p-12 text-center">
                <div className={`inline-flex items-center justify-center w-20 h-20 ${
                  actionType === 'aprobar' ? 'bg-[#f0e8e3]' : 'bg-red-100'
                } rounded-full mb-4`}>
                  {actionType === 'aprobar' ? (
                    <CheckCircle className="w-12 h-12 text-[#5B321A]" />
                  ) : (
                    <XCircle className="w-12 h-12 text-red-600" />
                  )}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {actionType === 'aprobar' ? '¡Solicitud Aprobada!' : 'Solicitud Rechazada'}
                </h2>
                <p className="text-gray-600">
                  {actionType === 'aprobar'
                    ? 'El usuario ha sido activado y puede acceder al sistema'
                    : 'Se ha notificado al usuario sobre el rechazo de su solicitud'}
                </p>
              </div>
            ) : (
              <>
                <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Revisión de Solicitud - {selectedUsuario.id}
                  </h2>
                  <button
                    onClick={() => setSelectedUsuario(null)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-600" />
                  </button>
                </div>

                <div className="p-6 space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Datos Personales</h3>
                    <div className="bg-gray-50 rounded-lg p-4 grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Nombre Completo</p>
                        <p className="font-medium text-gray-900">{selectedUsuario.nombre}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Tipo de Usuario</p>
                        <p className="font-medium text-gray-900">{selectedUsuario.tipo}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Correo Electrónico</p>
                        <p className="font-medium text-gray-900">{selectedUsuario.email}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Teléfono</p>
                        <p className="font-medium text-gray-900">{selectedUsuario.telefono}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {selectedUsuario.tipo === 'Veterinario Certificador'
                        ? 'Información Profesional'
                        : 'Información del Rancho/Ubicación'}
                    </h3>
                    <div className="bg-gray-50 rounded-lg p-4 grid md:grid-cols-2 gap-4">
                      {'rancho' in selectedUsuario && (
                        <div>
                          <p className="text-sm text-gray-600">Nombre del Rancho</p>
                          <p className="font-medium text-gray-900">{selectedUsuario.rancho}</p>
                        </div>
                      )}
                      {'ubicacion' in selectedUsuario && (
                        <div>
                          <p className="text-sm text-gray-600">Ubicación</p>
                          <p className="font-medium text-gray-900">{selectedUsuario.ubicacion}</p>
                        </div>
                      )}
                      {'cedula' in selectedUsuario && (
                        <>
                          <div>
                            <p className="text-sm text-gray-600">Cédula Profesional</p>
                            <p className="font-medium text-gray-900">{selectedUsuario.cedula}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Universidad</p>
                            <p className="font-medium text-gray-900">{selectedUsuario.universidad}</p>
                          </div>
                        </>
                      )}
                      <div>
                        <p className="text-sm text-gray-600">Municipio</p>
                        <p className="font-medium text-gray-900">{selectedUsuario.municipio}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Estado</p>
                        <p className="font-medium text-gray-900">{selectedUsuario.estado}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Documentación Adjunta</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <FileText className="w-5 h-5 text-gray-600" />
                          <span className="text-gray-900">Identificación Oficial (INE)</span>
                        </div>
                        <button className="text-[#5B321A] hover:text-[#4a2815] font-medium text-sm">
                          Ver documento →
                        </button>
                      </div>
                      {selectedUsuario.tipo === 'Veterinario Certificador' ? (
                        <>
                          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div className="flex items-center space-x-3">
                              <FileText className="w-5 h-5 text-gray-600" />
                              <span className="text-gray-900">Cédula Profesional</span>
                            </div>
                            <button className="text-[#5B321A] hover:text-[#4a2815] font-medium text-sm">
                              Ver documento →
                            </button>
                          </div>
                          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div className="flex items-center space-x-3">
                              <FileText className="w-5 h-5 text-gray-600" />
                              <span className="text-gray-900">Certificado de Habilitación</span>
                            </div>
                            <button className="text-[#5B321A] hover:text-[#4a2815] font-medium text-sm">
                              Ver documento →
                            </button>
                          </div>
                        </>
                      ) : (
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <FileText className="w-5 h-5 text-gray-600" />
                            <span className="text-gray-900">
                              {selectedUsuario.tipo === 'Rancho Comercial'
                                ? 'Constancia de Propiedad'
                                : 'Comprobante de Domicilio'}
                            </span>
                          </div>
                          <button className="text-[#5B321A] hover:text-[#4a2815] font-medium text-sm">
                            Ver documento →
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Notas del Administrador</h3>
                    <textarea
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B321A] focus:border-transparent"
                      placeholder="Agrega cualquier observación sobre la revisión de esta solicitud..."
                    ></textarea>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button
                      onClick={handleReject}
                      className="flex-1 px-6 py-3 border-2 border-red-600 text-red-600 hover:bg-red-50 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                    >
                      <XCircle className="w-5 h-5" />
                      Rechazar Solicitud
                    </button>
                    <button
                      onClick={handleApprove}
                      className="flex-1 px-6 py-3 bg-[#5B321A] hover:bg-[#4a2815] text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                    >
                      <CheckCircle className="w-5 h-5" />
                      Aprobar Usuario
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