import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from "embla-carousel-autoplay";
import classes from "./Slideshow.module.css";
import img1 from "../../assets/slider1.jpg";
import img2 from "../../assets/slider2.jpg";
import img3 from "../../assets/slider3.jpg";
import {useEffect} from "react";

const Slideshow = () => {

    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

    useEffect(() => {
        window.addEventListener('error', e => {
            const resizeObserverErrDiv = document.getElementById(
                'webpack-dev-server-client-overlay-div'
            );
            const resizeObserverErr = document.getElementById(
                'webpack-dev-server-client-overlay'
            );
            if (resizeObserverErr) {
                resizeObserverErr.setAttribute('style', 'display: none');
            }
            if (resizeObserverErrDiv) {
                resizeObserverErrDiv.setAttribute('style', 'display: none');
            }
        });
    }, []);

    return (
        <div className={classes.embla} ref={emblaRef}>
            <div style={{overflow: "hidden"}}  className={classes.embla__container}>
                <div className={classes.embla__slide}><img style={{backgroundSize: "cover", width: "inherit", height: "inherit", maxWidth: "inherit", maxHeight: "inherit"}} src={img1}/></div>
                <div className={classes.embla__slide}><img style={{backgroundSize: "cover", width: "inherit", height: "inherit", maxWidth: "inherit", maxHeight: "inherit"}} src={img2}/></div>
                <div className={classes.embla__slide}><img style={{backgroundSize: "cover", width: "inherit", height: "inherit", maxWidth: "inherit", maxHeight: "inherit"}} src={img3}/></div>
            </div>
        </div>
    )
}

export default Slideshow;