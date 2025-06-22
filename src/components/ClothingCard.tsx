import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface ClothingCardProps {
  title: string;
  sizes: string[];
  price: string;
  image: string;
  type: "футболка" | "толстовка";
}

const ClothingCard = ({
  title,
  sizes,
  price,
  image,
  type,
}: ClothingCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-0">
        <div className="aspect-square overflow-hidden rounded-t-lg relative">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <Badge
            variant="secondary"
            className="absolute top-3 left-3 bg-white/90 text-gray-700"
          >
            {type}
          </Badge>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-2">Размеры:</p>
            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => (
                <Badge key={size} variant="outline" className="text-xs">
                  {size}
                </Badge>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-secondary">{price}</span>
            <Button
              size="sm"
              variant="secondary"
              className="flex items-center space-x-2"
            >
              <Icon name="ShoppingCart" size={16} />
              <span>Купить</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ClothingCard;
