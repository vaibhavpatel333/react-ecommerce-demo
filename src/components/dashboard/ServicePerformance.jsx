import React from "react";
import { DesignServices, VideoCall } from "@mui/icons-material";

const ServicePerformance = () => {
  return (
    <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-sm font-bold">Service Performance</h4>
        <a className="text-[10px] text-blue-500 font-semibold uppercase" href="#">
          Manage
        </a>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-500 mr-3">
              <DesignServices fontSize="small" />
            </div>
            <div>
              <p className="text-[11px] font-bold">Personal Styling</p>
              <p className="text-[9px] text-slate-400">Rating: 4.8</p>
            </div>
          </div>
          <p className="text-[11px] font-bold">₹24,000</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center text-purple-500 mr-3">
              <VideoCall fontSize="small" />
            </div>
            <div>
              <p className="text-[11px] font-bold">Virtual Consultation</p>
              <p className="text-[9px] text-slate-400">Rating: 4.2</p>
            </div>
          </div>
          <p className="text-[11px] font-bold">₹16,000</p>
        </div>
      </div>
    </div>
  );
};

export default ServicePerformance;
