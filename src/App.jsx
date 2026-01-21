import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/dashboard";
import AddProducts from "./pages/products/add-products";
import EditProduct from "./pages/products/edit-product";
import ProductDetails from "./pages/products/product-details";
import LiveProduct from "./pages/products/live-product";
import BulkUploadHub from "./pages/products/bulk-upload-hub";
import SampleReview from "./pages/inventory/bulk-upload/preview";
import Mapping from "./pages/products/bulk-upload/mapping";
import BulkProgress from "./pages/products/bulk-upload/progress";

import ErrorResolution from "./pages/inventory/bulk-upload/error-resolution";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products/add" element={<AddProducts />} />
        <Route path="/products/edit/:id" element={<EditProduct />} />
        <Route path="/products/details" element={<ProductDetails />} />
        <Route path="/products/live" element={<LiveProduct />} />
        <Route path="/products/bulk-upload" element={<BulkUploadHub />} />
        <Route path="/products/bulk-upload/mapping" element={<Mapping />} />
        <Route path="/inventory/bulk-upload/preview" element={<SampleReview />} />
        <Route path="/products/bulk-upload/progress" element={<BulkProgress />} />
        <Route path="/inventory/bulk-upload/error-resolution" element={<ErrorResolution />} />

      </Routes>
    </Layout>
  );
}
