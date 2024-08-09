import classes from "./Footer.module.css";
import background from "../../assets/footer-background.jpg";
import FooterContactList from "./FooterContactList";

const Footer = (props) => {
    return (
        <footer id="contact">
            <div className={classes.container}>
                <div className={classes.container_inner} style={{
                    backgroundImage: `url(${background})`
                }}>
                    <div className={classes.footer_inner}>
                        <div className={classes.footer_component}>
                            <FooterContactList/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;