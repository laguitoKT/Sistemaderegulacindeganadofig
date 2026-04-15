import { useParams, Link } from 'react-router';
import { QRCodeSVG } from 'qrcode.react';
import { CheckCircle, MapPin, Calendar, Scale, User as UserIcon } from 'lucide-react';

export default function ConsultaPublica() {
  const { id } = useParams();

  // Datos de ejemplo del animal certificado
  const animalData = {
    id: id || 'A-001',
    raza: 'Holstein',
    edad: 3,
    sexo: 'Hembra',
    peso: 520,
    condicionCorporal: '4 - Bueno',
    estadoSalud: 'Excelente',
    proposito: 'Leche',
    color: 'Negro con blanco',
    precio: 28600,
    fechaCertificacion: '2025-02-15',
    productor: {
      nombre: 'Juan Pérez García',
      rancho: 'Rancho El Paraíso',
      ubicacion: 'Guadalajara, Jalisco',
      telefono: '555-1234-567',
    },
    veterinario: {
      nombre: 'Dr. Alberto Méndez',
      cedula: '1234567',
      observaciones:
        'Animal en excelente estado de salud. Cumple con todas las normas sanitarias requeridas. Peso validado mediante báscula certificada.',
    },
  };

  return (
    <div className="min-h-screen bg-[#F2EAC2]">
      {/* Header */}
      <div className="bg-[#5B321A] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-10 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-[20px] sm:text-[32px] font-['Annapurna_SIL'] text-white">
              Consulta Pública - Animal Certificado
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 sm:p-10 py-8 sm:py-16">
        {/* Badge de Certificación */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-8 py-4 bg-[#e8eccd] text-[#7a8c38] rounded-full mb-6">
            <CheckCircle className="w-7 h-7 mr-3" />
            <span className="font-semibold text-xl">Animal Certificado</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-3">Ficha Técnica del Animal</h2>
          <p className="text-xl text-gray-600">Información validada por veterinario certificador</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Columna Principal - Datos del Animal */}
          <div className="lg:col-span-2 space-y-8">
            {/* Información Básica */}
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
                <h3 className="text-3xl font-bold text-gray-900">Identificación: {animalData.id}</h3>
                <span className="px-6 py-3 bg-blue-100 text-blue-800 text-lg font-semibold rounded-lg">
                  {animalData.raza}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Edad</p>
                    <p className="text-lg font-semibold text-gray-900">{animalData.edad} años</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Sexo</p>
                    <p className="text-lg font-semibold text-gray-900">{animalData.sexo}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Color/Pelaje</p>
                    <p className="text-lg font-semibold text-gray-900">{animalData.color}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Propósito</p>
                    <p className="text-lg font-semibold text-gray-900">{animalData.proposito}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Peso Validado</p>
                    <div className="flex items-center space-x-2">
                      <Scale className="w-5 h-5 text-[#B3BF56]" />
                      <p className="text-lg font-semibold text-gray-900">{animalData.peso} kg</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Condición Corporal</p>
                    <p className="text-lg font-semibold text-gray-900">{animalData.condicionCorporal}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Estado de Salud</p>
                    <p className="text-lg font-semibold text-[#B3BF56]">{animalData.estadoSalud}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Fecha de Certificación</p>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-5 h-5 text-gray-600" />
                      <p className="text-lg font-semibold text-gray-900">
                        {new Date(animalData.fechaCertificacion).toLocaleDateString('es-MX', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Precio Sugerido */}
              <div className="mt-8 p-8 bg-gradient-to-r from-[#f5f7ea] to-blue-50 rounded-lg border-2 border-[#d5ddaf]">
                <p className="text-sm text-gray-600 mb-2">Precio Sugerido (Validado)</p>
                <p className="text-5xl font-bold text-[#B3BF56]">${animalData.precio.toLocaleString()} MXN</p>
                <p className="text-xs text-gray-600 mt-2">
                  Calculado según fórmula oficial: Peso × $55/kg
                </p>
              </div>
            </div>

            {/* Información del Productor */}
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <UserIcon className="w-7 h-7 mr-3 text-blue-600" />
                Información del Productor
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Nombre</p>
                  <p className="text-lg font-semibold text-gray-900">{animalData.productor.nombre}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Rancho</p>
                  <p className="text-lg font-semibold text-gray-900">{animalData.productor.rancho}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Ubicación</p>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-gray-600" />
                    <p className="text-lg font-semibold text-gray-900">{animalData.productor.ubicacion}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Contacto</p>
                  <p className="text-lg font-semibold text-gray-900">{animalData.productor.telefono}</p>
                </div>
              </div>
            </div>

            {/* Información del Veterinario Certificador */}
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <span className="text-3xl mr-3">⚕️</span>
                Veterinario Certificador
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Nombre</p>
                  <p className="text-lg font-semibold text-gray-900">{animalData.veterinario.nombre}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Cédula Profesional</p>
                  <p className="text-lg font-semibold text-gray-900">{animalData.veterinario.cedula}</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Observaciones Técnicas</p>
                <p className="text-gray-900 leading-relaxed bg-gray-50 p-4 rounded-lg">
                  {animalData.veterinario.observaciones}
                </p>
              </div>
            </div>
          </div>

          {/* Columna Lateral - Código QR */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10 sticky top-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Código QR</h3>
              <div className="bg-gray-50 p-8 rounded-lg flex items-center justify-center mb-6">
                <QRCodeSVG
                  value={`https://sistema-ganado.com/consulta/${animalData.id}`}
                  size={250}
                  level="H"
                  includeMargin={true}
                />
              </div>
              <p className="text-sm text-gray-600 text-center mb-8">
                Escanea este código para acceder a la información certificada
              </p>

              {/* Fotografías del Animal */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900">Fotografías Validadas</h4>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1719499752419-431a64ff878f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXR0bGUlMjBjb3clMjBmYXJtJTIwbGl2ZXN0b2NrfGVufDF8fHx8MTc3MTgyMjIwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Animal certificado"
                      className="w-full h-40 object-cover"
                    />
                  </div>
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1705113998960-871ba05d84cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYW5jaCUyMGNhdHRsZSUyMGhlcmR8ZW58MXx8fHwxNzcxODIyMjA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Animal certificado lateral"
                      className="w-full h-40 object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Sello de Autenticidad */}
              <div className="mt-8 p-6 bg-gradient-to-r from-[#e8eccd] to-blue-100 rounded-lg border-2 border-[#c4ce8f]">
                <div className="flex items-center justify-center mb-3">
                  <CheckCircle className="w-10 h-10 text-[#B3BF56]" />
                </div>
                <p className="text-center text-sm font-semibold text-gray-900 mb-2">
                  Certificación Verificada
                </p>
                <p className="text-center text-xs text-gray-600">
                  Este documento es oficial y está respaldado por el Sistema Nacional de Regulación de Ganado
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-600 mb-4">
            Para más información, contacta al productor o visita nuestro sistema
          </p>
          <Link
            to="/login"
            className="inline-flex items-center px-8 py-4 bg-[#B3BF56] hover:bg-[#9aa848] text-white text-lg font-semibold rounded-lg transition-colors"
          >
            Acceder al Sistema Completo
          </Link>
        </div>
      </div>
    </div>
  );
}