import classes from "./Footer.module.css";

const Footer = (props) => {
    return (
        <footer>
            <div className={classes.container}>
                <div className={classes.container_inner}>
                    <div className={classes.footer_inner}></div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;