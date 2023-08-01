import { closeCrowdSale } from "@/apis";
import { KEYS } from "@/constants";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

const useCloseCrowdSale = (data: { name: string }) => {
    const navigate = useNavigate();
    return useMutation({
        mutationKey: [KEYS.MUTATE_CLOSE_CROWD_SALE, data.name],
        mutationFn: () => closeCrowdSale({ data }),
        onSuccess: (result) => {
            console.log(result);
            navigate("./mypage");
        },
    });
};

export default useCloseCrowdSale;
