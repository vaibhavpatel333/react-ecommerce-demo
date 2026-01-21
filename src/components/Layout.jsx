import Header from "./common/Header";
import Sidebar from "./common/Sidebar";


export default function Layout({ children }) {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <main className="p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
