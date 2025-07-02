import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#1A1F2C] to-[#2A3441] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Техника и электроника
              <span className="text-[#0EA5E9]"> нового поколения</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Крупнейшая сеть магазинов цифровой и бытовой техники в России.
              Более 2000 магазинов в 250 городах страны.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[#0EA5E9] hover:bg-[#0284C7] text-lg px-8"
              >
                <Icon name="Smartphone" size={20} className="mr-2" />
                Смартфоны
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-white border-white hover:bg-white hover:text-[#1A1F2C] text-lg px-8"
              >
                <Icon name="Laptop" size={20} className="mr-2" />
                Ноутбуки
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-r from-[#0EA5E9] to-[#3B82F6] p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">2000+</div>
                  <div className="text-sm opacity-90">Магазинов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">250</div>
                  <div className="text-sm opacity-90">Городов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">50К+</div>
                  <div className="text-sm opacity-90">Товаров</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-sm opacity-90">Поддержка</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
