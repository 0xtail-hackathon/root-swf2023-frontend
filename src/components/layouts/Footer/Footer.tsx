import { FooterWrapper, LogoRoot } from "./Footer.styled";
const LOGO_ROOT = "/images/LogoRoot.svg";

const Footer = () => {
    return (
        <FooterWrapper>
            <LogoRoot src={LOGO_ROOT} />
        </FooterWrapper>
    );
};

export default Footer;
