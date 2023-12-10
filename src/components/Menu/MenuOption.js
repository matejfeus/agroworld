import classes from "./MenuOption.module.css";

const MenuOption = (props) => {
    const handleClickScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <li className={classes.item} onClick={() => handleClickScroll(props.title)}>
            <a>
                <span>
                    {props.title}
                </span>
            </a>
        </li>
    );
}

export default MenuOption;