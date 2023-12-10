import Header from "./components/Header";
import SideMenu from "./components/Menu/SideMenu";
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";

function App() {
    return (
        <>
            <Header />
            { window.screen.width >= 768 ? <SideMenu /> : <></> }
            <Content />
            <Footer />
        </>
    );
}

export default App;
