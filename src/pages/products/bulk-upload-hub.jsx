import React from "react";
import { useNavigate } from "react-router-dom";
import {
  CloudUpload,
  Download,
  History,
  Info,
  CheckCircle,
  Schedule,
  Error,
  GetApp,
  Visibility,
  Lightbulb,
} from "@mui/icons-material";
import Header from "../../components/common/Header";

const BulkUploadHub = () => {
  const navigate = useNavigate();

  const recentUploads = [
    {
      jobId: "#99281",
      fileName: "sum.xlsx",
      fileSize: "1.2 MB",
      status: "Completed",
      statusColor: "green",
      processed: "124 / 124",
      timestamp: "Oct 24, 02:45 PM",
      action: "download",
    },
    {
      jobId: "#99275",
      fileName: "ele.csv",
      fileSize: "450 KB",
      status: "Processing",
      statusColor: "blue",
      processed: "45 / 300",
      timestamp: "Oct 24, 04:12 PM",
      action: "view",
    },
    {
      jobId: "#99264",
      fileName: "inv.csv",
      fileSize: "12 KB",
      status: "Failed",
      statusColor: "red",
      processed: "0 / 15",
      timestamp: "Oct 23, 11:30 AM",
      action: "error",
    },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case "Completed":
        return <CheckCircle className="text-green-500" fontSize="small" />;
      case "Processing":
        return <Schedule className="text-blue-500" fontSize="small" />;
      case "Failed":
        return <Error className="text-red-500" fontSize="small" />;
      default:
        return null;
    }
  };

  const getActionButton = (action, jobId) => {
    switch (action) {
      case "download":
        return (
          <button className="text-slate-400 hover:text-primary transition-colors" title="Download">
            <GetApp fontSize="small" />
          </button>
        );
      case "view":
        return (
          <button className="text-slate-400 hover:text-primary transition-colors" title="View Progress">
            <Visibility fontSize="small" />
          </button>
        );
      case "error":
        return (
          <button className="text-red-500 hover:text-red-600 text-xs font-medium transition-colors">
            Error Report
          </button>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-200">
      <div className="max-w-8xl mx-auto px-6 py-8">
        {/* Header */}
        <Header />

        {/* Page Title */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-2">
            <div>
              <h1 className="text-3xl font-bold tracking-tight mb-2">Bulk Product Upload Hub</h1>
              <p className="text-slate-600 dark:text-slate-400">
                Manage and sync your large scale inventory effortlessly.
              </p>
            </div>
            <div className="flex gap-3">
              <button className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 px-4 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors">
                <Download fontSize="small" />
                Download Template
              </button>
              <button className="bg-primary hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors shadow-sm">
                <History fontSize="small" />
                View Audit Logs
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upload Card */}
            <div
              className="relative rounded-2xl p-10 text-slate-900 overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #FFF7ED 0%, #FED7AA 50%, #D97706 100%)",
              }}
            >
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-4 text-slate-900">Upload CSV or Excel File</h2>
                <p className="text-slate-700 mb-6 text-sm">
                  Drag and drop your product catalog file here, or browse from your computer.
                  <br />
                  Supports .csv, .xls, and .xlsx formats.
                </p>
                <button
                  onClick={() => navigate("/products/bulk-upload/mapping")}
                  className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg"
                >
                  Browse Files
                </button>
              </div>
              <div className="absolute top-0 right-0 opacity-20">
                <CloudUpload style={{ fontSize: "200px" }} />
              </div>
            </div>

            {/* Recent Bulk Uploads */}
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                <h3 className="font-bold text-lg">Recent Bulk Uploads</h3>
                <button className="text-primary hover:text-blue-600 text-sm font-medium transition-colors">
                  Refresh Status
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">
                    <tr>
                      <th className="px-6 py-3">Job ID</th>
                      <th className="px-6 py-3">File Name</th>
                      <th className="px-6 py-3">Status</th>
                      <th className="px-6 py-3">Processed</th>
                      <th className="px-6 py-3">Timestamp</th>
                      <th className="px-6 py-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {recentUploads.map((upload, index) => (
                      <tr key={index} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                        <td className="px-6 py-4 font-medium">{upload.jobId}</td>
                        <td className="px-6 py-4">
                          <span className="font-medium">{upload.fileName}</span>
                          <span className="text-xs text-slate-500 dark:text-slate-400 ml-2">
                            ({upload.fileSize})
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            {getStatusIcon(upload.status)}
                            <span className="font-medium">{upload.status}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{upload.processed}</td>
                        <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{upload.timestamp}</td>
                        <td className="px-6 py-4 text-right">{getActionButton(upload.action, upload.jobId)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Instructions Card */}
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <Info className="text-primary" fontSize="small" />
                <h3 className="font-bold text-lg">Instructions</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Mandatory Indian Compliance:
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-0.5">⚠</span>
                      <span>
                        <strong>HSN Code:</strong> 8-digit HSN code is mandatory for all electronics and textiles
                        categories.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-0.5">⚠</span>
                      <span>
                        <strong>GST %:</strong> Tax rates must be specified (5%, 12%, 18%, or 28%) as per Indian GST
                        laws.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-0.5">⚠</span>
                      <span>
                        <strong>Origin:</strong> "Country of Origin" is required for Legal Metrology compliance.
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Upload Guidelines:</h4>
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Maximum 5,000 rows per file.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>SKUs must be unique across your store.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Images should be provided as public URL links.</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">
                    Need help with the file format?
                  </p>
                  <button 
                    onClick={() => navigate("/inventory/bulk-upload/preview")}
                    className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    View Sample File
                  </button>
                </div>
              </div>
            </div>

            {/* Pro Tip Card */}
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-900/30 p-6">
              <div className="flex items-start gap-3">
                <Lightbulb className="text-blue-500 mt-0.5" fontSize="small" />
                <div>
                  <h3 className="font-bold text-sm mb-1">Pro Tip</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Use our Auto-Mapping feature to link your own CSV headers to our template automatically.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BulkUploadHub;
