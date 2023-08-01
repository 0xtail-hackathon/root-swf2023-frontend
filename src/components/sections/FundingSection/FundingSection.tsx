import { useState } from "react";
import {
    DescriptionBox,
    FundingSectionWrapper,
    FundingSuccessBox,
    FundingSuccessTextBox,
    HeritageBox,
    InfoBox,
    LeftWrapper,
    ParticipantsBox,
    RightWrapper,
} from "./FundingSection.styled";
import {
    FUNDING_SUCCESS_IMG,
    HERITAGE_LIST,
    PARTICIPANT_LIST,
} from "./FundingSection.data";

const FundingSection = () => {
    const [participantList] = useState(PARTICIPANT_LIST);
    const [heritageList] = useState(HERITAGE_LIST);

    return (
        <FundingSectionWrapper>
            <LeftWrapper>
                <FundingSuccessBox>
                    <img src={FUNDING_SUCCESS_IMG} />
                    <FundingSuccessTextBox>
                        <div>
                            <h3>펀딩 성공</h3>
                        </div>
                        <h1>
                            다시 한국으로
                            <br />
                            돌아온 유물들을 확인해보세요.
                        </h1>
                    </FundingSuccessTextBox>
                </FundingSuccessBox>
                <ParticipantsBox>
                    <h3>최신 프로젝트 참여자</h3>
                    <div>
                        {participantList.map((participant) => (
                            <img
                                src={participant.profileImg}
                                key={participant.username}
                            />
                        ))}
                    </div>
                </ParticipantsBox>
            </LeftWrapper>
            <RightWrapper>
                {heritageList.map((heritage) => (
                    <HeritageBox key={heritage.id + heritage.name}>
                        <img src={heritage.imgUrl} />
                        <InfoBox>
                            <h3>{`#${heritage.id} ${heritage.name}`}</h3>
                            <DescriptionBox>
                                <h4>국적/시대</h4>
                                <div></div>
                                <span>{heritage.era}</span>
                            </DescriptionBox>
                            <DescriptionBox>
                                <h4>출토지</h4>
                                <div></div>
                                <span>{heritage.excavationLocation}</span>
                            </DescriptionBox>
                        </InfoBox>
                    </HeritageBox>
                ))}
            </RightWrapper>
        </FundingSectionWrapper>
    );
};

export default FundingSection;
