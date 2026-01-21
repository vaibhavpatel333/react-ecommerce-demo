import React from "react";
import { TrendingUp, Insights } from "@mui/icons-material";

const ForecastSection = () => {
  return (
    <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold">AI Predictive Forecast</h3>
          <p className="text-xs text-slate-500">
            Inventory trends based on sales history
          </p>
        </div>
        <div className="flex items-center space-x-4 text-[10px]">
          <span className="flex items-center">
            <span className="w-2 h-2 rounded-full bg-blue-500 mr-1"></span> Actual
          </span>
          <span className="flex items-center">
            <span className="w-2 h-2 rounded-full bg-blue-200 mr-1"></span> Predicted
          </span>
        </div>
      </div>

      <div className="h-64 relative flex items-end justify-between px-4">
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <path
            d="M0 180 Q 50 170, 100 190 T 200 160 T 300 150 T 400 100 T 500 80 T 600 60"
            fill="none"
            stroke="#1976d2"
            strokeWidth="2"
          />
        </svg>
        <div className="text-[10px] text-slate-400 mt-auto flex w-full justify-between pt-4">
          <span>JAN</span>
          <span>FEB</span>
          <span>MAR</span>
          <span>APR</span>
          <span>MAY</span>
          <span>JUN (PRE)</span>
          <span>JUL (PRE)</span>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-start">
          <TrendingUp fontSize="small" className="text-blue-500 mr-2" />
          <div>
            <p className="text-[11px] font-medium text-slate-800 dark:text-slate-200">
              "Bohemian Jewelry" is trending in Mumbai
            </p>
            <p className="text-[10px] text-slate-500">
              Expected +42% growth next month
            </p>
          </div>
        </div>

        <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg flex items-start">
          <Insights fontSize="small" className="text-purple-500 mr-2" />
          <div>
            <p className="text-[11px] font-medium text-slate-800 dark:text-slate-200">
              "Eco-friendly home decor" searches peaking
            </p>
            <p className="text-[10px] text-slate-500">
              Replenish stock for North-East region
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForecastSection;
