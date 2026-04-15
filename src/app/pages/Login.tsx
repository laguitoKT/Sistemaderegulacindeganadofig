import { Link } from 'react-router';
import { Lock, Mail, User } from 'lucide-react';

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e8f3e5] to-blue-50 flex items-center justify-center p-4 sm:p-8">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Lado Izquierdo - Branding con Imagen */}
          <div className="relative p-8 lg:p-12 flex flex-col justify-center text-white overflow-hidden min-h-[200px] lg:min-h-0">
            {/* Imagen de fondo */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1741666356775-c515db8564f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXR0bGUlMjByYW5jaCUyMGZhcm0lMjBjb3VudHJ5c2lkZSUyMGxpdmVzdG9ja3xlbnwxfHx8fDE3NzMyODQxOTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
              }}
            ></div>
            {/* Overlay oscuro para que el texto sea legible */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#357324]/95 to-[#2a5c1d]/90"></div>
            
            {/* Contenido sobre la imagen */}
            <div className="relative z-10 mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-2xl mb-6 backdrop-blur-sm">
                <User className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl font-bold mb-4">
                Sistema de Regulación Ganadero
              </h1>
              <p className="text-lg text-[#e8f3e5] leading-relaxed">
                Plataforma integral para la certificación, trazabilidad y gestión de ganado con tecnología QR
              </p>
            </div>
            <div className="relative z-10 space-y-4 text-[#e8f3e5]">
              
              
              
            </div>
          </div>

          {/* Lado Derecho - Formulario */}
          <div className="p-6 sm:p-12">
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Iniciar Sesión</h2>
              <p className="text-gray-600">Ingresa tus datos para acceder</p>
            </div>

            <form className="space-y-6">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Correo Electrónico
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    id="email"
                    placeholder="correo@ejemplo.com"
                    className="w-full pl-12 pr-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#357324] focus:border-transparent"
                  />
                </div>
              </div>

              {/* Contraseña */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Contraseña
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="password"
                    id="password"
                    placeholder="••••••••"
                    className="w-full pl-12 pr-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#357324] focus:border-transparent"
                  />
                </div>
              </div>

              {/* Recuperar Contraseña */}
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 text-[#357324] border-gray-300 rounded focus:ring-[#357324]" />
                  <span className="ml-2 text-sm text-gray-600">Recordarme</span>
                </label>
                <a href="#" className="text-sm text-[#357324] hover:text-[#2a5c1d] hover:underline">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>

              {/* Botón Iniciar Sesión */}
              <Link to="/productor">
                <button
                  type="button"
                  className="w-full bg-[#357324] hover:bg-[#2a5c1d] text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  Iniciar Sesión
                </button>
              </Link>

              {/* Enlaces de acceso rápido */}
              <div className="pt-4 space-y-2">
                <p className="text-sm text-gray-600 text-center mb-3">Acceso rápido:</p>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <Link to="/veterinario" className="px-3 py-2 bg-blue-50 text-blue-700 rounded text-center hover:bg-blue-100">
                    Veterinario
                  </Link>
                  <Link to="/admin" className="px-3 py-2 bg-purple-50 text-purple-700 rounded text-center hover:bg-purple-100">
                    Administrador
                  </Link>
                  <Link to="/traspatio" className="px-3 py-2 bg-[#e8f3e5] text-[#357324] rounded text-center hover:bg-[#d1e6c9]">
                    Traspatio
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}