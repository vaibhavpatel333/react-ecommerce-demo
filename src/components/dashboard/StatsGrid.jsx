import React from "react";
import {
  Inventory2,
  Hub,
  WarningAmber,
  ErrorOutline,
} from "@mui/icons-material";

const StatCard = ({ icon: Icon, bg, color, label, value }) => (
  <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
    <div className="flex items-center justify-between mb-2">
      <div className={`p-2 rounded-lg ${bg} ${color}`}>
        <Icon fontSize="small" />
      </div>
    </div>
    <p className="text-xs text-slate-500 font-medium">{label}</p>
    <h3 className="text-2xl font-bold mt-1">{value}</h3>
  </div>
);

const StatsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <StatCard
        icon={Inventory2}
        bg="bg-blue-50 dark:bg-blue-900/30"
        color="text-blue-600 dark:text-blue-400"
        label="Total Products"
        value="124"
      />
      <StatCard
        icon={Hub}
        bg="bg-purple-50 dark:bg-purple-900/30"
        color="text-purple-600 dark:text-purple-400"
        label="Active Variants"
        value="412"
      />
      <StatCard
        icon={WarningAmber}
        bg="bg-orange-50 dark:bg-orange-900/30"
        color="text-orange-600 dark:text-orange-400"
        label="Low Stock Items"
        value="18"
      />
      <StatCard
        icon={ErrorOutline}
        bg="bg-rose-50 dark:bg-rose-900/30"
        color="text-rose-600 dark:text-rose-400"
        label="Out of Stock"
        value="4"
      />
    </div>
  );
};

export default StatsGrid;
