import {content} from "../data";
import classes from "./HeaderMenuList.module.css";
import HeaderMenuOption from "./HeaderMenuOption";

const HeaderMenuList = () => {

    const rendered = content.map(
        (item, index) =>
            <HeaderMenuOption key={index} title={item.title} />
    )

    return (
        <nav className={classes.menu}>
            <ul>
                {rendered}
            </ul>
        </nav>
    );
}

export default HeaderMenuList;