import { useState } from 'react';
import { X, MapPin, Calendar, User, Phone, Building2, FileText, Syringe, Image, Edit3, Save, Lock } from 'lucide-react';
import imgCanvas from "figma:asset/cf9af825d960469b016dee5d12d7c1ed3f2725c2.png";

interface FichaTecnicaAnimalProps {
  animalId: string;
  onClose: () => void;
}

interface AnimalData {
  id: string;
  nombre: string;
  tipo: string;
  raza: string;
  sexo: string;
  edad: number;
  peso: number;
  condicion: string;
  proposito: string;
  produccion: string;
  conCrias: boolean;
  origen: string;
  fechaRegistro: string;
  
  // Información del productor
  nombreRancho: string;
  tipoRancho: string;
  propietario: string;
  contacto: string;
  ubicacion: string;
  
  // Certificación
  certificadoPor: string;
  cedulaProfesional: string;
  fechaCertificacion: string;
  proximaRevision: string;
  
  // Historial de vacunación
  vacunaciones: { fecha: string; vacuna: string; veterinario: string }[];
  
  // Precio
  precio: number;
  
  // Código QR
  codigoQR: string;
  
  // Galería
  imagenes: string[];
}

const animalMock: AnimalData = {
  id: 'POR-002',
  nombre: 'Yorkshire 002',
  tipo: 'Porcino',
  raza: 'Yorkshire',
  sexo: 'Hembra',
  edad: 1,
  peso: 120,
  condicion: 'Bueno',
  proposito: 'Desarrollo',
  produccion: 'Engorda',
  conCrias: false,
  origen: 'Granja San José, Michoacán',
  fechaRegistro: '2025-11-09',
  
  nombreRancho: 'Granja San José',
  tipoRancho: 'Comercial',
  propietario: 'Ana María López Hernández',
  contacto: '+52 44 4567 8901',
  ubicacion: 'Michoacán, México',
  
  certificadoPor: 'Dra. Ana Martínez',
  cedulaProfesional: 'CED-VET-0974321',
  fechaCertificacion: '2026-02-14',
  proximaRevision: '2026-05-14',
  
  vacunaciones: [
    { fecha: '2026-02-01', vacuna: 'Peste Porcina Clásica', veterinario: 'Dr. Roberto García' },
  ],
  
  precio: 8500,
  codigoQR: 'POR-002',
  imagenes: [],
};

