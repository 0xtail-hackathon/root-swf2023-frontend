import { KEYS } from "@/constants";
import { atom } from "recoil";

// connected account by Metamask
export const connectedAccountState = atom({
    key: KEYS.ATOM_CONNECTED_ACCOUNT,
    default: [] as string[],
});
