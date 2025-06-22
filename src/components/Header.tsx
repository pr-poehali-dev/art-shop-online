import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Арт & Стиль
            </h1>
            <nav className="hidden md:flex space-x-6">
              <a
                href="#paintings"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Картины
              </a>
              <a
                href="#clothing"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Одежда
              </a>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="/resume.pdf"
              target="_blank"
              className="hidden sm:flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors"
            >
              <Icon name="FileText" size={16} />
              <span>Резюме</span>
            </a>

            <Button
              variant="outline"
              size="sm"
              className="flex items-center space-x-2"
            >
              <Icon name="Phone" size={16} />
              <span>+7 (999) 123-45-67</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
