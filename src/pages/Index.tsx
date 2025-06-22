import Header from "@/components/Header";
import PaintingsSection from "@/components/PaintingsSection";
import HoodiesSection from "@/components/HoodiesSection";
import TShirtsSection from "@/components/TShirtsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <PaintingsSection />
        <HoodiesSection />
        <TShirtsSection />
      </main>
    </div>
  );
};

export default Index;
