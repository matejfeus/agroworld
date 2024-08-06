import MenuOption from "./MenuOption";
import { content } from '../data.js';

const MenuOptionList = (props) => {
    const options = content.map((item) => {return item.title});

    return (
        <ul>
            {options.map((option) => <MenuOption title={option} />)}
        </ul>
    );
}

export default MenuOptionList;