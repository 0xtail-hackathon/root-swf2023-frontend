import Home from "@/pages/Home/Home";
import { Route, Routes } from "react-router-dom";

const BaseRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );
};

export default BaseRouter;
