import React from "react";
import { TrendingUp, TrendingDown, Verified } from "@mui/icons-material";

const MetricCard = ({ title, value, change, icon: Icon, changeColor, bars }) => (
  <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
    <div className="flex justify-between items-start">
      <div>
        <p className="text-xs text-slate-500 font-medium mb-1 uppercase tracking-wider">
          {title}
        </p>
        <h3 className="text-xl font-bold">{value}</h3>
        {change && (
          <p className={`text-[10px] flex items-center mt-1 ${changeColor}`}>
            <Icon fontSize="small" className="mr-1" /> {change}
          </p>
        )}
      </div>
      <div className="h-10 w-16 flex items-end space-x-1">{bars}</div>
    </div>
  </div>
);

const MetricsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <MetricCard
        title="Avg. Sales/Month"
        value="₹4,52,000"
        change="+12.5%"
        icon={TrendingUp}
        changeColor="text-green-500"
        bars={
          <>
            <div className="w-2 bg-blue-100 h-1/2" />
            <div className="w-2 bg-blue-200 h-2/3" />
            <div className="w-2 bg-blue-300 h-1/3" />
            <div className="w-2 bg-blue-500 h-full" />
          </>
        }
      />

      <MetricCard
        title="Avg. Order Value"
        value="₹1,240"
        change="-2.1%"
        icon={TrendingDown}
        changeColor="text-rose-500"
        bars={
          <>
            <div className="w-2 bg-rose-100 h-3/4" />
            <div className="w-2 bg-rose-200 h-1/2" />
            <div className="w-2 bg-rose-300 h-5/6" />
            <div className="w-2 bg-rose-500 h-2/3" />
          </>
        }
      />

      <MetricCard
        title="Store Health Score"
        value="94%"
        change="80%"
        icon={Verified}
        changeColor="text-green-500"
        bars={
          <>
            <div className="w-2 bg-green-100 h-1/3" />
            <div className="w-2 bg-green-200 h-2/3" />
            <div className="w-2 bg-green-300 h-full" />
            <div className="w-2 bg-green-500 h-3/4" />
          </>
        }
      />

      <MetricCard
        title="Inventory Value (₹)"
        value="₹14,25,000"
        bars={
          <>
            <div className="w-2 bg-slate-100 h-1/2" />
            <div className="w-2 bg-slate-200 h-2/3" />
            <div className="w-2 bg-slate-300 h-5/6" />
            <div className="w-2 bg-primary h-full" />
          </>
        }
      />
    </div>
  );
};

export default MetricsGrid;
