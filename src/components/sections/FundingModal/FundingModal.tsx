import {
    CloseButton,
    ContentWrapper,
    FundingModalWrapper,
    ImgBox,
    LeftBox,
    MainWrapper,
    RightBox,
    TranslucentBox,
} from "./FundingModal.styled";

const FundingModal = () => {
    return (
        <FundingModalWrapper>
            <TranslucentBox>
                <CloseButton></CloseButton>
            </TranslucentBox>
            <MainWrapper>
                <ImgBox>
                    <img src="" alt="" />
                </ImgBox>
                <ContentWrapper>
                    <LeftBox></LeftBox>
                    <RightBox></RightBox>
                </ContentWrapper>
            </MainWrapper>
        </FundingModalWrapper>
    );
};

export default FundingModal;
