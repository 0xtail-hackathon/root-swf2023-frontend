import { useState } from "react";
import { MenuBox, MenuButton, NavWrapper, SignButton } from "./Navbar.styled";
import { useNavigate } from "react-router-dom";

const MENUS = ["Home", "About", "How it works"];

const Navbar = () => {
    const [displayButton] = useState("Sign up | Login");
    const [activeMenu, setActiveMenu] = useState("Home");
    const navigate = useNavigate();

    const handleOnClickMenu = (menu: string) => {
        setActiveMenu(menu);
    };

    const handleOnClickSignIn = () => {
        navigate("/sign-in");
    };

    return (
        <NavWrapper>
            <MenuBox>
                {MENUS.map((menu, index) => (
                    <MenuButton
                        className={menu === activeMenu ? "active" : ""}
                        onClick={() => handleOnClickMenu(menu)}
                        key={index + menu}
                    >
                        {menu}
                    </MenuButton>
                ))}
            </MenuBox>
            <SignButton onClick={handleOnClickSignIn}>
                {displayButton}
            </SignButton>
        </NavWrapper>
    );
};

export default Navbar;
