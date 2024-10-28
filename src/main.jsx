// main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DogImageGallery from "./components/DogImageGallery";
import DogDetail from "./components/DogDetail";
import NotFound from "./routes/NotFound";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DogImageGallery />} />
        <Route path="/dog/:id" element={<DogDetail />} />{" "}
        {/* Dog detail route */}
        <Route path="*" element={<NotFound />} /> {/* NotFound route */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
