import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from "embla-carousel-autoplay";
import classes from "./Slideshow.module.css";
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
                console.log(resizeObserverErrDiv)
                resizeObserverErr.setAttribute('style', 'display: none');
            }
            if (resizeObserverErrDiv) {
                console.log(resizeObserverErrDiv)
                resizeObserverErrDiv.setAttribute('style', 'display: none');
            }
        });
    }, []);

    const image1 = "https://agroworld.hr/images/slider1.jpg";
    const image2 = "https://agroworld.hr/images/slider1.jpg";
    const image3 = "https://agroworld.hr/images/slider1.jpg";

    return (
        <div className={classes.embla} ref={emblaRef}>
            <div style={{overflow: "hidden"}}  className={classes.embla__container}>
                <div className={classes.embla__slide}><img style={{backgroundSize: "cover", width: "inherit", height: "inherit", maxWidth: "inherit", maxHeight: "inherit"}} src={image1}/></div>
                <div className={classes.embla__slide}><img style={{backgroundSize: "cover", width: "inherit", height: "inherit", maxWidth: "inherit", maxHeight: "inherit"}} src={image2}/></div>
                <div className={classes.embla__slide}><img style={{backgroundSize: "cover", width: "inherit", height: "inherit", maxWidth: "inherit", maxHeight: "inherit"}} src={image3}/></div>
            </div>
        </div>
    )
}

export default Slideshow;