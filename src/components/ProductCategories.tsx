import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ProductCategories = () => {
  const categories = [
    {
      name: "Смартфоны",
      icon: "Smartphone",
      count: "15,000+",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Ноутбуки",
      icon: "Laptop",
      count: "8,500+",
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "Бытовая техника",
      icon: "Home",
      count: "12,000+",
      color: "from-green-500 to-green-600",
    },
    {
      name: "ТВ и аудио",
      icon: "Tv",
      count: "6,200+",
      color: "from-red-500 to-red-600",
    },
    {
      name: "Игровые консоли",
      icon: "Gamepad2",
      count: "3,400+",
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "Аксессуары",
      icon: "Headphones",
      count: "25,000+",
      color: "from-teal-500 to-teal-600",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1A1F2C] mb-4">
            Популярные категории
          </h2>
          <p className="text-xl text-[#8E9196] max-w-2xl mx-auto">
            Выберите категорию товаров и найдите именно то, что вам нужно
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 overflow-hidden"
            >
              <CardContent className="p-6">
                <div
                  className={`bg-gradient-to-r ${category.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon
                    name={category.icon as any}
                    size={28}
                    className="text-white"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#1A1F2C] mb-2">
                  {category.name}
                </h3>
                <p className="text-[#8E9196] mb-4">
                  Более {category.count} товаров
                </p>
                <div className="flex items-center text-[#0EA5E9] font-medium group-hover:translate-x-2 transition-transform duration-300">
                  Смотреть все
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
