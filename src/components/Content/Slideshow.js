import {useEffect} from "react";
import EmblaCarousel from "./EmblaCarousel";
import slider1 from "../../assets/slider1.jpg";
import slider2 from "../../assets/slider2.jpg";
import slider3 from "../../assets/slider3.jpg";

const Slideshow = () => {

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

    const slides = [slider1, slider2, slider3];
    const options = {loop: true};

    return (
        <>
            <EmblaCarousel slides={slides} options={options}/>
        </>
    )
}

export default Slideshow;