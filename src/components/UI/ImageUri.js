import classes from "./IconUri.module.css";

const ImageUri = (props) => {
    const imageName = props.imageName;
    const imagePath = require(`../../assets/${imageName}`);

    return (
        <a href={props.href_}>
            <img src={imagePath} alt={imageName}/>
        </a>
    )
}

export default ImageUri;