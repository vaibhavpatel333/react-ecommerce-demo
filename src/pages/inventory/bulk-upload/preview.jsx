import React from "react";
import { useNavigate } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DownloadIcon from "@mui/icons-material/Download";
import TableChartIcon from "@mui/icons-material/TableChart";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import LinkIcon from "@mui/icons-material/Link";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import Header from "../../../components/common/Header";

const SampleReview = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-200">
            <div className="max-w-8xl mx-auto px-6 py-8">
                {/* Header */}
                <Header />

                {/* Breadcrumb */}
                <nav className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400 mb-3">
                    <button 
                        onClick={() => navigate("/")}
                        className="hover:text-primary transition-colors"
                    >
                        Inventory
                    </button>
                    <ChevronRightIcon className="text-xs" />
                    <button 
                        onClick={() => navigate("/products/bulk-upload")}
                        className="hover:text-primary transition-colors"
                    >
                        Bulk Upload
                    </button>
                    <ChevronRightIcon className="text-xs" />
                    <span className="text-primary font-medium">Sample Preview</span>
                </nav>

                {/* Page Title */}
                <h1 className="text-3xl font-bold tracking-tight mb-8">Bulk Upload Sample &amp; Field Guide</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                        {/* Template Table */}
                        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden shadow-sm">
                            <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/50">
                                <div className="flex items-center space-x-2">
                                    <TableChartIcon className="text-primary" />
                                    <h2 className="font-semibold text-slate-800 dark:text-slate-200">Template Sample Dataset</h2>
                                </div>
                                <span className="text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">
                                    Showing 5 of 5,000 max rows
                                </span>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm whitespace-nowrap">
                                    <thead className="bg-slate-50 dark:bg-slate-900/50 text-slate-500 dark:text-slate-400 font-medium uppercase text-[10px] tracking-wider">
                                        <tr>
                                            <th className="px-4 py-3 border-b border-slate-200 dark:border-slate-700">
                                                Product Name <span className="text-red-500">*</span>
                                            </th>
                                            <th className="px-4 py-3 border-b border-slate-200 dark:border-slate-700">
                                                SKU <span className="text-red-500">*</span>
                                            </th>
                                            <th className="px-4 py-3 border-b border-slate-200 dark:border-slate-700">
                                                HSN Code <span className="text-red-500">*</span>
                                            </th>
                                            <th className="px-4 py-3 border-b border-slate-200 dark:border-slate-700">
                                                GST % <span className="text-red-500">*</span>
                                            </th>
                                            <th className="px-4 py-3 border-b border-slate-200 dark:border-slate-700">
                                                MRP (₹) <span className="text-red-500">*</span>
                                            </th>
                                            <th className="px-4 py-3 border-b border-slate-200 dark:border-slate-700">
                                                Selling Price (₹) <span className="text-red-500">*</span>
                                            </th>
                                            <th className="px-4 py-3 border-b border-slate-200 dark:border-slate-700">
                                                Inventory Count <span className="text-red-500">*</span>
                                            </th>
                                            <th className="px-4 py-3 border-b border-slate-200 dark:border-slate-700">
                                                Category <span className="text-red-500">*</span>
                                            </th>
                                            <th className="px-4 py-3 border-b border-slate-200 dark:border-slate-700">
                                                Image URL <span className="text-red-500">*</span>
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody class="divide-y divide-slate-100 dark:divide-slate-700/50 text-slate-600 dark:text-slate-300">
                                        <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
                                            <td class="px-4 py-4 font-medium text-slate-800 dark:text-slate-200">Classic Denim Jacket</td>
                                            <td class="px-4 py-4 font-mono text-xs">CJ-DNM-BL-001</td>
                                            <td class="px-4 py-4">620342</td>
                                            <td class="px-4 py-4">12%</td>
                                            <td class="px-4 py-4 font-semibold">2,499.00</td>
                                            <td class="px-4 py-4 font-semibold text-primary">1,899.00</td>
                                            <td class="px-4 py-4 text-center">45</td>
                                            <td class="px-4 py-4 text-xs italic">Apparel &gt; Men</td>
                                            <td class="px-4 py-4 text-blue-500 underline truncate max-w-[120px]">https://ksdb.jpg</td>
                                        </tr>
                                        <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
                                            <td class="px-4 py-4 font-medium text-slate-800 dark:text-slate-200">Acoustic Bluetooth Speaker</td>
                                            <td class="px-4 py-4 font-mono text-xs">EL-BT-SPK-99</td>
                                            <td class="px-4 py-4">851821</td>
                                            <td class="px-4 py-4">18%</td>
                                            <td class="px-4 py-4 font-semibold">4,999.00</td>
                                            <td class="px-4 py-4 font-semibold text-primary">3,499.00</td>
                                            <td class="px-4 py-4 text-center">2</td>
                                            <td class="px-4 py-4 text-xs italic">Electronics &gt; Audio</td>
                                            <td class="px-4 py-4 text-blue-500 underline truncate max-w-[120px]">https://sdbd.jpg</td>
                                        </tr>
                                        <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
                                            <td class="px-4 py-4 font-medium text-slate-800 dark:text-slate-200">Smart Fitness Band Gen 4</td>
                                            <td class="px-4 py-4 font-mono text-xs">EL-WTC-H-FIT-04</td>
                                            <td class="px-4 py-4">910212</td>
                                            <td class="px-4 py-4">18%</td>
                                            <td class="px-4 py-4 font-semibold">1,999.00</td>
                                            <td class="px-4 py-4 font-semibold text-primary">1,299.00</td>
                                            <td class="px-4 py-4 text-center">10</td>
                                            <td class="px-4 py-4 text-xs italic">Electronics &gt; Wearable</td>
                                            <td class="px-4 py-4 text-blue-500 underline truncate max-w-[120px]">https://sdf.jpg</td>
                                        </tr>
                                        <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
                                            <td class="px-4 py-4 font-medium text-slate-800 dark:text-slate-200">Premium Cotton Polo T-Shirt</td>
                                            <td class="px-4 py-4 font-mono text-xs">TS-POL-WH-XL</td>
                                            <td class="px-4 py-4">610510</td>
                                            <td class="px-4 py-4">5%</td>
                                            <td class="px-4 py-4 font-semibold">999.00</td>
                                            <td class="px-4 py-4 font-semibold text-primary">799.00</td>
                                            <td class="px-4 py-4 text-center">30</td>
                                            <td class="px-4 py-4 text-xs italic">Apparel &gt; Casual</td>
                                            <td class="px-4 py-4 text-blue-500 underline truncate max-w-[120px]">https://kadb.jpg</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Data Validation Pre-check */}
                        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/50 p-5 rounded-lg flex items-start gap-4">
                            <CheckCircleIcon className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                            <div>
                                <h3 className="font-bold text-blue-900 dark:text-blue-300 mb-1">Data Validation Pre-check</h3>
                                <p className="text-sm text-blue-800/80 dark:text-blue-400/80 leading-relaxed">
                                    Our system automatically validates your GST and HSN formats upon upload. Ensure that the 'Selling Price' is inclusive of all taxes but does not exceed the 'MRP' to avoid rejection.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Download Template Button */}
                        <button className="w-full bg-primary hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors shadow-sm">
                            <DownloadIcon fontSize="small" />
                            Download CSV Template
                        </button>

                        {/* Formatting Tips Card */}
                        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6 shadow-sm">
                            <div className="flex items-center space-x-2 mb-4 text-amber-500">
                                <LightbulbIcon />
                                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Formatting Tips</h3>
                            </div>

                            <p className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider mb-4">
                                Compliance Requirements
                            </p>

                            <div className="space-y-4">
                                <div className="bg-slate-50 dark:bg-slate-900/50 p-3 rounded-md border border-slate-100 dark:border-slate-800">
                                    <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">HSN Codes</h4>
                                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                                        Must be exactly 4, 6, or 8 digits. Do not include spaces or letters.
                                    </p>
                                </div>
                                <div className="bg-slate-50 dark:bg-slate-900/50 p-3 rounded-md border border-slate-100 dark:border-slate-800">
                                    <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">GST Percentage</h4>
                                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                                        Valid values: 0, 5, 12, 18, 28. Enter as number or with % sign.
                                    </p>
                                </div>
                                <div className="bg-slate-50 dark:bg-slate-900/50 p-3 rounded-md border border-slate-100 dark:border-slate-800">
                                    <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Price Fields</h4>
                                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                                        Must be numeric. Do not include currency symbols (₹, $).
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 border-t border-slate-100 dark:border-slate-700 pt-6">
                                <p className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider mb-4">
                                    Media Guidelines
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start space-x-2">
                                        <LinkIcon className="text-slate-400 text-sm mt-0.5" />
                                        <p className="text-[11px] text-slate-500 dark:text-slate-400">
                                            Image URL must be public (Google Drive/Dropbox links won't work).
                                        </p>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <PhotoSizeSelectActualIcon className="text-slate-400 text-sm mt-0.5" />
                                        <p className="text-[11px] text-slate-500 dark:text-slate-400">
                                            Recommended resolution: 1000x1000px, Square aspect ratio.
                                        </p>
                                    </li>
                                </ul>
                            </div>

                            <button className="w-full mt-8 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-semibold py-2.5 rounded-md flex items-center justify-center hover:opacity-90 transition-opacity">
                                <SupportAgentIcon className="text-sm mr-2" />
                                Contact Support
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SampleReview;
