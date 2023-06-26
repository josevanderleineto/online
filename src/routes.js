import PaginaPadrao from "componentes/PaginaPadrao";
import ScrollToTop from "componentes/ScrollToTop";
import NaoEncontrada from "paginas/NaoEncontrada";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./componentes/Menu";
import Inicio from './paginas/Inicio';
import SobreMim from './paginas/SobreMim';
import Projetos from './paginas/Projetos'
import Rodape from "componentes/Rodape";

function AppRoutes() {
  return (
    
    <BrowserRouter>
    <head>
     <meta name="google-site-verification" content="S3j8Yc1tUYl9AssPAx6sQBJTC3aGBnh6OleMUjD9CD0" />
    </head>
    <body>
      <main>
      <ScrollToTop />
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
        <Route path="projetos" element={<Projetos />} />

        </Route>
        
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
      <Rodape />
        </main>
      </body>
    </BrowserRouter>  
  );
}

export default AppRoutes;
