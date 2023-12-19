import classes from "./Content.module.css";
import PostList from "./PostList";
import Slideshow from "./Slideshow";
import { content } from '../data.js';

const Content = (props) => {

    return (
        <div className={classes.content}>
            <Slideshow />
            <div className={classes}>
                <PostList content={content}/>
            </div>
        </div>
    );
}

export default Content;