import { useState } from 'react';
import { Home, PlusCircle, List, User, History, Edit3, Search, ChevronDown } from 'lucide-react';
import CollapsibleSidebar from '../components/CollapsibleSidebar';

interface AccionLog {
  id: string;
  fecha: string;
  hora: string;
  accion: 'Crear' | 'Actualizar' | 'Desactivar';
  entidad: string;
  detalles: string;
}

const accionesLog: AccionLog[] = [
  {
    id: '1',
    fecha: '13 mar 2026 04:30 p.m.',
    hora: '16:30',
    accion: 'Crear',
    entidad: 'Certificación',
    detalles: 'Creó certificación de salud para animal Res-045',
  },
  {
    id: '2',
    fecha: '13 mar 2026 02:15 p.m.',
    hora: '14:15',
    accion: 'Actualizar',
    entidad: 'Perfil',
    detalles: 'Actualizó especialidad profesional a Medicina Veterinaria de Grandes Animales',
  },
  {
    id: '3',
    fecha: '13 mar 2026 11:45 a.m.',
    hora: '11:45',
    accion: 'Crear',
    entidad: 'Evaluación',
    detalles: 'Realizó evaluación clínica de animal Angus-123',
  },
  {
    id: '4',
    fecha: '12 mar 2026 03:20 p.m.',
    hora: '15:20',
    accion: 'Desactivar',
    entidad: 'Documento',
    detalles: 'Desactivó certificado vencido para animal Hol-067',
  },
  {
    id: '5',
    fecha: '12 mar 2026 10:00 a.m.',
    hora: '10:00',
    accion: 'Crear',
    entidad: 'Certificación',
    detalles: 'Emitió certificado de trazabilidad para lote de 8 bovinos',
  },
  {
    id: '6',
    fecha: '11 mar 2026 04:45 p.m.',
    hora: '16:45',
    accion: 'Actualizar',
    entidad: 'Evaluación',
    detalles: 'Actualizó resultados de evaluación para animal Brah-089',
  },
  {
    id: '7',
    fecha: '11 mar 2026 01:30 p.m.',
    hora: '13:30',
    accion: 'Crear',
    entidad: 'Documento',
    detalles: 'Generó reporte de certificaciones emitidas en marzo',
  },
  {
    id: '8',
    fecha: '10 mar 2026 03:15 p.m.',
    hora: '15:15',
    accion: 'Desactivar',
    entidad: 'Certificación',
    detalles: 'Anuló certificación duplicada para animal Sim-045',
  },
  {
    id: '9',
    fecha: '10 mar 2026 11:00 a.m.',
    hora: '11:00',
    accion: 'Actualizar',
    entidad: 'Perfil',
    detalles: 'Actualizó teléfono de contacto profesional',
  },
  {
    id: '10',
    fecha: '9 mar 2026 02:45 p.m.',
    hora: '14:45',
    accion: 'Crear',
    entidad: 'Evaluación',
    detalles: 'Evaluó estado de salud de animal Char-123',
  },
];

const accionStyles: Record<string, { bg: string; text: string }> = {
  Crear: { bg: 'bg-[#dcfce7]', text: 'text-[#016630]' },
  Actualizar: { bg: 'bg-[#dbeafe]', text: 'text-[#193cb8]' },
  Desactivar: { bg: 'bg-[#fef9c2]', text: 'text-[#894b00]' },
};

const accionCounts = {
  total: accionesLog.length,
  crear: accionesLog.filter(a => a.accion === 'Crear').length,
  actualizar: accionesLog.filter(a => a.accion === 'Actualizar').length,
  desactivar: accionesLog.filter(a => a.accion === 'Desactivar').length,
};

