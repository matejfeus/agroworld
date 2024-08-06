import classes from "./FooterContactItem.module.css";

const FooterContactItem = (props) => {
    return (
        <div className={classes.footer_contact_item}>
            <i className={props.classes}></i>
            <a className={classes.display_inline} href={props.url}>
                {props.text}
            </a>
        </div>
    );
}

export default FooterContactItem;