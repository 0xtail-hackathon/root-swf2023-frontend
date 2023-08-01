import styled from "styled-components";

export const FundingModalWrapper = styled.section`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.color.modalBg};
    z-index: ${({ theme }) => theme.zIndex.modal};
    transition: 0.5s ease;
    animation: slideUp 0.5s forwards;

    @keyframes slideUp {
        from {
            transform: translateY(100%);
        }
        to {
            transform: translateY(0);
        }
    }

    @keyframes slideDown {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(100%);
        }
    }
`;

export const TranslucentBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 1rem 1.5rem;
    height: 5.5rem;
`;
export const CloseButton = styled.img``;

export const MainWrapper = styled.div`
    overflow: hidden;
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
    background-color: ${({ theme }) => theme.color.white};
    height: calc(100% - 5.5rem);
    /* height: calc(100% - ${({ theme }) => theme.heights.footer} - 5.5rem); */
`;

export const TopWrapper = styled.div`
    position: relative;
    display: flex;
    /* padding-left: 5rem; */
`;

export const MainImg = styled.img`
    width: 100%;
`;

export const TopBox = styled.div`
    position: absolute;
    top: 0;
    left: 5rem;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 1rem;
`;
export const LogoImg = styled.img``;

export const RoundTextBox = styled.div`
    border-radius: 1.8rem;
    border: 1px solid ${({ theme }) => theme.color.white};
    padding: 0.5rem 1rem;
    color: ${({ theme }) => theme.color.white};
    font-size: 1.125rem;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    margin-top: 2rem;
`;

export const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 7fr 4fr;
    padding: 1rem 2rem;
    gap: 2rem;
`;

export const LeftBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5rem;
`;

export const DescriptionBox = styled.div`
    color: ${({ theme }) => theme.color.black};
    h2 {
        font-size: 2.1875rem;
        font-weight: ${({ theme }) => theme.fontWeight.extraBold};
    }

    h1 {
        font-size: 6.25rem;
        font-weight: ${({ theme }) => theme.fontWeight.extraBold};
    }

    p {
        margin-top: 2rem;
        font-size: 1rem;
        font-weight: ${({ theme }) => theme.fontWeight.light};
        line-height: 2rem;
    }
`;

export const MapBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h3 {
        margin-left: 1rem;
    }
`;

export const RightBox = styled.div`
    display: grid;
    grid-template-rows: repeat(auto-fill, auto);
    border-radius: 1.875rem;
    background: #f0f0f0;
    padding: 2rem;
    gap: 1rem;
`;

export const ContentBox = styled.div`
    color: ${({ theme }) => theme.color.black};

    h3 {
        font-size: 1.25rem;
        font-weight: ${({ theme }) => theme.fontWeight.bold};
        line-height: 2.5rem;
    }

    span {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.75rem;
    }
`;

export const FundingButtonBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 28.125rem;
    height: 9.875rem;
    border-radius: 1.875rem;
    background: #fff;
    overflow: hidden;
    margin-bottom: 1rem;

    h4 {
        display: flex;
        align-items: center;
        font-size: 1.25rem;
        font-weight: ${({ theme }) => theme.fontWeight.regular};
        color: ${({ theme }) => theme.color.black};
    }

    button {
        width: 26rem;
        height: 4rem;
        border-radius: 1.875rem;
        font-size: 1.25rem;
        color: ${({ theme }) => theme.color.white};
        font-weight: ${({ theme }) => theme.fontWeight.regular};
        background-color: ${({ theme }) => theme.color.black};

        &:hover {
            cursor: pointer;
            background-color: ${({ theme }) => theme.color.light};
            color: ${({ theme }) => theme.color.black};
        }
    }
`;

export const ParticipantsBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    img {
        width: 5.5rem;
        height: 5.5rem;
        border-radius: 50%;
        border: 1px solid ${({ theme }) => theme.color.light};
    }
`;

export const PreventOverlapBox = styled.div`
    position: relative;
    width: 100%;
    height: ${({ theme }) => theme.heights.footer};
    z-index: ${({ theme }) => theme.zIndex.background};
`;
