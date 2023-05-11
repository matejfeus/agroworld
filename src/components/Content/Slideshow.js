import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from "embla-carousel-autoplay";
import classes from "./Slideshow.module.css";
import img1 from "../../assets/slider1.jpg";
import img2 from "../../assets/slider2.jpg";
import img3 from "../../assets/slider3.jpg";

const images = [img1, img2, img3];

const Slideshow = () => {

    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

    return (
        <div className={classes.embla} ref={emblaRef}>
            <div className={classes.embla__container}>
                <div className={classes.embla__slide}><img src={img1}/></div>
                <div className={classes.embla__slide}><img src={img2}/></div>
                <div className={classes.embla__slide}><img src={img3}/></div>
            </div>
        </div>
    )
}

export default Slideshow;