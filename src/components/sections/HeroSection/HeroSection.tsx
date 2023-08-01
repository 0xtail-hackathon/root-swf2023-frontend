import React from "react";
import { ARROW_IMG, HERITAGE_1, HERO_IMG, InfoList } from "./HeroSection.data";
import {
    BottomBox,
    ContentBox,
    HeroImg,
    HeroSectionWrapper,
    LocationBox,
    Name,
    InfoBox,
    Title,
    SubTitle,
    Description,
    InfoWrapper,
    MiddleBox,
    ArrowIconImg,
} from "./HeroSection.styled";
import { selectedItemState } from "@/recoils/selectedItem.atom";
import { useRecoilState } from "recoil";

interface HeroSectionProps {
    setIsFundingModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeroSection: React.FC<HeroSectionProps> = ({ setIsFundingModalOpen }) => {
    const [, setSelectedItem] = useRecoilState(selectedItemState);

    const handleOnClick = () => {
        setIsFundingModalOpen(true);
        setSelectedItem(HERITAGE_1);
    };

    return (
        <HeroSectionWrapper>
            <HeroImg src={HERO_IMG} />

            <ContentBox>
                <LocationBox>도쿄국립박물관 소재</LocationBox>
                <MiddleBox>
                    <Name>철제 은입사 화로</Name>
                    <ArrowIconImg
                        src={ARROW_IMG}
                        className="arrow-img"
                        onClick={handleOnClick}
                    />
                </MiddleBox>
                <BottomBox>
                    <Title>#1 국외 유물 환수 프로젝트</Title>
                    <InfoWrapper>
                        {InfoList.map((info, index) => (
                            <InfoBox key={info.subTitle + index}>
                                <SubTitle>{`${info.subTitle} |`}</SubTitle>
                                <Description>{info.description}</Description>
                            </InfoBox>
                        ))}
                    </InfoWrapper>
                </BottomBox>
            </ContentBox>
        </HeroSectionWrapper>
    );
};

export default HeroSection;
