import React from "react";

const StarPerformers = () => {
  return (
    <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-sm font-bold">Star Performers</h4>
        <a className="text-[10px] text-blue-500 font-semibold uppercase" href="#">
          View All
        </a>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 mr-3"></div>
            <div>
              <p className="text-[11px] font-bold">Premium Silk Saree</p>
              <p className="text-[9px] text-slate-400">Inventory: 24</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[11px] font-bold">₹1,32,000</p>
            <p className="text-[9px] text-green-500">+8%</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 mr-3"></div>
            <div>
              <p className="text-[11px] font-bold">Handcrafted Jhumkas</p>
              <p className="text-[9px] text-slate-400">Inventory: 112</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[11px] font-bold">₹85,500</p>
            <p className="text-[9px] text-green-500">+14%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarPerformers;
