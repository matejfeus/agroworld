import classes from "./Header.module.css";
import HeaderMenuList from "./HeaderMenuList";
import IconUri from "../UI/IconUri";
import ImageUri from "../UI/ImageUri";
import classNames from "classnames";
import { useState } from "react";
import { useTranslation } from 'react-i18next'

const Header = () => {
    const [show, setShow] = useState(false);
    const [lan, changeLane] = useState("hr");

    const { t, i18n } = useTranslation();

    function toggleShow() {
        setShow(!show);
    }

    const changeLanguage = () => {
        changeLane(lan === "en" ? "hr" : "en")
        i18n.changeLanguage(lan === "en" ? "hr" : "en").then(r => {});
    };

    return (
        <>
            <div className={classes.outerWrapper}>
                <div className={classes.innerWrapperLeft}>
                    <div className={classes.item}>
                        <a href="tel:+385989683306" style={{fontSize: "18px"}}>+385 98 968 3306</a>
                    </div>
                </div>
                <div className={classes.innerWrapperCenter} onClick={() => changeLanguage()}>
                    <div className={classes.item}>
                        { lan === "hr" ? <ImageUri href_="#" imageName="en.png"/>
                            : <ImageUri href_="#" imageName="hr.svg" /> }
                    </div>
                </div>
                <div className={classes.innerWrapperRight}>
                    <div className={classes.item}>
                        <a href="https://wa.me/385989683306" style={{fontSize: "20px"}} className="fa fa-whatsapp"></a>
                    </div>
                </div>
            </div>
            <header className={classes.header}>

                <div className={classes.containerWrapper}>
                    <div className={classes.container}>
                        <div className={classes.burger}>
                            <span className={classes.icon} onClick={toggleShow}>
                                <IconUri classes="fa fa-bars"/>
                            </span>
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
        </>
    );
}

export default Header;