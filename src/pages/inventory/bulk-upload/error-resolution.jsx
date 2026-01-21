import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BoltIcon from '@mui/icons-material/Bolt';
import BoxIcon from '@mui/icons-material/Inventory';
import DownloadIcon from '@mui/icons-material/Download';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const ErrorResolution = () => {
    const navigate = useNavigate();
    const [resolvedCount, setResolvedCount] = useState(1);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const errors = [
        {
            row: 14,
            productId: 'LP-902-Y',
            fieldName: 'HSN Code',
            errorType: 'INVALID_FORMAT',
            status: '',
            originalValue: '851',
            fixedValue: '8517',
            isFixed: false
        },
        {
            row: 42,
            productId: 'LP-105-X',
            fieldName: 'Price (INR)',
            errorType: 'NUMERIC_ONLY',
            status: '',
            originalValue: '₹4,999',
            fixedValue: '4999',
            isFixed: false
        },
        {
            row: 105,
            productId: 'SKU-OFF-01',
            fieldName: 'GST %',
            errorType: 'MISSING_VALUE',
            status: '',
            originalValue: 'Empty',
            fixedValue: '18%',
            isFixed: false,
            isDropdown: true
        },
        {
            row: 12,
            productId: 'LP-880-Z',
            fieldName: 'Stock Qty',
            errorType: 'NEGATIVE_VAL',
            status: 'Fixed',
            originalValue: '-5',
            fixedValue: '0',
            isFixed: true
        },
        {
            row: 221,
            productId: 'LP-1022',
            fieldName: 'Category',
            errorType: 'INVALID_MAP',
            status: '',
            originalValue: 'Electronics > Audio',
            fixedValue: 'Consumer Electronics',
            isFixed: false
        },
        {
            row: 67,
            productId: 'LP-203-A',
            fieldName: 'HSN Code',
            errorType: 'INVALID_FORMAT',
            status: '',
            originalValue: '123',
            fixedValue: '1234',
            isFixed: false
        },
        {
            row: 89,
            productId: 'LP-456-B',
            fieldName: 'Price (INR)',
            errorType: 'NUMERIC_ONLY',
            status: '',
            originalValue: '₹2,500.50',
            fixedValue: '2500',
            isFixed: false
        },
        {
            row: 134,
            productId: 'LP-789-C',
            fieldName: 'GST %',
            errorType: 'MISSING_VALUE',
            status: '',
            originalValue: 'Empty',
            fixedValue: '12%',
            isFixed: false,
            isDropdown: true
        }
    ];

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-200">
            <div className="max-w-8xl mx-auto p-6 md:p-8 space-y-8">
                <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-2">
                        <nav className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400">
                            <button onClick={() => navigate("/")} className="hover:text-primary transition-colors">Store</button>
                            <ChevronRightIcon className="text-sm" />
                            <button onClick={() => navigate("/products/add")} className="hover:text-primary transition-colors">Products</button>
                            <ChevronRightIcon className="text-sm" />
                            <button onClick={() => navigate("/products/bulk-upload")} className="hover:text-primary transition-colors">Bulk Upload</button>
                            <ChevronRightIcon className="text-sm" />
                            <span className="text-primary font-medium">Error Resolution</span>
                        </nav>
                        <h1 className="text-3xl font-bold tracking-tight">Import Error Resolution</h1>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="px-4 py-2 text-slate-600 dark:text-slate-300 hover:text-red-500 dark:hover:text-red-400 font-medium transition-colors">
                            Discard Draft
                        </button>
                        <button 
                            onClick={() => setShowSuccessModal(true)}
                            className="bg-primary hover:bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold shadow-sm transition-all flex items-center gap-2"
                        >
                            <CheckCircleIcon className="text-[20px]" />
                            Re-validate &amp; Import
                        </button>
                    </div>
                </header>

                {/* Summary Statistics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-between">
                        <div>
                            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Total Errors</p>
                            <p className="text-4xl font-bold text-red-500 mt-1">8</p>
                        </div>
                        <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-full">
                            <ErrorIcon className="text-red-500 text-3xl" />
                        </div>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-between">
                        <div>
                            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Affected Products</p>
                            <p className="text-4xl font-bold mt-1">5</p>
                        </div>
                        <div className="bg-slate-100 dark:bg-slate-700 p-3 rounded-full">
                            <Inventory2Icon className="text-slate-500 dark:text-slate-300 text-3xl" />
                        </div>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-between">
                        <div>
                            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Resolved</p>
                            <p className="text-4xl font-bold text-emerald-500 mt-1">{resolvedCount}</p>
                        </div>
                        <div className="bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded-full">
                            <TaskAltIcon className="text-emerald-500 text-3xl" />
                        </div>
                    </div>
                </div>

                {/* Detected Issues Table */}
                <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center">
                        <h2 className="text-lg font-bold">Detected Issues</h2>
                        <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Showing 8 of 8 errors</span>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50/50 dark:bg-slate-900/50 text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                                    <th className="px-6 py-4">CSV Row #</th>
                                    <th className="px-6 py-4">Product Identifier</th>
                                    <th className="px-6 py-4">Field Name</th>
                                    <th className="px-6 py-4">Error Type</th>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4">Proposed Fix</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-700 text-sm">
                                {errors.map((error, index) => (
                                    <tr key={index} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                                        <td className="px-6 py-4 text-slate-500 dark:text-slate-400">{error.row}</td>
                                        <td className="px-6 py-4 font-semibold">{error.productId}</td>
                                        <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{error.fieldName}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 rounded text-[10px] font-bold ${
                                                error.isFixed 
                                                    ? 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-400'
                                                    : 'bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-400'
                                            }`}>
                                                {error.errorType}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            {error.isFixed ? (
                                                <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
                                                    <CheckCircleIcon className="text-sm" />
                                                    {error.status}
                                                </span>
                                            ) : (
                                                <span className="text-slate-400">—</span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <span className={`px-3 py-1.5 rounded-md border ${
                                                    error.isFixed
                                                        ? 'bg-slate-100 text-slate-500 dark:bg-slate-700 dark:text-slate-400 border-slate-200 dark:border-slate-600'
                                                        : 'bg-orange-50 text-orange-600 dark:bg-orange-900/20 border-orange-100 dark:border-orange-800/30'
                                                }`}>
                                                    {error.originalValue}
                                                </span>
                                                <ArrowForwardIcon className="text-slate-300 dark:text-slate-600" />
                                                {error.isDropdown ? (
                                                    <select className={`border rounded-md px-3 py-1.5 w-32 focus:ring-2 focus:ring-primary/20 outline-none ${
                                                        error.isFixed
                                                            ? 'bg-emerald-50 border-emerald-200 dark:bg-emerald-900/20 dark:border-emerald-800/30'
                                                            : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700'
                                                    }`}>
                                                        <option>18%</option>
                                                        <option>12%</option>
                                                        <option>5%</option>
                                                        <option>0%</option>
                                                    </select>
                                                ) : (
                                                    <input 
                                                        className={`border rounded-md px-3 py-1.5 w-32 focus:ring-2 focus:ring-primary/20 outline-none ${
                                                            error.isFixed
                                                                ? 'bg-emerald-50 border-emerald-200 dark:bg-emerald-900/20 dark:border-emerald-800/30'
                                                                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700'
                                                        }`}
                                                        type="text" 
                                                        defaultValue={error.fixedValue}
                                                        readOnly={error.isFixed}
                                                    />
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Footer with Bulk Actions */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-3">
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Bulk Actions:</span>
                        <button className="bg-primary hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
                            <BoltIcon fontSize="small" />
                            Apply GST 18% to all
                        </button>
                        <button className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
                            <BoxIcon fontSize="small" />
                            Set Stock to 0 for missing
                        </button>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-sm text-slate-600 dark:text-slate-400">
                            {resolvedCount}/8 errors resolved
                        </span>
                        <button className="text-primary hover:text-blue-600 text-sm font-medium flex items-center gap-1 transition-colors">
                            <DownloadIcon fontSize="small" />
                            Download Error Log
                        </button>
                    </div>
                </div>
            </div>

            {/* Success Modal */}
            {showSuccessModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl max-w-md w-full p-8 space-y-6">
                        {/* Success Icon */}
                        <div className="flex justify-center">
                            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center">
                                <CheckCircleIcon className="text-emerald-600 dark:text-emerald-400 text-5xl" />
                            </div>
                        </div>

                        {/* Title and Description */}
                        <div className="text-center space-y-2">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">All Issues Resolved!</h2>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                Your data has been successfully re-validated and is ready for the final import.
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-slate-200 dark:border-slate-700"></div>

                        {/* Summary Statistics */}
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-slate-500 dark:text-slate-400">Total Validated Items</span>
                                <span className="text-lg font-bold text-slate-900 dark:text-slate-100">1,250</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-slate-500 dark:text-slate-400">Errors Fixed</span>
                                <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">8</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-slate-500 dark:text-slate-400">Compliance Status</span>
                                <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full text-sm font-semibold">
                                    100% Validated
                                </span>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-3 pt-2">
                            <button 
                                onClick={() => {
                                    setShowSuccessModal(false);
                                    navigate("/products/bulk-upload/progress");
                                }}
                                className="w-full bg-primary hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all shadow-md"
                            >
                                Confirm &amp; Finalize Import
                            </button>
                            <button className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium py-3 px-6 rounded-lg transition-all shadow-sm flex items-center justify-center gap-2">
                                <FileDownloadIcon fontSize="small" />
                                Download Verified CSV
                            </button>
                        </div>

                        {/* Progress Indicator */}
                        <div className="text-center pt-2">
                            <p className="text-xs text-slate-400 dark:text-slate-500">Step 4 of 4 Completed</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ErrorResolution;
