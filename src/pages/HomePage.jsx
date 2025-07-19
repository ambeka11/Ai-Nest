import HeroSection from "../components/home/HeroSection.jsx";
import HomeSection from "../components/home/HomeSection.jsx";
import HomePeople from "../components/home/HomePeople.jsx";
import WebClipper from "../components/home/WebClipper.jsx";
import AiDiscoveryFrontiers from "../components/home/AiDiscoveryFrontiers.jsx";
import HomeMasterpieces from "../components/home/HomeMasterpieces .jsx";
import AiNestComponent from "../components/home/AiNestComponent.jsx";
import NoCodeChatbot from "../components/home/NoCodeChatbot.jsx";
import Chatgptlike from "../components/home/Chatgptlike.jsx";
import GptLikeChat from "../components/home/GptLikeChat.jsx";
import UseAinest from "../components/home/UseAinest.jsx";
import PeopleSays from "../components/home/PeopleSays.jsx";
import Pricing from "../components/home/Pricing.jsx";
import ConnectTools from "../components/home/ConnectTools.jsx";
import FAQ from "../components/home/FAQ.jsx";
import Footer from "../components/home/Footer.jsx";

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
      <Chatgptlike />
      <GptLikeChat />
      <UseAinest />
      <PeopleSays />
      <Pricing />
      <ConnectTools />
      <FAQ />
      <Footer />
    </div>
  );
};

export default HomePage;
