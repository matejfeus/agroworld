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
        <div>
            {(t(props.title) != "" && t(props.title) != "Agroworld") &&
                <li className={classes.item} onClick={() => handleClickScroll(props.title)}>
                    <a>
                    <span>
                        {t(props.title)}
                    </span>
                    </a>
                </li>
            }
        </div>
    );
}

export default MenuOption;