import classes from "./MenuOption.module.css";
import { useTranslation } from 'react-i18next';

const MenuOption = (props) => {
    const handleClickScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const { t } = useTranslation();

    return (
        <li className={classes.item} onClick={() => handleClickScroll(props.title)}>
            <a>
                <span>
                    {t(props.title)}
                </span>
            </a>
        </li>
    );
}

export default MenuOption;