import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { User, LogOut, PanelLeftClose, PanelLeft, Menu, X } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  key: string;
  label: string;
  icon: LucideIcon;
  to: string;
}

export interface SidebarTheme {
  avatarBg: string;
  avatarText: string;
  activeBg: string;
  activeText: string;
}

interface CollapsibleSidebarProps {
  userName: string;
  userRole: string;
  navItems: NavItem[];
  activeKey: string;
  theme: SidebarTheme;
}

export default function CollapsibleSidebar({
  userName,
  userRole,
  navItems,
  activeKey,
  theme,
}: CollapsibleSidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu on route change / resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const sidebarContent = (isMobile: boolean) => (
    <>
      <div className="flex-1 flex flex-col">
        {/* Toggle / Close button */}
        <div className={`flex ${isMobile ? 'justify-between' : (collapsed ? 'justify-center' : 'justify-end')} px-3 pt-4 pb-2`}>
          {isMobile ? (
            <>
              <span className="text-sm font-medium text-gray-500 px-2 pt-2">Menu</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </>
          ) : (
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              title={collapsed ? 'Expandir menu' : 'Colapsar menu'}
            >
              {collapsed ? <PanelLeft className="w-5 h-5" /> : <PanelLeftClose className="w-5 h-5" />}
            </button>
          )}
        </div>

        {/* User info */}
        <div className={`px-4 mb-6 ${!isMobile && collapsed ? 'flex justify-center' : ''}`}>
          <div className={`flex items-center ${!isMobile && collapsed ? '' : 'space-x-3'}`}>
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: theme.avatarBg }}
            >
              <User className="w-6 h-6" style={{ color: theme.avatarText }} />
            </div>
            {(isMobile || !collapsed) && (
              <div className="min-w-0">
                <h2 className="text-base font-semibold text-gray-900 truncate">{userName}</h2>
                <p className="text-xs text-gray-500 truncate">{userRole}</p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="px-3 space-y-1 flex-1">
          {navItems.map((item) => {
            const isActive = activeKey === item.key;
            const Icon = item.icon;
            return (
              <Link
                key={item.key}
                to={item.to}
                onClick={() => isMobile && setMobileOpen(false)}
                className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors ${
                  !isMobile && collapsed ? 'justify-center' : ''
                } ${
                  isActive
                    ? 'font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                style={
                  isActive
                    ? { backgroundColor: theme.activeBg, color: theme.activeText }
                    : undefined
                }
                title={!isMobile && collapsed ? item.label : undefined}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {(isMobile || !collapsed) && <span className="truncate">{item.label}</span>}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Logout */}
      <div className="px-3 py-4 border-t border-gray-200">
        <Link
          to="/login"
          onClick={() => isMobile && setMobileOpen(false)}
          className={`flex items-center gap-3 px-3 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors ${
            !isMobile && collapsed ? 'justify-center' : ''
          }`}
          title={!isMobile && collapsed ? 'Cerrar Sesion' : undefined}
        >
          <LogOut className="w-5 h-5 flex-shrink-0" />
          {(isMobile || !collapsed) && <span>Cerrar Sesion</span>}
        </Link>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile hamburger button - fixed top bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-200 px-4 py-3 flex items-center gap-3">
        <button
          onClick={() => setMobileOpen(true)}
          className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <Menu className="w-6 h-6" />
        </button>
        <div className="flex items-center gap-2 min-w-0">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: theme.avatarBg }}
          >
            <User className="w-4 h-4" style={{ color: theme.avatarText }} />
          </div>
          <span className="text-sm font-medium text-gray-900 truncate">{userName}</span>
        </div>
      </div>

      {/* Mobile drawer overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
          <aside className="absolute left-0 top-0 bottom-0 w-72 bg-white shadow-lg flex flex-col z-10">
            {sidebarContent(true)}
          </aside>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside
        className={`hidden lg:flex bg-white shadow-lg flex-col flex-shrink-0 transition-all duration-300 ease-in-out ${
          collapsed ? 'w-[76px]' : 'w-72'
        }`}
      >
        {sidebarContent(false)}
      </aside>
    </>
  );
}
