import classes from "./Post.module.css";
import background from "../../assets/menu-background.jpg";
import { useTranslation } from 'react-i18next';

const Post = (props) => {
    const imgPath = "/images/" + props.sideImage;

    const { t } = useTranslation();

    return (
        <div className={classes.container}>
            {props.side === "left" &&
                (
                    <div  className={classes.containerChild} >
                        <img src={imgPath}/>
                    </div>
                )
            }
            <div  id={props.title} className={classes.containerChild}>
                {
                    t(props.title) != "" &&
                    <h2>{t(props.title)}</h2>
                }
                <br/>
                <h6><strong>{t(props.subtitle)}</strong></h6>
                <div className={classes.content} dangerouslySetInnerHTML={{ __html: t(props.text) }} />
            </div>
            {props.side === "right" &&
                (
                    <div  className={classes.containerChild}>
                        <img src={imgPath}/>
                    </div>
                )
            }
        </div>
    );
}

export default Post;