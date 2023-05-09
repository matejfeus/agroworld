import classes from "./ImageUri.module.css";

const ImageUri = (props) => {
    return (
        <a href={props.href}>
            <i className={props.classes}/>
        </a>
    )
}

export default ImageUri;