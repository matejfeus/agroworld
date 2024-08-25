import classes from "./Video.module.css";

const Video = (props) => {

    return (
        <div className={classes.video}>
            <iframe className={classes.video}
                    src={props.url}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
    );
}

export default Video;