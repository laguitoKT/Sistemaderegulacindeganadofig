import { useState } from 'react';
import { Link } from 'react-router';
import { ArrowLeft, Upload, Camera } from 'lucide-react';

const razasPorAnimal: Record<string, string[]> = {
  bovino: ['Holstein', 'Jersey', 'Angus', 'Hereford', 'Charolais', 'Brahman', 'Simmental', 'Limousin', 'Brangus'],
  porcino: ['Yorkshire', 'Landrace', 'Duroc', 'Hampshire', 'Pietrain', 'Berkshire', 'Poland China'],
  ovino: ['Suffolk', 'Dorper', 'Merino', 'Hampshire Down', 'Katahdin', 'Rambouillet', 'Columbia'],
  caprino: ['Nubia', 'Saanen', 'Alpina', 'Boer', 'Toggenburg', 'LaMancha', 'Oberhasli'],
  equino: ['Cuarto de Milla', 'Pura Sangre', 'Criollo', 'Azteca', 'Appaloosa', 'Paint', 'Árabe'],
  avicola: ['Rhode Island', 'Plymouth Rock', 'Leghorn', 'Sussex', 'Brahma', 'Cornish'],
  otro: ['Especie no especificada'],
};

export default function RegistroAnimal() {
  const [tipoAnimal, setTipoAnimal] = useState('');
  const [hasCrias, setHasCrias] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleTipoAnimalChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTipoAnimal(e.target.value);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <div className="bg-white rounded-[14px] shadow-lg w-full max-w-2xl p-12 text-center border-[1.6px] border-[rgba(90,115,36,0.2)]">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-[rgba(90,115,36,0.1)] rounded-full mb-6">
            <span className="text-5xl text-[#5A7324]">✓</span>
          </div>
          <h2 className="text-[32px] font-['Annapurna_SIL'] text-[#401c08] mb-4">
            Animal Registrado Exitosamente
          </h2>
          <p className="text-[18px] font-['Annapurna_SIL'] text-[rgba(64,28,8,0.7)] mb-8">
            El animal ha sido registrado en el sistema. Ahora puedes solicitar su certificación 
            desde el panel "Mis Animales".
          </p>
          <div className="flex gap-4">
            <Link to="/registro-animal" className="flex-1">
              <button 
                onClick={() => setSubmitted(false)}
                className="w-full border-[1.6px] border-[#5A7324] text-[#5A7324] hover:bg-[rgba(90,115,36,0.1)] text-[18px] font-['Annapurna_SIL'] py-4 rounded-[8px] transition-colors"
              >
                Registrar Otro
              </button>
            </Link>
            <Link to="/mis-animales" className="flex-1">
              <button className="w-full bg-[#5A7324] hover:bg-[#4a6020] text-white text-[18px] font-['Annapurna_SIL'] py-4 rounded-[8px] transition-colors">
                Ver Mis Animales
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#5B321A] shadow-lg">
        <div className="max-w-7xl mx-auto px-8 py-5">
          <Link to="/productor" className="inline-flex items-center text-white hover:text-[#F2EAC2] text-[18px] font-['Annapurna_SIL']">
            <ArrowLeft className="w-6 h-6 mr-2" />
            Volver al Panel
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4 sm:p-8 py-10">
        <div className="bg-white rounded-[14px] shadow-lg p-10 border-[1.6px] border-[rgba(90,115,36,0.2)]">
          <h1 className="text-[40px] font-['Annapurna_SIL'] text-[#401c08] mb-3">
            Registrar Nuevo Animal
          </h1>
          <p className="text-[18px] font-['Annapurna_SIL'] text-[rgba(64,28,8,0.7)] mb-10">
            Completa la información del animal para su registro en el sistema
          </p>

          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Información Básica */}
            <div>
              <h3 className="text-[24px] font-['Annapurna_SIL'] text-[#401c08] mb-6">Información Básica</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[16px] font-['Annapurna_SIL'] text-[#401c08] mb-2 flex items-center gap-2">
                    <span className="text-[#5A7324]">●</span> Tipo de Animal *
                  </label>
                  <select
                    required
                    value={tipoAnimal}
                    onChange={handleTipoAnimalChange}
                    className="w-full px-4 py-4 text-[16px] font-['Annapurna_SIL'] bg-white border-[1.6px] border-[rgba(90,115,36,0.3)] rounded-[8px] focus:ring-2 focus:ring-[#5A7324] focus:border-[#5A7324]"
                  >
                    <option value="">Selecciona el tipo de animal</option>
                    <option value="bovino">Bovino (Ganado Vacuno)</option>
                    <option value="porcino">Porcino (Cerdos)</option>
                    <option value="ovino">Ovino (Ovejas)</option>
                    <option value="caprino">Caprino (Cabras)</option>
                    <option value="equino">Equino (Caballos)</option>
                    <option value="avicola">Avícola (Aves)</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[16px] font-['Annapurna_SIL'] text-[#401c08] mb-2 flex items-center gap-2">
                    <span className="text-[#5A7324]">●</span> Identificación/Arete *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-4 text-[16px] font-['Annapurna_SIL'] bg-white border-[1.6px] border-[rgba(90,115,36,0.3)] rounded-[8px] focus:ring-2 focus:ring-[#5A7324] focus:border-[#5A7324]"
                    placeholder="A-001"
                  />
                </div>
                <div>
                  <label className="block text-[16px] font-['Annapurna_SIL'] text-[#401c08] mb-2 flex items-center gap-2">
                    <span className="text-[#5A7324]">●</span> Raza *
                  </label>
                  <select
                    required
                    disabled={!tipoAnimal}
                    className="w-full px-4 py-4 text-[16px] font-['Annapurna_SIL'] bg-white border-[1.6px] border-[rgba(90,115,36,0.3)] rounded-[8px] focus:ring-2 focus:ring-[#5A7324] focus:border-[#5A7324] disabled:bg-gray-100 disabled:cursor-not-allowed"
                  >
                    <option value="">
                      {tipoAnimal ? 'Selecciona una raza' : 'Primero selecciona el tipo de animal'}
                    </option>
                    {tipoAnimal &&
                      razasPorAnimal[tipoAnimal].map((raza) => (
                        <option key={raza} value={raza}>
                          {raza}
                        </option>
                      ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[16px] font-['Annapurna_SIL'] text-[#401c08] mb-2 flex items-center gap-2">
                    <span className="text-[#5A7324]">●</span> Sexo *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-4 text-[16px] font-['Annapurna_SIL'] bg-white border-[1.6px] border-[rgba(90,115,36,0.3)] rounded-[8px] focus:ring-2 focus:ring-[#5A7324] focus:border-[#5A7324]"
                  >
                    <option value="">Selecciona</option>
                    <option value="macho">Macho</option>
                    <option value="hembra">Hembra</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[16px] font-['Annapurna_SIL'] text-[#401c08] mb-2 flex items-center gap-2">
                    <span className="text-[#5A7324]">●</span> Edad (Años) *
                  </label>
                  <input
                    type="number"
                    required
                    min="0"
                    step="0.5"
                    className="w-full px-4 py-4 text-[16px] font-['Annapurna_SIL'] bg-white border-[1.6px] border-[rgba(90,115,36,0.3)] rounded-[8px] focus:ring-2 focus:ring-[#5A7324] focus:border-[#5A7324]"
                    placeholder="2.5"
                  />
                </div>
              </div>
            </div>

            {/* Datos Físicos */}
            <div>
              <h3 className="text-[24px] font-['Annapurna_SIL'] text-[#401c08] mb-6">Datos Físicos</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[16px] font-['Annapurna_SIL'] text-[#401c08] mb-2 flex items-center gap-2">
                    <span className="text-[#5A7324]">●</span> Peso Estimado (kg) *
                  </label>
                  <input
                    type="number"
                    required
                    min="0"
                    className="w-full px-4 py-4 text-[16px] font-['Annapurna_SIL'] bg-white border-[1.6px] border-[rgba(90,115,36,0.3)] rounded-[8px] focus:ring-2 focus:ring-[#5A7324] focus:border-[#5A7324]"
                    placeholder="450"
                  />
                  <p className="text-xs text-gray-500 mt-1">El peso será validado por el veterinario</p>
                </div>
                <div>
                  <label className="block text-[16px] font-['Annapurna_SIL'] text-[#401c08] mb-2 flex items-center gap-2">
                    <span className="text-[#5A7324]">●</span> Condición Corporal *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-4 text-[16px] font-['Annapurna_SIL'] bg-white border-[1.6px] border-[rgba(90,115,36,0.3)] rounded-[8px] focus:ring-2 focus:ring-[#5A7324] focus:border-[#5A7324]"
                  >
                    <option value="">Selecciona</option>
                    <option value="excelente">Excelente</option>
                    <option value="bueno">Bueno</option>
                    <option value="regular">Regular</option>
                    <option value="mal">Mal</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[16px] font-['Annapurna_SIL'] text-[#401c08] mb-2 flex items-center gap-2">
                    <span className="text-[#5A7324]">●</span> Color/Pelaje
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-4 text-[16px] font-['Annapurna_SIL'] bg-white border-[1.6px] border-[rgba(90,115,36,0.3)] rounded-[8px] focus:ring-2 focus:ring-[#5A7324] focus:border-[#5A7324]"
                    placeholder="Negro con blanco"
                  />
                </div>
                <div>
                  <label className="block text-[16px] font-['Annapurna_SIL'] text-[#401c08] mb-2 flex items-center gap-2">
                    <span className="text-[#5A7324]">●</span> Estado de Salud *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-4 text-[16px] font-['Annapurna_SIL'] bg-white border-[1.6px] border-[rgba(90,115,36,0.3)] rounded-[8px] focus:ring-2 focus:ring-[#5A7324] focus:border-[#5A7324]"
                  >
                    <option value="">Selecciona</option>
                    <option value="excelente">Excelente</option>
                    <option value="bueno">Bueno</option>
                    <option value="regular">Regular</option>
                    <option value="mal">Mal</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Tipo de Producción */}
            <div>
              <h3 className="text-[24px] font-['Annapurna_SIL'] text-[#401c08] mb-6">Tipo de Producción</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[16px] font-['Annapurna_SIL'] text-[#401c08] mb-2 flex items-center gap-2">
                    <span className="text-[#5A7324]">●</span> Propósito *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-4 text-[16px] font-['Annapurna_SIL'] bg-white border-[1.6px] border-[rgba(90,115,36,0.3)] rounded-[8px] focus:ring-2 focus:ring-[#5A7324] focus:border-[#5A7324]"
                  >
                    <option value="">Selecciona</option>
                    <option value="carne">Carne</option>
                    <option value="leche">Leche</option>
                    <option value="doble_proposito">Doble Propósito</option>
                    <option value="cria">Cría</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[16px] font-['Annapurna_SIL'] text-[#401c08] mb-2 flex items-center gap-2">
                    <span className="text-[#5A7324]">●</span> ¿Cuenta con crías?
                  </label>
                  <div className="flex items-center space-x-4 pt-3">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="hasCrias"
                        value="si"
                        checked={hasCrias}
                        onChange={() => setHasCrias(true)}
                        className="w-4 h-4 text-[#5A7324] focus:ring-[#5A7324]"
                      />
                      <span className="ml-2 text-gray-700">Sí</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="hasCrias"
                        value="no"
                        checked={!hasCrias}
                        onChange={() => setHasCrias(false)}
                        className="w-4 h-4 text-[#5A7324] focus:ring-[#5A7324]"
                      />
                      <span className="ml-2 text-gray-700">No</span>
                    </label>
                  </div>
                </div>
                {hasCrias && (
                  <div>
                    <label className="block text-[16px] font-['Annapurna_SIL'] text-[#401c08] mb-2 flex items-center gap-2">
                      <span className="text-[#5A7324]">●</span> Número de Crías
                    </label>
                    <input
                      type="number"
                      min="1"
                      className="w-full px-4 py-4 text-[16px] font-['Annapurna_SIL'] bg-white border-[1.6px] border-[rgba(90,115,36,0.3)] rounded-[8px] focus:ring-2 focus:ring-[#5A7324] focus:border-[#5A7324]"
                      placeholder="1"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Documentación y Fotografías */}
            <div>
              <h3 className="text-[24px] font-['Annapurna_SIL'] text-[#401c08] mb-6">Documentación y Fotografías</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-6">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#B3BF56] transition-colors cursor-pointer">
                    <Camera className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                    <p className="text-sm font-medium text-gray-900 mb-1">Fotografía Frontal *</p>
                    <p className="text-xs text-gray-500 mb-3">Vista completa del animal</p>
                    <input type="file" accept="image/*" className="hidden" />
                    <button type="button" className="text-sm text-[#B3BF56] hover:underline font-medium">
                      Seleccionar imagen
                    </button>
                  </div>

                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#B3BF56] transition-colors cursor-pointer">
                    <Camera className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                    <p className="text-sm font-medium text-gray-900 mb-1">Fotografía Lateral *</p>
                    <p className="text-xs text-gray-500 mb-3">Vista de perfil</p>
                    <input type="file" accept="image/*" className="hidden" />
                    <button type="button" className="text-sm text-[#B3BF56] hover:underline font-medium">
                      Seleccionar imagen
                    </button>
                  </div>
                </div>

                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#B3BF56] transition-colors cursor-pointer">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-sm font-medium text-gray-900 mb-1">Documentos Adicionales</p>
                  <p className="text-xs text-gray-500 mb-3">
                    Certificados de vacunación, pedigree, etc. (Opcional)
                  </p>
                  <input type="file" accept=".pdf,.jpg,.jpeg,.png" multiple className="hidden" />
                  <button type="button" className="text-sm text-[#B3BF56] hover:underline font-medium">
                    Seleccionar archivos
                  </button>
                </div>
              </div>
            </div>

            {/* Observaciones */}
            <div>
              <h3 className="text-[24px] font-['Annapurna_SIL'] text-[#401c08] mb-6">Observaciones Adicionales</h3>
              <textarea
                rows={4}
                className="w-full px-4 py-4 text-[16px] font-['Annapurna_SIL'] bg-white border-[1.6px] border-[rgba(90,115,36,0.3)] rounded-[8px] focus:ring-2 focus:ring-[#5A7324] focus:border-[#5A7324]"
                placeholder="Agrega cualquier información adicional relevante sobre el animal..."
              ></textarea>
            </div>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <Link to="/productor" className="flex-1">
                <button
                  type="button"
                  className="w-full border-2 border-gray-300 text-gray-700 hover:bg-gray-50 text-lg font-semibold py-4 rounded-lg transition-colors"
                >
                  Cancelar
                </button>
              </Link>
              <button
                type="submit"
                className="flex-1 bg-[#5A7324] hover:bg-[#4a6020] text-white text-[18px] font-['Annapurna_SIL'] py-4 rounded-[8px] transition-colors"
              >
                Registrar Animal
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}