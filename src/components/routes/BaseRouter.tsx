import { Route, Routes } from "react-router-dom";

const BaseRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<>landing page</>} />
        </Routes>
    );
};

export default BaseRouter;
