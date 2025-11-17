// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import PublicoAlvo from "./pages/PublicoAlvo";
import FaleConosco from "./pages/FaleConosco";
import Clima from "./pages/Clima";
import Beneficios from "./pages/Beneficios"; // <-- import da página Benefícios
import AreaAtuacao from "./pages/AreaAtuacao";
import Impacto from "./pages/Impacto";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";


// Seus estilos (mantém o visual do projeto antigo)
import "./assets/css/style.css";
import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Páginas */}
        <Route path="/beneficios" element={<Beneficios />} /> {/* <-- rota atualizada */}
        <Route path="/publico-alvo" element={<PublicoAlvo />} />
        <Route path="/clima" element={<Clima />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/fale-conosco" element={<FaleConosco />} />
        <Route path="/area-atuacao" element={<AreaAtuacao />} />
        <Route path="/impacto" element={<Impacto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />


        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}