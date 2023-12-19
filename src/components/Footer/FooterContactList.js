import classes from "./FooterContactList.module.css";
import FooterContactItem from "./FooterContactItem";
import { useTranslation } from 'react-i18next';

const content = [
    {classes: "fa fa-map-marker", text: "Pascualillo, s/n 16660 Las Pedroñeras, Cuenca, Spain"},
    {classes: "fa fa-phone", text: "+34 967 160 351"},
    {classes: "fa fa-envelope-o", text: "ajoslaveguilla@veguilla.com"}
];

const FooterContactList = (props) => {

    const { t } = useTranslation();

    return (
        <>
            <h4>{t('contact')}</h4>
            {content.map(item => <FooterContactItem classes={item.classes} text={item.text} />)}
        </>
    );
}

export default FooterContactList;