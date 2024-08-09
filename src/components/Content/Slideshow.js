import {useEffect} from "react";
import EmblaCarousel from "./EmblaCarousel";

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

    const image1 = "https://agroworld.hr/images/slider1.jpg";
    const image2 = "https://agroworld.hr/images/slider2.jpg";
    const image3 = "https://agroworld.hr/images/slider3.jpg";

    const slides = [image3, image1, image2];
    const options = {loop: true};

    return (
        <>
            <EmblaCarousel slides={slides} options={options}/>
        </>
    )
}

export default Slideshow;