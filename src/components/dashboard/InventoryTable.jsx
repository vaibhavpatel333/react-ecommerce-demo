import React from "react";
import { useNavigate } from "react-router-dom";
import { Edit, Delete, ChevronLeft, ChevronRight } from "@mui/icons-material";

const InventoryTable = () => {
    const navigate = useNavigate();
    const productId = "1"; // In real app, this would come from the product data

    return (
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/50">
                <div>
                    <h3 className="font-bold">Inventory Intelligence</h3>
                    <p className="text-[10px] text-slate-500">Predictive Supply Chain Monitoring</p>
                </div>
                <div className="flex items-center space-x-2">
                    <button className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded-md text-[10px] font-medium hover:bg-white dark:hover:bg-slate-700 transition-colors">
                        Filters
                    </button>
                    <button className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded-md text-[10px] font-medium hover:bg-white dark:hover:bg-slate-700 transition-colors">
                        Export CSV  
                    </button>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50/30 dark:bg-slate-800/30 text-slate-500 font-medium border-b border-slate-100 dark:border-slate-800">
                        <tr>
                            <th className="px-6 py-3 font-semibold uppercase tracking-wider">Thumbnail</th>
                            <th className="px-6 py-3 font-semibold uppercase tracking-wider">Product &amp; SKU</th>
                            <th className="px-6 py-3 font-semibold uppercase tracking-wider">Category</th>
                            <th className="px-6 py-3 font-semibold uppercase tracking-wider">Variations</th>
                            <th className="px-6 py-3 font-semibold uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 font-semibold uppercase tracking-wider text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        {/* Example Product Row */}
                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                            <td className="px-6 py-4">
                                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden flex items-center justify-center">
                                    <img
                                        alt="Headphones"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOBXyLRUWMJEABumVPlkyw1zmTdxV8HRZBuPllR2Dojr0Su2Qd20LLgeuS5IcDpbXBVBNgqqFLoitAIDfFcCsboqFfHWtBVzaZxzr4DoYr3kfpGIdCVAa0tUzyPGA8SDxGPHt6_y3to2DnysfU6cr4EQA-G1XnLP8BpfqgjS6k6645ITCGuvgBz0gEYF92ztkBfmk6jgQwAWcxztPFPFE94mOnj-E4Z0kizBVbL-ilQlE_1T-PzCNdRU3fi81s4JJSC-pQqEPCtLTR"
                                    />
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <p 
                                    className="font-bold cursor-pointer hover:text-primary transition-colors"
                                    onClick={() => navigate('/products/details')}
                                >
                                    Premium Wireless Headphones
                                </p>
                                <p className="text-[10px] text-slate-400">SKU: WH-1000-PX</p>
                            </td>
                            <td className="px-6 py-4">
                                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-md font-medium">
                                    ELECTRONICS
                                </span>
                            </td>
                            <td className="px-6 py-4 font-medium text-primary">
                                3 Variants <span className="material-icons-outlined text-[12px]">expand_less</span>
                            </td>
                            <td className="px-6 py-4">
                                <span className="flex items-center text-orange-500 font-medium">
                                    <span className="w-2 h-2 rounded-full bg-orange-500 mr-2"></span> Low Stock
                                </span>
                            </td>
                            <td className="px-6 py-4 text-right">
                                <button 
                                    onClick={() => navigate(`/products/edit/${productId}`)}
                                    className="text-slate-400 hover:text-primary transition-colors mx-2"
                                    title="Edit Product"
                                >
                                    <Edit fontSize="small" />
                                </button>
                                <button className="text-slate-400 hover:text-rose-500 transition-colors" title="Delete Product">
                                    <Delete fontSize="small" />
                                </button>
                            </td>
                        </tr>

                        {/* Variant Row Example */}
                        <tr className="bg-slate-50/50 dark:bg-slate-800/30">
                            <td className="p-0" colSpan={6}>
                                <div className="px-12 py-3 border-b border-slate-100 dark:border-slate-800">
                                    <table className="w-full text-[11px]">
                                        <thead className="text-slate-400 font-normal border-b border-slate-100 dark:border-slate-800">
                                            <tr>
                                                <th className="py-2">Variant Details</th>
                                                <th className="py-2">SKU</th>
                                                <th className="py-2">Stock Quantity</th>
                                                <th className="py-2">Price</th>
                                                <th className="py-2 text-right">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
                                            <tr>
                                                <td className="py-3 font-medium">Midnight Black</td>
                                                <td className="py-3 text-slate-400 uppercase tracking-tighter">WH-1000-PX-BLK</td>
                                                <td className="py-3 font-bold text-green-500">42 Units</td>
                                                <td className="py-3">₹24,990</td>
                                                <td className="py-3 text-right">
                                                    <div className="inline-flex items-center bg-green-500/10 text-green-500 px-2 py-0.5 rounded-full text-[9px] font-bold">
                                                        ACTIVE
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 font-medium">Silver Frost</td>
                                                <td className="py-3 text-slate-400 uppercase tracking-tighter">WH-1000-PX-SLV</td>
                                                <td className="py-3 font-bold text-orange-500">
                                                    8 Units <span className="bg-orange-100 text-[8px] px-1 py-0.5 rounded ml-1">LOW STOCK</span>
                                                </td>
                                                <td className="py-3">₹24,990</td>
                                                <td className="py-3 text-right">
                                                    <div className="inline-flex items-center bg-green-500/10 text-green-500 px-2 py-0.5 rounded-full text-[9px] font-bold">
                                                        ACTIVE
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                {/* Left side - Showing text */}
                <p className="text-sm text-slate-600 dark:text-slate-400">
                    Showing <span className="font-bold text-slate-900 dark:text-slate-100">1 - 10</span> of 124 products
                </p>
                
                {/* Center - Pagination controls */}
                <div className="flex items-center space-x-1">
                    <button className="w-8 h-8 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 flex items-center justify-center transition-colors">
                        <ChevronLeft fontSize="small" />
                    </button>
                    <button className="w-8 h-8 rounded-md bg-primary text-white text-sm font-bold hover:bg-blue-700 transition-colors">
                        1
                    </button>
                    <button className="w-8 h-8 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-bold transition-colors">
                        2
                    </button>
                    <button className="w-8 h-8 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-bold transition-colors">
                        3
                    </button>
                    <span className="px-2 text-slate-400 dark:text-slate-500">...</span>
                    <button className="w-8 h-8 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 flex items-center justify-center transition-colors">
                        <ChevronRight fontSize="small" />
                    </button>
                </div>
                
                {/* Right side - Rows selector */}
                <button className="px-3 py-1.5 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium transition-colors">
                    Rows 1 of 10
                </button>
            </div>
        </div>
    );
};

export default InventoryTable;
