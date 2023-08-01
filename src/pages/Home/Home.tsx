import Footer from "@/components/layouts/Footer/Footer";
import Header from "@/components/layouts/Header/Header";
import FundingInfoSection from "@/components/sections/FundingInfoSection/FundingInfoSection";
import Modal from "@/components/common/Modal/Modal";
import HeroSection from "@/components/sections/HeroSection/HeroSection";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <Header />
            <HeroSection setIsModalOpen={setIsModalOpen} />
            <FundingInfoSection />
            <Footer />

            {isModalOpen && (
                <Modal
                    setIsModalOpen={setIsModalOpen}
                    isModalOpen={isModalOpen}
                >
                    <Outlet />
                </Modal>
            )}
        </>
    );
};

export default Home;
