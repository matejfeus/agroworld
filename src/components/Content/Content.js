import classes from "./Content.module.css";
import PostList from "./PostList";
import Slideshow from "./Slideshow";

const Content = (props) => {
    return (
        <div className={classes.content}>
            <Slideshow />
            <PostList />
        </div>
    );
}

export default Content;