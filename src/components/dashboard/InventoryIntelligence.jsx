import React from "react";
import {
  ErrorOutline,
  WarningAmber,
  TrendingDown,
  AssignmentReturn,
  ArrowForwardIos,
  ShowChart,
} from "@mui/icons-material";

const IntelligenceCard = ({ icon: Icon, iconBg, iconColor, title, value, valueColor, description, additionalMetric, arrowIcon }) => (
  <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm relative cursor-pointer hover:shadow-md transition-shadow">
    <div className="flex items-start justify-between mb-3">
      <div className={`p-2 rounded-lg ${iconBg} ${iconColor}`}>
        <Icon fontSize="small" />
      </div>
      {arrowIcon && (
        <ArrowForwardIos className="text-slate-400" style={{ fontSize: '14px' }} />
      )}
    </div>
    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-1">{title}</p>
    <h3 className={`text-3xl font-bold mb-2 ${valueColor || 'text-slate-900 dark:text-slate-100'}`}>
      {value}
    </h3>
    {additionalMetric && (
      <div className="mb-2 flex items-center gap-1">
        <span className="text-[10px] text-primary font-medium">{additionalMetric.label}</span>
        {additionalMetric.icon && <ShowChart style={{ fontSize: '12px', color: '#3b82f6' }} />}
        <span className="text-sm font-bold text-primary">{additionalMetric.value}</span>
      </div>
    )}
    <p className="text-xs text-slate-400 dark:text-slate-500">{description}</p>
  </div>
);

const InventoryIntelligence = () => {
  return (
    <div className="mb-6">
      {/* Header Section */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">
            Inventory Intelligence
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Predictive Supply Chain Monitoring
          </p>
        </div>
        <button className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
          AI Sync: Just now
        </button>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <IntelligenceCard
          icon={ErrorOutline}
          iconBg="bg-red-100 dark:bg-red-900/30"
          iconColor="text-red-600 dark:text-red-400"
          title="Out of Stock"
          value="2"
          valueColor="text-red-600 dark:text-red-500"
          description="Requires immediate action"
          arrowIcon={true}
        />
        
        <IntelligenceCard
          icon={WarningAmber}
          iconBg="bg-orange-100 dark:bg-orange-900/30"
          iconColor="text-orange-600 dark:text-orange-400"
          title="Low Stock"
          value="5"
          valueColor="text-orange-600 dark:text-orange-500"
          description="Velocity high; Restock ASAP"
          additionalMetric={{
            label: "Stockout Prob.",
            value: "88%",
            icon: true
          }}
          arrowIcon={true}
        />
        
        <IntelligenceCard
          icon={TrendingDown}
          iconBg="bg-slate-100 dark:bg-slate-800"
          iconColor="text-slate-600 dark:text-slate-400"
          title="Slow Moving"
          value="12"
          valueColor="text-slate-900 dark:text-slate-100"
          description="Inactive for 30+ days"
          arrowIcon={true}
        />
        
        <IntelligenceCard
          icon={AssignmentReturn}
          iconBg="bg-slate-100 dark:bg-slate-800"
          iconColor="text-slate-600 dark:text-slate-400"
          title="Returns Rate"
          value="1.8%"
          valueColor="text-slate-900 dark:text-slate-100"
          description="0.2% improvement from LW"
          arrowIcon={true}
        />
      </div>
    </div>
  );
};

export default InventoryIntelligence;
