import Header from "./components/Header";
import SideMenu from "./components/Menu/SideMenu";
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";
import './i18n'
import React, { Suspense } from 'react';

function App() {
    return (
        <Suspense fallback={null}>
            <Header />
            { window.screen.width >= 768 ? <SideMenu /> : <></> }
            <Content />
            <Footer />
        </Suspense>
    );
}

export default App;
