import { content } from '../data.js';
import {useTranslation} from "react-i18next";
import classes from "./HeaderMenuOption.module.css"

const HeaderMenuOption = (props) => {

    const handleClickScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const { t } = useTranslation();

    return (
        <>
            <li className={classes.item} onClick={() => handleClickScroll(props.title)}>
                {t(props.title)}
            </li>

            <hr className={classes.item}/>
        </>
    );
}

export default HeaderMenuOption;