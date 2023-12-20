import classes from "./Header.module.css";
import HeaderMenuList from "./HeaderMenuList";
import IconUri from "../UI/IconUri";
import logo from "../../assets/Logo-Ajos-LaVeguilla.png";
import {useState} from "react";

const Header = () => {
    const [show, setShow] = useState(false);

    function toggleShow() {
        console.log("clicked");
        setShow(!show);
    }

    return (
        <header className={classes.header}>
            <div className={classes.containerWrapper}>
                <div className={classes.container}>
                    <div className={classes.burger}>
                        <span className={classes.icon} onClick={toggleShow}>
                            <IconUri classes="fa fa-bars"/>
                        </span>
                    </div>
                    <div className={classes.logoWrapper}>
                        <div className={classes.logo}>
                            <a href="#">
                                <img src={logo} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className={classes.burger}>

                    </div>
                </div>
                <div className={classes.optionList} style={{opacity: !show ? "0" : "1",
                    transition: "all .2s",
                    visibility: !show ? "hidden" : "visible"}}>
                    { show && <HeaderMenuList /> }
                </div>
            </div>
        </header>
    );
}

export default Header;