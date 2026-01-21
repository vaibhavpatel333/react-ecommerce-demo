import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import VideocamIcon from '@mui/icons-material/Videocam';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import WatchIcon from '@mui/icons-material/Watch';
import InventoryIcon from '@mui/icons-material/Inventory';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SettingsIcon from '@mui/icons-material/Settings';
import CampaignIcon from '@mui/icons-material/Campaign';
import DescriptionIcon from '@mui/icons-material/Description';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const SearchModal = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [hasResults, setHasResults] = useState(true);

    useEffect(() => {
        if (isOpen) {
            setSearchQuery('');
            setHasResults(true);
        }
    }, [isOpen]);

    useEffect(() => {
        // Simulate search results based on query
        if (searchQuery.toLowerCase().includes('winter collection')) {
            setHasResults(false);
        } else if (searchQuery.trim() === '') {
            setHasResults(true);
        } else {
            setHasResults(true);
        }
    }, [searchQuery]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
            return () => document.removeEventListener('keydown', handleKeyDown);
        }
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const quickActions = [
        {
            icon: AddIcon,
            title: 'Add Product',
            description: 'List a new item to your store',
            action: () => {
                navigate('/products/add');
                onClose();
            }
        },
        {
            icon: VideocamIcon,
            title: 'Create Reel',
            description: 'Share a new video showcase',
            isNew: true,
            action: () => {
                // Navigate to create reel page
                onClose();
            }
        }
    ];

    const recentOrders = [
        {
            icon: ShoppingCartIcon,
            orderId: 'Order #1024',
            customer: 'by Janelle Jenkins',
            amount: '$120.00',
            status: 'PAID',
            statusColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'
        },
        {
            icon: ShoppingCartIcon,
            orderId: 'Order #1023',
            customer: 'by Michael Scott',
            amount: '$349.99',
            status: 'PENDING',
            statusColor: 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400'
        }
    ];

    const products = [
        {
            icon: WatchIcon,
            name: 'AeroSwift Runners',
            details: '12 in stock • SKU: AS-01',
            action: () => {
                navigate('/products/details');
                onClose();
            }
        },
        {
            icon: WatchIcon,
            name: 'ChronoX Minimalist Watch',
            details: '8 in stock • SKU: CM-X4',
            action: () => {
                navigate('/products/details');
                onClose();
            }
        }
    ];

    const searchSuggestions = [
        { icon: ShoppingCartIcon, label: 'Orders' },
        { icon: AddIcon, label: 'Add Product' },
        { icon: CampaignIcon, label: 'Creator Campaigns' },
        { icon: DescriptionIcon, label: 'GST Reports' }
    ];

    const quickLinks = [
        { icon: DashboardIcon, label: 'Seller Dashboard', path: '/' },
        { icon: AccountBalanceWalletIcon, label: 'Earnings & Payouts', path: '/payouts' },
        { icon: InventoryIcon, label: 'Inventory Management', path: '/' },
        { icon: SettingsIcon, label: 'Store Settings', path: '/settings' }
    ];

    return (
        <div className="fixed inset-0 bg-black/50 flex items-start justify-center z-50 pt-20 px-4" onClick={onClose}>
            <div 
                className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Search Input */}
                <div className="p-4 border-b border-slate-200 dark:border-slate-700">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <SearchIcon className="text-slate-400 flex items-center" fontSize="small" />
                        </div>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search or type a command..."
                            className="w-full pl-10 pr-20 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-slate-900 dark:text-slate-100"
                            autoFocus
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 gap-2">
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded"
                                >
                                    <CloseIcon className="text-slate-400" fontSize="small" />
                                </button>
                            )}
                            <span className="text-xs text-slate-400">ESC</span>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="overflow-y-auto max-h-[calc(80vh-180px)]">
                    {hasResults ? (
                        <>
                            {/* Quick Actions */}
                            <div className="p-4">
                                <h3 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                                    Quick Actions
                                </h3>
                                <div className="space-y-2">
                                    {quickActions.map((action, index) => (
                                        <button
                                            key={index}
                                            onClick={action.action}
                                            className={`w-full p-3 rounded-lg flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors text-left ${
                                                index === 1 ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                                            }`}
                                        >
                                            <div className={`p-2 rounded-lg ${
                                                index === 1 
                                                    ? 'bg-primary text-white' 
                                                    : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400'
                                            }`}>
                                                <action.icon fontSize="small" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2">
                                                    <span className="font-medium text-slate-900 dark:text-slate-100">
                                                        {action.title}
                                                    </span>
                                                    {action.isNew && (
                                                        <span className="px-2 py-0.5 bg-primary text-white text-[10px] font-bold rounded uppercase">
                                                            NEW
                                                        </span>
                                                    )}
                                                </div>
                                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                                                    {action.description}
                                                </p>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Recent Orders */}
                            <div className="p-4 border-t border-slate-200 dark:border-slate-700">
                                <h3 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                                    Recent Orders
                                </h3>
                                <div className="space-y-2">
                                    {recentOrders.map((order, index) => (
                                        <button
                                            key={index}
                                            className="w-full p-3 rounded-lg flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors text-left"
                                        >
                                            <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400">
                                                <order.icon fontSize="small" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center justify-between">
                                                    <span className="font-medium text-slate-900 dark:text-slate-100">
                                                        {order.orderId}
                                                    </span>
                                                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${order.statusColor}`}>
                                                        {order.status}
                                                    </span>
                                                </div>
                                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                                                    {order.customer} • {order.amount}
                                                </p>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Products */}
                            <div className="p-4 border-t border-slate-200 dark:border-slate-700">
                                <h3 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                                    Products
                                </h3>
                                <div className="space-y-2">
                                    {products.map((product, index) => (
                                        <button
                                            key={index}
                                            onClick={product.action}
                                            className="w-full p-3 rounded-lg flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors text-left"
                                        >
                                            <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400">
                                                <product.icon fontSize="small" />
                                            </div>
                                            <div className="flex-1">
                                                <span className="font-medium text-slate-900 dark:text-slate-100">
                                                    {product.name}
                                                </span>
                                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                                                    {product.details}
                                                </p>
                                            </div>
                                            <ArrowForwardIcon className="text-slate-400" fontSize="small" />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </>
                    ) : (
                        /* No Results State */
                        <div className="p-8 text-center">
                            <div className="flex justify-center mb-4">
                                <SearchIcon className="text-slate-300 dark:text-slate-600 text-6xl" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
                                No results found for '{searchQuery}'
                            </h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                                We couldn't find any matches in your store. Try refining your keywords or check out the suggestions below.
                            </p>
                            <button
                                onClick={() => setSearchQuery('')}
                                className="px-6 py-2 bg-primary hover:bg-blue-600 text-white font-medium rounded-lg transition-colors mb-6"
                            >
                                Clear Search
                            </button>

                            {/* Try Searching For */}
                            <div className="mb-6">
                                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                                    Try searching for:
                                </h4>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {searchSuggestions.map((suggestion, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setSearchQuery(suggestion.label)}
                                            className="px-4 py-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium flex items-center gap-2 transition-colors"
                                        >
                                            <suggestion.icon fontSize="small" />
                                            {suggestion.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Quick Links */}
                            <div>
                                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                                    Quick Links
                                </h4>
                                <div className="grid grid-cols-2 gap-3">
                                    {quickLinks.map((link, index) => (
                                        <button
                                            key={index}
                                            onClick={() => {
                                                navigate(link.path);
                                                onClose();
                                            }}
                                            className="p-3 bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg flex items-center gap-3 transition-colors text-left"
                                        >
                                            <div className="p-2 rounded-lg bg-slate-200 dark:bg-slate-600 text-slate-600 dark:text-slate-400">
                                                <link.icon fontSize="small" />
                                            </div>
                                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                                {link.label}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer */}
                {hasResults && (
                    <div className="p-3 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50">
                        <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
                            ↑↓ to navigate • ↵ to select • ESC to close
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchModal;
