import { useState } from 'react';
import { Home, PlusCircle, List, User, Lock, Edit3, Save, X, CheckCircle, Clock, Eye, EyeOff, AlertTriangle, FileText, History } from 'lucide-react';
import CollapsibleSidebar from '../components/CollapsibleSidebar';

interface Documento {
  nombre: string;
  archivo: string;
  tipo: 'ine' | 'constitucion' | 'rfc' | 'domicilio' | 'sanitarios' | 'uso_suelo' | 'fotos' | 'manejo_sanitario';
}

interface CambioPendiente {
  campo: string;
  valorActual: string;
  valorNuevo: string;
  fecha: string;
  estado: 'pendiente' | 'aprobado' | 'rechazado';
}

const perfilData = {
  nombrePerfil: 'Juan Pérez García',
  usuario: 'jperez_rancho',
  nombre: 'Juan Pérez García',
  curp: 'PEGJ850101HDFRNN09',
  email: 'juan.perez@email.com',
  telefono: '3331234567',
  tipoRancho: 'Comercial',
  nombreRancho: 'Rancho El Paraíso',
  direccion: 'Carretera Guadalajara-Chapala Km 15.5, Guadalajara, Jalisco',
  municipio: 'Guadalajara',
  estado: 'Jalisco',
  capacidadAnimales: 100,
  hectareas: 45.5,
  numeroCabezas: 50,
  fechaRegistro: '2024-06-15',
  documentos: [
    { nombre: 'Identificación Oficial (INE)', archivo: 'ine_jperez.pdf', tipo: 'ine' },
    { nombre: 'Acta Constitutiva o Registro Comercial', archivo: 'acta_constitucion.pdf', tipo: 'constitucion' },
    { nombre: 'RFC con Constancia de Situación Fiscal', archivo: 'rfc_situacion_fiscal.pdf', tipo: 'rfc' },
    { nombre: 'Comprobante de Domicilio', archivo: 'comprobante_domicilio.pdf', tipo: 'domicilio' },
    { nombre: 'Permisos Sanitarios (SAGARPA/SENASICA)', archivo: 'permisos_sanitarios.pdf', tipo: 'sanitarios' },
    { nombre: 'Licencia de Uso de Suelo', archivo: 'licencia_uso_suelo.pdf', tipo: 'uso_suelo' },
    { nombre: 'Fotografías de las Instalaciones', archivo: 'fotos_instalaciones.zip', tipo: 'fotos' },
    { nombre: 'Plan de Manejo Sanitario', archivo: 'plan_manejo_sanitario.pdf', tipo: 'manejo_sanitario' },
  ] as Documento[],
};

const cambiosPendientesMock: CambioPendiente[] = [
  {
    campo: 'Teléfono',
    valorActual: '3331234567',
    valorNuevo: '3339876543',
    fecha: '2026-03-10',
    estado: 'pendiente',
  },
];

