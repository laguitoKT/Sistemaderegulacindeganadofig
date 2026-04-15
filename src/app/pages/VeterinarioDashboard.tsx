import { useState } from 'react';
import { Home, FileCheck, User, Eye, X, CheckCircle, XCircle, Activity } from 'lucide-react';
import CollapsibleSidebar from '../components/CollapsibleSidebar';

const solicitudesPendientes = [
  {
    id: 'SOL-001',
    animalId: 'A-002',
    productor: 'Juan Pérez',
    rancho: 'Rancho El Paraíso',
    raza: 'Angus',
    edad: 2.5,
    pesoEstimado: 450,
    fechaSolicitud: '2025-01-15',
  },
  {
    id: 'SOL-002',
    animalId: 'A-004',
    productor: 'María González',
    rancho: 'Rancho San José',
    raza: 'Brahman',
    edad: 3.5,
    pesoEstimado: 490,
    fechaSolicitud: '2025-02-18',
  },
  {
    id: 'SOL-003',
    animalId: 'B-105',
    productor: 'Carlos Ramírez',
    rancho: 'Traspatio',
    raza: 'Holstein',
    edad: 4,
    pesoEstimado: 520,
    fechaSolicitud: '2025-02-20',
  },
  {
    id: 'SOL-004',
    animalId: 'A-008',
    productor: 'Roberto Sánchez',
    rancho: 'Rancho La Esperanza',
    raza: 'Hereford',
    edad: 2,
    pesoEstimado: 410,
    fechaSolicitud: '2025-01-28',
  },
  {
    id: 'SOL-005',
    animalId: 'C-012',
    productor: 'Laura Hernández',
    rancho: 'Rancho Los Pinos',
    raza: 'Charolais',
    edad: 3,
    pesoEstimado: 530,
    fechaSolicitud: '2025-03-01',
  },
  {
    id: 'SOL-006',
    animalId: 'B-207',
    productor: 'Fernando Torres',
    rancho: 'Traspatio',
    raza: 'Simmental',
    edad: 1.5,
    pesoEstimado: 380,
    fechaSolicitud: '2025-02-05',
  },
];

// Ordenar por fecha de solicitud (más antiguas primero) y tomar las 4 primeras
const solicitudesMasAntiguas = [...solicitudesPendientes]
  .sort((a, b) => new Date(a.fechaSolicitud).getTime() - new Date(b.fechaSolicitud).getTime())
  .slice(0, 4);

