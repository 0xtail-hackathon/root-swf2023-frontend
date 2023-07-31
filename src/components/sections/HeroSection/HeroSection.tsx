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

const HERO_IMG = "/images/Heritage_1.svg";
const ARROW_IMG = "/images/Arrow.svg";
const InfoList = [
    {
        subTitle: "국적/시대",
        description: "한국 - 조선",
    },
    {
        subTitle: "분류",
        description: "주생활 - 생활용품/가전 - 계절용구 - 화로",
    },
    {
        subTitle: "크기",
        description: "높이 15.8cm, 지름 15.2cm, 몸통지름 16.1cm",
    },
    {
        subTitle: "소장품번호",
        description: "덕수 1485",
    },
];

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
