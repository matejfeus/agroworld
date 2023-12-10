import classes from "./Footer.module.css";
import background from "../../assets/footer-background.jpg";
import certificate1 from "../../assets/veguilla-fondos-europeos-energias-renovables-1-181x300.jpg";
import certificate2 from "../../assets/veguilla-fondos-europeos-181x300.jpg";
import FooterMenu from "./FooterMenu";
import FooterContactList from "./FooterContactList";

const Footer = (props) => {
    return (
        <footer>
            <div className={classes.container}>
                <div className={classes.container_inner} style={{
                    backgroundImage: `url(${background})`
                }}>
                    <div className={classes.footer_inner}>
                        <div className={classes.footer_component}>
                            <FooterContactList/>
                        </div>
                        <div className={classes.footer_component}>
                            <FooterMenu/>
                        </div>
                        <div className={classes.footer_component}>
                            <img src={certificate1} alt=""/>
                        </div>
                        <div className={classes.footer_component}>
                            <img src={certificate2} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;