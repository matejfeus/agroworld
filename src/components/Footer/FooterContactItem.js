import classes from "./FooterContactItem.module.css";

const FooterContactItem = (props) => {
    return (
        <div className={classes.footer_contact_item}>
            <i className={props.classes}></i>
            <p className={classes.display_inline}>
                {props.text}
            </p>
        </div>
    );
}

export default FooterContactItem;