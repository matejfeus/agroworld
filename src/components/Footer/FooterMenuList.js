import classes from "./FooterMenuList.module.css";
import FooterMenuItem from "./FooterMenuItem";

const FooterMenuList = (props) => {
    return (
        <ul>
            <li>
                <a href="#">La Veguilla</a>
                <FooterMenuItem url="#" title="Garlic in all its splendour"/>
            </li>

            <li>
                <a href="#">Garlic with guarantees</a>
                <FooterMenuItem url="#" title="Superior quality"/>
            </li>

            <li>
                <a href="#">Garlic from La Veguilla</a>
                <FooterMenuItem url="#" title="Discovering the real garlic"/>
            </li>

            <li>
                <a href="#">The garlic grower</a>
                <FooterMenuItem url="#" title="A master craftsman of plants"/>
            </li>

            <li>
                <a href="#">Las Pedroñeras</a>
                <FooterMenuItem url="#" title="Las Pedroñeras, that place in La Mancha"/>
            </li>

            <li>
                <a href="#">Garlic and you</a>
                <FooterMenuItem url="#" title="Garlic, a natural remedy through history"/>
            </li>
        </ul>
    );
}

export default FooterMenuList;


    







