import classes from "./FooterMenuItem.module.css";

const FooterMenuItem = (props) => {
    return (
        <div className={classes.sub_menu}>
            <ul>
                <li>
                    <a href={props.url}>{props.title}</a>
                </li>
            </ul>
        </div>
    );
}

export default FooterMenuItem;