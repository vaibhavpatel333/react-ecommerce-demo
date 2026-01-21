import React from "react";
import { AutoAwesome, ShoppingCart, Sell } from "@mui/icons-material";

const AISuggestions = () => {
  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col">
      <div className="flex items-center space-x-2 mb-6">
        <AutoAwesome fontSize="small" className="text-blue-500" />
        <h3 className="text-lg font-bold">AI Strategic Suggestions</h3>
      </div>

      <div className="space-y-6 flex-1">
        <div className="flex items-start">
          <div className="mt-1 mr-3 w-6 h-6 rounded flex items-center justify-center bg-orange-100 dark:bg-orange-900/30 text-orange-600">
            <ShoppingCart fontSize="small" />
          </div>
          <div>
            <p className="text-xs font-bold mb-1">
              Replenish Hand-painted Mug stock before Diwali peak
            </p>
            <p className="text-[10px] text-slate-500 leading-relaxed">
              Expected 4.5x demand based on historical festive cycles.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="mt-1 mr-3 w-6 h-6 rounded flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-600">
            <Sell fontSize="small" />
          </div>
          <div>
            <p className="text-xs font-bold mb-1">
              Bundle "Personal Styling" with "Cotton Tunic"
            </p>
            <p className="text-[10px] text-slate-500 leading-relaxed">
              Suggested strategy to increase AOV by ~22%.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="mt-1 mr-3 w-6 h-6 rounded flex items-center justify-center bg-green-100 dark:bg-green-900/30 text-green-600">
            {/* <EcoIcon fontSize="small" /> */}
          </div>
          <div>
            <p className="text-xs font-bold mb-1">
              Shift ad spend to "Sustainable Jewelry"
            </p>
            <p className="text-[10px] text-slate-500 leading-relaxed">
              Conversion rates for this tag are higher this week.
            </p>
          </div>
        </div>
      </div>

      <button className="w-full mt-6 py-2.5 bg-primary text-white rounded-lg text-xs font-semibold hover:bg-blue-700 transition-all shadow-md">
        Apply All Smart Recommendations
      </button>
    </div>
  );
};

export default AISuggestions;
