import classes from "./MenuOptionList.module.css";
import MenuOption from "./MenuOption";

const MenuOptionList = (props) => {
    const options = [
        "La Veguilla",
        "Garlic with Guarantees",
        "Garlic from La Veguilla",
        "The Garlic Grower",
        "Las Pedroñeras",
        "Garlic and You"
    ];

    return (
        <ul>
            {options.map((option) => <MenuOption title={option} />)}
        </ul>
    );
}

export default MenuOptionList;