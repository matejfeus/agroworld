import classes from "./MenuOptionList.module.css";
import MenuOption from "./MenuOption";
import {useRef} from 'react';
import { content } from '../data.js';

const MenuOptionList = (props) => {
    const options = content.map((item) => {return item.title});

    console.log(options);

    return (
        <ul>
            {options.map((option) => <MenuOption title={option} />)}
        </ul>
    );
}

export default MenuOptionList;