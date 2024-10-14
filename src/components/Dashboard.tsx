import React from 'react';
import { BarChart, DollarSign, ShoppingBag, TrendingUp } from 'lucide-react';
import MetricCard from './MetricCard';
import SalesChart from './SalesChart';

const Dashboard: React.FC = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard title="Total Sales" value="$12,345" icon={<DollarSign />} change={5.2} />
        <MetricCard title="Orders" value="256" icon={<ShoppingBag />} change={-2.1} />
        <MetricCard title="Conversion Rate" value="3.2%" icon={<TrendingUp />} change={0.5} />
        <MetricCard title="Average Order Value" value="$48.22" icon={<BarChart />} change={1.8} />
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Sales Overview</h2>
        <SalesChart />
      </div>
    </div>
  );
};

export default Dashboard;