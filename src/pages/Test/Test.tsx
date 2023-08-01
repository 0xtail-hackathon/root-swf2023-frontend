import { heritageState } from "@/recoils/heritage.atom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
import styled from "styled-components";

const Test = () => {
    const [localState, setLocalState] = useState(null);
    const [globalState, setGlobalState] = useRecoilState(heritageState);
    const result = useQuery({
        queryKey: [
            "UniqueKey", // 유니크한 키값
            localState, // localState 변경되면 요청 보냄
        ],
        queryFn: () => {
            // 요청할때 어떤걸 할지
            return axios.request({
                method: "get",
            });
        },
    });

    useEffect(
        () => {
            console.log(result.data);
        },
        [result.isLoading] // 이 값이 바뀌면 위의 로직 다시 실행
    );

    const handleOnClickButton1 = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(e.currentTarget.value);
        console.log(1);
    };

    const handleOnClickButton2 = () => {
        console.log(2);
    };

    return (
        <Wrapper>
            <Button onClick={handleOnClickButton1}>Button1</Button>
            <Button onClick={handleOnClickButton2}>Button2</Button>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    gap: 1rem;
`;
const Button = styled.button`
    width: 10rem;
    height: 5rem;
    border: 1px solid black;
    border-radius: 1rem;
`;

export default Test;
