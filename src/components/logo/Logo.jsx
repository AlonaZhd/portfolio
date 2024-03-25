import logo from "../../img/logo.png";
import "./Logo.scss";

function Logo() {
    return (
        <a href="./">
            <img className="logo" src={logo} alt="logo" />
        </a>
    );
}

export default Logo;
