import { useState } from "react";
import { Link } from "react-router";
import { ArrowLeft, Upload, User } from "lucide-react";

type UserType = "rancho" | "traspatio" | "veterinario" | null;

export default function Register() {
  const [userType, setUserType] = useState<UserType>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#F2EAC2] flex items-center justify-center p-4">
        <div className="bg-white rounded-[14px] shadow-lg w-full max-w-2xl p-12 text-center border-[1.6px] border-[rgba(90,115,36,0.2)]">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-[rgba(90,115,36,0.1)] rounded-full mb-6">
            <User className="w-12 h-12 text-[#5A7324]" />
          </div>
          <h2 className="text-[32px] font-['Annapurna_SIL'] text-[#401c08] mb-4">
            Solicitud Enviada
          </h2>
          <p className="text-[18px] font-['Annapurna_SIL'] text-[rgba(64,28,8,0.7)] mb-8">
            Tu registro ha sido enviado correctamente y se
            encuentra pendiente de aprobación administrativa. Te
            notificaremos por correo electrónico una vez que tu
            cuenta sea activada.
          </p>
          <Link to="/login">
            <button className="w-full bg-[#5A7324] hover:bg-[#4a6020] text-white text-[18px] font-['Annapurna_SIL'] py-4 rounded-[8px] transition-colors">
              Volver al Inicio de Sesión
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F2EAC2] p-4 sm:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Encabezado */}
        <div className="mb-6">
          <Link
            to="/login"
            className="inline-flex items-center text-[#5A7324] hover:text-[#4a6020] mb-4 text-[18px] font-['Annapurna_SIL']"
          >
            <ArrowLeft className="w-6 h-6 mr-2" />
            Volver al inicio
          </Link>
        </div>

        <div className="bg-white rounded-[14px] shadow-lg p-10 border-[1.6px] border-[rgba(90,115,36,0.2)]">
          <h1 className="text-[40px] font-['Annapurna_SIL'] text-[#401c08] mb-3">
            Registro de Usuario
          </h1>
          <p className="text-[18px] font-['Annapurna_SIL'] text-[rgba(64,28,8,0.7)] mb-10">
            Selecciona tu tipo de usuario y completa el
            formulario
          </p>

          {/* Selector de Tipo de Usuario */}
          {!userType && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <button
                onClick={() => setUserType("rancho")}
                className="p-8 border-2 border-gray-300 rounded-xl hover:border-[#B3BF56] hover:bg-[#f5f7ea] transition-all text-center"
              >
                <div className="text-6xl mb-4">🐄</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Rancho Comercial
                </h3>
                <p className="text-sm text-gray-600">
                  Producción ganadera comercial a gran escala
                </p>
              </button>

              <button
                onClick={() => setUserType("traspatio")}
                className="p-8 border-2 border-gray-300 rounded-xl hover:border-[#B3BF56] hover:bg-[#f5f7ea] transition-all text-center"
              >
                <div className="text-6xl mb-4">🏡</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Productor Traspatio
                </h3>
                <p className="text-sm text-gray-600">
                  Producción familiar o de traspatio
                </p>
              </button>

              <button
                onClick={() => setUserType("veterinario")}
                className="p-8 border-2 border-gray-300 rounded-xl hover:border-[#B3BF56] hover:bg-[#f5f7ea] transition-all text-center"
              >
                <div className="text-6xl mb-4">⚕️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Veterinario Certificador
                </h3>
                <p className="text-sm text-gray-600">
                  Profesional que valida y certifica animales
                </p>
              </button>

              <div className="p-8 border-2 border-gray-200 bg-gray-50 rounded-xl text-center opacity-60">
                <div className="text-6xl mb-4">👤</div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  Administrador
                </h3>
                <p className="text-sm text-gray-500">
                  Solo un administrador puede crear esta cuenta
                </p>
              </div>
            </div>
          )}

          {/* Formulario según tipo de usuario */}
          {userType && (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="bg-[#f5f7ea] border border-[#e8eccd] rounded-lg p-4 mb-6">
                <p className="text-sm text-[#7a8c38]">
                  <strong>Tipo seleccionado:</strong>{" "}
                  {userType === "rancho" && "Rancho Comercial"}
                  {userType === "traspatio" &&
                    "Productor Traspatio"}
                  {userType === "veterinario" &&
                    "Veterinario Certificador"}
                </p>
                <button
                  type="button"
                  onClick={() => setUserType(null)}
                  className="text-sm text-[#B3BF56] hover:underline mt-2"
                >
                  Cambiar tipo de usuario
                </button>
              </div>

              {/* Datos Personales */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Datos Personales
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B3BF56] focus:border-transparent"
                      placeholder="Juan Pérez García"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      CURP *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B3BF56] focus:border-transparent"
                      placeholder="PEGJ850101HDFRNN09"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B3BF56] focus:border-transparent"
                      placeholder="correo@ejemplo.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B3BF56] focus:border-transparent"
                      placeholder="5551234567"
                    />
                  </div>
                </div>
              </div>

              {/* Datos del Rancho (Solo para productores) */}
              {(userType === "rancho" ||
                userType === "traspatio") && (
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                    {userType === "rancho"
                      ? "Datos del Rancho"
                      : "Datos del Domicilio"}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {userType === "rancho"
                          ? "Nombre del Rancho *"
                          : "Ubicación *"}
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B3BF56] focus:border-transparent"
                        placeholder={
                          userType === "rancho"
                            ? "Rancho El Paraíso"
                            : "Calle, Número, Colonia"
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Municipio *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B3BF56] focus:border-transparent"
                        placeholder="Nombre del Municipio"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Estado *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B3BF56] focus:border-transparent"
                        placeholder="Jalisco"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {userType === "rancho"
                          ? "Número de Cabezas"
                          : "Número de Animales"}
                      </label>
                      <input
                        type="number"
                        className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B3BF56] focus:border-transparent"
                        placeholder="50"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Datos Profesionales (Solo para veterinarios) */}
              {userType === "veterinario" && (
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                    Datos Profesionales
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Cédula Profesional *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B3BF56] focus:border-transparent"
                        placeholder="1234567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Universidad *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B3BF56] focus:border-transparent"
                        placeholder="UNAM"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Especialidad
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B3BF56] focus:border-transparent"
                        placeholder="Medicina Veterinaria y Zootecnia"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Años de Experiencia
                      </label>
                      <input
                        type="number"
                        className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B3BF56] focus:border-transparent"
                        placeholder="5"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Documentación */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Documentación Requerida
                </h3>
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#B3BF56] transition-colors cursor-pointer">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 mb-1">
                      Identificación Oficial (INE/Pasaporte)
                    </p>
                    <input type="file" className="hidden" />
                    <button
                      type="button"
                      className="text-sm text-[#B3BF56] hover:underline"
                    >
                      Seleccionar archivo
                    </button>
                  </div>

                  {(userType === "rancho" ||
                    userType === "traspatio") && (
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#B3BF56] transition-colors cursor-pointer">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600 mb-1">
                        {userType === "rancho"
                          ? "Constancia de Propiedad del Rancho"
                          : "Comprobante de Domicilio"}
                      </p>
                      <input type="file" className="hidden" />
                      <button
                        type="button"
                        className="text-sm text-[#B3BF56] hover:underline"
                      >
                        Seleccionar archivo
                      </button>
                    </div>
                  )}

                  {userType === "veterinario" && (
                    <>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#B3BF56] transition-colors cursor-pointer">
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600 mb-1">
                          Cédula Profesional (PDF)
                        </p>
                        <input type="file" className="hidden" />
                        <button
                          type="button"
                          className="text-sm text-[#B3BF56] hover:underline"
                        >
                          Seleccionar archivo
                        </button>
                      </div>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#B3BF56] transition-colors cursor-pointer">
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600 mb-1">
                          Certificado de Habilitación (Opcional)
                        </p>
                        <input type="file" className="hidden" />
                        <button
                          type="button"
                          className="text-sm text-[#B3BF56] hover:underline"
                        >
                          Seleccionar archivo
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Contraseña */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Configuración de Cuenta
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Contraseña *
                    </label>
                    <input
                      type="password"
                      required
                      className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B3BF56] focus:border-transparent"
                      placeholder="••••••••"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Confirmar Contraseña *
                    </label>
                    <input
                      type="password"
                      required
                      className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B3BF56] focus:border-transparent"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
              </div>

              {/* Términos y Condiciones */}
              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="mt-1 w-4 h-4 text-[#B3BF56] border-gray-300 rounded focus:ring-[#B3BF56]"
                />
                <label
                  htmlFor="terms"
                  className="text-sm text-gray-600"
                >
                  Acepto los términos y condiciones del sistema
                  y autorizo el tratamiento de mis datos
                  personales conforme a la Ley Federal de
                  Protección de Datos Personales
                </label>
              </div>

              {/* Botones */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-6">
                <button
                  type="button"
                  onClick={() => setUserType(null)}
                  className="flex-1 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 text-lg font-semibold py-4 rounded-lg transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-[#B3BF56] hover:bg-[#9aa848] text-white text-lg font-semibold py-4 rounded-lg transition-colors"
                >
                  Enviar Solicitud
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}