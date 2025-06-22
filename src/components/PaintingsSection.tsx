import PaintingCard from "./PaintingCard";

const PaintingsSection = () => {
  const paintings = [
    {
      title: "Морской закат",
      description:
        "Живописный закат над морем в теплых оранжевых и розовых тонах. Масло на холсте, 60x80 см.",
      price: "25 000 ₽",
      image:
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop",
    },
    {
      title: "Городские огни",
      description:
        "Ночной город в стиле импрессионизм. Яркие неоновые краски создают атмосферу современного мегаполиса.",
      price: "32 000 ₽",
      image:
        "https://images.unsplash.com/photo-1549887534-1541e9326642?w=400&h=400&fit=crop",
    },
    {
      title: "Весенний сад",
      description:
        "Цветущий сад в пастельных тонах. Нежные оттенки розового и зеленого передают красоту весны.",
      price: "18 500 ₽",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
    },
    {
      title: "Абстракция №7",
      description:
        "Современная абстрактная композиция в ярких цветах. Акрил на холсте, размер 50x70 см.",
      price: "22 000 ₽",
      image:
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop",
    },
  ];

  return (
    <section
      id="paintings"
      className="py-16 bg-gradient-to-br from-purple-50 to-pink-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Коллекция картин
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Авторские работы в различных стилях и техниках. Каждая картина
            создана с особой любовью и вниманием к деталям.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {paintings.map((painting, index) => (
            <PaintingCard
              key={index}
              title={painting.title}
              description={painting.description}
              price={painting.price}
              image={painting.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaintingsSection;
