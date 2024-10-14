import React, { useState } from 'react';
import { BarChart, DollarSign, ShoppingBag, TrendingUp } from 'lucide-react';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-8">Etsy Analytics Dashboard</h1>
        {activeTab === 'dashboard' && <Dashboard />}
        {/* Add other components for different tabs here */}
      </main>
    </div>
  );
}

export default App;