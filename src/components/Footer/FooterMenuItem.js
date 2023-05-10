import classes from "./FooterMenuItem.module.css";

const FooterMenuItem = (props) => {
    return (
        <ul>
            <li>
                <a href={props.url}>{props.title}</a>
            </li>
        </ul>
    );
}

export default FooterMenuItem;