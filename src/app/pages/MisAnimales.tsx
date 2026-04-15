import { useState } from 'react';
import { Link } from 'react-router';
import { ArrowLeft, Search, Filter, Eye, FileCheck } from 'lucide-react';
import FichaTecnicaAnimal from '../components/FichaTecnicaAnimal';

interface Animal {
  id: string;
  tipo: 'bovino' | 'porcino' | 'ovino' | 'caprino' | 'equino' | 'avicola';
  raza: string;
  edad: number;
  peso: number;
  estado: string;
  precio: number | null;
  fechaRegistro: string;
}

const animales: Animal[] = [
  {
    id: 'BOV-001',
    tipo: 'bovino',
    raza: 'Holstein',
    edad: 3,
    peso: 520,
    estado: 'certificado',
    precio: 28600,
    fechaRegistro: '2025-01-15',
  },
  {
    id: 'BOV-002',
    tipo: 'bovino',
    raza: 'Angus',
    edad: 2.5,
    peso: 450,
    estado: 'en_revision',
    precio: 24750,
    fechaRegistro: '2025-02-10',
  },
  {
    id: 'BOV-003',
    tipo: 'bovino',
    raza: 'Jersey',
    edad: 4,
    peso: 380,
    estado: 'certificado',
    precio: 20900,
    fechaRegistro: '2025-01-20',
  },
  {
    id: 'POR-001',
    tipo: 'porcino',
    raza: 'Duroc',
    edad: 1.5,
    peso: 180,
    estado: 'pendiente',
    precio: null,
    fechaRegistro: '2025-02-18',
  },
  {
    id: 'OVI-001',
    tipo: 'ovino',
    raza: 'Merino',
    edad: 2,
    peso: 65,
    estado: 'certificado',
    precio: 3575,
    fechaRegistro: '2025-02-05',
  },
  {
    id: 'CAP-001',
    tipo: 'caprino',
    raza: 'Saanen',
    edad: 1.5,
    peso: 55,
    estado: 'en_revision',
    precio: null,
    fechaRegistro: '2025-03-01',
  },
  {
    id: 'EQU-001',
    tipo: 'equino',
    raza: 'Cuarto de Milla',
    edad: 5,
    peso: 450,
    estado: 'certificado',
    precio: 45000,
    fechaRegistro: '2025-01-10',
  },
  {
    id: 'AVE-001',
    tipo: 'avicola',
    raza: 'Rhode Island',
    edad: 0.5,
    peso: 2.5,
    estado: 'certificado',
    precio: 125,
    fechaRegistro: '2025-02-20',
  },
];

const getEstadoBadge = (estado: string) => {
  const badges: Record<string, { label: string; bg: string; textColor: string }> = {
    certificado: { label: 'Certificado', bg: 'bg-[#e8f3e5]', textColor: 'text-[#357324]' },
    en_revision: { label: 'En Revisión', bg: 'bg-[#fff9e6]', textColor: 'text-[#BC4C27]' },
    pendiente: { label: 'Pendiente', bg: 'bg-[rgba(90,115,36,0.1)]', textColor: 'text-[#5A7324]' },
    rechazado: { label: 'Rechazado', bg: 'bg-[#ffe6e6]', textColor: 'text-[#401C08]' },
  };
  return badges[estado] || badges.pendiente;
};

const tiposAnimal = [
  { key: 'bovino', label: 'Bovinos', color: '#357324' },
  { key: 'porcino', label: 'Porcinos', color: '#BC4C27' },
  { key: 'ovino', label: 'Ovinos', color: '#5A7324' },
  { key: 'caprino', label: 'Caprinos', color: '#401C08' },
  { key: 'equino', label: 'Equinos', color: '#2b7fff' },
  { key: 'avicola', label: 'Avícolas', color: '#f0b100' },
];

