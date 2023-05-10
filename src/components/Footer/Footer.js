import classes from "./Footer.module.css";
import background from "../../assets/footer-background.jpg";
import certificate1 from "../../assets/veguilla-fondos-europeos-energias-renovables-1-181x300.jpg";
import certificate2 from "../../assets/veguilla-fondos-europeos-181x300.jpg";
import FooterMenu from "./FooterMenu";

const Footer = (props) => {
    return (
        <footer>
            <div className={classes.container}>
                <div className={classes.container_inner} style={{
                    backgroundImage: `url(${background})`
                }}>
                    <div className={classes.footer_inner}>
                        <div>
                            <h4>Contact</h4>

                            <div>
                                <p>
                                Pascualillo, s/n
                                16660 Las Pedroñeras, Cuenca, Spain
                                </p>

                                <p>+34 967 160 351</p>
                                <i className="fa fa-envelope-o"></i>
                                <p>ajoslaveguilla@veguilla.com</p>
                            </div>
                        </div>
                        <div>
                            <FooterMenu />
                        </div>
                        <div>
                            <img src={certificate1} alt=""/>
                        </div>
                        <div>
                            <img src={certificate2} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
);
}

export default Footer;