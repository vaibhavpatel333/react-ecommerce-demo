import React from "react";
import { useNavigate } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";

const BulkProgress = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col font-sans transition-colors duration-200">
            <div className="max-w-4xl mx-auto w-full px-6 py-8">
                <nav className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400 mb-6">
                    <button onClick={() => navigate("/")} className="hover:text-primary transition-colors">Store</button>
                    <ChevronRightIcon className="text-sm" />
                    <button onClick={() => navigate("/products/add")} className="hover:text-primary transition-colors">Products</button>
                    <ChevronRightIcon className="text-sm" />
                    <button onClick={() => navigate("/products/bulk-upload")} className="hover:text-primary transition-colors">Bulk Upload</button>
                    <ChevronRightIcon className="text-sm" />
                    <span className="text-primary font-medium">Progress</span>
                </nav>

                <h1 className="text-3xl font-bold mb-8">Bulk Import Progress</h1>

                {/* Progress Circle */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm p-12 text-center mb-6">
                    <div className="relative inline-flex items-center justify-center mb-8">
                        <svg className="w-48 h-48">
                            <circle
                                className="text-slate-100 dark:text-slate-700 stroke-current"
                                cx="96"
                                cy="96"
                                fill="transparent"
                                r="80"
                                strokeWidth="8"
                            />
                            <circle
                                className="text-primary stroke-current progress-ring__circle"
                                cx="96"
                                cy="96"
                                fill="transparent"
                                r="80"
                                strokeDasharray="502.65"
                                strokeDashoffset="75.4"
                                strokeLinecap="round"
                                strokeWidth="8"
                            />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-4xl font-bold">85%</span>
                            <span className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-semibold mt-1">
                                Complete
                            </span>
                        </div>
                    </div>
                    <h2 className="text-xl font-bold mb-2">Processing Import</h2>
                    <p className="text-slate-500 dark:text-slate-400">
                        Processing 1,250 products... please keep this window open.
                    </p>
                </div>

                {/* Import Summary */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm p-6 mb-8">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="font-bold text-lg">Import Summary</h3>
                        <div className="flex items-center px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-semibold">
                            <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
                            In Progress
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                            <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold mb-1">
                                Total Items
                            </p>
                            <p className="text-3xl font-bold">1,250</p>
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold mb-1">
                                Successful
                            </p>
                            <p className="text-3xl font-bold text-emerald-500">1,242</p>
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold mb-1">
                                Failed
                            </p>
                            <p className="text-3xl font-bold text-rose-500">8</p>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                    <button className="w-full flex items-center justify-center space-x-3 bg-primary hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-xl transition-all shadow-lg shadow-blue-500/20 active:scale-[0.99]">
                        <VisibilityIcon />
                        <span>View Imported Products</span>
                    </button>
                    <button 
                        onClick={() => navigate("/inventory/bulk-upload/error-resolution")}
                        className="w-full flex items-center justify-center space-x-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold py-4 px-6 rounded-xl transition-all active:scale-[0.99]"
                    >
                        <ReportProblemIcon className="text-rose-500" />
                        <span>Download Error Report (8 issues)</span>
                    </button>
                </div>

                {/* Footer */}
                <footer className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    <p>You can close this window once the process is 100% complete.</p>
                    <p>
                        An email notification will be sent to{" "}
                        <span className="text-slate-700 dark:text-slate-200 font-medium">
                            alex@lynkrd.com
                        </span>
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default BulkProgress;
