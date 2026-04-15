import { useState } from 'react';
import { Link } from 'react-router';
import { User, LogOut, PanelLeftClose, PanelLeft } from 'lucide-react';
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

  return (
    <aside
      className={`bg-white shadow-lg flex flex-col flex-shrink-0 transition-all duration-300 ease-in-out ${
        collapsed ? 'w-[76px]' : 'w-72'
      }`}
    >
      <div className="flex-1 flex flex-col">
        {/* Toggle button */}
        <div className={`flex ${collapsed ? 'justify-center' : 'justify-end'} px-3 pt-4 pb-2`}>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            title={collapsed ? 'Expandir menú' : 'Colapsar menú'}
          >
            {collapsed ? <PanelLeft className="w-5 h-5" /> : <PanelLeftClose className="w-5 h-5" />}
          </button>
        </div>

        {/* User info */}
        <div className={`px-4 mb-6 ${collapsed ? 'flex justify-center' : ''}`}>
          <div className={`flex items-center ${collapsed ? '' : 'space-x-3'}`}>
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: theme.avatarBg }}
            >
              <User className="w-6 h-6" style={{ color: theme.avatarText }} />
            </div>
            {!collapsed && (
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
                className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors ${
                  collapsed ? 'justify-center' : ''
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
                title={collapsed ? item.label : undefined}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {!collapsed && <span className="truncate">{item.label}</span>}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Logout */}
      <div className="px-3 py-4 border-t border-gray-200">
        <Link
          to="/login"
          className={`flex items-center gap-3 px-3 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors ${
            collapsed ? 'justify-center' : ''
          }`}
          title={collapsed ? 'Cerrar Sesión' : undefined}
        >
          <LogOut className="w-5 h-5 flex-shrink-0" />
          {!collapsed && <span>Cerrar Sesión</span>}
        </Link>
      </div>
    </aside>
  );
}
