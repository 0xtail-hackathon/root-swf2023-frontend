import { useRecoilState } from "recoil";
import {
    ContentWrapper,
    FundingModalWrapper,
    TopWrapper,
    LeftBox,
    MainWrapper,
    RightBox,
    TranslucentBox,
    CloseButton,
    RoundTextBox,
    MainImg,
    LogoImg,
    TopBox,
    DescriptionBox,
    MapBox,
    PreventOverlapBox,
    ContentBox,
} from "./FundingModal.styled";
import { selectedItemState } from "@/recoils/selectedItem.atom";
import FundingTimer from "./FundingTimer";

const CLOSE_ICON = "/images/CloseIcon.svg";
const LOGO_IMG = "/images/Logo.svg";
const MAP_IMG = "/images/Map_Screenshot.svg";

interface FundingModalProps {
    setIsFundingModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const FundingModal: React.FC<FundingModalProps> = ({
    setIsFundingModalOpen,
}) => {
    const [selectedItem] = useRecoilState(selectedItemState);

    const handleOnClickCloseButton = () => {
        setIsFundingModalOpen(false);
    };

    return (
        <>
            <FundingModalWrapper>
                <TranslucentBox>
                    <CloseButton
                        src={CLOSE_ICON}
                        onClick={handleOnClickCloseButton}
                    />
                </TranslucentBox>
                <MainWrapper>
                    <TopWrapper>
                        <MainImg src={selectedItem?.imageUrl} />
                        <TopBox>
                            <LogoImg src={LOGO_IMG} />
                            <RoundTextBox>
                                {selectedItem?.currentLocation ??
                                    "소재지 알수없음"}
                            </RoundTextBox>
                            <RoundTextBox>{"펀딩 중"}</RoundTextBox>
                        </TopBox>
                    </TopWrapper>
                    <ContentWrapper>
                        <LeftBox>
                            <DescriptionBox>
                                <h2>{`#${
                                    selectedItem?.id ?? "0"
                                } 국외 유물 환수 프로젝트`}</h2>
                                <h1>{selectedItem?.name ?? "알수없음"}</h1>
                                <p>
                                    {selectedItem?.description ?? "내용 없음"}
                                </p>
                            </DescriptionBox>
                            <MapBox>
                                <h3>{`해당 유물 현재 소유지: ${
                                    selectedItem?.currentLocation ?? "알수없음"
                                }`}</h3>
                                <img src={MAP_IMG} alt="" />
                            </MapBox>
                        </LeftBox>
                        <RightBox>
                            <ContentBox>
                                <h3>Funding Timer</h3>
                                <FundingTimer
                                    expiredDate={Number(
                                        selectedItem?.expiredDate
                                    )}
                                />
                            </ContentBox>
                            <ContentBox>
                                <h3>Funding Progress</h3>
                            </ContentBox>
                            <ContentBox>
                                <h3>Funding 참가</h3>
                            </ContentBox>
                            <ContentBox>
                                <h3>펀딩 참여자</h3>
                            </ContentBox>
                        </RightBox>
                    </ContentWrapper>
                </MainWrapper>
            </FundingModalWrapper>
            <PreventOverlapBox />
        </>
    );
};

export default FundingModal;
