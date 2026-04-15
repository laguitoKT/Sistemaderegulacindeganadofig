import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductorDashboard from './pages/ProductorDashboard';
import TraspatrioDashboard from './pages/TraspatrioDashboard';
import ProductorPerfil from './pages/ProductorPerfil';
import RegistroAnimal from './pages/RegistroAnimal';
import MisAnimales from './pages/MisAnimales';
import ModificarAnimales from './pages/ModificarAnimales';
import HistorialAcciones from './pages/HistorialAcciones';
import VeterinarioDashboard from './pages/VeterinarioDashboard';
import VeterinarioSolicitudes from './pages/VeterinarioSolicitudes';
import VeterinarioPerfil from './pages/VeterinarioPerfil';
import VeterinarianActivityLog from './pages/VeterinarianActivityLog';
import AdminDashboard from './pages/AdminDashboard';
import AdminSolicitudes from './pages/AdminSolicitudes';
import AdminUsuarios from './pages/AdminUsuarios';
import AdminActivityLog from './pages/AdminActivityLog';
import AdminActivityLogAdmins from './pages/AdminActivityLogAdmins';
import AdminPerfil from './pages/AdminPerfil';
import ConsultaPublica from './pages/ConsultaPublica';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/productor" element={<ProductorDashboard />} />
        <Route path="/traspatio" element={<TraspatrioDashboard />} />
        <Route path="/productor/perfil" element={<ProductorPerfil />} />
        <Route path="/registro-animal" element={<RegistroAnimal />} />
        <Route path="/mis-animales" element={<MisAnimales />} />
        <Route path="/modificar-animales" element={<ModificarAnimales />} />
        <Route path="/historial-acciones" element={<HistorialAcciones />} />
        <Route path="/veterinario" element={<VeterinarioDashboard />} />
        <Route path="/veterinario/solicitudes" element={<VeterinarioSolicitudes />} />
        <Route path="/veterinario/actividades" element={<VeterinarianActivityLog />} />
        <Route path="/veterinario/perfil" element={<VeterinarioPerfil />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/usuarios" element={<AdminUsuarios />} />
        <Route path="/admin/solicitudes" element={<AdminSolicitudes />} />
        <Route path="/admin/actividades" element={<AdminActivityLog />} />
        <Route path="/admin/actividades-admin" element={<AdminActivityLogAdmins />} />
        <Route path="/admin/perfil" element={<AdminPerfil />} />
        <Route path="/consulta/:id" element={<ConsultaPublica />} />
      </Routes>
    </BrowserRouter>
  );
}
