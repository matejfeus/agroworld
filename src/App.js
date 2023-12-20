import Header from "./components/Header/Header";
import SideMenu from "./components/Menu/SideMenu";
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";
import './i18n'
import React, { Suspense } from 'react';

function App() {
    return (
        <Suspense fallback={null}>
            { window.screen.width >= 1000 ? <SideMenu /> : <Header /> }
            <Content />
            <Footer />
        </Suspense>
    );
}

export default App;
