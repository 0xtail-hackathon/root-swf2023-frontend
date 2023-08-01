import Home from "@/pages/Home/Home";
import SignIn from "@/pages/SignIn/SignIn";
import Test from "@/pages/Test/Test";
import { Route, Routes } from "react-router-dom";
import SelectItemSection from "../sections/SelectItemSection/";
import ParticipantSection from "../sections/ParticipantSection/ParticipantSection";
import StatusSection from "../sections/StatusSection/StatusSection";

const BaseRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}>
                <Route path="/item/:itemId" element={<SelectItemSection />} />
                <Route
                    path="/item/:itemId/participant"
                    element={<ParticipantSection />}
                />
                <Route
                    path="/item/:itemId/participant/status"
                    element={<StatusSection />}
                />
                <Route
                    path="/item/:itemId/participant/status/success"
                    element={<StatusSection isSuccess={true} />}
                />
                <Route
                    path="/item/:itemId/generate/nft"
                    element={<ParticipantSection />}
                />
            </Route>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/test" element={<Test />} />
        </Routes>
    );
};

export default BaseRouter;
