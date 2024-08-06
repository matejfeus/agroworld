import classes from "./FooterContactList.module.css";
import FooterContactItem from "./FooterContactItem";
import { useTranslation } from 'react-i18next';

const content = [
    {classes: "fa fa-map-marker", text: "Agroworld d.o.o., Josipa Semagea 5, 10000 Zagreb", url: "https://g.co/kgs/vZX3HLR"},
    {classes: "fa fa-phone", text: "+385 98 968 3306", url: "tel:+385989683306"},
    {classes: "fa fa-envelope-o", text: "matejfeus@gmail.com", url: "mailto:matejfeus@gmail.com"}
];

const FooterContactList = (props) => {

    const { t } = useTranslation();

    return (
        <>
            <h4>{t('contact')}</h4>
            {content.map(item => <FooterContactItem classes={item.classes} text={item.text} url={item.url} />)}
        </>
    );
}

export default FooterContactList;