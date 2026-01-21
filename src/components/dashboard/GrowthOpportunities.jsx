import React from "react";
import { Bolt } from "@mui/icons-material";

const GrowthOpportunities = () => {
  return (
    <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-sm font-bold">Growth Opportunities</h4>
        <a className="text-[10px] text-blue-500 font-semibold uppercase" href="#">
          Scan All
        </a>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded bg-slate-100 dark:bg-slate-800 mr-3"></div>
            <div>
              <p className="text-[11px] font-bold">Hand-painted Mug</p>
              <p className="text-[9px] text-slate-400">Trending search term</p>
            </div>
          </div>
          <Bolt fontSize="small" className="text-blue-500" />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded bg-slate-100 dark:bg-slate-800 mr-3"></div>
            <div>
              <p className="text-[11px] font-bold">Woven Bamboo Tray</p>
              <p className="text-[9px] text-slate-400">High conversion potential</p>
            </div>
          </div>
          <Bolt fontSize="small" className="text-blue-500" />
        </div>
      </div>
    </div>
  );
};

export default GrowthOpportunities;
