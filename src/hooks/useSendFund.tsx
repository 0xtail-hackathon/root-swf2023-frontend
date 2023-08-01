import { sendFund } from "@/apis";
import { KEYS } from "@/constants";
import { useMutation } from "react-query";

const useSendFund = (data: FundInfo) => {
    return useMutation({
        mutationKey: [KEYS.MUTATE_FUND_INFO, data.artifactName],
        mutationFn: () => sendFund({ data }),
        onSuccess: (result) => {
            console.log(result);
        },
    });
};

export default useSendFund;
