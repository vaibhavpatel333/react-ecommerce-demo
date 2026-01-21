import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const AddProducts = () => {
    const navigate = useNavigate();
    const [hasVariants, setHasVariants] = useState(true);

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-200">
            <header className=" top-0 z-30 bg-surface-light dark:bg-surface-dark border-b border-border-light dark:border-border-dark px-6 py-4">
                <div className="max-w-8xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <nav className="text-xs text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-1">
                            <button 
                                onClick={() => navigate('/')}
                                className="hover:underline"
                            >
                                Products
                            </button>
                            <ChevronRightIcon className="text-[14px]" />
                            <span className="font-medium text-slate-700 dark:text-slate-300">Add New Product</span>
                        </nav>
                        <h1 className="text-2xl font-bold tracking-tight">Add New Product</h1>
                    </div>
                    <div className="flex items-center gap-3">
                        <button 
                            onClick={() => {
                                // Save draft and navigate to main page (dashboard)
                                navigate('/');
                            }}
                            className="px-4 py-2 text-sm font-semibold border border-primary text-primary rounded hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors uppercase tracking-wide"
                        >
                            Save Draft
                        </button>
                        <button 
                            onClick={() => {
                                // Publish product and navigate to live product success page
                                navigate('/products/live');
                            }}
                            className="px-4 py-2 text-sm font-semibold bg-primary text-white rounded shadow hover:bg-blue-700 transition-colors uppercase tracking-wide"
                        >
                            Publish Product
                        </button>
                    </div>
                </div>
            </header>
            <main className="max-w-8xl mx-auto px-6 py-8 space-y-8 pb-24">
                <section className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-lg p-6 mui-shadow">
                    <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
                        <span className="bg-slate-100 dark:bg-slate-800 w-6 h-6 flex items-center justify-center rounded-full text-xs">1</span>
                        Basic Information
                    </h2>
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium mb-2">Product Name <span className="text-red-500">*</span></label>
                            <input className="w-full bg-transparent border-border-light dark:border-border-dark rounded focus:ring-primary focus:border-primary px-3 py-2.5" placeholder="e.g. Apple iPhone 15 (128GB) - Blue" type="text" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">Brand <span className="text-red-500">*</span></label>
                                <select className="w-full bg-transparent border-border-light dark:border-border-dark rounded focus:ring-primary focus:border-primary px-3 py-2.5">
                                    <option>Select Brand</option>
                                    <option>Apple</option>
                                    <option>Samsung</option>
                                    <option>Google</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Category <span className="text-red-500">*</span></label>
                                <select className="w-full bg-transparent border-border-light dark:border-border-dark rounded focus:ring-primary focus:border-primary px-3 py-2.5">
                                    <option>Electronics &gt; Smartphones</option>
                                    <option>Electronics &gt; Laptops</option>
                                    <option>Accessories</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Product Description</label>
                            <textarea className="w-full bg-transparent border-border-light dark:border-border-dark rounded focus:ring-primary focus:border-primary px-3 py-2.5" placeholder="Detailed product specifications and features..." rows="4"></textarea>
                        </div>
                    </div>
                </section>

                <section className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-lg p-6 mui-shadow">
                    <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
                        <span className="bg-slate-100 dark:bg-slate-800 w-6 h-6 flex items-center justify-center rounded-full text-xs">2</span>
                        Media
                    </h2>
                    <div className="space-y-6">
                        <div className="border-2 border-dashed border-border-light dark:border-border-dark rounded-lg p-10 flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer">
                            <CloudUploadIcon className="text-primary text-5xl mb-4" />
                            <p className="font-medium text-slate-800 dark:text-slate-200">Drag and drop images/videos</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Upload up to 10 files. PNG, JPG, or MP4. Max size 10MB each.</p>
                            <button className="mt-4 px-6 py-2 text-xs font-semibold border border-border-light dark:border-border-dark rounded hover:bg-white dark:hover:bg-slate-700 transition-colors uppercase tracking-wider">
                                Browse Files
                            </button>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <div className="relative w-32 h-32 border border-border-light dark:border-border-dark rounded-lg overflow-hidden group">
                                <img alt="iPhone 15 Pink" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjD7Ljb3cBxDW6sKcUoXtv_XhhHbucKqFuJ-6z4S3QgXfxHsfLhrEENzAubSqZSU6rXqrF8SDEga6STGZNkcenp8uVzD_yC6TsnBBSWsomkUKHapI_pfigxGFfw1rb0qUV_SOxsG8KW3oRTC74soJNOZwZCRxEl_CENhHLpY5oWU479E-FX6AzKG9i0e3BH5dceyYtf6eTLjz-ITdgd_xbVaHdcoWmy3p0bf4MnF_Z946Cd0w76z8PN7Cy0tHzazroKNieKoAguZtb" />
                                <button className="absolute top-1 right-1 bg-red-500 text-white p-0.5 rounded-full shadow hover:bg-red-600">
                                    <CloseIcon className="text-[14px]" />
                                </button>
                            </div>
                            <div className="relative w-32 h-32 border border-border-light dark:border-border-dark rounded-lg overflow-hidden group">
                                <img alt="iPhone 15 Yellow" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQge1jFVcVucXsVkbDzGWZNCDAG3UqlDGv3uoH5La33xhyU2Oh8M0yHRJkCOXtIUUPgzXcnjH6gTOEJ6Vcrw1-LICLtLwPWSpB2hNnAVE16-T06i5bDs7B08btcGkcOQJ0IgxjwQafAYu4G-5vkYkIDhwYleNO0Gq4LvtNix_9TvI3p-eCDx3UNLwzt4VxiGFp85ZcltCI-i188YSKY8fYWGx1JDf_BF4vCzFZcLP_sBM4alYQrHh08oWbHa9WL1Jo9Ccxx1fPMCM2" />
                                <button className="absolute top-1 right-1 bg-red-500 text-white p-0.5 rounded-full shadow hover:bg-red-600">
                                    <CloseIcon className="text-[14px]" />
                                </button>
                            </div>
                            <button className="w-32 h-32 border border-dashed border-border-light dark:border-border-dark rounded-lg flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all">
                                <AddIcon className="text-3xl" />
                            </button>
                        </div>
                    </div>
                </section>

                <section className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-lg p-6 mui-shadow">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-semibold flex items-center gap-2">
                            <span className="bg-slate-100 dark:bg-slate-800 w-6 h-6 flex items-center justify-center rounded-full text-xs">3</span>
                            Product Variants
                        </h2>
                        <div className="flex items-center gap-3">
                            <span className="text-sm text-slate-700 dark:text-slate-300">This product has variants?</span>
                            <button
                                onClick={() => setHasVariants(!hasVariants)}
                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                                    hasVariants ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-600'
                                }`}
                                role="switch"
                                aria-checked={hasVariants}
                            >
                                <span
                                    className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-sm transition-all duration-200 ease-in-out ${
                                        hasVariants ? 'translate-x-6' : 'translate-x-0.5'
                                    }`}
                                />
                            </button>
                        </div>
                    </div>
                    {hasVariants && (
                    <div className="bg-slate-50 dark:bg-slate-900/40 rounded-lg p-6 border border-border-light dark:border-border-dark mb-8">
                        <p className="text-sm font-semibold mb-4 text-slate-600 dark:text-slate-300">Define Attributes</p>
                        <div className="space-y-4">
                            <div className="grid grid-cols-12 gap-4 items-end">
                                <div className="col-span-12 md:col-span-3">
                                    <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Attribute Name</label>
                                    <input className="w-full bg-surface-light dark:bg-surface-dark border-border-light dark:border-border-dark rounded text-sm px-3 py-2" type="text" value="Storage" />
                                </div>
                                <div className="col-span-12 md:col-span-8">
                                    <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Values</label>
                                    <div className="flex flex-wrap items-center gap-2 p-1.5 border border-border-light dark:border-border-dark rounded bg-surface-light dark:bg-surface-dark min-h-[40px]">
                                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-sm">
                                            128GB <button className="hover:text-blue-900"><span className="material-icons text-xs">close</span></button>
                                        </span>
                                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-sm">
                                            256GB <button className="hover:text-blue-900"><span className="material-icons text-xs">close</span></button>
                                        </span>
                                        <input className="flex-1 min-w-[120px] bg-transparent border-none p-0 text-sm focus:ring-0" placeholder="Add value..." type="text" />
                                    </div>
                                </div>
                                <div className="col-span-12 md:col-span-1 pb-1">
                                    <button className="p-2 text-slate-400 hover:text-red-500 transition-colors">
                                        <span className="material-icons"><DeleteIcon /></span>
                                    </button>
                                </div>
                            </div>
                            <div className="grid grid-cols-12 gap-4 items-end">
                                <div className="col-span-12 md:col-span-3">
                                    <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Attribute Name</label>
                                    <input className="w-full bg-surface-light dark:bg-surface-dark border-border-light dark:border-border-dark rounded text-sm px-3 py-2" type="text" value="Color" />
                                </div>
                                <div className="col-span-12 md:col-span-8">
                                    <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Values</label>
                                    <div className="flex flex-wrap items-center gap-2 p-1.5 border border-border-light dark:border-border-dark rounded bg-surface-light dark:bg-surface-dark min-h-[40px]">
                                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-sm">
                                            Blue <button className="hover:text-blue-900"><span className="material-icons text-xs">close</span></button>
                                        </span>
                                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-sm">
                                            Natural Titanium <button className="hover:text-blue-900"><span className="material-icons text-xs">close</span></button>
                                        </span>
                                        <input className="flex-1 min-w-[120px] bg-transparent border-none p-0 text-sm focus:ring-0" placeholder="Add value..." type="text" />
                                    </div>
                                </div>
                                <div className="col-span-12 md:col-span-1 pb-1">
                                    <button className="p-2 text-slate-400 hover:text-red-500 transition-colors">
                                        <span className="material-icons"><DeleteIcon /></span>
                                    </button>
                                </div>
                            </div>
                            <button className="flex items-center gap-2 text-primary mt-2 hover:opacity-80 transition-opacity">
                                <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                                    <AddIcon className="text-white" style={{ fontSize: '14px' }} />
                                </div>
                                <span className="text-sm font-semibold text-primary leading-tight">
                                    Add another<br />attribute
                                </span>
                            </button>
                        </div>
                    </div>
                    )}
                    {hasVariants && (
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-md font-semibold">Variant Combinations (4)</h3>
                            <div className="flex gap-4">
                                <button className="text-xs font-semibold text-primary uppercase hover:underline">Apply bulk pricing</button>
                                <button className="text-xs font-semibold text-primary uppercase hover:underline">Bulk update stock</button>
                            </div>
                        </div>
                        <div className="overflow-x-auto border border-border-light dark:border-border-dark rounded-lg">
                            <table className="w-full text-left text-sm border-collapse">
                                <thead className="bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                                    <tr>
                                        <th className="px-4 py-3 font-semibold uppercase tracking-wider text-[11px]">Variant</th>
                                        <th className="px-4 py-3 font-semibold uppercase tracking-wider text-[11px]">SKU</th>
                                        <th className="px-4 py-3 font-semibold uppercase tracking-wider text-[11px]">Price (₹)</th>
                                        <th className="px-4 py-3 font-semibold uppercase tracking-wider text-[11px]">GST (%)</th>
                                        <th className="px-4 py-3 font-semibold uppercase tracking-wider text-[11px]">Stock</th>
                                        <th className="px-4 py-3 font-semibold uppercase tracking-wider text-[11px] text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border-light dark:divide-border-dark">
                                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50">
                                        <td className="px-4 py-3 font-medium">128GB / Blue</td>
                                        <td className="px-4 py-3"><input className="w-28 bg-transparent border-border-light dark:border-border-dark rounded text-xs px-2 py-1" type="text" value="IP15-128-BL" /></td>
                                        <td className="px-4 py-3"><input className="w-24 bg-transparent border-border-light dark:border-border-dark rounded text-xs px-2 py-1" type="text" value="79900" /></td>
                                        <td className="px-4 py-3">
                                            <select className="w-20 bg-transparent border-border-light dark:border-border-dark rounded text-xs px-2 py-1">
                                                <option>18%</option>
                                                <option>12%</option>
                                                <option>5%</option>
                                            </select>
                                        </td>
                                        <td className="px-4 py-3"><input className="w-16 bg-transparent border-border-light dark:border-border-dark rounded text-xs px-2 py-1" type="text" value="50" /></td>
                                        <td className="px-4 py-3 text-center">
                                            <button className="text-slate-400 hover:text-red-500"><span className="material-icons text-lg"><DeleteIcon /></span></button>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50">
                                        <td className="px-4 py-3 font-medium">128GB / Titanium</td>
                                        <td className="px-4 py-3"><input className="w-28 bg-transparent border-border-light dark:border-border-dark rounded text-xs px-2 py-1" type="text" value="IP15-128-TI" /></td>
                                        <td className="px-4 py-3"><input className="w-24 bg-transparent border-border-light dark:border-border-dark rounded text-xs px-2 py-1" type="text" value="79900" /></td>
                                        <td className="px-4 py-3">
                                            <select className="w-20 bg-transparent border-border-light dark:border-border-dark rounded text-xs px-2 py-1">
                                                <option>18%</option>
                                            </select>
                                        </td>
                                        <td className="px-4 py-3"><input className="w-16 bg-transparent border-border-light dark:border-border-dark rounded text-xs px-2 py-1" type="text" value="30" /></td>
                                        <td className="px-4 py-3 text-center">
                                            <button className="text-slate-400 hover:text-red-500"><span className="material-icons text-lg"><DeleteIcon /></span></button>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50">
                                        <td className="px-4 py-3 font-medium">256GB / Blue</td>
                                        <td className="px-4 py-3"><input className="w-28 bg-transparent border-border-light dark:border-border-dark rounded text-xs px-2 py-1" type="text" value="IP15-256-BL" /></td>
                                        <td className="px-4 py-3"><input className="w-24 bg-transparent border-border-light dark:border-border-dark rounded text-xs px-2 py-1" type="text" value="89900" /></td>
                                        <td className="px-4 py-3">
                                            <select className="w-20 bg-transparent border-border-light dark:border-border-dark rounded text-xs px-2 py-1">
                                                <option>18%</option>
                                            </select>
                                        </td>
                                        <td className="px-4 py-3"><input className="w-16 bg-transparent border-border-light dark:border-border-dark rounded text-xs px-2 py-1" type="text" value="20" /></td>
                                        <td className="px-4 py-3 text-center">
                                            <button className="text-slate-400 hover:text-red-500"><span className="material-icons text-lg"><DeleteIcon /></span></button>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50">
                                        <td className="px-4 py-3 font-medium">256GB / Titanium</td>
                                        <td className="px-4 py-3"><input className="w-28 bg-transparent border-border-light dark:border-border-dark rounded text-xs px-2 py-1" type="text" value="IP15-256-TI" /></td>
                                        <td className="px-4 py-3"><input className="w-24 bg-transparent border-border-light dark:border-border-dark rounded text-xs px-2 py-1" type="text" value="89900" /></td>
                                        <td className="px-4 py-3">
                                            <select className="w-20 bg-transparent border-border-light dark:border-border-dark rounded text-xs px-2 py-1">
                                                <option>18%</option>
                                            </select>
                                        </td>
                                        <td className="px-4 py-3"><input className="w-16 bg-transparent border-border-light dark:border-border-dark rounded text-xs px-2 py-1" type="text" value="15" /></td>
                                        <td className="px-4 py-3 text-center">
                                            <button className="text-slate-400 hover:text-red-500"><span className="material-icons text-lg"><DeleteIcon /></span></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    )}
                </section>
            </main>
        </div>
    )
}

export default AddProducts;
