import Footer from "@/components/layouts/Footer/Footer";
import Header from "@/components/layouts/Header/Header";
import FundingInfoSection from "@/components/sections/FundingInfoSection/FundingInfoSection";
import FundingModal from "@/components/sections/FundingModal/FundingModal";
import HeroSection from "@/components/sections/HeroSection/HeroSection";
import { useState } from "react";

const Home = () => {
    const [isFundingModalOpen, setIsFundingModalOpen] = useState(false);

    return (
        <>
            <Header />
            <HeroSection setIsFundingModalOpen={setIsFundingModalOpen} />
            <FundingInfoSection />
            <Footer />
            {isFundingModalOpen && (
                <FundingModal setIsFundingModalOpen={setIsFundingModalOpen} />
            )}
        </>
    );
};

export default Home;
