import React, { useState } from "react";
import styled from "styled-components";

interface FundingProgress {
    current: number;
    total: number;
}

const FundingProgress: React.FC<FundingProgress> = ({ current, total }) => {
    const [progress, setProgress] = useState(
        Math.floor((current / total) * 100)
    );

    const increaseProgress = () => {
        setProgress((prev) => (prev < 100 ? prev + 10 : 0));
    };

    return (
        <div>
            <ProgressBarContainer>
                <ProgressBar progress={progress} />
                <Pointer progress={progress} />
            </ProgressBarContainer>
            <button onClick={increaseProgress}>Increase Progress</button>
        </div>
    );
};

const ProgressBarContainer = styled.div`
    width: 100%;
    height: 20px;
    background-color: #f3f3f3;
    border-radius: 10px;
    position: relative;
`;

const ProgressBar = styled.div<{ progress: number }>`
    height: 100%;
    width: ${({ progress }) => progress}%;
    background-color: #6c6;
    border-radius: 10px;
    transition: width 0.3s ease-in-out;
`;

const Pointer = styled.div<{ progress: number }>`
    position: absolute;
    top: -10px;
    left: ${({ progress }) => progress}%;
    width: 20px;
    height: 20px;
    background-color: #f00;
    border-radius: 50%;
    transform: translateX(-50%);
`;

export default FundingProgress;
