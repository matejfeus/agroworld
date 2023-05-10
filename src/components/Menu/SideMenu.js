import classes from "./SideMenu.module.css";
import MenuOptionList from "./MenuOptionList";
import ImageUri from "../UI/ImageUri";
import IconUri from "../UI/IconUri";
import background from "../../assets/menu-background.jpg";

const SideMenu = (props) => {
    return (
        <>
            <div className={classes.sidenav} style={{
                backgroundImage: `url(${background})`
            }}>
                <ImageUri href_="#" imageName="Logo-Ajos-LaVeguilla.png" />
                <MenuOptionList />
                <ImageUri href_="#" imageName="en.png"/>
                <ImageUri href_="#" imageName="es.png" />

                <IconUri classes="fa fa-facebook"/>
                <IconUri classes="fa fa-twitter"/>
                <IconUri classes="fa fa-instagram"/>

                <p>© 2017 Ajos La Veguilla. </p>
            </div>
        </>
    );
}

export default SideMenu;