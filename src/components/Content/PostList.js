import classes from "./PostList.module.css";
import Post from "./Post";
import Video from "./Video";

const video1Url = "https://www.youtube.com/embed/lZc_ZfQ-wGM?si=aovYuyWEA-Onrelo";
const video2Url = "https://www.youtube.com/embed/g0kCUr8EbBQ?si=r0p_AZdkE6rxXcmw";

const PostList = (props) => {

    return (
        <div className={classes.container}>
            <Post key="0" title={props.content[0].title} subtitle={props.content[0].subtitle} text={props.content[0].text} backgroundImage={props.content[0].backgroundImage} sideImage={props.content[0].sideImage} side={props.content[0].side}/>
            <Post key="1" title={props.content[1].title} subtitle={props.content[1].subtitle} text={props.content[1].text} backgroundImage={props.content[1].backgroundImage} sideImage={props.content[1].sideImage} side={props.content[1].side}/>
            <Post key="2" title={props.content[2].title} subtitle={props.content[2].subtitle} text={props.content[2].text} backgroundImage={props.content[2].backgroundImage} sideImage={props.content[2].sideImage} side={props.content[2].side}/>
            <Post key="3" title={props.content[3].title} subtitle={props.content[3].subtitle} text={props.content[3].text} backgroundImage={props.content[3].backgroundImage} sideImage={props.content[3].sideImage} side={props.content[3].side}/>
            <Post key="4" title={props.content[4].title} subtitle={props.content[4].subtitle} text={props.content[4].text} backgroundImage={props.content[4].backgroundImage} sideImage={props.content[4].sideImage} side={props.content[4].side}/>
            <Video url={video2Url} />
            <Post key="5" title={props.content[5].title} subtitle={props.content[5].subtitle} text={props.content[5].text} backgroundImage={props.content[5].backgroundImage} sideImage={props.content[5].sideImage} side={props.content[5].side}/>
            <Video url={video1Url} />
            <Post key="6" title={props.content[6].title} subtitle={props.content[6].subtitle} text={props.content[6].text} backgroundImage={props.content[6].backgroundImage} sideImage={props.content[6].sideImage} side={props.content[6].side}/>
            <Post key="7" title={props.content[7].title} subtitle={props.content[7].subtitle} text={props.content[7].text} backgroundImage={props.content[7].backgroundImage} sideImage={props.content[7].sideImage} side={props.content[7].side}/>
        </div>
    );
}

export default PostList;