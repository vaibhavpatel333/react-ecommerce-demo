import React, { useState } from "react";
import { Search, Add, Notifications } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import AddProductModal from "./AddProductModal";
import SearchModal from "./SearchModal";

const Header = () => {
  const navigate = useNavigate();
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);

  return (
    <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      {/* <div>
        <h1 className="text-2xl font-bold">Inventory Management</h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
          Manage stock levels and variants across your store.{" "}
          <span className="text-blue-500 font-semibold">18 Low stock alerts</span>
        </p>
      </div> */}

      <div className="flex items-center space-x-3 justify-between w-full">
        <div className="relative flex-1 max-w-md">
          <Search
            fontSize="small"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
          />
          <input
            onClick={() => setShowSearchModal(true)}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-700 dark:text-slate-300 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all cursor-pointer"
            placeholder="Search inventory, tags, or SKUs..."
            type="text"
            readOnly
          />
        </div>

        <div className="flex items-center space-x-3">
          {/* Notification Bell Icon */}
          <button className="relative p-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
            <Notifications className="text-slate-600 dark:text-slate-400" fontSize="small" />
            <span className="absolute top-0.5 right-0.5 w-2 h-2 bg-red-500 rounded-full border border-white dark:border-slate-900"></span>
          </button>

          {/* Add Product Button */}
          <button
            className="bg-primary hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors shadow-sm"
            onClick={() => setShowAddProductModal(true)}
          >
            <Add fontSize="small" />
            Add Product
          </button>
        </div>
      </div>

      {/* Add Product Modal */}
      <AddProductModal 
        isOpen={showAddProductModal} 
        onClose={() => setShowAddProductModal(false)} 
      />

      {/* Search Modal */}
      <SearchModal 
        isOpen={showSearchModal} 
        onClose={() => setShowSearchModal(false)} 
      />
    </header>
  );
};

export default Header;
