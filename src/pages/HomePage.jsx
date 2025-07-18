import HeroSection from "../components/home/HeroSection.jsx";
import HomeSection from "../components/home/HomeSection.jsx";
import HomePeople from "../components/home/HomePeople.jsx";
import WebClipper from "../components/home/WebClipper.jsx";
import AiDiscoveryFrontiers from "../components/home/AiDiscoveryFrontiers.jsx";
import HomeMasterpieces from "../components/home/HomeMasterpieces .jsx";
import AiNestComponent from "../components/home/AiNestComponent.jsx";
import NoCodeChatbot from "../components/home/NoCodeChatbot.jsx";

const HomePage = () => {
  return (
    <div className="relative">
      <HeroSection />
      <HomeSection />
      <HomePeople />
      <WebClipper />
      <AiDiscoveryFrontiers />
      <HomeMasterpieces />
      <AiNestComponent />
      <NoCodeChatbot />
    </div>
  );
};

export default HomePage;
