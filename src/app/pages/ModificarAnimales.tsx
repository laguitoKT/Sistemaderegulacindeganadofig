import { useState } from 'react';
import { Home, PlusCircle, List, User, History, Edit3, Search, Save, X, AlertCircle, Lock, Calendar, Building2, MapPin } from 'lucide-react';
import CollapsibleSidebar from '../components/CollapsibleSidebar';

interface Animal {
  id: string;
  tipo: 'bovino' | 'porcino' | 'ovino' | 'caprino' | 'ave';
  raza: string;
  nombre: string;
  edad: number;
  peso: number;
  sexo: string;
  condicion: string;
  proposito: string;
  produccion: string;
  origen: string;
  estado: string;
  lote?: string;
}

const animalesMock: Animal[] = [
  { 
    id: 'A-001', 
    tipo: 'bovino', 
    raza: 'Holstein', 
    nombre: 'Holstein 001',
    edad: 3, 
    peso: 520, 
    sexo: 'Hembra',
    condicion: 'Excelente',
    proposito: 'Producción',
    produccion: 'Leche',
    origen: 'Granja San José, Michoacán',
    estado: 'certificado', 
    lote: 'Lote A' 
  },
  { 
    id: 'A-002', 
    tipo: 'bovino', 
    raza: 'Angus', 
    nombre: 'Angus 002',
    edad: 2.5, 
    peso: 450, 
    sexo: 'Macho',
    condicion: 'Bueno',
    proposito: 'Desarrollo',
    produccion: 'Carne',
    origen: 'Rancho La Esperanza, Jalisco',
    estado: 'en_revision', 
    lote: 'Lote A' 
  },
  { 
    id: 'P-001', 
    tipo: 'porcino', 
    raza: 'Duroc', 
    nombre: 'Duroc 001',
    edad: 1.5, 
    peso: 180, 
    sexo: 'Macho',
    condicion: 'Bueno',
    proposito: 'Engorda',
    produccion: 'Carne',
    origen: 'Granja Los Pinos, Guanajuato',
    estado: 'certificado', 
    lote: 'Lote B' 
  },
  { 
    id: 'O-001', 
    tipo: 'ovino', 
    raza: 'Merino', 
    nombre: 'Merino 001',
    edad: 2, 
    peso: 60, 
    sexo: 'Hembra',
    condicion: 'Regular',
    proposito: 'Lana',
    produccion: 'Lana',
    origen: 'Rancho El Refugio, Puebla',
    estado: 'pendiente', 
    lote: 'Lote C' 
  },
];

