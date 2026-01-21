import React from 'react'
import { useNavigate } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DescriptionIcon from '@mui/icons-material/Description';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import InfoIcon from '@mui/icons-material/Info';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const Mapping = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-200">
            <div className="max-w-8xl mx-auto px-6 py-8">
                <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                        <nav aria-label="Breadcrumb" className="flex text-sm text-slate-500 dark:text-slate-400 mb-2">
                            <ol className="flex items-center space-x-2">
                                <li><button onClick={() => navigate("/")} className="hover:text-primary transition-colors">Store</button></li>
                                <li><ChevronRightIcon className="text-xs" /></li>
                                <li><button onClick={() => navigate("/products/add")} className="hover:text-primary transition-colors">Products</button></li>
                                <li><ChevronRightIcon className="text-xs" /></li>
                                <li><button onClick={() => navigate("/products/bulk-upload")} className="hover:text-primary transition-colors">Bulk Upload</button></li>
                                <li><ChevronRightIcon className="text-xs" /></li>
                                <li className="text-primary font-medium">Mapping</li>
                            </ol>
                        </nav>
                        <h1 className="text-3xl font-bold tracking-tight">Column Mapping &amp; Validation</h1>
                    </div>
                    <div className="flex items-center gap-6">
                        <button 
                            onClick={() => navigate("/products/bulk-upload")}
                            className="text-slate-600 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-white transition-colors"
                        >
                            Cancel
                        </button>
                        <button 
                            onClick={() => navigate("/products/bulk-upload/progress")}
                            className="bg-primary hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold flex items-center gap-2 transition-all shadow-lg shadow-primary/20"
                        >
                            Start Import
                            <ArrowForwardIcon className="text-sm" />
                        </button>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-card-light dark:bg-card-dark p-6 rounded-xl border border-slate-200 dark:border-slate-800 flex justify-between items-center shadow-sm">
                        <div>
                            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">Total Rows Detected</p>
                            <p className="text-3xl font-bold">1,250</p>
                        </div>
                        <div className="h-12 w-12 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
                            <DescriptionIcon className="text-slate-500" />
                        </div>
                    </div>
                    <div className="bg-card-light dark:bg-card-dark p-6 rounded-xl border border-slate-200 dark:border-slate-800 flex justify-between items-center shadow-sm">
                        <div>
                            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">Valid Rows</p>
                            <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">1,242</p>
                        </div>
                        <div className="h-12 w-12 rounded-full bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center">
                            <CheckCircleIcon className="text-emerald-600" />
                        </div>
                    </div>
                    <div className="bg-card-light dark:bg-card-dark p-6 rounded-xl border border-slate-200 dark:border-slate-800 flex justify-between items-center shadow-sm">
                        <div>
                            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">Rows with Errors</p>
                            <p className="text-3xl font-bold text-rose-500">8</p>
                        </div>
                        <div className="h-12 w-12 rounded-full bg-rose-50 dark:bg-rose-900/30 flex items-center justify-center">
                            <ReportProblemIcon className="text-rose-500" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-4 bg-card-light dark:bg-card-dark rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
                        <div className="p-6 border-b border-slate-100 dark:border-slate-800">
                            <h2 className="text-lg font-bold mb-1">Mapping Configuration</h2>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Match system fields to your CSV columns</p>
                        </div>
                        <div className="p-6 space-y-6 custom-scrollbar max-h-[600px] overflow-y-auto">
                            {["SKU", "Product Name", "Price (INR)", "GST %", "HSN Code", "Stock Qty", "Category"].map((label, idx) => (
                                <div key={idx} className="flex items-center justify-between group">
                                    <label className="text-sm font-semibold flex items-center">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                                        {label}
                                    </label>
                                    <select className="w-48 text-sm bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-md focus:ring-primary focus:border-primary transition-all">
                                        <option>{label.toLowerCase().replace(/ /g, "_")}</option>
                                        <option>alternate_option</option>
                                    </select>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-8 flex flex-col gap-6">
                        <div className="bg-card-light dark:bg-card-dark rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col h-full">
                            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                                <div>
                                    <h2 className="text-lg font-bold mb-1">Validation Preview</h2>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Live data inspection (first 5 rows)</p>
                                </div>
                                <div className="flex items-center text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
                                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse mr-2"></span>
                                    Active Scan
                                </div>
                            </div>
                            <div className="overflow-x-auto">
                                <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                                    <tr>
                                        <td class="px-6 py-5">
                                            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300">None</span>
                                        </td>
                                        <td class="px-6 py-5 text-slate-600 dark:text-slate-300">LP-901-X</td>
                                        <td class="px-6 py-5 text-slate-600 dark:text-slate-300">Wireless Noise Headphone</td>
                                        <td class="px-6 py-5 text-slate-600 dark:text-slate-300">₹4,999</td>
                                        <td class="px-6 py-5 text-slate-600 dark:text-slate-300">8518</td>
                                    </tr>
                                    <tr class="bg-rose-50/30 dark:bg-rose-900/10">
                                        <td class="px-6 py-5">
                                            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300">1 Issue</span>
                                        </td>
                                        <td class="px-6 py-5 text-slate-600 dark:text-slate-300">LP-902-Y</td>
                                        <td class="px-6 py-5 text-slate-600 dark:text-slate-300">Smart Watch Pro S2</td>
                                        <td class="px-6 py-5 text-slate-600 dark:text-slate-300">₹12,450</td>
                                        <td class="px-6 py-5">
                                            <div class="text-rose-500 font-bold uppercase text-[10px] mb-0.5">INVALID_HSN</div>
                                            <div class="text-rose-500/80 text-[11px]">Format must be 4 or 8 digits</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="px-6 py-5">
                                            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300">None</span>
                                        </td>
                                        <td class="px-6 py-5 text-slate-600 dark:text-slate-300">LP-903-Z</td>
                                        <td class="px-6 py-5 text-slate-600 dark:text-slate-300">BT Speaker Mini</td>
                                        <td class="px-6 py-5 text-slate-600 dark:text-slate-300">₹2,299</td>
                                        <td class="px-6 py-5 text-slate-600 dark:text-slate-300">8519</td>
                                    </tr>
                                    <tr>
                                        <td class="px-6 py-5">
                                            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300">None</span>
                                        </td>
                                        <td class="px-6 py-5 text-slate-600 dark:text-slate-300">LP-904-A</td>
                                        <td class="px-6 py-5 text-slate-600 dark:text-slate-300">USB-C Fast Charger</td>
                                        <td class="px-6 py-5 text-slate-600 dark:text-slate-300">₹899</td>
                                        <td class="px-6 py-5 text-slate-600 dark:text-slate-300">8504</td>
                                    </tr>
                                    <tr>
                                        <td class="px-6 py-5">
                                            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300">None</span>
                                        </td>
                                        <td class="px-6 py-5 text-slate-600 dark:text-slate-300">LP-905-B</td>
                                        <td class="px-6 py-5 text-slate-600 dark:text-slate-300">Leather Laptop Sleeve</td>
                                        <td class="px-6 py-5 text-slate-600 dark:text-slate-300">₹1,500</td>
                                        <td class="px-6 py-5 text-slate-600 dark:text-slate-300">4202</td>
                                    </tr>
                                </tbody>
                            </div>
                            <div className="mt-auto p-4 bg-blue-50/50 dark:bg-blue-900/10 border-t border-blue-100 dark:border-blue-900/30 flex items-start gap-3">
                                <InfoIcon className="text-primary text-xl" />
                                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                    Correct the mapping or update your source file to resolve highlighted errors. Mandatory fields marked with <span className="font-bold">dot(.)</span> must be mapped to proceed. Ensure all price formats match system currency requirements.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Mapping
