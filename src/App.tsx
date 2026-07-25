import { Route, Routes } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";
import { Home } from "./pages/Home";
import { Sobre } from "./pages/Sobre";
import { Equipa } from "./pages/Equipa";
import { FazTeMembro } from "./pages/FazTeMembro";
import { Contactos } from "./pages/Contactos";
import { Ideias } from "./pages/Ideias";
import { Cartazes } from "./pages/Cartazes";
import { Sugestao } from "./pages/Sugestao";
import { Denuncia } from "./pages/Denuncia";
import { Imprensa } from "./pages/Imprensa";
import { Eventos } from "./pages/Eventos";
import { Lit } from "./pages/Lit";
import { AquiHaParlamento } from "./pages/AquiHaParlamento";
import { Autarquicas } from "./pages/Autarquicas";
import { Candidato } from "./pages/Candidato";
import { Loja } from "./pages/Loja";
import { Privacidade } from "./pages/Privacidade";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="trofa-liberal" element={<Sobre />} />
        <Route path="trofa-liberal/equipa" element={<Equipa />} />
        <Route path="trofa-liberal/faz-te-membro" element={<FazTeMembro />} />
        <Route path="trofa-liberal/contactos" element={<Contactos />} />
        <Route path="ideias" element={<Ideias />} />
        <Route path="ideias/cartazes" element={<Cartazes />} />
        <Route path="ideias/sugestao" element={<Sugestao />} />
        <Route path="denuncia" element={<Denuncia />} />
        <Route path="imprensa" element={<Imprensa />} />
        <Route path="eventos" element={<Eventos />} />
        <Route path="eventos/lit" element={<Lit />} />
        <Route path="eventos/aqui-ha-parlamento" element={<AquiHaParlamento />} />
        <Route path="autarquicas-2025" element={<Autarquicas />} />
        <Route path="autarquicas-2025/candidatos/:slug" element={<Candidato />} />
        <Route path="loja" element={<Loja />} />
        <Route path="privacidade" element={<Privacidade />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
