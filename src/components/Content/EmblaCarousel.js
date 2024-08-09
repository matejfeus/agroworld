import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import classes from './EmblaCarousel.module.css'

const EmblaCarousel = (props) => {

    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

    return (
        <section className={classes.embla}>
            <div className={classes.embla__viewport} ref={emblaRef}>
                <div className={classes.embla__container}>
                    {slides.map((item) => (
                        <div className={classes.embla__slide} key={item}>
                            <img className={classes.embla__image} src={item}/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default EmblaCarousel;