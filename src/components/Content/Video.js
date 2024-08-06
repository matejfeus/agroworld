import classes from "./Video.module.css";

const Video = (props) => {

    return (
        <div className={classes.container}>
            <div className={classes.video}>
                <iframe className={classes.video}
                        src={props.url}
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </div>
    );
}

export default Video;