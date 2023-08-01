import { KEYS } from "@/constants";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
    key: "sessionStorage",
    storage: sessionStorage,
});

interface UserInfo {
    username: string;
    profileUrl: string;
}

export const userInfoState = atom<UserInfo>({
    key: KEYS.ATOM_USER_INFO,
    default: {
        username: "Damon",
        profileUrl: "/images/Profile_1.svg",
    },
    effects_UNSTABLE: [persistAtom],
});