export default function VeterinarioDashboard() {
  const [selectedSolicitud, setSelectedSolicitud] = useState<typeof solicitudesPendientes[0] | null>(null);
  const [pesoValidado, setPesoValidado] = useState('');
  const [observaciones, setObservaciones] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleApprove = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setSelectedSolicitud(null);
      setShowSuccess(false);
      setPesoValidado('');
      setObservaciones('');
    }, 2000);
  };

  const handleReject = () => {
    if (confirm('¿Estás seguro de rechazar esta certificación?')) {
      setSelectedSolicitud(null);
      setPesoValidado('');
      setObservaciones('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <CollapsibleSidebar
        userName="Dr. Alberto Méndez"
        userRole="Veterinario Certificador"
        activeKey="dashboard"
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
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Solicitudes de Certificación</h1>
          <p className="text-lg text-gray-600">Revisa y valida las solicitudes pendientes</p>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
          <div className="bg-white rounded-xl shadow p-6">
            <div className="items-center justify-between mb-4">
              <h3 className="text-gray-500 text-sm text-center">Pendientes</h3>
            </div>
            <p className="text-4xl font-bold text-gray-900 text-center">{solicitudesPendientes.length}</p>
          </div>
        </div>

        {/* Lista de Solicitudes */}
        <div className="bg-white rounded-xl shadow">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900">Solicitudes Pendientes de Revisión</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {solicitudesMasAntiguas.map((solicitud) => (
              <div key={solicitud.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <h3 className="font-semibold text-gray-900 text-xl">
                        {solicitud.animalId} - {solicitud.raza}
                      </h3>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                        Pendiente
                      </span>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
                      <div>
                        <span className="font-medium text-gray-700">Productor:</span> {solicitud.productor}
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Rancho:</span> {solicitud.rancho}
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Edad:</span> {solicitud.edad} años
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Peso Est.:</span> {solicitud.pesoEstimado} kg
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      Solicitado el {new Date(solicitud.fechaSolicitud).toLocaleDateString('es-MX', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedSolicitud(solicitud)}
                    className="ml-4 px-8 py-3 bg-[#357324] hover:bg-[#2a5c1d] text-white rounded-lg font-medium flex items-center gap-2 transition-colors"
                  >
                    <Eye className="w-5 h-5" />
                    Revisar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Modal de Detalle */}
      {selectedSolicitud && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto">
            {showSuccess ? (
              <div className="p-16 text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-[#D1EEC9] rounded-full mb-6">
                  <CheckCircle className="w-14 h-14 text-[#357324]" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  ¡Certificación Aprobada!
                </h2>
                <p className="text-lg text-gray-600">
                  Se ha generado el código QR y calculado el precio automáticamente
                </p>
              </div>
            ) : (
              <>
                <div className="p-8 border-b border-gray-200 flex items-center justify-between">
                  <h2 className="text-3xl font-bold text-gray-900">
                    Revisión de Certificación - {selectedSolicitud.animalId}
                  </h2>
                  <button
                    onClick={() => setSelectedSolicitud(null)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-600" />
                  </button>
                </div>

                <div className="p-8 space-y-8">
                  {/* Información del Productor */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Información del Productor</h3>
                    <div className="bg-gray-50 rounded-lg p-6 grid grid-cols-2 gap-6">
                      <div>
                        <p className="text-sm text-gray-600">Nombre</p>
                        <p className="font-medium text-gray-900">{selectedSolicitud.productor}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Rancho/Ubicación</p>
                        <p className="font-medium text-gray-900">{selectedSolicitud.rancho}</p>
                      </div>
                    </div>
                  </div>

                  {/* Datos del Animal */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Datos del Animal</h3>
                    <div className="bg-gray-50 rounded-lg p-6 grid grid-cols-3 gap-6">
                      <div>
                        <p className="text-sm text-gray-600">Identificación</p>
                        <p className="font-medium text-gray-900">{selectedSolicitud.animalId}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Raza</p>
                        <p className="font-medium text-gray-900">{selectedSolicitud.raza}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Edad</p>
                        <p className="font-medium text-gray-900">{selectedSolicitud.edad} años</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Peso Estimado</p>
                        <p className="font-medium text-gray-900">{selectedSolicitud.pesoEstimado} kg</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Condición Corporal</p>
                        <p className="font-medium text-gray-900">4 - Bueno</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Estado de Salud</p>
                        <p className="font-medium text-gray-900">Excelente</p>
                      </div>
                    </div>
                  </div>

                  {/* Evidencias Fotográficas */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Evidencias Fotográficas</h3>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="border border-gray-200 rounded-lg overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1719499752419-431a64ff878f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXR0bGUlMjBjb3clMjBmYXJtJTIwbGl2ZXN0b2NrfGVufDF8fHx8MTc3MTgyMjIwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                          alt="Vista frontal"
                          className="w-full h-64 object-cover"
                        />
                        <div className="p-3 bg-gray-50">
                          <p className="text-sm font-medium text-gray-900">Vista Frontal</p>
                        </div>
                      </div>
                      <div className="border border-gray-200 rounded-lg overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1705113998960-871ba05d84cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYW5jaCUyMGNhdHRsZSUyMGhlcmR8ZW58MXx8fHwxNzcxODIyMjA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                          alt="Vista lateral"
                          className="w-full h-64 object-cover"
                        />
                        <div className="p-3 bg-gray-50">
                          <p className="text-sm font-medium text-gray-900">Vista Lateral</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Validación del Veterinario */}
                  <div className="border-t border-gray-200 pt-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Validación Veterinaria</h3>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Peso Validado (kg) *
                        </label>
                        <input
                          type="number"
                          value={pesoValidado}
                          onChange={(e) => setPesoValidado(e.target.value)}
                          className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#357324] focus:border-transparent"
                          placeholder="Ingresa el peso real del animal"
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          Peso estimado por el productor: {selectedSolicitud.pesoEstimado} kg
                        </p>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Observaciones Técnicas *
                        </label>
                        <textarea
                          value={observaciones}
                          onChange={(e) => setObservaciones(e.target.value)}
                          rows={4}
                          className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#357324] focus:border-transparent"
                          placeholder="Agrega tus observaciones profesionales sobre el estado del animal..."
                        ></textarea>
                      </div>

                      {pesoValidado && (
                        <div className="bg-[#D1EEC9] border border-[#a8dda0] rounded-lg p-6">
                          <p className="text-lg text-[#1f4115]">
                            <strong>Precio calculado automáticamente:</strong> $
                            {(parseFloat(pesoValidado) * 55).toLocaleString()} MXN
                          </p>
                          <p className="text-sm text-[#357324] mt-1">
                            Fórmula: Peso × $55/kg
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Botones de Acción */}
                  <div className="flex gap-6 pt-6">
                    <button
                      onClick={handleReject}
                      className="flex-1 px-8 py-4 border-2 border-red-600 text-red-600 hover:bg-red-50 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                    >
                      <XCircle className="w-5 h-5" />
                      Rechazar Certificación
                    </button>
                    <button
                      onClick={handleApprove}
                      disabled={!pesoValidado || !observaciones}
                      className="flex-1 px-8 py-4 bg-[#357324] hover:bg-[#2a5c1d] text-white rounded-lg text-lg font-semibold flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <CheckCircle className="w-5 h-5" />
                      Aprobar y Certificar
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