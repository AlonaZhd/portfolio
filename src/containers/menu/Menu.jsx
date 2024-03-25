import React from "react";
import Logo from "../../components/logo/Logo";
import Container from "../container/Container";
import HeaderMenu from "../../components/header-menu/HeaderMenu";

import "./Menu.scss";

function Menu() {
    return (
        <header className="header">
            <Container>
                <div className="header__container">
                    <Logo></Logo>
                    <HeaderMenu></HeaderMenu>
                </div>
            </Container>
        </header>
    );
}

export default Menu;
