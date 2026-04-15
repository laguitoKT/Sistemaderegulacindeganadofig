import { Link } from 'react-router';
import { Home, PlusCircle, List, User, History, Edit3 } from 'lucide-react';
import CollapsibleSidebar from '../components/CollapsibleSidebar';
import imgImageBovinos from "figma:asset/04170f09840fe414cea00fc5e9d78b263b4378cc.png";
import imgImagePorcinos from "figma:asset/a64cbb1165ae8fe9bc7b24db0bcef4ce1eecb5d8.png";
import imgImageOvinos from "figma:asset/8395e916f0f7f8b2a5cb0a3fc6c6be883ded1252.png";
import imgImageCaprinos from "figma:asset/66ec3bf924ecd471c1df563beece5955a3139cd1.png";
import imgImageAvesDeCorral from "figma:asset/25337db2b18ee2fcfd751084a4e0c19e5e0ed995.png";

export default function ProductorDashboard() {
  // Simula el tipo de rancho - puede ser 'comercial' o 'traspatio'
  const tipoRancho = 'comercial'; // Cambiar a 'traspatio' para ver la diferencia
  const nombreRancho = tipoRancho === 'comercial' ? 'Rancho Comercial' : 'Rancho de Traspatio';

  return (
    <div className="min-h-screen bg-white flex">
      <CollapsibleSidebar
        userName="Juan Pérez"
        userRole={nombreRancho}
        activeKey="dashboard"
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

      {/* Contenido Principal */}
      <main className="flex-1 p-4 pt-20 lg:p-10 lg:pt-10">
        {/* Encabezado */}
        <div className="mb-10">
          <h1 className="text-[40px] font-['Annapurna_SIL'] text-[#401c08] mb-2">Panel Principal</h1>
          <p className="text-[18px] font-['Annapurna_SIL'] text-[rgba(64,28,8,0.7)]">Bienvenido al sistema de regulación de ganado</p>
        </div>

        {/* Tarjetas de Valores - Arriba */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          <div className="bg-white border-[1.6px] border-[rgba(90,115,36,0.2)] rounded-[14px] shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[14px] font-['Annapurna_SIL'] text-[#717182]">Total de Animales</h3>
              <div className="w-12 h-12 bg-[rgba(90,115,36,0.1)] rounded-[10px] flex items-center justify-center">
                <List className="w-6 h-6 text-[#5A7324]" />
              </div>
            </div>
            <p className="text-[40px] font-['Annapurna_SIL'] text-[#401c08]">24</p>
            <p className="text-[14px] font-['Annapurna_SIL'] text-[#717182] mt-2">Todos los tipos</p>
          </div>

          <div className="bg-white border-[1.6px] border-[rgba(90,115,36,0.2)] rounded-[14px] shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[14px] font-['Annapurna_SIL'] text-[#717182]">En Revisión</h3>
              <div className="w-12 h-12 bg-[rgba(255,193,7,0.1)] rounded-[10px] flex items-center justify-center">
                <Edit3 className="w-6 h-6 text-[#BC4C27]" />
              </div>
            </div>
            <p className="text-[40px] font-['Annapurna_SIL'] text-[#401c08]">4</p>
            <p className="text-[14px] font-['Annapurna_SIL'] text-[#717182] mt-2">Pendientes de certificación</p>
          </div>
        </div>

        {/* Sección de Animales por Tipo */}
        <div className="mb-6">
          <h2 className="text-[24px] font-['Annapurna_SIL'] text-[#401c08] mb-4">
            {tipoRancho === 'comercial' ? 'Inventario por Tipo de Animal' : 'Mis Animales por Tipo'}
          </h2>
          <p className="text-[16px] font-['Annapurna_SIL'] text-[#717182] mb-6">
            {tipoRancho === 'comercial' 
              ? 'Gestión de lotes y animales certificados' 
              : 'Límites: 10 animales grandes, 80 aves'}
          </p>
        </div>

        {/* Grid de Tipos de Animal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link to="/mis-animales">
            <div className="bg-white border-[1.6px] border-[rgba(90,115,36,0.2)] rounded-[14px] shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="relative rounded-[10px] w-[80px] h-[80px] border-[1.6px] border-[#5a7324] overflow-hidden">
                    <img alt="Bovinos" className="w-full h-full object-cover" src={imgImageBovinos} />
                  </div>
                  <div className="bg-[#5a7324] h-[32px] px-[12px] py-[4px] rounded-[26843500px] flex items-center justify-center">
                    <p className="font-['Annapurna_SIL'] text-[16px] text-white">12</p>
                  </div>
                </div>
                <h3 className="text-[16px] font-['Annapurna_SIL'] text-[#401c08] mb-2">Bovinos</h3>
                <p className="text-[16px] font-['Annapurna_SIL'] text-[rgba(64,28,8,0.7)] mb-4">Ganado vacuno certificado</p>
                <p className="text-[14px] font-['Annapurna_SIL'] text-[#717182]">Click para ver animales registrados</p>
              </div>
            </div>
          </Link>

          <Link to="/mis-animales">
            <div className="bg-white border-[1.6px] border-[rgba(90,115,36,0.2)] rounded-[14px] shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="relative rounded-[10px] w-[80px] h-[80px] border-[1.6px] border-[#5a7324] overflow-hidden">
                    <img alt="Porcinos" className="w-full h-full object-cover" src={imgImagePorcinos} />
                  </div>
                  <div className="bg-[#5a7324] h-[32px] px-[12px] py-[4px] rounded-[26843500px] flex items-center justify-center">
                    <p className="font-['Annapurna_SIL'] text-[16px] text-white">8</p>
                  </div>
                </div>
                <h3 className="text-[16px] font-['Annapurna_SIL'] text-[#401c08] mb-2">Porcinos</h3>
                <p className="text-[16px] font-['Annapurna_SIL'] text-[rgba(64,28,8,0.7)] mb-4">Cerdos y porcinos registrados</p>
                <p className="text-[14px] font-['Annapurna_SIL'] text-[#717182]">Click para ver animales registrados</p>
              </div>
            </div>
          </Link>

          <Link to="/mis-animales">
            <div className="bg-white border-[1.6px] border-[rgba(90,115,36,0.2)] rounded-[14px] shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="relative rounded-[10px] w-[80px] h-[80px] border-[1.6px] border-[#5a7324] overflow-hidden">
                    <img alt="Ovinos" className="w-full h-full object-cover" src={imgImageOvinos} />
                  </div>
                  <div className="bg-[#5a7324] h-[32px] px-[12px] py-[4px] rounded-[26843500px] flex items-center justify-center">
                    <p className="font-['Annapurna_SIL'] text-[16px] text-white">4</p>
                  </div>
                </div>
                <h3 className="text-[16px] font-['Annapurna_SIL'] text-[#401c08] mb-2">Ovinos</h3>
                <p className="text-[16px] font-['Annapurna_SIL'] text-[rgba(64,28,8,0.7)] mb-4">Ovejas y corderos</p>
                <p className="text-[14px] font-['Annapurna_SIL'] text-[#717182]">Click para ver animales registrados</p>
              </div>
            </div>
          </Link>

          <Link to="/mis-animales">
            <div className="bg-white border-[1.6px] border-[rgba(90,115,36,0.2)] rounded-[14px] shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="relative rounded-[10px] w-[80px] h-[80px] border-[1.6px] border-[#5a7324] overflow-hidden">
                    <img alt="Caprinos" className="w-full h-full object-cover" src={imgImageCaprinos} />
                  </div>
                  <div className="bg-[#5a7324] h-[32px] px-[12px] py-[4px] rounded-[26843500px] flex items-center justify-center">
                    <p className="font-['Annapurna_SIL'] text-[16px] text-white">0</p>
                  </div>
                </div>
                <h3 className="text-[16px] font-['Annapurna_SIL'] text-[#401c08] mb-2">Caprinos</h3>
                <p className="text-[16px] font-['Annapurna_SIL'] text-[rgba(64,28,8,0.7)] mb-4">Cabras y cabritos</p>
                <p className="text-[14px] font-['Annapurna_SIL'] text-[#717182]">Click para ver animales registrados</p>
              </div>
            </div>
          </Link>

          <Link to="/mis-animales">
            <div className="bg-white border-[1.6px] border-[rgba(90,115,36,0.2)] rounded-[14px] shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="relative rounded-[10px] w-[80px] h-[80px] border-[1.6px] border-[#5a7324] overflow-hidden">
                    <img alt="Aves de Corral" className="w-full h-full object-cover" src={imgImageAvesDeCorral} />
                  </div>
                  <div className="bg-[#5a7324] h-[32px] px-[12px] py-[4px] rounded-[26843500px] flex items-center justify-center">
                    <p className="font-['Annapurna_SIL'] text-[16px] text-white">
                      {tipoRancho === 'traspatio' ? '45' : '0'}
                    </p>
                  </div>
                </div>
                <h3 className="text-[16px] font-['Annapurna_SIL'] text-[#401c08] mb-2">Aves de Corral</h3>
                <p className="text-[16px] font-['Annapurna_SIL'] text-[rgba(64,28,8,0.7)] mb-4">Pollos, gallinas y pavos</p>
                <p className="text-[14px] font-['Annapurna_SIL'] text-[#717182]">
                  {tipoRancho === 'traspatio' ? 'Límite: 80 aves' : 'Click para ver animales registrados'}
                </p>
              </div>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}