export default function MisAnimales() {
  const [selectedAnimalId, setSelectedAnimalId] = useState<string | null>(null);
  const [filtroTipo, setFiltroTipo] = useState<string>('');
  const [filtroEstado, setFiltroEstado] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState('');

  // Filtrar animales
  const animalesFiltrados = animales.filter((animal) => {
    const matchTipo = filtroTipo === '' || animal.tipo === filtroTipo;
    const matchEstado = filtroEstado === '' || animal.estado === filtroEstado;
    const matchSearch =
      searchTerm === '' ||
      animal.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      animal.raza.toLowerCase().includes(searchTerm.toLowerCase());
    return matchTipo && matchEstado && matchSearch;
  });

  // Contar animales por tipo
  const contadorPorTipo = tiposAnimal.map((tipo) => ({
    ...tipo,
    count: animales.filter((a) => a.tipo === tipo.key).length,
  }));

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1)] border-b border-[rgba(90,115,36,0.2)]">
        <div className="max-w-7xl mx-auto px-8 py-5">
          <Link to="/productor" className="inline-flex items-center text-[#5A7324] hover:text-[#4a6020] text-[18px] font-['Annapurna_SIL']">
            <ArrowLeft className="w-6 h-6 mr-2" />
            Volver al Panel
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-8 py-10">
        {/* Encabezado */}
        <div className="mb-8">
          <h1 className="text-[40px] font-['Annapurna_SIL'] text-[#401c08] mb-2">Mis Animales</h1>
          <p className="text-[18px] font-['Annapurna_SIL'] text-[rgba(64,28,8,0.7)]">
            Gestiona y consulta el estado de tus animales registrados
          </p>
        </div>

        {/* Tarjetas de Tipo de Animal */}
        <div className="grid grid-cols-6 gap-4 mb-6">
          {contadorPorTipo.map((tipo) => (
            <button
              key={tipo.key}
              onClick={() => setFiltroTipo(filtroTipo === tipo.key ? '' : tipo.key)}
              className={`p-4 rounded-[14px] shadow-sm transition-all border-[1.6px] ${
                filtroTipo === tipo.key
                  ? 'bg-white border-[#357324] shadow-md'
                  : 'bg-white border-[rgba(90,115,36,0.2)] hover:border-[#357324]'
              }`}
            >
              <p className="text-[14px] font-['Annapurna_SIL'] text-[#717182] mb-2">{tipo.label}</p>
              <p className="text-[28px] font-['Annapurna_SIL']" style={{ color: tipo.color }}>
                {tipo.count}
              </p>
            </button>
          ))}
        </div>

        {/* Filtros y Búsqueda */}
        <div className="bg-white border-[1.6px] border-[rgba(90,115,36,0.2)] rounded-[14px] shadow-sm mb-6 p-6">
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#717182] w-5 h-5" />
                <input
                  type="text"
                  placeholder="Buscar por ID o raza..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 font-['Annapurna_SIL'] text-[14px] border-[1.6px] border-[rgba(90,115,36,0.3)] rounded-[8px] focus:ring-2 focus:ring-[#5A7324] focus:border-transparent"
                />
              </div>
            </div>
            <div className="w-64">
              <select
                value={filtroEstado}
                onChange={(e) => setFiltroEstado(e.target.value)}
                className="w-full px-4 py-3 font-['Annapurna_SIL'] text-[14px] border-[1.6px] border-[rgba(90,115,36,0.3)] rounded-[8px] focus:ring-2 focus:ring-[#5A7324] focus:border-transparent"
              >
                <option value="">Todos los estados</option>
                <option value="certificado">Certificado</option>
                <option value="en_revision">En Revisión</option>
                <option value="pendiente">Pendiente</option>
                <option value="rechazado">Rechazado</option>
              </select>
            </div>
            <button 
              onClick={() => {
                setFiltroTipo('');
                setFiltroEstado('');
                setSearchTerm('');
              }}
              className="px-6 py-3 bg-[#5A7324] hover:bg-[#4a6020] text-white rounded-[8px] font-['Annapurna_SIL'] flex items-center gap-2 transition-colors"
            >
              <Filter className="w-4 h-4" />
              <span>Limpiar Filtros</span>
            </button>
          </div>
        </div>

        {/* Mensaje de filtro activo */}
        {filtroTipo && (
          <div className="mb-4 p-3 bg-[#e8f3e5] border border-[#357324] rounded-[8px]">
            <p className="text-[14px] font-['Annapurna_SIL'] text-[#357324]">
              Mostrando solo: <strong>{tiposAnimal.find(t => t.key === filtroTipo)?.label}</strong>
              <button
                onClick={() => setFiltroTipo('')}
                className="ml-2 text-xs underline hover:no-underline"
              >
                (quitar filtro)
              </button>
            </p>
          </div>
        )}

        {/* Tabla de Animales */}
        <div className="bg-white border-[1.6px] border-[rgba(90,115,36,0.2)] rounded-[14px] shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[rgba(90,115,36,0.05)] border-b border-[rgba(90,115,36,0.2)]">
                <tr>
                  <th className="px-6 py-4 text-left text-[14px] font-['Annapurna_SIL'] text-[#401c08] font-semibold">ID</th>
                  <th className="px-6 py-4 text-left text-[14px] font-['Annapurna_SIL'] text-[#401c08] font-semibold">Tipo</th>
                  <th className="px-6 py-4 text-left text-[14px] font-['Annapurna_SIL'] text-[#401c08] font-semibold">Raza</th>
                  <th className="px-6 py-4 text-left text-[14px] font-['Annapurna_SIL'] text-[#401c08] font-semibold">Edad</th>
                  <th className="px-6 py-4 text-left text-[14px] font-['Annapurna_SIL'] text-[#401c08] font-semibold">Peso (kg)</th>
                  <th className="px-6 py-4 text-left text-[14px] font-['Annapurna_SIL'] text-[#401c08] font-semibold">Estado</th>
                  <th className="px-6 py-4 text-left text-[14px] font-['Annapurna_SIL'] text-[#401c08] font-semibold">Precio Est.</th>
                  <th className="px-6 py-4 text-left text-[14px] font-['Annapurna_SIL'] text-[#401c08] font-semibold">Fecha</th>
                  <th className="px-6 py-4 text-left text-[14px] font-['Annapurna_SIL'] text-[#401c08] font-semibold">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[rgba(90,115,36,0.1)]">
                {animalesFiltrados.length === 0 ? (
                  <tr>
                    <td colSpan={9} className="px-6 py-12 text-center">
                      <p className="text-[18px] font-['Annapurna_SIL'] text-[#717182]">
                        No se encontraron animales con los filtros seleccionados
                      </p>
                    </td>
                  </tr>
                ) : (
                  animalesFiltrados.map((animal) => {
                    const badge = getEstadoBadge(animal.estado);
                    const tipoInfo = tiposAnimal.find(t => t.key === animal.tipo);
                    return (
                      <tr key={animal.id} className="hover:bg-[rgba(90,115,36,0.02)] transition-colors">
                        <td className="px-6 py-4">
                          <span className="font-['Annapurna_SIL'] text-[14px] text-[#401c08] font-semibold">{animal.id}</span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <span className="text-xl">{tipoInfo?.emoji}</span>
                            <span className="font-['Annapurna_SIL'] text-[14px] text-[rgba(64,28,8,0.7)]">
                              {tipoInfo?.label.replace('s', '')}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 font-['Annapurna_SIL'] text-[14px] text-[rgba(64,28,8,0.7)]">{animal.raza}</td>
                        <td className="px-6 py-4 font-['Annapurna_SIL'] text-[14px] text-[rgba(64,28,8,0.7)]">{animal.edad} años</td>
                        <td className="px-6 py-4 font-['Annapurna_SIL'] text-[14px] text-[rgba(64,28,8,0.7)]">{animal.peso} kg</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex px-3 py-1 rounded-[26843500px] text-[12px] font-['Annapurna_SIL'] font-semibold ${badge.bg} ${badge.textColor}`}>
                            {badge.label}
                          </span>
                        </td>
                        <td className="px-6 py-4 font-['Annapurna_SIL'] text-[14px] text-[rgba(64,28,8,0.7)]">
                          {animal.precio ? (
                            <span className="font-semibold">${animal.precio.toLocaleString()}</span>
                          ) : (
                            <span className="text-[#717182]">N/A</span>
                          )}
                        </td>
                        <td className="px-6 py-4 font-['Annapurna_SIL'] text-[14px] text-[rgba(64,28,8,0.7)]">
                          {new Date(animal.fechaRegistro).toLocaleDateString('es-MX')}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => setSelectedAnimalId(animal.id)}
                              className="p-2 hover:bg-[rgba(90,115,36,0.1)] rounded-[8px] transition-colors"
                              title="Ver ficha técnica"
                            >
                              <Eye className="w-5 h-5 text-[#5A7324]" />
                            </button>
                            {animal.estado === 'pendiente' && (
                              <button
                                className="p-2 hover:bg-[#e8f3e5] rounded-[8px] transition-colors"
                                title="Solicitar certificación"
                              >
                                <FileCheck className="w-5 h-5 text-[#357324]" />
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Resumen */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="bg-white border-[1.6px] border-[rgba(90,115,36,0.2)] rounded-[14px] shadow-sm p-6">
            <p className="text-[14px] font-['Annapurna_SIL'] text-[#717182] mb-1">Total Registrados</p>
            <p className="text-[32px] font-['Annapurna_SIL'] text-[#401c08]">{animales.length}</p>
          </div>
          <div className="bg-white border-[1.6px] border-[rgba(90,115,36,0.2)] rounded-[14px] shadow-sm p-6">
            <p className="text-[14px] font-['Annapurna_SIL'] text-[#717182] mb-1">Certificados</p>
            <p className="text-[32px] font-['Annapurna_SIL'] text-[#357324]">
              {animales.filter((a) => a.estado === 'certificado').length}
            </p>
          </div>
          <div className="bg-white border-[1.6px] border-[rgba(90,115,36,0.2)] rounded-[14px] shadow-sm p-6">
            <p className="text-[14px] font-['Annapurna_SIL'] text-[#717182] mb-1">En Revisión</p>
            <p className="text-[32px] font-['Annapurna_SIL'] text-[#BC4C27]">
              {animales.filter((a) => a.estado === 'en_revision').length}
            </p>
          </div>
        </div>
      </div>

      {/* Modal de Ficha Técnica */}
      {selectedAnimalId && (
        <FichaTecnicaAnimal animalId={selectedAnimalId} onClose={() => setSelectedAnimalId(null)} />
      )}
    </div>
  );
}