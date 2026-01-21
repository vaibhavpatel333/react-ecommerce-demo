import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import VideocamIcon from '@mui/icons-material/Videocam';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const LiveProduct = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 flex items-center justify-center p-6 transition-colors duration-200">
            <div className="max-w-8xl w-full text-center space-y-12">
                <div className="flex flex-col items-center space-y-4">
                    <div className="relative">
                        <div className="w-20 h-20 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center success-badge-glow">
                            <CheckCircleIcon className="text-primary text-5xl" />
                        </div>
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-100 dark:bg-blue-800 rounded-full"></div>
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Product is Live!</h1>
                        <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
                            Your product is now available for discovery and purchase on LYNKD.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="group p-8 bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 rounded-2xl hover:border-primary/30 hover:shadow-xl hover:shadow-blue-500/5 transition-all cursor-pointer">
                        <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                            <VideocamIcon className="text-primary group-hover:text-white" />
                        </div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Create a Shoppable Reel</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                            Record a short video to showcase your product features.
                        </p>
                    </div>

                    <div className="group p-8 bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 rounded-2xl hover:border-primary/30 hover:shadow-xl hover:shadow-blue-500/5 transition-all cursor-pointer">
                        <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                            <PersonAddIcon className="text-primary group-hover:text-white" />
                        </div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Invite a Creator</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                            Partner with creators to promote your new listing.
                        </p>
                    </div>

                    <div className="group p-8 bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 rounded-2xl hover:border-primary/30 hover:shadow-xl hover:shadow-blue-500/5 transition-all cursor-pointer">
                        <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                            <VisibilityIcon className="text-primary group-hover:text-white" />
                        </div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-2">View Live Storefront</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                            See how your product looks to potential customers.
                        </p>
                    </div>
                </div>

                <div className="space-y-4 pt-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">Share the news</p>
                    <div className="flex justify-center space-x-4">
                        <button className="w-12 h-12 flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                            <svg className="w-6 h-6 text-slate-700 dark:text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.768 0 1.017.265 2.013.766 2.896l-.811 2.961 3.03-.795c.854.466 1.812.712 2.782.712a5.769 5.769 0 005.768-5.768 5.766 5.766 0 00-5.768-5.774zm3.429 8.016c-.147.415-.852.766-1.178.803-.326.037-.643.033-1.077-.105-.27-.086-.604-.199-1.042-.387-1.854-.8-3.05-2.716-3.143-2.839-.094-.123-.761-.951-.761-1.813s.445-1.287.604-1.442c.158-.155.347-.193.461-.193s.227.004.326.009c.106.005.25-.039.39-.374.148-.352.503-1.223.548-1.312.045-.089.075-.194.015-.314-.06-.12-.09-.174-.18-.282-.09-.108-.19-.24-.27-.323-.086-.091-.176-.186-.076-.364.099-.178.441-.726.945-1.177.635-.568 1.171-.744 1.341-.744s.286.06.394.186c.109.126.471.558.591.737.119.18.199.3.139.42-.06.12-.139.18-.219.27-.08.09-.174.204-.25.283-.086.09-.175.188-.075.366.1.178.443.727.947 1.178.636.568 1.174.744 1.344.744.17 0 .286-.06.395-.186.109-.126.472-.558.592-.737.12-.18.2-.3.14-.42z"></path>
                            </svg>
                        </button>
                        <button className="w-12 h-12 flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                            <svg className="w-6 h-6 text-slate-700 dark:text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="space-y-6">
                    <button className="bg-primary hover:bg-blue-600 text-white font-semibold py-4 px-10 rounded-xl transition-all shadow-lg shadow-blue-500/30 flex items-center justify-center mx-auto space-x-2 w-full max-w-sm active:scale-95">
                        <Inventory2Icon />
                        <span>Go to Inventory</span>
                    </button>
                    <a className="block text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors" href="#">
                        Add another product
                    </a>
                </div>
            </div>
        </div>
    )
}

export default LiveProduct
