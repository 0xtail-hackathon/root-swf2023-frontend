import Home from "@/pages/Home/Home";
import SignIn from "@/pages/SignIn/SignIn";
import { Route, Routes } from "react-router-dom";

const BaseRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
        </Routes>
    );
};

export default BaseRouter;
