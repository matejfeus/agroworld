import classes from "./FooterMenu.module.css";
import FooterMenuList from "./FooterMenuList";

const links = {}

const FooterMenu = (props) => {
    return (
        <div>
            <h4>Menu</h4>
            <FooterMenuList />
        </div>
    );
}

export default FooterMenu;