import classes from "./Post.module.css";
import background from "../../assets/menu-background.jpg";

const Post = (props) => {
    const imgPath = "/images/" + props.sideImage;

    return (
        <div className={classes.container}>
            {props.side === "left" &&
                (
                    <div  className={classes.containerChild} >
                        <img src={imgPath}/>
                    </div>
                )
            }
            <div  className={classes.containerChild}>
                <h2>{props.title}</h2>
                <br/>
                <h6><strong>{props.subtitle}</strong></h6>
                <div dangerouslySetInnerHTML={{ __html: props.text }} />
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