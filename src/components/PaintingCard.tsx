import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface PaintingCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
}

const PaintingCard = ({
  title,
  description,
  price,
  image,
}: PaintingCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-0">
        <div className="aspect-square overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
          <p className="text-gray-600 mb-4 text-sm leading-relaxed">
            {description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-primary">{price}</span>
            <Button size="sm" className="flex items-center space-x-2">
              <Icon name="ShoppingCart" size={16} />
              <span>Купить</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PaintingCard;
