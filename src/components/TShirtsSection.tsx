import ClothingCard from "./ClothingCard";

const TShirtsSection = () => {
  const tshirts = [
    {
      title: "Базовая футболка",
      sizes: ["XS", "S", "M", "L", "XL"],
      price: "1 200 ₽",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      type: "футболка" as const,
    },
    {
      title: "Винтажная футболка",
      sizes: ["XS", "S", "M", "L"],
      price: "1 800 ₽",
      image:
        "https://images.unsplash.com/photo-1583743814966-8936f37f128a?w=400&h=400&fit=crop",
      type: "футболка" as const,
    },
    {
      title: "Лимитированная футболка",
      sizes: ["S", "M", "L"],
      price: "2 500 ₽",
      image:
        "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&h=400&fit=crop",
      type: "футболка" as const,
    },
  ];

  return (
    <section
      id="tshirts"
      className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">⭐ Футболки</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Легкие и удобные футболки на каждый день. Натуральные ткани и
            оригинальные дизайны.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tshirts.map((item, index) => (
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

export default TShirtsSection;
