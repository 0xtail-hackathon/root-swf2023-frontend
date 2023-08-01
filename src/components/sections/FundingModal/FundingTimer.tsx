import React, { useState } from "react";
import styled from "styled-components";

interface FundingTimerProps {
    expiredDate: number; // Unix timestamp (in milliseconds)
}

const FundingTimer: React.FC<FundingTimerProps> = ({ expiredDate }) => {
    const [timeLeft] = useState(expiredDate - Date.now());

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         const newTimeLeft = expiredDate - Date.now();
    //         setTimeLeft(newTimeLeft);

    //         if (newTimeLeft <= 0) {
    //             clearInterval(interval);
    //         }
    //     }, 1000);

    //     return () => clearInterval(interval);
    // }, [expiredDate]);

    const months = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
    );
    const hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    return (
        <FundingTimerWrapper>
            <TextBox>
                <h3>Month</h3>
                <h2>{months}</h2>
            </TextBox>
            <TextBox>
                <h2>:</h2>
            </TextBox>
            <TextBox>
                <h3>Day</h3>
                <h2>{days}</h2>
            </TextBox>
            <TextBox>
                <h2>:</h2>
            </TextBox>
            <TextBox>
                <h3>Hour</h3>
                <h2>{hours}</h2>
            </TextBox>
        </FundingTimerWrapper>
    );
};

const FundingTimerWrapper = styled.div`
    display: grid;
    grid-template-columns: 4fr 1fr 4fr 1fr 4fr;
`;

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    text-align: center;
    color: ${({ theme }) => theme.color.black};

    h2 {
        font-size: 4.375rem;
        font-weight: ${({ theme }) => theme.fontWeight.extraBold};
    }
`;

export default FundingTimer;
