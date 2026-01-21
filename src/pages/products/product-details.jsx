import React from "react";
import { useNavigate } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import EditIcon from "@mui/icons-material/Edit";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import ImageIcon from "@mui/icons-material/Image";
import AddIcon from "@mui/icons-material/Add";
import Header from "../../components/common/Header";

const ProductDetails = () => {
    const navigate = useNavigate();
    const productId = "1"; // In real app, this would come from route params or state

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-300">
            <div className="max-w-8xl mx-auto px-6 py-8">
                {/* Top Header with Search and Actions */}
                <Header />

                {/* Breadcrumbs */}
                <nav className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400 mb-3">
                    <a className="hover:text-primary transition-colors" href="#" onClick={(e) => { e.preventDefault(); navigate('/products/add'); }}>Store</a>
                    <ChevronRightIcon className="text-xs" />
                    <a className="hover:text-primary transition-colors" href="#" onClick={(e) => { e.preventDefault(); navigate('/products/add'); }}>Products</a>
                    <ChevronRightIcon className="text-xs" />
                    <span className="font-medium text-slate-700 dark:text-slate-200">iPhone 15 Premium</span>
                </nav>

                {/* Product Title and Actions */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                        <h1 className="text-3xl font-bold tracking-tight">iPhone 15 Premium</h1>
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 text-xs font-semibold tracking-wide flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            LIVE
                        </span>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                        <button 
                            onClick={() => navigate(`/products/edit/${productId}`)}
                            className="bg-primary hover:bg-blue-600 text-white px-5 py-2.5 rounded-xl font-medium flex items-center gap-2 shadow-sm transition-all active:scale-95"
                        >
                            <EditIcon style={{ fontSize: 20 }} />
                            Edit Product
                        </button>
                        <div className="relative">
                            <select className="appearance-none bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 pr-10 text-sm font-medium focus:ring-2 focus:ring-primary/20 outline-none cursor-pointer">
                                <option>Last 30 Days</option>
                                <option>Last 7 Days</option>
                                <option>This Month</option>
                                <option>Year to Date</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Performance Overview */}
                <section className="mb-10">
                    <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-6">Performance Overview</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Metric Cards */}
                        <div className="metric-card bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
                            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-2">Total Sales (₹)</p>
                            <h3 className="text-2xl font-bold mb-3">₹4,25,900</h3>
                            <div className="flex items-center text-emerald-500 text-sm font-semibold">
                                <TrendingUpIcon className="text-sm mr-1" />
                                +12.5% vs last month
                            </div>
                        </div>

                        <div className="metric-card bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
                            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-2">Add to Carts</p>
                            <h3 className="text-2xl font-bold mb-3">1,248</h3>
                            <p className="text-slate-400 text-sm">Conversion: <span className="text-slate-600 dark:text-slate-200 font-medium">4.2%</span></p>
                        </div>

                        <div className="metric-card bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
                            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-2">Reel Mentions</p>
                            <h3 className="text-2xl font-bold mb-3">54</h3>
                            <a className="text-primary hover:underline text-sm font-medium flex items-center gap-1" href="#">
                                <PlayCircleIcon className="text-sm" />
                                8 live collaborations
                            </a>
                        </div>

                        <div className="metric-card bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
                            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-2">Return Rate</p>
                            <h3 className="text-2xl font-bold mb-3">1.2%</h3>
                            <div className="text-emerald-500 text-sm font-semibold flex items-center gap-1">
                                Excellent health
                            </div>
                        </div>
                    </div>
                </section>

                {/* Inventory Table & Product Media */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm overflow-hidden">
                            <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center">
                                <h3 className="font-bold text-lg">Variant Inventory & Pricing</h3>
                                <button className="text-primary hover:text-blue-600 text-sm font-semibold">Manage All</button>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="bg-slate-50 dark:bg-slate-900/50 text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">
                                            <th className="px-6 py-4">Variant Option</th>
                                            <th className="px-6 py-4">SKU Code</th>
                                            <th className="px-6 py-4">Price (₹)</th>
                                            <th className="px-6 py-4">Stock Level</th>
                                            <th className="px-6 py-4">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-slate-100 dark:divide-slate-700">
                                        <tr class="hover:bg-slate-50 dark:hover:bg-slate-900/30 transition-colors">
                                            <td class="px-6 py-4 font-medium">128GB / Blue</td>
                                            <td class="px-6 py-4">
                                                <span class="bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded text-xs font-mono text-slate-600 dark:text-slate-300">APL-IP15-128B</span>
                                            </td>
                                            <td class="px-6 py-4 font-semibold">₹79,900</td>
                                            <td class="px-6 py-4">
                                                <div class="flex items-center gap-2">
                                                    <span>42</span>
                                                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                                </div>
                                            </td>
                                            <td class="px-6 py-4 text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-tight">Available</td>
                                        </tr>
                                        <tr class="hover:bg-slate-50 dark:hover:bg-slate-900/30 transition-colors">
                                            <td class="px-6 py-4 font-medium">128GB / Black</td>
                                            <td class="px-6 py-4">
                                                <span class="bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded text-xs font-mono text-slate-600 dark:text-slate-300">APL-IP15-128K</span>
                                            </td>
                                            <td class="px-6 py-4 font-semibold">₹79,900</td>
                                            <td class="px-6 py-4">
                                                <div class="flex items-center gap-2">
                                                    <span>4</span>
                                                    <span class="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                                                </div>
                                            </td>
                                            <td class="px-6 py-4 text-xs font-bold text-rose-500 uppercase tracking-tight">Low Stock</td>
                                        </tr>
                                        <tr class="hover:bg-slate-50 dark:hover:bg-slate-900/30 transition-colors">
                                            <td class="px-6 py-4 font-medium">256GB / Blue</td>
                                            <td class="px-6 py-4">
                                                <span class="bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded text-xs font-mono text-slate-600 dark:text-slate-300">APL-IP15-256B</span>
                                            </td>
                                            <td class="px-6 py-4 font-semibold">₹89,900</td>
                                            <td class="px-6 py-4">
                                                <div class="flex items-center gap-2">
                                                    <span>18</span>
                                                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                                </div>
                                            </td>
                                            <td class="px-6 py-4 text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-tight">Available</td>
                                        </tr>
                                        <tr class="hover:bg-slate-50 dark:hover:bg-slate-900/30 transition-colors">
                                            <td class="px-6 py-4 font-medium">256GB / Black</td>
                                            <td class="px-6 py-4">
                                                <span class="bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded text-xs font-mono text-slate-600 dark:text-slate-300">APL-IP15-256K</span>
                                            </td>
                                            <td class="px-6 py-4 font-semibold">₹89,900</td>
                                            <td class="px-6 py-4">
                                                <div class="flex items-center gap-2">
                                                    <span>22</span>
                                                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                                </div>
                                            </td>
                                            <td class="px-6 py-4 text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-tight">Available</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Product Media */}
                    <div className="lg:col-span-1">
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
                            <h3 className="font-bold text-lg mb-6">Product Media</h3>
                            <div className="relative aspect-square w-full rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden mb-4 group bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
                                <span className="absolute top-4 left-4 bg-slate-900/80 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide">Main</span>
                                <div className="text-slate-300 dark:text-slate-700">
                                    <ImageIcon className="text-6xl" />
                                </div>
                                <img alt="iPhone 15 Blue Front View" className="w-full h-full object-cover opacity-0 group-hover:opacity-100 absolute inset-0 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1qrHLVW8LvO3EtVpRbMQ7wSx5umT2HRDnu5HX8MA9lnIf6YDG3Rof-ArXjWMyigxpr-pqDC5W17rI123v4tvNftqRJ1KWQkPBBFMMKUUM6O1J3h0f09ndBdilGuDk8O4mwYnXhQ1Mgb3taddDuJ67UbERiWcrLKdN3nVMIbOK_FmqWJ7J_v0LlyM5V_xmOsDT-n9uLzzsIIb1jUdRoepNbOkWm29ce7PRefScTOSU70rsKZZ4EEAkYMw9Ov3gaYc07EVXGTcKC9fJ" />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="aspect-square rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 flex items-center justify-center cursor-pointer hover:border-primary transition-colors">
                                    <ImageIcon className="text-slate-400" />
                                </div>
                                <div className="relative aspect-square rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-900 flex flex-col items-center justify-center cursor-pointer hover:border-primary transition-colors group">
                                    <PlayCircleIcon className="text-white text-3xl mb-1 group-hover:scale-110 transition-transform" />
                                    <span className="text-[10px] text-white/70 font-semibold uppercase">Reel Video</span>
                                </div>
                            </div>

                            <button className="w-full mt-6 py-3 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl text-primary dark:text-primary text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors flex items-center justify-center gap-2">
                                <AddIcon className="text-lg" />
                                + Add Media or Reel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
