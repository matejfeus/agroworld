import classes from "./Footer.module.css";
import background from "../assets/footer-background.jpg";

const Footer = (props) => {
    return (
        <footer>
            <div className={classes.container}>
                <div className={classes.container_inner} style={{
                    backgroundImage: `url(${background})`
                }}>
                    <div className={classes.footer_inner}></div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;