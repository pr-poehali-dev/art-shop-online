import ClothingCard from "./ClothingCard";

const ClothingSection = () => {
  const clothing = [
    {
      title: "Базовая футболка",
      sizes: ["XS", "S", "M", "L", "XL"],
      price: "1 200 ₽",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      type: "футболка" as const,
    },
    {
      title: "Арт-толстовка 'Космос'",
      sizes: ["S", "M", "L", "XL"],
      price: "3 500 ₽",
      image:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
      type: "толстовка" as const,
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
      title: "Худи с принтом",
      sizes: ["M", "L", "XL", "XXL"],
      price: "4 200 ₽",
      image:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
      type: "толстовка" as const,
    },
    {
      title: "Лимитированная футболка",
      sizes: ["S", "M", "L"],
      price: "2 500 ₽",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      type: "футболка" as const,
    },
    {
      title: "Тёплая толстовка",
      sizes: ["XS", "S", "M", "L", "XL"],
      price: "3 800 ₽",
      image:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
      type: "толстовка" as const,
    },
  ];

  return (
    <section
      id="clothing"
      className="py-16 bg-gradient-to-br from-orange-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Коллекция одежды
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Стильная и комфортная одежда с уникальными принтами. Качественные
            материалы и современный дизайн.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clothing.map((item, index) => (
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

export default ClothingSection;
