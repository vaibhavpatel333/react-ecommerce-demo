import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LayersIcon from "@mui/icons-material/Layers";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import CampaignIcon from "@mui/icons-material/Campaign";
import BusinessIcon from "@mui/icons-material/Business";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import CategoryIcon from "@mui/icons-material/Category";
import InventoryIcon from "@mui/icons-material/Inventory";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    setActivePath(location.pathname); // update activePath on route change
  }, [location.pathname]);

  const handleNavigate = (path) => {
    setActivePath(path);
    navigate(path);
  };

  return (
    <aside className="w-64 flex-shrink-0 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-y-auto hidden md:flex flex-col">
      {/* Logo */}
      <div className="p-6 flex items-center space-x-2">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
          <LayersIcon className="text-xl" />
        </div>
        <span className="text-xl font-bold tracking-tight">LYNKD</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-2 space-y-1">
        {/* Dashboard */}
        <a
          className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
            activePath === "/" ? "sidebar-item-active" : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
          } transition-colors`}
          onClick={() => handleNavigate("/")}
        >
          <DashboardIcon className="mr-3 text-lg" /> Dashboard
        </a>

        {/* Store */}
        <div>
          <a
            className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
              activePath.startsWith("/products") ? "sidebar-item-active" : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
            } transition-colors`}
            onClick={() => handleNavigate("/products/add")}
          >
            <StorefrontIcon className="mr-3 text-lg" /> Store
          </a>

          {/* Nested Links - Catalog */}
          <div className="ml-8 space-y-1 mt-1">
            <div className="text-xs font-semibold text-slate-900 dark:text-slate-100 py-1 px-2">
              Catalog
            </div>
            <a
              className={`block text-xs py-1 px-2 rounded ${
                activePath === "/catalog/service" ? "text-primary font-semibold" : "text-slate-500 dark:text-slate-400 hover:text-primary"
              }`}
              onClick={() => handleNavigate("/catalog/service")}
            >
              Service Catalog
            </a>
            <a
              className={`block text-xs py-1 px-2 rounded ${
                activePath === "/catalog/categories" ? "text-primary font-semibold" : "text-slate-500 dark:text-slate-400 hover:text-primary"
              }`}
              onClick={() => handleNavigate("/catalog/categories")}
            >
              Categories
            </a>
            <a
              className={`block text-xs py-1 px-2 rounded ${
                activePath === "/products/bulk-upload" ? "text-primary font-semibold" : "text-slate-500 dark:text-slate-400 hover:text-primary"
              }`}
              onClick={() => handleNavigate("/products/bulk-upload")}
            >
              Bulk Upload Hub
            </a>
          </div>
        </div>

        {/* Orders */}
        <a
          className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
            activePath === "/products/live" ? "sidebar-item-active" : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
          } transition-colors`}
          onClick={() => handleNavigate("/products/live")}
        >
          <ShoppingBagIcon className="mr-3 text-lg" /> Orders
        </a>

        {/* Customers */}
        <a
          className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
            activePath === "/customers" ? "sidebar-item-active" : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
          } transition-colors`}
          onClick={() => handleNavigate("/customers")}
        >
          <PeopleIcon className="mr-3 text-lg" /> Customers
        </a>

        {/* Analytics */}
        <a
          className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
            activePath === "/analytics" ? "sidebar-item-active" : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
          } transition-colors`}
          onClick={() => handleNavigate("/analytics")}
        >
          <BarChartIcon className="mr-3 text-lg" /> Analytics
        </a>

        {/* Campaigns */}
        <a
          className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
            activePath === "/campaigns" ? "sidebar-item-active" : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
          } transition-colors`}
          onClick={() => handleNavigate("/campaigns")}
        >
          <CampaignIcon className="mr-3 text-lg" /> Campaigns
        </a>

        {/* Content Hub */}
        <a
          className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
            activePath === "/content-hub" ? "sidebar-item-active" : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
          } transition-colors`}
          onClick={() => handleNavigate("/content-hub")}
        >
          <BusinessIcon className="mr-3 text-lg" /> Content Hub
        </a>

        {/* Payouts */}
        <a
          className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
            activePath === "/payouts" ? "sidebar-item-active" : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
          } transition-colors`}
          onClick={() => handleNavigate("/payouts")}
        >
          <AccountBalanceWalletIcon className="mr-3 text-lg" /> Payouts
        </a>

        {/* Settings */}
        <a
          className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
            activePath === "/settings" ? "sidebar-item-active" : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
          } transition-colors`}
          onClick={() => handleNavigate("/settings")}
        >
          <SettingsIcon className="mr-3 text-lg" /> Settings
        </a>

        {/* Help Center */}
        <a
          className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
            activePath === "/help" ? "sidebar-item-active" : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
          } transition-colors`}
          onClick={() => handleNavigate("/help")}
        >
          <HelpOutlineIcon className="mr-3 text-lg" /> Help Center
        </a>
      </nav>

      {/* Footer / Profile */}
      <div className="p-4 border-t border-slate-200 dark:border-slate-800">
        <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-slate-300 dark:bg-slate-600 overflow-hidden">
            <img
              alt="User avatar"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuANnLW81sghXPw9pc_8ppthTreNfycIusildZhx1B40TKmw_I2WIauMAYrRp2G9sUUUJGvnih0NQvSqls0UCsp9YyhXOmFpFkZTZS0TNAwBovgds-8__cUE2J8DVFcCpaZvoioqrkUona-sYAoDu0bHt2AXXhUlTZS1xu27mPs2hPCyo4BT8mjjwHi3BnZnHb4hCnLigEcs-WqAexy3SmVktdeOxRyf7-7kyOKMwC_h12GJVhB1dEV5DNGI4LYhOVovJIDyeRzrHLha"
            />
          </div>
          <div>
            <p className="text-xs font-semibold">Store Admin</p>
            <p className="text-[10px] text-slate-500">Premium Account</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
