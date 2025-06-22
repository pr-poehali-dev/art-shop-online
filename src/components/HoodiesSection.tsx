import ClothingCard from "./ClothingCard";

const HoodiesSection = () => {
  const hoodies = [
    {
      title: "Арт-толстовка 'Космос'",
      sizes: ["S", "M", "L", "XL"],
      price: "3 500 ₽",
      image:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
      type: "толстовка" as const,
    },
    {
      title: "Худи с принтом",
      sizes: ["M", "L", "XL", "XXL"],
      price: "4 200 ₽",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      type: "толстовка" as const,
    },
    {
      title: "Тёплая толстовка",
      sizes: ["XS", "S", "M", "L", "XL"],
      price: "3 800 ₽",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      type: "толстовка" as const,
    },
  ];

  return (
    <section
      id="hoodies"
      className="py-16 bg-gradient-to-br from-purple-50 to-pink-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            🔥 Толстовки и худи
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Тёплые и стильные толстовки для комфорта в любую погоду.
            Качественный материал и современные принты.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hoodies.map((item, index) => (
            <ClothingCard
              key={index}
              title={item.title}
              sizes={item.sizes}
              price={item.price}
              image={item.image}
              type={item.type}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HoodiesSection;