export default function FichaTecnicaAnimal({ animalId, onClose }: FichaTecnicaAnimalProps) {
  const [animal, setAnimal] = useState<AnimalData>(animalMock);
  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState<AnimalData>({ ...animalMock });
  const [showApprovalModal, setShowApprovalModal] = useState(false);

  const handleEdit = () => {
    setEditMode(true);
    setEditData({ ...animal });
  };

  const handleCancel = () => {
    setEditMode(false);
    setEditData({ ...animal });
  };

  const handleSave = () => {
    setShowApprovalModal(true);
  };

  const confirmSave = () => {
    setAnimal({ ...editData });
    setEditMode(false);
    setShowApprovalModal(false);
    // Aquí se enviaría la solicitud de aprobación al administrador
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-white rounded-[14px] shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto my-8">
        {/* Header */}
        <div className="sticky top-0 bg-[#401c08] p-6 flex items-center justify-between z-10 rounded-t-[14px]">
          <div>
            <h1 className="text-[24px] font-['Annapurna_SIL'] text-white">
              Sistema de Regulación y Control de Ganado
            </h1>
            <p className="text-[16px] font-['Annapurna_SIL'] text-[rgba(255,255,255,0.8)]">
              Verifica, confía y compra
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 bg-white hover:bg-gray-100 rounded-[8px] transition-colors"
          >
            <X className="w-5 h-5 text-[#401c08]" />
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-3 gap-6">
            {/* Columna Izquierda - Información Principal */}
            <div className="col-span-2 space-y-6">
              {/* Tarjeta Principal */}
              <div className="bg-white border-[1.6px] border-[rgba(90,115,36,0.2)] rounded-[14px] shadow-sm p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-[24px] font-['Annapurna_SIL'] text-[#401c08] mb-1">
                      {editMode ? (
                        <input
                          type="text"
                          value={editData.nombre}
                          onChange={(e) => setEditData({ ...editData, nombre: e.target.value })}
                          className="px-3 py-1 border-[1.6px] border-[rgba(90,115,36,0.3)] rounded-[8px]"
                        />
                      ) : (
                        animal.nombre
                      )}
                    </h2>
                    <p className="text-[16px] font-['Annapurna_SIL'] text-[#717182]">
                      {animal.raza} · {animal.sexo}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <div className="bg-[#b3bf56] px-4 py-2 rounded-[8px]">
                      <p className="text-[16px] font-['Annapurna_SIL'] text-[#401c08]">{animal.condicion}</p>
                    </div>
                    {!editMode ? (
                      <button
                        onClick={handleEdit}
                        className="p-2 bg-[#5A7324] hover:bg-[#4a6020] text-white rounded-[8px] transition-colors"
                        title="Editar información"
                      >
                        <Edit3 className="w-5 h-5" />
                      </button>
                    ) : (
                      <>
                        <button
                          onClick={handleCancel}
                          className="p-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-[8px] transition-colors"
                        >
                          <X className="w-5 h-5" />
                        </button>
                        <button
                          onClick={handleSave}
                          className="p-2 bg-[#357324] hover:bg-[#2a5c1d] text-white rounded-[8px] transition-colors"
                        >
                          <Save className="w-5 h-5" />
                        </button>
                      </>
                    )}
                  </div>
                </div>

                {/* Información Básica */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="flex gap-3">
                    <div className="w-9 h-9 bg-[rgba(90,115,36,0.1)] rounded-[10px] flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5 text-[#5A7324]" />
                    </div>
                    <div>
                      <p className="text-[14px] font-['Annapurna_SIL'] text-[#717182]">No. de identificación</p>
                      <p className="text-[16px] font-['Annapurna_SIL'] text-[#401c08] font-semibold">{animal.id}</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-9 h-9 bg-[rgba(90,115,36,0.1)] rounded-[10px] flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">⚖️</span>
                    </div>
                    <div>
                      <p className="text-[14px] font-['Annapurna_SIL'] text-[#717182]">Peso</p>
                      {editMode ? (
                        <input
                          type="number"
                          value={editData.peso}
                          onChange={(e) => setEditData({ ...editData, peso: parseInt(e.target.value) || 0 })}
                          className="w-24 px-2 py-1 text-[16px] font-['Annapurna_SIL'] border-[1.6px] border-[rgba(90,115,36,0.3)] rounded-[8px]"
                        />
                      ) : (
                        <p className="text-[16px] font-['Annapurna_SIL'] text-[#401c08] font-semibold">{animal.peso} kg</p>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-9 h-9 bg-[rgba(90,115,36,0.1)] rounded-[10px] flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-[#5A7324]" />
                    </div>
                    <div>
                      <p className="text-[14px] font-['Annapurna_SIL'] text-[#717182]">Edad</p>
                      {editMode ? (
                        <input
                          type="number"
                          value={editData.edad}
                          onChange={(e) => setEditData({ ...editData, edad: parseInt(e.target.value) || 0 })}
                          className="w-20 px-2 py-1 text-[16px] font-['Annapurna_SIL'] border-[1.6px] border-[rgba(90,115,36,0.3)] rounded-[8px]"
                        />
                      ) : (
                        <p className="text-[16px] font-['Annapurna_SIL'] text-[#401c08] font-semibold">{animal.edad} años</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="border-t border-[rgba(90,115,36,0.2)] pt-4 mb-4"></div>

                {/* Propósito y Condición */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-[14px] font-['Annapurna_SIL'] text-[#717182] mb-2">Propósito de Venta</p>
                    <div className="bg-[#b3bf56] inline-block px-3 py-1 rounded-[8px]">
                      {editMode ? (
                        <input
                          type="text"
                          value={editData.proposito}
                          onChange={(e) => setEditData({ ...editData, proposito: e.target.value })}
                          className="bg-transparent text-[12px] font-['Annapurna_SIL'] text-[#401c08] border-none outline-none"
                        />
                      ) : (
                        <p className="text-[12px] font-['Annapurna_SIL'] text-[#401c08]">{animal.proposito}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <p className="text-[14px] font-['Annapurna_SIL'] text-[#717182] mb-2">Condición</p>
                    <div className="bg-[#b3bf56] inline-block px-3 py-1 rounded-[8px]">
                      {editMode ? (
                        <select
                          value={editData.condicion}
                          onChange={(e) => setEditData({ ...editData, condicion: e.target.value })}
                          className="bg-transparent text-[12px] font-['Annapurna_SIL'] text-[#401c08] border-none outline-none"
                        >
                          <option value="Excelente">Excelente</option>
                          <option value="Bueno">Bueno</option>
                          <option value="Regular">Regular</option>
                          <option value="Mal">Mal</option>
                        </select>
                      ) : (
                        <p className="text-[12px] font-['Annapurna_SIL'] text-[#401c08]">{animal.condicion}</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="border-t border-[rgba(90,115,36,0.2)] pt-4 mb-4"></div>

                {/* Tipo de Producción y Con Crías */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex gap-3">
                    <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                      <Building2 className="w-5 h-5 text-[#5A7324]" />
                    </div>
                    <div>
                      <p className="text-[14px] font-['Annapurna_SIL'] text-[#717182]">Tipo de Producción</p>
                      {editMode ? (
                        <input
                          type="text"
                          value={editData.produccion}
                          onChange={(e) => setEditData({ ...editData, produccion: e.target.value })}
                          className="px-2 py-1 text-[16px] font-['Annapurna_SIL'] border-[1.6px] border-[rgba(90,115,36,0.3)] rounded-[8px]"
                        />
                      ) : (
                        <p className="text-[16px] font-['Annapurna_SIL'] text-[#401c08]">{animal.produccion}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                      <span className="text-lg">💚</span>
                    </div>
                    <div>
                      <p className="text-[14px] font-['Annapurna_SIL'] text-[#717182]">Con Crías</p>
                      <p className="text-[16px] font-['Annapurna_SIL'] text-[#401c08]">{animal.conCrias ? 'Sí' : 'No'}</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-[rgba(90,115,36,0.2)] pt-4 mb-4"></div>

                {/* Origen y Fecha de Registro */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex gap-3">
                    <MapPin className="w-5 h-5 text-[#5A7324] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[14px] font-['Annapurna_SIL'] text-[#717182]">Origen</p>
                      {editMode ? (
                        <input
                          type="text"
                          value={editData.origen}
                          onChange={(e) => setEditData({ ...editData, origen: e.target.value })}
                          className="w-full px-2 py-1 text-[16px] font-['Annapurna_SIL'] border-[1.6px] border-[rgba(90,115,36,0.3)] rounded-[8px]"
                        />
                      ) : (
                        <p className="text-[16px] font-['Annapurna_SIL'] text-[#401c08]">{animal.origen}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Calendar className="w-5 h-5 text-[#5A7324] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[14px] font-['Annapurna_SIL'] text-[#717182]">Fecha de Registro</p>
                      <p className="text-[16px] font-['Annapurna_SIL'] text-[#401c08]">
                        {new Date(animal.fechaRegistro).toLocaleDateString('es-MX', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Certificaciones */}
              <div className="bg-white border-[1.6px] border-[rgba(90,115,36,0.2)] rounded-[14px] shadow-sm p-6">
                <h3 className="text-[20px] font-['Annapurna_SIL'] text-[#401c08] mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#5A7324]" />
                  Certificaciones
                </h3>
                <div className="flex gap-2 mb-4">
                  <div className="bg-[#5A7324] px-3 py-1 rounded-[8px]">
                    <p className="text-[12px] font-['Annapurna_SIL'] text-white">Activo</p>
                  </div>
                  <div className="bg-[#5A7324] px-3 py-1 rounded-[8px]">
                    <p className="text-[12px] font-['Annapurna_SIL'] text-white">Certificación Sanitaria</p>
                  </div>
                </div>
                <button className="w-full bg-[#5A7324] hover:bg-[#4a6020] text-white py-2 rounded-[8px] font-['Annapurna_SIL'] transition-colors">
                  Libro de actas Permisos Oficiales
                </button>
              </div>

              {/* Información del Productor */}
              <div className="bg-white border-[1.6px] border-[rgba(90,115,36,0.2)] rounded-[14px] shadow-sm p-6">
                <h3 className="text-[20px] font-['Annapurna_SIL'] text-[#401c08] mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-[#5A7324]" />
                  Información del Productor
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex gap-3">
                    <Building2 className="w-5 h-5 text-[#5A7324] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[14px] font-['Annapurna_SIL'] text-[#717182]">Nombre del Rancho</p>
                      <p className="text-[16px] font-['Annapurna_SIL'] text-[#401c08]">{animal.nombreRancho}</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <FileText className="w-5 h-5 text-[#5A7324] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[14px] font-['Annapurna_SIL'] text-[#717182]">Tipo de Rancho</p>
                      <p className="text-[16px] font-['Annapurna_SIL'] text-[#401c08]">
                        <span className="inline-flex items-center gap-1 bg-[#5A7324] text-white px-2 py-0.5 rounded-full text-[12px]">
                          {animal.tipoRancho}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <User className="w-5 h-5 text-[#5A7324] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[14px] font-['Annapurna_SIL'] text-[#717182]">Propietario</p>
                      <p className="text-[16px] font-['Annapurna_SIL'] text-[#401c08]">{animal.propietario}</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Phone className="w-5 h-5 text-[#5A7324] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[14px] font-['Annapurna_SIL'] text-[#717182]">Contacto</p>
                      <p className="text-[16px] font-['Annapurna_SIL'] text-[#401c08]">{animal.contacto}</p>
                    </div>
                  </div>
                  <div className="flex gap-3 col-span-2">
                    <MapPin className="w-5 h-5 text-[#5A7324] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[14px] font-['Annapurna_SIL'] text-[#717182]">Ubicación</p>
                      <p className="text-[16px] font-['Annapurna_SIL'] text-[#401c08]">{animal.ubicacion}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Certificación Veterinaria */}
              <div className="bg-white border-[1.6px] border-[rgba(90,115,36,0.2)] rounded-[14px] shadow-sm p-6">
                <h3 className="text-[20px] font-['Annapurna_SIL'] text-[#401c08] mb-4 flex items-center gap-2">
                  <Syringe className="w-5 h-5 text-[#5A7324]" />
                  Certificación Veterinaria
                </h3>
                <div className="flex gap-2 mb-4">
                  <div className="bg-[#5A7324] px-3 py-1 rounded-[8px]">
                    <p className="text-[12px] font-['Annapurna_SIL'] text-white">Activo</p>
                  </div>
                  <div className="bg-[#5A7324] px-3 py-1 rounded-[8px]">
                    <p className="text-[12px] font-['Annapurna_SIL'] text-white">Certificación Sanitaria</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex gap-3">
                    <User className="w-5 h-5 text-[#5A7324] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[14px] font-['Annapurna_SIL'] text-[#717182]">Certificado por</p>
                      <p className="text-[16px] font-['Annapurna_SIL'] text-[#401c08]">{animal.certificadoPor}</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <FileText className="w-5 h-5 text-[#5A7324] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[14px] font-['Annapurna_SIL'] text-[#717182]">Cédula Profesional</p>
                      <p className="text-[16px] font-['Annapurna_SIL'] text-[#401c08]">{animal.cedulaProfesional}</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Calendar className="w-5 h-5 text-[#5A7324] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[14px] font-['Annapurna_SIL'] text-[#717182]">Fecha de Certificación</p>
                      <p className="text-[16px] font-['Annapurna_SIL'] text-[#401c08]">
                        {new Date(animal.fechaCertificacion).toLocaleDateString('es-MX', {
                          day: '2-digit',
                          month: '2-digit',
                          year: 'numeric',
                        })}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Calendar className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[14px] font-['Annapurna_SIL'] text-[#717182]">Próxima Revisión</p>
                      <p className="text-[16px] font-['Annapurna_SIL'] text-[#401c08]">
                        {new Date(animal.proximaRevision).toLocaleDateString('es-MX', {
                          day: '2-digit',
                          month: '2-digit',
                          year: 'numeric',
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Historial de Vacunación */}
              <div className="bg-white border-[1.6px] border-[rgba(90,115,36,0.2)] rounded-[14px] shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[20px] font-['Annapurna_SIL'] text-[#401c08] flex items-center gap-2">
                    <Syringe className="w-5 h-5 text-[#5A7324]" />
                    Historial de Vacunación
                  </h3>
                  <button className="px-4 py-2 border-[1.6px] border-[#5A7324] text-[#5A7324] hover:bg-[rgba(90,115,36,0.1)] rounded-[8px] font-['Annapurna_SIL'] text-[14px] transition-colors">
                    Ver Historial Completo
                  </button>
                </div>
                <p className="text-[14px] font-['Annapurna_SIL'] text-[#717182] mb-4">
                  1 vacunación(es) registrada(s)
                </p>
                <button className="px-4 py-2 bg-[rgba(90,115,36,0.1)] text-[#5A7324] rounded-[8px] font-['Annapurna_SIL'] text-[14px]">
                  Pases Previos
                </button>
              </div>
            </div>

            {/* Columna Derecha - QR y Precio */}
            <div className="col-span-1 space-y-6">
              {/* Código QR */}
              <div className="bg-white border-[1.6px] border-[rgba(90,115,36,0.2)] rounded-[14px] shadow-sm p-6">
                <h3 className="text-[16px] font-['Annapurna_SIL'] text-[#401c08] mb-3">Código QR</h3>
                <div className="bg-white p-4 rounded-[10px] border-[1.6px] border-[rgba(90,115,36,0.2)] mb-3">
                  <img src={imgCanvas} alt="QR Code" className="w-full" />
                </div>
                <p className="text-[12px] font-['Annapurna_SIL'] text-[#717182] text-center mb-2">
                  Escanea para acceder a la ficha técnica certificada
                </p>
                <p className="text-[12px] font-['Annapurna_SIL'] text-[#401c08] font-semibold text-center">
                  Información del QR
                </p>
                <div className="text-center mt-3 space-y-1">
                  <p className="text-[12px] font-['Annapurna_SIL'] text-[#717182]">ID: {animal.codigoQR}</p>
                  <p className="text-[12px] font-['Annapurna_SIL'] text-[#717182]">Animal: {animal.nombre}</p>
                  <p className="text-[12px] font-['Annapurna_SIL'] text-[#717182]">Estado: Certificado ✓</p>
                </div>
              </div>

              {/* Precio */}
              <div className="bg-[#401c08] rounded-[14px] shadow-sm p-6 text-center">
                <p className="text-[16px] font-['Annapurna_SIL'] text-white mb-3">PRECIO DE VENTA</p>
                <p className="text-[40px] font-['Annapurna_SIL'] text-white font-bold mb-1">
                  $ {animal.precio.toLocaleString()}
                </p>
                <p className="text-[14px] font-['Annapurna_SIL'] text-[rgba(255,255,255,0.8)] mb-6">MXN</p>
                <button className="w-full bg-[#5A7324] hover:bg-[#4a6020] text-white py-3 rounded-[8px] font-['Annapurna_SIL'] flex items-center justify-center gap-2 transition-colors">
                  <Image className="w-5 h-5" />
                  Ver Galería de Imágenes
                </button>
              </div>

              {/* Última Actualización */}
              <div className="bg-[#F2EAC2] rounded-[14px] p-4 text-center">
                <p className="text-[14px] font-['Annapurna_SIL'] text-[#401c08]">
                  Última actualización: <strong>14 de febrero de 2026</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Confirmación de Aprobación */}
      {showApprovalModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-[60]">
          <div className="bg-white rounded-[14px] shadow-2xl w-full max-w-md">
            <div className="p-6 border-b border-[rgba(90,115,36,0.2)]">
              <h2 className="text-[24px] font-['Annapurna_SIL'] text-[#401c08]">Confirmar Cambios</h2>
              <p className="text-[14px] font-['Annapurna_SIL'] text-[#717182] mt-1">
                Los cambios se enviarán para aprobación del administrador
              </p>
            </div>
            <div className="p-6">
              <div className="bg-[#fff9e6] border-[1.6px] border-[#ffd966] rounded-[10px] p-4 flex items-start gap-3 mb-4">
                <Lock className="w-5 h-5 text-[#BC4C27] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[14px] font-['Annapurna_SIL'] text-[#401c08] font-semibold mb-1">
                    Campos bloqueados
                  </p>
                  <p className="text-[12px] font-['Annapurna_SIL'] text-[rgba(64,28,8,0.7)]">
                    El tipo y la raza del animal no pueden ser modificados y quedan excluidos de esta solicitud.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-[rgba(90,115,36,0.2)] flex gap-3">
              <button
                onClick={() => setShowApprovalModal(false)}
                className="flex-1 px-4 py-3 border-[1.6px] border-gray-300 text-gray-700 hover:bg-gray-50 rounded-[8px] font-['Annapurna_SIL'] transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={confirmSave}
                className="flex-1 px-4 py-3 bg-[#357324] hover:bg-[#2a5c1d] text-white rounded-[8px] font-['Annapurna_SIL'] transition-colors"
              >
                Enviar para Aprobación
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