export default function ProductorPerfil() {
  const [editMode, setEditMode] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showChangesModal, setShowChangesModal] = useState(false);
  const [showDocumentationModal, setShowDocumentationModal] = useState(false);
  const [showSuccessMsg, setShowSuccessMsg] = useState<string | null>(null);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showConfirmPasswordField, setShowConfirmPasswordField] = useState(false);

  const [editData, setEditData] = useState({ ...perfilData });
  const [cambiosPendientes] = useState<CambioPendiente[]>(cambiosPendientesMock);

  const [passwordData, setPasswordData] = useState({
    actual: '',
    nueva: '',
    confirmar: '',
  });

  const hasChanges = () => {
    return (
      editData.nombrePerfil !== perfilData.nombrePerfil ||
      editData.email !== perfilData.email ||
      editData.telefono !== perfilData.telefono ||
      editData.nombreRancho !== perfilData.nombreRancho ||
      editData.direccion !== perfilData.direccion ||
      editData.tipoRancho !== perfilData.tipoRancho ||
      editData.capacidadAnimales !== perfilData.capacidadAnimales ||
      editData.hectareas !== perfilData.hectareas
    );
  };

  const handleSaveChanges = () => {
    if (hasChanges()) {
      setShowConfirmPasswordField(true);
    }
  };

  const confirmSaveChanges = () => {
    if (!confirmPassword) {
      alert('Debes ingresar tu contraseña para confirmar los cambios');
      return;
    }
    // Simula validación de contraseña
    setShowConfirmPasswordField(false);
    setConfirmPassword('');
    setEditMode(false);
    setShowSuccessMsg('Tu solicitud de cambio ha sido enviada y está pendiente de aprobación por un administrador.');
    setTimeout(() => setShowSuccessMsg(null), 5000);
  };

  const handlePasswordChange = () => {
    if (passwordData.nueva !== passwordData.confirmar) {
      alert('Las contraseñas no coinciden');
      return;
    }
    if (passwordData.nueva.length < 8) {
      alert('La contraseña debe tener al menos 8 caracteres');
      return;
    }
    setShowPasswordModal(false);
    setPasswordData({ actual: '', nueva: '', confirmar: '' });
    setShowSuccessMsg('Tu contraseña ha sido actualizada exitosamente.');
    setTimeout(() => setShowSuccessMsg(null), 5000);
  };

  const cancelEdit = () => {
    setEditData({ ...perfilData });
    setEditMode(false);
  };

  const getChangedFields = () => {
    const changes: { campo: string; anterior: string; nuevo: string }[] = [];
    if (editData.nombrePerfil !== perfilData.nombrePerfil) changes.push({ campo: 'Nombre', anterior: perfilData.nombrePerfil, nuevo: editData.nombrePerfil });
    if (editData.email !== perfilData.email) changes.push({ campo: 'Correo Electrónico', anterior: perfilData.email, nuevo: editData.email });
    if (editData.telefono !== perfilData.telefono) changes.push({ campo: 'Teléfono', anterior: perfilData.telefono, nuevo: editData.telefono });
    if (editData.nombreRancho !== perfilData.nombreRancho) changes.push({ campo: 'Nombre del Rancho', anterior: perfilData.nombreRancho, nuevo: editData.nombreRancho });
    if (editData.direccion !== perfilData.direccion) changes.push({ campo: 'Dirección', anterior: perfilData.direccion, nuevo: editData.direccion });
    if (editData.tipoRancho !== perfilData.tipoRancho) changes.push({ campo: 'Tipo de Rancho', anterior: perfilData.tipoRancho, nuevo: editData.tipoRancho });
    if (editData.capacidadAnimales !== perfilData.capacidadAnimales) changes.push({ campo: 'Capacidad de Animales', anterior: String(perfilData.capacidadAnimales), nuevo: String(editData.capacidadAnimales) });
    if (editData.hectareas !== perfilData.hectareas) changes.push({ campo: 'Hectáreas', anterior: String(perfilData.hectareas), nuevo: String(editData.hectareas) });
    return changes;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <CollapsibleSidebar
        userName="Juan Pérez"
        userRole="Rancho Comercial"
        activeKey="perfil"
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
          <div className="mb-6 bg-[#D1EEC9] border border-[#a8dda0] rounded-xl p-4 flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-[#357324] flex-shrink-0" />
            <p className="text-[#1f4115]">{showSuccessMsg}</p>
          </div>
        )}

        <div className="mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Mi Perfil</h1>
            <p className="text-lg text-gray-600">Consulta y gestiona tu información personal</p>
          </div>
        </div>  

        {/* Aviso de aprobación */}
        {editMode && (
          <div className="mb-6 bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-amber-800 font-medium">Los cambios requieren aprobación</p>
              <p className="text-amber-700 text-sm mt-1">Cualquier modificación a tu información personal será revisada y aprobada por un administrador antes de aplicarse. Solo el cambio de contraseña es inmediato.</p>
            </div>
          </div>
        )}

        {/* Información Personal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow col-span-2">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <User className="w-5 h-5 text-[#357324]" />Datos Personales
              </h3>
            </div>
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Nombre Completo</label>
                {editMode ? (
                  <input
                    type="text"
                    value={editData.nombre}
                    onChange={(e) => setEditData({ ...editData, nombre: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#357324] focus:border-transparent"
                  />
                ) : (
                  <p className="text-lg text-gray-900">{perfilData.nombre}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">
                  CURP
                  {editMode && <span className="ml-2 text-xs text-gray-400 inline-flex items-center gap-1"><Lock className="w-3 h-3" />No editable</span>}
                </label>
                <p className="text-lg text-gray-900">{perfilData.curp}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Correo Electrónico</label>
                {editMode ? (
                  <input
                    type="email"
                    value={editData.email}
                    onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#357324] focus:border-transparent"
                  />
                ) : (
                  <p className="text-lg text-gray-900">{perfilData.email}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Teléfono</label>
                {editMode ? (
                  <input
                    type="tel"
                    value={editData.telefono}
                    onChange={(e) => setEditData({ ...editData, telefono: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#357324] focus:border-transparent"
                  />
                ) : (
                  <p className="text-lg text-gray-900">{perfilData.telefono}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">
                  Tipo de Productor
                  {editMode && <span className="ml-2 text-xs text-gray-400 inline-flex items-center gap-1"><Lock className="w-3 h-3" />No editable</span>}
                </label>
                <p className="text-lg text-gray-900">
                  <span className="inline-flex items-center gap-2">
                    {perfilData.tipoProductor}
                    <span className="px-2 py-0.5 bg-[#e8f3e5] text-[#357324] text-xs rounded-full font-medium">Activo</span>
                  </span>
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">
                  Fecha de Registro
                  {editMode && <span className="ml-2 text-xs text-gray-400 inline-flex items-center gap-1"><Lock className="w-3 h-3" />No editable</span>}
                </label>
                <p className="text-lg text-gray-900">
                  {new Date(perfilData.fechaRegistro).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow col-span-2">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <Home className="w-5 h-5 text-[#357324]" />Datos del Rancho
              </h3>
            </div>
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Nombre del Rancho</label>
                {editMode ? (
                  <input
                    type="text"
                    value={editData.nombreRancho}
                    onChange={(e) => setEditData({ ...editData, nombreRancho: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#357324] focus:border-transparent"
                  />
                ) : (
                  <p className="text-lg text-gray-900">{perfilData.nombreRancho}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Municipio</label>
                {editMode ? (
                  <input
                    type="text"
                    value={editData.municipio}
                    onChange={(e) => setEditData({ ...editData, municipio: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#357324] focus:border-transparent"
                  />
                ) : (
                  <p className="text-lg text-gray-900">{perfilData.municipio}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Estado</label>
                {editMode ? (
                  <input
                    type="text"
                    value={editData.estado}
                    onChange={(e) => setEditData({ ...editData, estado: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#357324] focus:border-transparent"
                  />
                ) : (
                  <p className="text-lg text-gray-900">{perfilData.estado}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Número de Cabezas</label>
                {editMode ? (
                  <input
                    type="number"
                    value={editData.numeroCabezas}
                    onChange={(e) => setEditData({ ...editData, numeroCabezas: parseInt(e.target.value) || 0 })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#357324] focus:border-transparent"
                  />
                ) : (
                  <p className="text-lg text-gray-900">{perfilData.numeroCabezas}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Capacidad de Animales</label>
                {editMode ? (
                  <input
                    type="number"
                    value={editData.capacidadAnimales}
                    onChange={(e) => setEditData({ ...editData, capacidadAnimales: parseInt(e.target.value) || 0 })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#357324] focus:border-transparent"
                  />
                ) : (
                  <p className="text-lg text-gray-900">{perfilData.capacidadAnimales}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Hectáreas</label>
                {editMode ? (
                  <input
                    type="number"
                    step="0.01"
                    value={editData.hectareas}
                    onChange={(e) => setEditData({ ...editData, hectareas: parseFloat(e.target.value) || 0 })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#357324] focus:border-transparent"
                  />
                ) : (
                  <p className="text-lg text-gray-900">{perfilData.hectareas}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Dirección</label>
                {editMode ? (
                  <input
                    type="text"
                    value={editData.direccion}
                    onChange={(e) => setEditData({ ...editData, direccion: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#357324] focus:border-transparent"
                  />
                ) : (
                  <p className="text-lg text-gray-900">{perfilData.direccion}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Tipo de Rancho</label>
                {editMode ? (
                  <input
                    type="text"
                    value={editData.tipoRancho}
                    onChange={(e) => setEditData({ ...editData, tipoRancho: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#357324] focus:border-transparent"
                  />
                ) : (
                  <p className="text-lg text-gray-900">{perfilData.tipoRancho}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Documentación Adjunta */}
        <div className="bg-white rounded-xl shadow mb-8">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#357324]" />
              Documentación Personal 
            </h3>
          </div>
          <div className="space-y-2 p-6">
            {perfilData.documentos.map((doc, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-gray-600 flex-shrink-0" />
                  <div>
                    <p className="text-gray-900 font-medium">{doc.nombre}</p>
                    <p className="text-xs text-gray-500">{doc.archivo}</p>
                  </div>
                </div>
                <button className="inline-flex items-center gap-2 px-4 py-2 text-[#357324] hover:bg-[#e8f3e5] rounded-lg font-medium text-sm transition-colors">
                  <Eye className="w-4 h-4" />
                  Ver
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Botones de Acción */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-wrap gap-3 justify-center mb-8">
          <button
            onClick={() => setShowPasswordModal(true)}
            className="inline-flex items-center gap-2 px-5 py-3 border-2 border-[#357324] text-[#357324] hover:bg-[#e8f3e5] rounded-lg font-medium transition-colors"
          >
            <Lock className="w-4 h-4" />Cambiar Contraseña
          </button>
          <button
            onClick={() => setShowChangesModal(true)}
            className="inline-flex items-center gap-2 px-5 py-3 border-2 border-amber-400 text-amber-600 hover:bg-amber-50 rounded-lg font-medium transition-colors"
          >
            <Clock className="w-4 h-4" />
            Solicitudes de Cambio
          </button>
          {!editMode ? (
            <button
              onClick={() => setEditMode(true)}
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#357324] hover:bg-[#2a5c1d] text-white rounded-lg font-medium transition-colors"
            >
              <Edit3 className="w-4 h-4" />Editar Perfil
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={cancelEdit}
                className="inline-flex items-center gap-2 px-5 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg font-medium transition-colors"
              >
                <X className="w-4 h-4" />Cancelar
              </button>
              <button
                onClick={handleSaveChanges}
                disabled={!hasChanges()}
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#357324] hover:bg-[#2a5c1d] text-white rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Save className="w-4 h-4" />Enviar Cambios
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Modal Cambiar Contraseña */}
      {showPasswordModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Cambiar Contraseña</h2>
              <button onClick={() => { setShowPasswordModal(false); setPasswordData({ actual: '', nueva: '', confirmar: '' }); }} className="p-2 hover:bg-gray-100 rounded-lg">
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <div className="p-6 space-y-5">
              <div className="bg-[#D1EEC9] border border-[#a8dda0] rounded-lg p-3">
                <p className="text-sm text-[#1f4115] flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  El cambio de contraseña se aplica de forma inmediata sin necesidad de aprobación.
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Contraseña Actual *</label>
                <div className="relative">
                  <input
                    type={showOldPassword ? 'text' : 'password'}
                    value={passwordData.actual}
                    onChange={(e) => setPasswordData({ ...passwordData, actual: e.target.value })}
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#357324] focus:border-transparent"
                    placeholder="Ingresa tu contraseña actual"
                  />
                  <button type="button" onClick={() => setShowOldPassword(!showOldPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                    {showOldPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nueva Contraseña *</label>
                <div className="relative">
                  <input
                    type={showNewPassword ? 'text' : 'password'}
                    value={passwordData.nueva}
                    onChange={(e) => setPasswordData({ ...passwordData, nueva: e.target.value })}
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#357324] focus:border-transparent"
                    placeholder="Mínimo 8 caracteres"
                  />
                  <button type="button" onClick={() => setShowNewPassword(!showNewPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                    {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Confirmar Nueva Contraseña *</label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={passwordData.confirmar}
                    onChange={(e) => setPasswordData({ ...passwordData, confirmar: e.target.value })}
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#357324] focus:border-transparent"
                    placeholder="Repite la nueva contraseña"
                  />
                  <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {passwordData.confirmar && passwordData.nueva !== passwordData.confirmar && (
                  <p className="text-xs text-red-500 mt-1">Las contraseñas no coinciden</p>
                )}
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex gap-3">
              <button
                onClick={() => { setShowPasswordModal(false); setPasswordData({ actual: '', nueva: '', confirmar: '' }); }}
                className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg font-medium transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handlePasswordChange}
                disabled={!passwordData.actual || !passwordData.nueva || !passwordData.confirmar || passwordData.nueva !== passwordData.confirmar}
                className="flex-1 px-4 py-3 bg-[#357324] hover:bg-[#2a5c1d] text-white rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Actualizar Contraseña
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Confirmar Cambios */}
      {showConfirmPasswordField && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">Confirmar Cambios</h2>
              <p className="text-sm text-gray-500 mt-1">Los siguientes cambios serán enviados para aprobación administrativa</p>
            </div>
            <div className="p-6 space-y-4">
              {getChangedFields().map((change, idx) => (
                <div key={idx} className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm font-medium text-gray-700 mb-1">{change.campo}</p>
                  <p className="text-sm text-gray-500">
                    <span className="line-through">{change.anterior}</span>
                    <span className="mx-2">→</span>
                    <span className="text-[#357324] font-medium">{change.nuevo}</span>
                  </p>
                </div>
              ))}
            </div>
            <div className="p-6 border-t border-gray-200 flex gap-3">
              <button
                onClick={() => setShowConfirmPasswordField(false)}
                className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg font-medium transition-colors"
              >
                Cancelar
              </button>
              <div className="relative">
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#357324] focus:border-transparent"
                  placeholder="Ingresa tu contraseña para confirmar"
                />
                <button type="button" onClick={() => setShowConfirmPasswordField(!showConfirmPasswordField)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  {showConfirmPasswordField ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              <button
                onClick={confirmSaveChanges}
                className="flex-1 px-4 py-3 bg-[#357324] hover:bg-[#2a5c1d] text-white rounded-lg font-medium transition-colors"
              >
                Enviar para Aprobación
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Solicitudes de Cambio */}
      {showChangesModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-500" />
                Solicitudes de Cambio
              </h2>
              <button onClick={() => setShowChangesModal(false)} className="p-2 hover:bg-gray-100 rounded-lg">
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <div className="p-6">
              {cambiosPendientes.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <Clock className="w-12 h-12 text-gray-300 mb-4" />
                  <p className="text-gray-500 text-lg">No hubo solicitudes de cambios</p>
                </div>
              ) : (
                <div className="divide-y divide-gray-100">
                  {cambiosPendientes.map((cambio, idx) => (
                    <div key={idx} className="py-4 flex items-center justify-between">
                      <div className="flex items-center gap-4 flex-1">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          cambio.estado === 'pendiente' ? 'bg-amber-100' :
                          cambio.estado === 'aprobado' ? 'bg-green-100' : 'bg-red-100'
                        }`}>
                          <Clock className={`w-5 h-5 ${
                            cambio.estado === 'pendiente' ? 'text-amber-600' :
                            cambio.estado === 'aprobado' ? 'text-green-600' : 'text-red-600'
                          }`} />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">Cambio en: {cambio.campo}</p>
                          <p className="text-sm text-gray-500">
                            <span className="line-through">{cambio.valorActual}</span>
                            <span className="mx-2">→</span>
                            <span className="text-[#357324] font-medium">{cambio.valorNuevo}</span>
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-400">
                          {new Date(cambio.fecha).toLocaleDateString('es-MX', { year: 'numeric', month: 'short', day: 'numeric' })}
                        </p>
                        <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full mt-1 ${
                          cambio.estado === 'pendiente' ? 'bg-amber-100 text-amber-800' :
                          cambio.estado === 'aprobado' ? 'bg-green-100 text-green-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {cambio.estado === 'pendiente' ? 'Pendiente' : cambio.estado === 'aprobado' ? 'Aprobado' : 'Rechazado'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}