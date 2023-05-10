import classes from "./Content.module.css";
import PostList from "./PostList";

const Content = (props) => {
    return (
        <div className={classes.content}>
            <p>sjeb</p>
            <PostList />
        </div>
    );
}

export default Content;