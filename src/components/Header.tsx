import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-[#1A1F2C]">DNS</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-gray-600 hover:text-[#0EA5E9] font-medium"
              >
                Главная
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-[#0EA5E9] font-medium"
              >
                О нас
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-[#0EA5E9] font-medium"
              >
                Каталог
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-[#0EA5E9] font-medium"
              >
                Поддержка
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-[#0EA5E9] font-medium"
              >
                Контакты
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Icon name="Search" size={16} className="mr-2" />
              Поиск
            </Button>
            <Button className="bg-[#0EA5E9] hover:bg-[#0284C7]">
              <Icon name="ShoppingCart" size={16} className="mr-2" />
              Корзина
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
