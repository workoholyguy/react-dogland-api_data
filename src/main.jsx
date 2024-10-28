// index.js
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import DetailView from "./routes/DetailView";
import NotFound from "./routes/NotFound";
import DogImageGallery from "./components/DogImageGallery";
import DogDetail from "./components/DogDetail";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DogImageGallery />} />
        <Route path="/dog/:id" element={<DogDetail />} />{" "}
        {/* Dog detail route */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
