import {content} from "../data";
import classes from "./HeaderMenuList.module.css";
import HeaderMenuOption from "./HeaderMenuOption";

const HeaderMenuList = () => {

    console.log(content)
    content.shift();
    content.push({title: "contact"});
    console.log(content);
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