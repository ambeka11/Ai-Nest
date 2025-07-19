import FAQ from "../components/home/FAQ";
import Footer from "../components/home/Footer";
import GptLikeChat from "../components/home/GptLikeChat";

const IntegrationsPage = () => {
  return (
    <div className="relative">
      <GptLikeChat />
      <FAQ />
      <Footer />
    </div>
  );
};

export default IntegrationsPage;