export default function HistorialAcciones() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('fecha');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const accionesFiltradas = accionesLog.filter((accion) => {
    const matchSearch =
      searchTerm === '' ||
      accion.detalles.toLowerCase().includes(searchTerm.toLowerCase()) ||
      accion.entidad.toLowerCase().includes(searchTerm.toLowerCase());
    return matchSearch;
  });

  const totalPages = Math.ceil(accionesFiltradas.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const accionesPaginadas = accionesFiltradas.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen bg-[#f9fafb] flex">
      <CollapsibleSidebar
        userName="Juan Pérez"
        userRole="Rancho Comercial"
        activeKey="historial"
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
          { key: 'historial', label: 'Mis Actividades', icon: History, to: '/historial-acciones' },
          { key: 'perfil', label: 'Mi Perfil', icon: User, to: '/productor/perfil' },
        ]}
      />

      <main className="flex-1 px-4 py-20 lg:px-10 lg:py-10">
        {/* Encabezado */}
        <div className="mb-6">
          <h1 className="text-[36px] font-['Annapurna_SIL'] text-[#101828] leading-[40px] mb-2">Mis Actividades</h1>
          <p className="text-[18px] font-['Annapurna_SIL'] text-[#4a5565] leading-[28px]">
            Revisa tu historial de acciones en el sistema
          </p>
        </div>

        {/* Tarjetas de Resumen */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* Tarjeta Todas */}
          <div className="bg-[#357324] rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] p-5">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-white rounded-full w-[10px] h-[10px]"></div>
              <p className="text-[14px] font-['Annapurna_SIL'] text-[rgba(255,255,255,0.9)] leading-[20px]">Todas</p>
            </div>
            <p className="text-[30px] font-['Annapurna_SIL'] text-white leading-[36px]">{accionCounts.total}</p>
          </div>

          {/* Tarjeta Creaciones */}
          <div className="bg-white rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] p-5">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-[#00c950] rounded-full w-[10px] h-[10px]"></div>
              <p className="text-[14px] font-['Annapurna_SIL'] text-[#6a7282] leading-[20px]">Creaciones</p>
            </div>
            <p className="text-[30px] font-['Annapurna_SIL'] text-[#101828] leading-[36px]">{accionCounts.crear}</p>
          </div>

          {/* Tarjeta Actualizaciones */}
          <div className="bg-white rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] p-5">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-[#2b7fff] rounded-full w-[10px] h-[10px]"></div>
              <p className="text-[14px] font-['Annapurna_SIL'] text-[#6a7282] leading-[20px]">Actualizaciones</p>
            </div>
            <p className="text-[30px] font-['Annapurna_SIL'] text-[#101828] leading-[36px]">{accionCounts.actualizar}</p>
          </div>

          {/* Tarjeta Desactivaciones */}
          <div className="bg-white rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] p-5">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-[#f0b100] rounded-full w-[10px] h-[10px]"></div>
              <p className="text-[14px] font-['Annapurna_SIL'] text-[#6a7282] leading-[20px]">Desactivaciones</p>
            </div>
            <p className="text-[30px] font-['Annapurna_SIL'] text-[#101828] leading-[36px]">{accionCounts.desactivar}</p>
          </div>
        </div>

        {/* Barra de búsqueda y filtros */}
        <div className="bg-white rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] p-5 mb-6">
          <div className="flex items-center gap-2">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#99a1af]" />
              <input
                type="text"
                placeholder="Buscar por ID de animal o detalles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-[0.8px] border-[#d1d5dc] rounded-[10px] text-[16px] font-['Annapurna_SIL'] placeholder:text-[rgba(10,10,10,0.5)] focus:ring-2 focus:ring-[#357324] focus:border-transparent"
              />
            </div>
            <div className="w-40">
              <div className="relative">
                <input
                  type="text"
                  placeholder="hasta"
                  className="w-full px-3 py-3 border-[0.8px] border-[#d1d5dc] rounded-[10px] text-[16px] font-['Annapurna_SIL'] text-[#99a1af] text-center focus:ring-2 focus:ring-[#357324] focus:border-transparent"
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>

        {/* Tabla de Actividades */}
        <div className="bg-white rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#f9fafb] border-b-[0.8px] border-[#e5e7eb]">
                <tr>
                  <th className="px-6 py-4 text-left">
                    <div className="flex items-center gap-2">
                      <p className="text-[14px] font-['Annapurna_SIL'] text-[#364153]">Fecha/Hora</p>
                      <ChevronDown className="w-4 h-4 text-[#357324]" />
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <p className="text-[14px] font-['Annapurna_SIL'] text-[#364153]">Acción</p>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <p className="text-[14px] font-['Annapurna_SIL'] text-[#364153]">Entidad</p>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <p className="text-[14px] font-['Annapurna_SIL'] text-[#364153]">Detalles</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {accionesPaginadas.map((accion, index) => {
                  const style = accionStyles[accion.accion];
                  return (
                    <tr key={accion.id} className="border-b-[0.8px] border-[#f3f4f6]">
                      <td className="px-6 py-[18.4px]">
                        <p className="text-[14px] font-['Annapurna_SIL'] text-[#364153] whitespace-nowrap">
                          {accion.fecha}
                        </p>
                      </td>
                      <td className="px-6 py-[18.4px]">
                        <div className="relative inline-block">
                          <div className={`${style.bg} px-3 py-1 rounded-full`}>
                            <p className={`text-[12px] font-['Annapurna_SIL'] ${style.text} whitespace-nowrap`}>
                              {accion.accion}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-[18.4px]">
                        <p className="text-[14px] font-['Annapurna_SIL'] text-[#364153]">{accion.entidad}</p>
                      </td>
                      <td className="px-6 py-[18.4px]">
                        <p className="text-[14px] font-['Annapurna_SIL'] text-[#364153]">{accion.detalles}</p>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Paginación */}
          <div className="px-6 py-4 border-t-[0.8px] border-[#e5e7eb] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[14px] font-['Annapurna_SIL'] text-[#6a7282]">
              Mostrando {startIndex + 1} a {Math.min(endIndex, accionesFiltradas.length)} de {accionesFiltradas.length} actividades
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-3 py-2 border-[0.8px] border-[#d1d5dc] rounded-[10px] text-[14px] font-['Annapurna_SIL'] text-[#364153] hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ← Anterior
              </button>
              
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-8 h-8 rounded-[10px] text-[14px] font-['Annapurna_SIL'] ${
                    currentPage === i + 1
                      ? 'bg-[#357324] text-white'
                      : 'border-[0.8px] border-[#d1d5dc] text-[#364153] hover:bg-gray-50'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              
              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="px-3 py-2 border-[0.8px] border-[#d1d5dc] rounded-[10px] text-[14px] font-['Annapurna_SIL'] text-[#364153] hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Siguiente →
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}