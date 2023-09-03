import classes from "./PostList.module.css";
import Post from "./Post";

const PostList = (props) => {
    const renderPostItem = () => {
        const rendered = props.content.map(
            (item, index) =>
                <Post
                    key={index}
                    title={item.title}
                    subtitle={item.subtitle}
                    text={item.text}
                    backgroundImage={item.backgroundImage}
                    sideImage={item.sideImage}
                    side={item.side}
                />
        )
        return rendered;
    };

    return (
        <div className={classes.container}>
            {renderPostItem()}
        </div>
    );
}

export default PostList;