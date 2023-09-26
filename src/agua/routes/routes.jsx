import React from 'react';
import { Routes, Route } from 'react-router';
import HomePage from '../pages/homePage';import MobileMenu from '../pages/mobileMenu';import Carpooling from '../pages/carpooling';import Ventajas from '../pages/ventajas';import Sostenibilidad from '../pages/sostenibilidad';import Ayuda from '../pages/ayuda';import Empresas from '../pages/empresas';import Contactanos from '../pages/contactanos';import Beneficios from '../pages/beneficios';import Nosotros from '../pages/nosotros';import NuestraHistoria from '../pages/nuestraHistoria';import Medios from '../pages/medios';import Blog from '../pages/blog';

function RoutingApp() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
<Route path="/HomePage" element={<HomePage />} />
<Route path="/MobileMenu" element={<MobileMenu />} />
<Route path="/Carpooling" element={<Carpooling />} />
<Route path="/Ventajas" element={<Ventajas />} />
<Route path="/Sostenibilidad" element={<Sostenibilidad />} />
<Route path="/Ayuda" element={<Ayuda />} />
<Route path="/Empresas" element={<Empresas />} />
<Route path="/Contactanos" element={<Contactanos />} />
<Route path="/Beneficios" element={<Beneficios />} />
<Route path="/Nosotros" element={<Nosotros />} />
<Route path="/NuestraHistoria" element={<NuestraHistoria />} />
<Route path="/Medios" element={<Medios />} />
<Route path="/Blog" element={<Blog />} />

        </Routes>
    );

}

export default RoutingApp;