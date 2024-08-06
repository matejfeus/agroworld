import classes from "./ImageUri.module.css";
import i18next from "i18next";

const ImageUri = (props) => {
    const imageName = props.imageName;
    const imagePath = require(`../../assets/${imageName}`);

    return (
        <a href={props.href_} onClick={() => i18next.changeLanguage(imageName.split(".")[0])}>
            <img className={classes.imageUri} src={imagePath} alt={imageName}/>
        </a>
    )
}

export default ImageUri;