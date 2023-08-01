import styled from "styled-components";

export const NavWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    height: ${({ theme }) => theme.heights.navbar};
    z-index: ${({ theme }) => theme.zIndex.navbar};
    position: relative;
    padding: 1rem 2rem;
`;

export const Logo = styled.img`
    height: 10rem;
    object-fit: contain;
    position: relative;
    z-index: ${({ theme }) => theme.zIndex.logo};
`;

export const MenuBox = styled.div`
    width: 27rem;
    height: 4.75rem;
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 2.38rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 0.5rem;
`;

export const MenuButton = styled.button`
    border-radius: 1.84rem;
    height: 3.6875rem;
    background-color: transparent;
    font-size: 1.25rem;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    padding: 0 1.5rem;
    transition: 0.3s ease;

    &:hover {
        cursor: pointer;
        background: ${({ theme }) => theme.color.light};
    }

    &.active {
        background-color: ${({ theme }) => theme.color.black};
        color: ${({ theme }) => theme.color.white};
        &:hover {
            background: ${({ theme }) => theme.color.dark};
        }
    }
`;

export const SignButton = styled.button`
    height: 3.69rem;
    border-radius: 1.84rem;
    background: ${({ theme }) => theme.color.black};
    color: ${({ theme }) => theme.color.white};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    font-size: 1.25rem;
    transition: 0.2s ease;
    padding: 0 1.5rem;

    &:hover {
        cursor: pointer;
        background: ${({ theme }) => theme.color.dark};
    }
`;
