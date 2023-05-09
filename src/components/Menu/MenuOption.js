import classes from "./MenuOption.module.css";

const MenuOption = (props) => {
    return (
        <li>
            <a href="#">
                <span>
                    {props.title}
                </span>
            </a>
        </li>
    );
}

export default MenuOption;