export default function ModificarAnimales() {
  const [animales, setAnimales] = useState<Animal[]>(animalesMock);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingAnimal, setEditingAnimal] = useState<Animal | null>(null);
  const [editData, setEditData] = useState<Animal | null>(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);

  const animalesFiltrados = animales.filter(
    (animal) =>
      animal.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      animal.raza.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (animal: Animal) => {
    setEditingAnimal(animal);
    setEditData({ ...animal });
  };

  const handleCancel = () => {
    setEditingAnimal(null);
    setEditData(null);
  };

  const handleSave = () => {
    setShowConfirmModal(true);
  };

  const confirmSave = () => {
    if (editData) {
      setAnimales(animales.map((a) => (a.id === editData.id ? editData : a)));
      setEditingAnimal(null);
      setEditData(null);
      setShowConfirmModal(false);
      setShowSuccessMsg(true);
      setTimeout(() => setShowSuccessMsg(false), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-white flex">
      <CollapsibleSidebar
        userName="Juan Pérez"
        userRole="Rancho Comercial"
        activeKey="modificar"
        theme={{
          avatarBg: '#357324',
          avatarText: '#ffffff',
          activeBg: '#e8f3e5',
          activeText: '#357324',
        }}
        navItems={[
          { key: 'dashboard', label: 'Panel Principal', icon: Home, to: '/productor' },
          { key: 'registro', label: 'Registrar Animal', icon: PlusCircle, to: '/registro-animal' },
          { key: 'animales', label: 'Mis Animales', icon: List, to: '/mis-animales' },
          { key: 'modificar', label: 'Modificar Animales', icon: Edit3, to: '/modificar-animales' },
          { key: 'historial', label: 'Historial de Acciones', icon: History, to: '/historial-acciones' },
          { key: 'perfil', label: 'Mi Perfil', icon: User, to: '/productor/perfil' },
        ]}
      />

      <main className="flex-1 p-4 pt-20 lg:p-10 lg:pt-10">
        {/* Mensaje de éxito */}
        {showSuccessMsg && (
          <div className="mb-6 bg-[#D1EEC9] border-[1.6px] border-[#a8dda0] rounded-[14px] p-4 flex items-center gap-3">
            <div className="w-5 h-5 bg-[#357324] rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xs">✓</span>
            </div>
            <p className="font-['Annapurna_SIL'] text-[#1f4115]">Los cambios se han guardado exitosamente</p>
          </div>
        )}

        {/* Encabezado */}
        <div className="mb-10">
          <h1 className="text-[40px] font-['Annapurna_SIL'] text-[#401c08] mb-2">Modificar Animales</h1>
          <p className="text-[18px] font-['Annapurna_SIL'] text-[rgba(64,28,8,0.7)]">
            Edita la información de tus animales registrados
          </p>
        </div>

        {/* Alerta informativa */}
        <div className="mb-6 bg-[#fff9e6] border-[1.6px] border-[#ffd966] rounded-[14px] p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-[#BC4C27] flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-['Annapurna_SIL'] text-[#401c08] font-semibold mb-1">
              Importante: Modificaciones controladas
            </p>
            <p className="font-['Annapurna_SIL'] text-[14px] text-[rgba(64,28,8,0.7)]">
              Solo puedes modificar el peso y la edad de los animales. Otros cambios requieren aprobación del
              administrador. Las modificaciones se registran en tu historial de acciones.
            </p>
          </div>
        </div>

        {/* Búsqueda */}
        <div className="bg-white border-[1.6px] border-[rgba(90,115,36,0.2)] rounded-[14px] shadow-sm p-6 mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#717182] w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar por ID o raza..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-[1.6px] border-[rgba(90,115,36,0.3)] rounded-[8px] focus:ring-2 focus:ring-[#5A7324] focus:border-transparent font-['Annapurna_SIL'] text-[14px]"
            />
          </div>
        </div>

        {/* Tabla de Animales */}
        <div className="bg-white border-[1.6px] border-[rgba(90,115,36,0.2)] rounded-[14px] shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[rgba(90,115,36,0.05)] border-b border-[rgba(90,115,36,0.2)]">
                <tr>
                  <th className="px-6 py-4 text-left text-[14px] font-['Annapurna_SIL'] text-[#401c08] font-semibold">
                    ID
                  </th>
                  <th className="px-6 py-4 text-left text-[14px] font-['Annapurna_SIL'] text-[#401c08] font-semibold">
                    Tipo
                  </th>
                  <th className="px-6 py-4 text-left text-[14px] font-['Annapurna_SIL'] text-[#401c08] font-semibold">
                    Raza
                  </th>
                  <th className="px-6 py-4 text-left text-[14px] font-['Annapurna_SIL'] text-[#401c08] font-semibold">
                    Edad (años)
                  </th>
                  <th className="px-6 py-4 text-left text-[14px] font-['Annapurna_SIL'] text-[#401c08] font-semibold">
                    Peso (kg)
                  </th>
                  <th className="px-6 py-4 text-left text-[14px] font-['Annapurna_SIL'] text-[#401c08] font-semibold">
                    Lote
                  </th>
                  <th className="px-6 py-4 text-left text-[14px] font-['Annapurna_SIL'] text-[#401c08] font-semibold">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[rgba(90,115,36,0.1)]">
                {animalesFiltrados.map((animal) => {
                  return (
                    <tr key={animal.id} className="hover:bg-[rgba(90,115,36,0.02)] transition-colors">
                      <td className="px-6 py-4">
                        <span className="font-['Annapurna_SIL'] text-[14px] text-[#401c08] font-semibold">
                          {animal.id}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-['Annapurna_SIL'] text-[14px] text-[rgba(64,28,8,0.7)] capitalize">
                          {animal.tipo}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-['Annapurna_SIL'] text-[14px] text-[rgba(64,28,8,0.7)]">
                          {animal.raza}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-['Annapurna_SIL'] text-[14px] text-[rgba(64,28,8,0.7)]">
                          {animal.edad}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-['Annapurna_SIL'] text-[14px] text-[rgba(64,28,8,0.7)]">
                          {animal.peso}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-['Annapurna_SIL'] text-[14px] text-[rgba(64,28,8,0.7)]">
                          {animal.lote}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleEdit(animal)}
                          className="p-2 hover:bg-[#e8f3e5] rounded-[8px] transition-colors"
                          title="Editar animal"
                        >
                          <Edit3 className="w-4 h-4 text-[#5A7324]" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Modal de Edición */}
      {editingAnimal && editData && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-[14px] shadow-2xl w-full max-w-4xl my-8 max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-[#401c08] p-6 flex items-center justify-between z-10 rounded-t-[14px]">
              <div>
                <h2 className="text-[24px] font-['Annapurna_SIL'] text-white">Editar Animal</h2>
                <p className="text-[14px] font-['Annapurna_SIL'] text-[rgba(255,255,255,0.8)] mt-1">
                  {editingAnimal.id} - {editingAnimal.raza}
                </p>
              </div>
              <button
                onClick={handleCancel}
                className="p-2 bg-white hover:bg-gray-100 rounded-[8px] transition-colors"
              >
                <X className="w-5 h-5 text-[#401c08]" />
              </button>
            </div>

            <div className="p-6">
              {/* Alerta sobre campos bloqueados */}
              <div className="mb-6 bg-[#fff9e6] border-[1.6px] border-[#ffd966] rounded-[10px] p-4 flex items-start gap-3">
                <Lock className="w-5 h-5 text-[#BC4C27] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[14px] font-['Annapurna_SIL'] text-[#401c08] font-semibold mb-1">
                    Campos bloqueados
                  </p>
                  <p className="text-[12px] font-['Annapurna_SIL'] text-[rgba(64,28,8,0.7)]">
                    El <strong>tipo</strong> y la <strong>raza</strong> del animal no pueden ser modificados. Todos los cambios requieren aprobación del administrador.
                  </p>
                </div>
              </div>

              {/* Formulario de edición */}
              <div className="grid grid-cols-2 gap-6">
                {/* Nombre */}
                <div>
                  <label className="block text-[14px] font-['Annapurna_SIL'] text-[#401c08] font-semibold mb-2">
                    Nombre del Animal
                  </label>
                  <input
                    type="text"
                    value={editData.nombre}
                    onChange={(e) => setEditData({ ...editData, nombre: e.target.value })}
                    className="w-full px-4 py-3 border-[1.6px] border-[rgba(90,115,36,0.3)] rounded-[8px] focus:ring-2 focus:ring-[#5A7324] focus:border-transparent font-['Annapurna_SIL'] text-[14px]"
                  />
                </div>

                {/* Sexo */}
                <div>
                  <label className="block text-[14px] font-['Annapurna_SIL'] text-[#401c08] font-semibold mb-2">
                    Sexo
                  </label>
                  <select
                    value={editData.sexo}
                    onChange={(e) => setEditData({ ...editData, sexo: e.target.value })}
                    className="w-full px-4 py-3 border-[1.6px] border-[rgba(90,115,36,0.3)] rounded-[8px] focus:ring-2 focus:ring-[#5A7324] focus:border-transparent font-['Annapurna_SIL'] text-[14px]"
                  >
                    <option value="Macho">Macho</option>
                    <option value="Hembra">Hembra</option>
                  </select>
                </div>

                {/* Edad */}
                <div>
                  <label className="block text-[14px] font-['Annapurna_SIL'] text-[#401c08] font-semibold mb-2">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    Edad (años)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={editData.edad}
                    onChange={(e) => setEditData({ ...editData, edad: parseFloat(e.target.value) || 0 })}
                    className="w-full px-4 py-3 border-[1.6px] border-[rgba(90,115,36,0.3)] rounded-[8px] focus:ring-2 focus:ring-[#5A7324] focus:border-transparent font-['Annapurna_SIL'] text-[14px]"
                  />
                </div>

                {/* Peso */}
                <div>
                  <label className="block text-[14px] font-['Annapurna_SIL'] text-[#401c08] font-semibold mb-2">
                    Peso (kg)
                  </label>
                  <input
                    type="number"
                    value={editData.peso}
                    onChange={(e) => setEditData({ ...editData, peso: parseInt(e.target.value) || 0 })}
                    className="w-full px-4 py-3 border-[1.6px] border-[rgba(90,115,36,0.3)] rounded-[8px] focus:ring-2 focus:ring-[#5A7324] focus:border-transparent font-['Annapurna_SIL'] text-[14px]"
                  />
                </div>

                {/* Condición */}
                <div>
                  <label className="block text-[14px] font-['Annapurna_SIL'] text-[#401c08] font-semibold mb-2">
                    Condición
                  </label>
                  <select
                    value={editData.condicion}
                    onChange={(e) => setEditData({ ...editData, condicion: e.target.value })}
                    className="w-full px-4 py-3 border-[1.6px] border-[rgba(90,115,36,0.3)] rounded-[8px] focus:ring-2 focus:ring-[#5A7324] focus:border-transparent font-['Annapurna_SIL'] text-[14px]"
                  >
                    <option value="Excelente">Excelente</option>
                    <option value="Bueno">Bueno</option>
                    <option value="Regular">Regular</option>
                    <option value="Malo">Malo</option>
                  </select>
                </div>

                {/* Propósito */}
                <div>
                  <label className="block text-[14px] font-['Annapurna_SIL'] text-[#401c08] font-semibold mb-2">
                    Propósito de Venta
                  </label>
                  <input
                    type="text"
                    value={editData.proposito}
                    onChange={(e) => setEditData({ ...editData, proposito: e.target.value })}
                    className="w-full px-4 py-3 border-[1.6px] border-[rgba(90,115,36,0.3)] rounded-[8px] focus:ring-2 focus:ring-[#5A7324] focus:border-transparent font-['Annapurna_SIL'] text-[14px]"
                    placeholder="Ej: Producción, Desarrollo, Engorda"
                  />
                </div>

                {/* Tipo de Producción */}
                <div>
                  <label className="block text-[14px] font-['Annapurna_SIL'] text-[#401c08] font-semibold mb-2">
                    <Building2 className="w-4 h-4 inline mr-1" />
                    Tipo de Producción
                  </label>
                  <input
                    type="text"
                    value={editData.produccion}
                    onChange={(e) => setEditData({ ...editData, produccion: e.target.value })}
                    className="w-full px-4 py-3 border-[1.6px] border-[rgba(90,115,36,0.3)] rounded-[8px] focus:ring-2 focus:ring-[#5A7324] focus:border-transparent font-['Annapurna_SIL'] text-[14px]"
                    placeholder="Ej: Leche, Carne, Lana"
                  />
                </div>

                {/* Lote */}
                <div>
                  <label className="block text-[14px] font-['Annapurna_SIL'] text-[#401c08] font-semibold mb-2">
                    Lote
                  </label>
                  <input
                    type="text"
                    value={editData.lote || ''}
                    onChange={(e) => setEditData({ ...editData, lote: e.target.value })}
                    className="w-full px-4 py-3 border-[1.6px] border-[rgba(90,115,36,0.3)] rounded-[8px] focus:ring-2 focus:ring-[#5A7324] focus:border-transparent font-['Annapurna_SIL'] text-[14px]"
                    placeholder="Ej: Lote A"
                  />
                </div>

                {/* Origen */}
                <div className="col-span-2">
                  <label className="block text-[14px] font-['Annapurna_SIL'] text-[#401c08] font-semibold mb-2">
                    <MapPin className="w-4 h-4 inline mr-1" />
                    Origen
                  </label>
                  <input
                    type="text"
                    value={editData.origen}
                    onChange={(e) => setEditData({ ...editData, origen: e.target.value })}
                    className="w-full px-4 py-3 border-[1.6px] border-[rgba(90,115,36,0.3)] rounded-[8px] focus:ring-2 focus:ring-[#5A7324] focus:border-transparent font-['Annapurna_SIL'] text-[14px]"
                    placeholder="Ej: Granja San José, Michoacán"
                  />
                </div>

                {/* Campos bloqueados - Solo visualización */}
                <div className="col-span-2">
                  <div className="bg-[rgba(90,115,36,0.05)] rounded-[10px] p-4 border-[1.6px] border-[rgba(90,115,36,0.2)]">
                    <p className="text-[12px] font-['Annapurna_SIL'] text-[#717182] mb-3 flex items-center gap-2">
                      <Lock className="w-4 h-4" />
                      Campos bloqueados (no se pueden modificar)
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-[12px] font-['Annapurna_SIL'] text-[#717182]">Tipo</p>
                        <p className="text-[16px] font-['Annapurna_SIL'] text-[#401c08] font-semibold capitalize">
                          {editData.tipo}
                        </p>
                      </div>
                      <div>
                        <p className="text-[12px] font-['Annapurna_SIL'] text-[#717182]">Raza</p>
                        <p className="text-[16px] font-['Annapurna_SIL'] text-[#401c08] font-semibold">
                          {editData.raza}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer con botones */}
            <div className="sticky bottom-0 bg-white p-6 border-t border-[rgba(90,115,36,0.2)] flex gap-3 rounded-b-[14px]">
              <button
                onClick={handleCancel}
                className="flex-1 px-4 py-3 border-[1.6px] border-gray-300 text-gray-700 hover:bg-gray-50 rounded-[8px] font-['Annapurna_SIL'] transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handleSave}
                className="flex-1 px-4 py-3 bg-[#357324] hover:bg-[#2a5c1d] text-white rounded-[8px] font-['Annapurna_SIL'] transition-colors flex items-center justify-center gap-2"
              >
                <Save className="w-4 h-4" />
                Guardar Cambios
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Confirmación */}
      {showConfirmModal && editData && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-[14px] shadow-2xl w-full max-w-lg">
            <div className="p-6 border-b border-[rgba(90,115,36,0.2)]">
              <h2 className="text-[24px] font-['Annapurna_SIL'] text-[#401c08]">Confirmar Cambios</h2>
              <p className="text-[14px] font-['Annapurna_SIL'] text-[#717182] mt-1">
                ¿Estás seguro de que deseas guardar estos cambios?
              </p>
            </div>
            <div className="p-6">
              <div className="bg-[rgba(90,115,36,0.05)] rounded-[10px] p-4">
                <p className="text-[14px] font-['Annapurna_SIL'] text-[#717182] mb-2">Animal: {editData.id}</p>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-[12px] font-['Annapurna_SIL'] text-[#717182]">Edad</p>
                    <p className="text-[16px] font-['Annapurna_SIL'] text-[#401c08] font-semibold">
                      {editData.edad} años
                    </p>
                  </div>
                  <div>
                    <p className="text-[12px] font-['Annapurna_SIL'] text-[#717182]">Peso</p>
                    <p className="text-[16px] font-['Annapurna_SIL'] text-[#401c08] font-semibold">
                      {editData.peso} kg
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-[rgba(90,115,36,0.2)] flex gap-3">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="flex-1 px-4 py-3 border-[1.6px] border-gray-300 text-gray-700 hover:bg-gray-50 rounded-[8px] font-['Annapurna_SIL'] transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={confirmSave}
                className="flex-1 px-4 py-3 bg-[#357324] hover:bg-[#2a5c1d] text-white rounded-[8px] font-['Annapurna_SIL'] transition-colors"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}