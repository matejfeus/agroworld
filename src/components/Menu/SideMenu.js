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
                <div className={classes.padChild}>
                    <MenuOptionList/>
                </div>
                <div className={classes.stickToBottom}>
                    <div className={classes.padChild}>
                        <ImageUri href_="#" imageName="hr.svg"/>
                    </div>
                    <div className={classes.padChild}>
                        <ImageUri href_="#" imageName="en.png"/>
                    </div>
                    <p>© 2017 Agroworld d.o.o. </p>
                </div>
            </div>
        </>
    );
}

export default SideMenu;