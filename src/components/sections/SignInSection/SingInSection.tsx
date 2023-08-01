import {
    BottomBox,
    CenterBox,
    LeftWrapper,
    LinkBox,
    RightWrapper,
    SignInBox,
    SignInWrapper,
    Splitter,
    TopBox,
} from "./SignInSection.styled";

const SIGN_IN_ROOT_IMG = "/images/SignInRoot.svg";
const LOGO_ROOT = "/images/LogoRoot_2.svg";
const LOGO_KAKAO = "/images/LogoKakao.svg";
const LOGO_NAVER = "/images/LogoNaver.svg";

const SingInSection = () => {
    return (
        <SignInWrapper>
            <LeftWrapper>
                <img src={SIGN_IN_ROOT_IMG} alt="" />
            </LeftWrapper>
            <RightWrapper>
                <TopBox>
                    <img src={LOGO_ROOT} alt="" />
                </TopBox>
                <CenterBox>
                    <h2>뿌리 프로젝트 시작하기</h2>
                    <SignInBox className="kakao">
                        <img src={LOGO_KAKAO} alt="" />
                        <span>카카오 로그인</span>
                    </SignInBox>
                    <SignInBox className="naver">
                        <img src={LOGO_NAVER} alt="" />
                        <span>네이버 로그인</span>
                    </SignInBox>
                </CenterBox>
                <Splitter />
                <BottomBox>
                    <h3>내 계정 찾기</h3>
                    <SignInBox>내 계정을 모르겠어요</SignInBox>

                    <LinkBox to={"#"}>로그인 관련 도움 받기</LinkBox>
                    <LinkBox to={"/"}>Home 화면으로 돌아가기</LinkBox>
                </BottomBox>
            </RightWrapper>
        </SignInWrapper>
    );
};

export default SingInSection;