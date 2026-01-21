import React from 'react';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DescriptionIcon from '@mui/icons-material/Description';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const AddProductModal = ({ isOpen, onClose }) => {
    const navigate = useNavigate();

    const drafts = [
        {
            title: 'Summer Collection Dress (Draft)',
            time: 'Last edited 2 hours ago',
            type: 'product'
        },
        {
            title: 'Consultation Session (Draft)',
            time: 'Last edited Yesterday',
            type: 'service'
        }
    ];

    if (!isOpen) return null;

    const handlePhysicalProduct = () => {
        navigate('/products/add');
        onClose();
    };

    const handleNewService = () => {
        // Navigate to service creation page (you can create this route later)
        navigate('/products/add');
        onClose();
    };

    const handleResumeDraft = (draft) => {
        // Navigate to edit draft page
        if (draft.type === 'product') {
            navigate('/products/edit/1'); // Replace with actual draft ID
        } else {
            navigate('/products/edit/1'); // Replace with actual draft ID
        }
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
            <div 
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">What would you like to add?</h2>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                            Choose a category to start building your listing
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
                    >
                        <CloseIcon className="text-slate-500 dark:text-slate-400" />
                    </button>
                </div>

                {/* Product/Service Selection Cards */}
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Physical Product Card */}
                    <button
                        onClick={handlePhysicalProduct}
                        className="p-6 border-2 border-slate-200 dark:border-slate-700 rounded-xl hover:border-primary dark:hover:border-primary transition-all text-left group"
                    >
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                            <LocalShippingIcon className="text-primary group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">Physical Product</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            Sell items that require shipping, delivery, or local customer pickup.
                        </p>
                    </button>

                    {/* New Service Card */}
                    <button
                        onClick={handleNewService}
                        className="p-6 border-2 border-slate-200 dark:border-slate-700 rounded-xl hover:border-primary dark:hover:border-primary transition-all text-left group"
                    >
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                            <DescriptionIcon className="text-primary group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">New Service</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            Offer professional services, appointments, or digital consultations.
                        </p>
                    </button>
                </div>

                {/* Continue where you left off */}
                {drafts.length > 0 && (
                    <div className="px-6 pb-6">
                        <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4">
                            Continue where you left off
                        </h3>
                        <div className="space-y-3">
                            {drafts.map((draft, index) => (
                                <div
                                    key={index}
                                    className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                                >
                                    <div className="flex-1">
                                        <p className="font-medium text-slate-900 dark:text-slate-100">{draft.title}</p>
                                        <div className="flex items-center gap-2 mt-1">
                                            <AccessTimeIcon className="text-slate-400 text-sm" fontSize="small" />
                                            <p className="text-xs text-slate-500 dark:text-slate-400">{draft.time}</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handleResumeDraft(draft)}
                                        className="px-4 py-2 bg-primary hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors"
                                    >
                                        Resume
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Footer */}
                <div className="p-6 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between bg-slate-50 dark:bg-slate-900/50">
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                        All changes are saved automatically to drafts.
                    </p>
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
                    >
                        Cancel and go back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddProductModal;
