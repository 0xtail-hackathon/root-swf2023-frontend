import Footer from "@/components/layouts/Footer/Footer";
import Header from "@/components/layouts/Header/Header";
import FundingInfoSection from "@/components/sections/FundingInfoSection/FundingInfoSection";
import HeroSection from "@/components/sections/HeroSection/HeroSection";

const Home = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <FundingInfoSection />
            <Footer />
        </>
    );
};

export default Home;
