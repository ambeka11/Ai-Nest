import FAQ from "../components/home/FAQ";
import Footer from "../components/home/Footer";
import PeopleSays from "../components/home/PeopleSays";
import Pricing from "../components/home/Pricing";

const PricingPage = () => {
  return (
    <div className="relative">
      <Pricing />
      <PeopleSays />
      <FAQ />
      <Footer />
    </div>
  );
};

export default PricingPage;
