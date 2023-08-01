import { ARROW_IMG, HERO_IMG, InfoList } from "./HeroSection.data";
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

const HeroSection = () => {
    return (
        <HeroSectionWrapper>
            <HeroImg src={HERO_IMG} />

            <ContentBox>
                <LocationBox>도쿄국립박물관 소재</LocationBox>
                <MiddleBox>
                    <Name>철제 은입사 화로</Name>
                    <ArrowIconImg src={ARROW_IMG} className="arrow-img" />
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
