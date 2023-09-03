import classes from "./Content.module.css";
import PostList from "./PostList";
import Slideshow from "./Slideshow";

const Content = (props) => {

    const content = [
        {
            title: "La Veguilla",
            subtitle: "THE PLACE WHERE GARLIC WOULD LIKE TO GROW",
            text: '<strong>Ajos la Veguilla</strong> was founded in 1984 and specializes in producing and trading different varieties of this plant, especially Ajo Morado or Purple Garlic. The company’s land provides the ideal growing conditions for this crop thanks to the climate and altitude of Las Pedroñeras (Cuenca, Spain). It also benefits from a team of experts with a wide knowledge of the product. Another attribute is the use of the most advanced technology and the company’s continued investment in research and development.',
            backgroundImage: "",
            sideImage: "",
            side: ""

        },
        {
            title: "Garlic with Guarantees",
            subtitle: "A SETTLEMENT WITH GASTRONOMIC TREASURES",
            text: "Garlic from La Veguilla grows in an area blessed with limestone soils and sits at an altitude going from 600 to 800 metres above sea level. The area has a dry climate with typically long sunny days and is prone to frost. Thanks to these factors, the plants are free from disease and require little phytosanitary treatment.\n" +
                "\n" +
                "Furthermore La Veguilla is led by a team of professionals who control the quality of the product throughout the full crop cycle and production process.",
            backgroundImage: "1670_0018.jpg",
            sideImage: "SPRING-BLANCO1.png",
            side: "right"
        },
        {
            title: "Garlic from La Veguilla",
            subtitle: "HOW TO RECOGNISE GENUINE GARLIC FROM OUR FARMS",
            text: "The properties of these liliaceae are maximized in <strong>La Veguilla</strong> due to the special care taken with all of the varieties – Morado, White, <em>Spring</em> White and <em>Spring</em> Violet. La Veguilla also produces Black Garlic obtained from a fermentation process. Black Garlic has additional health benefits and a unique flavour. All of this is possible thanks to the skill and know-how of a Master Garlic Grower.",
            backgroundImage: "",
            sideImage: "O3Z5486.jpg",
            side: "left"
        },
        {
            title: "Garlic’s Best Friend",
            subtitle: "A LIFE SPENT GROWING GARLIC",
            text: "The “Master Garlic Grower” is the person responsible for the excellence of the fruit. It is a profession which has been passed from generation to generation and is now in danger of extinction. The Growers’ knowledge is not published in any manual. Their tools are their eyes, their hands and their workplace – the fields. The Master Grower’s hands on expertise ensures the Garlic lives up to its reputation as nutritious and therapeutic.",
            backgroundImage: "O3Z6087-2.jpg",
            sideImage: "shutterstock_665118415-low-370x370.jpg",
            side: "left"
        },
        {
            title: "Las Pedroñeras",
            subtitle: "THE SPANISH BIRTHPLACE OF GARLIC",
            text: "Las Pedroñeras is a village located in the heart of La Mancha region, one of the World Capitals of Garlic. Practically all of the village’s inhabitants are dedicated to this extraordinary Liliaceae.",
            backgroundImage: "",
            sideImage: "",
            side: "middle"
        },
        {
            title: "Garlic And You",
            subtitle: "DISCOVER WHAT IT CAN DO FOR YOUR HEALTH",
            text: "Garlics’ healing properties have been known since ancient times.It’s a superfood with a high content in vitamins and rich in protein, carbohydrates and minerals, especially sulphur. It has been used historically to treat a wide range of ailments as it is purifying, diuretic, antiseptic and antibacterial. Nowadays scientists verify its benefits and it is recommended as part of a healthy diet although its potential goes much further than gastronomy.",
            backgroundImage: "",
            sideImage: "shutterstock_665118415-low-370x370.jpg",
            side: "left"
        },
    ]

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