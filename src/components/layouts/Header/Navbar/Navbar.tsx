import React, { useState } from "react";
import { MenuBox, MenuButton, NavWrapper, SignButton } from "./Navbar.styled";

const MENUS = ["Home", "About", "How it works"];

const Navbar = () => {
    const [displayButton] = useState("Sign up | Login");
    const [activeMenu, setActiveMenu] = useState("Home");

    const handleOnClickMenu = (menu: string) => {
        setActiveMenu(menu);
    };

    return (
        <NavWrapper>
            <MenuBox>
                {MENUS.map((menu) => (
                    <MenuButton
                        className={menu === activeMenu ? "active" : ""}
                        onClick={() => handleOnClickMenu(menu)}
                    >
                        {menu}
                    </MenuButton>
                ))}
            </MenuBox>
            <SignButton>{displayButton}</SignButton>
        </NavWrapper>
    );
};

export default Navbar;
