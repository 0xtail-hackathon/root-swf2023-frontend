import Footer from "@/components/layouts/Footer/Footer";
import Header from "@/components/layouts/Header/Header";
import FundingSection from "@/components/sections/FundingSection/FundingSection";
import HeroSection from "@/components/sections/HeroSection/HeroSection";

const Home = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <FundingSection />
            <Footer />
        </>
    );
};

export default Home;
