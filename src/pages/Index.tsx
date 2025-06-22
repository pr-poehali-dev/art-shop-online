import Header from "@/components/Header";
import PaintingsSection from "@/components/PaintingsSection";
import ClothingSection from "@/components/ClothingSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <PaintingsSection />
        <ClothingSection />
      </main>
    </div>
  );
};

export default Index;
