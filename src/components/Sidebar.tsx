import React from 'react';
import { LayoutDashboard, ShoppingBag, BarChart, Settings } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard /> },
    { id: 'products', label: 'Products', icon: <ShoppingBag /> },
    { id: 'analytics', label: 'Analytics', icon: <BarChart /> },
    { id: 'settings', label: 'Settings', icon: <Settings /> },
  ];

  return (
    <aside className="bg-indigo-700 text-white w-64 min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-8">Etsy Analytics</h1>
      <nav>
        <ul>
          {menuItems.map((item) => (
            <li key={item.id} className="mb-2">
              <button
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center w-full p-2 rounded-lg transition-colors ${
                  activeTab === item.id ? 'bg-indigo-800' : 'hover:bg-indigo-600'
                }`}
              >
                {item.icon}
                <span className="ml-3">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;