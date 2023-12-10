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
                    <ImageUri href_="#" imageName="Logo-Ajos-LaVeguilla.png"/>
                </div>
                <div className={classes.padChild}>
                    <MenuOptionList/>
                </div>

                <div className={classes.stickToBottom}>
                    <div className={classes.padChild}>
                        <ImageUri href_="#" imageName="en.png"/>
                    </div>
                    <div className={classes.padChild}>
                        <ImageUri href_="#" imageName="es.png"/>
                    </div>
                    {/*https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container*/}

                    <div className={classes.padChild}>
                        <div className={classes.flex}>
                            <div className={classes.padChild}>
                                <IconUri classes="fa fa-facebook"/>
                            </div>
                            <div className={classes.padChild}>
                                <IconUri classes="fa fa-twitter"/>
                            </div>
                            <div className={classes.padChild}>
                                <IconUri classes="fa fa-instagram"/>
                            </div>
                        </div>

                        <p>© 2017 Ajos La Veguilla. </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SideMenu;