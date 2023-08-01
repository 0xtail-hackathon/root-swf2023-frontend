import Home from "@/pages/Home/Home";
import SignIn from "@/pages/SignIn/SignIn";
import Test from "@/pages/Test/Test";
import { Route, Routes } from "react-router-dom";

const BaseRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/test" element={<Test />} />
        </Routes>
    );
};

export default BaseRouter;
