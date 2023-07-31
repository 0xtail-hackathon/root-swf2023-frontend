import styled from "styled-components";

export const FooterWrapper = styled.footer`
    display: flex;
    align-items: center;
    width: 100%;
    height: ${({ theme }) => theme.heights.footer};
    background: ${({ theme }) => theme.color.black};
    padding: 4rem;
`;

export const LogoRoot = styled.img`
    width: 5.0625rem;
    height: 1.4375rem;
`;
