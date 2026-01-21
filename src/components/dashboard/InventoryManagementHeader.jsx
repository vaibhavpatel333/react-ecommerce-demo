import React from "react";
import { WarningAmber, FilterList } from "@mui/icons-material";

const InventoryManagementHeader = () => {
  return (
    <div 
      className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-6 bg-white dark:bg-slate-900 rounded-lg"
      style={{
        boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.1), 0 1px 3px 0 rgba(0, 0, 0, 0.08)'
      }}
    >
      {/* Left side - Title and Subtitle */}
      <div className="flex-1">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-1">
          Inventory Management
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Manage stock levels and variants across your store.{" "}
          <span className="text-primary font-semibold cursor-pointer hover:underline">18 Low stock alerts</span>
        </p>
      </div>
      
      {/* Right side - Action Buttons */}
      <div className="flex items-center gap-3 flex-shrink-0">
        <button 
          className="px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors border"
          style={{
            backgroundColor: '#FFF7ED',
            borderColor: '#FED7AA',
            borderWidth: '1px',
            color: '#EA580C',
            boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
          }}
        >
          <WarningAmber fontSize="small" sx={{ color: '#EA580C' }} />
          Low Stock Only
        </button>
        
        <button 
          className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors"
          style={{
            boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
          }}
        >
          <FilterList fontSize="small" />
          Filters
        </button>
      </div>
    </div>
  );
};

export default InventoryManagementHeader;
