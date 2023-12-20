import classes from "./ImageUri.module.css";

const ImageUri = (props) => {
    return (
        <a href={props.href}>
            <i className={props.classes} style={{color: "#b39f89"}}/>
        </a>
    )
}

export default ImageUri;