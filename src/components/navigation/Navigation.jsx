import { MENU } from "../../data/const";
import "./Navigation.scss";

function Navigation() {
    return (
        <ul className="navigation">
            {MENU.map((item) => (
                <li key={item}>
                    <a className="navigation__item" href="#">
                        {item}
                    </a>
                    {/* <a href={"/" + item}>{item}</a> */}
                </li>
            ))}
        </ul>
    );
}

export default Navigation;
