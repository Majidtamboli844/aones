
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Hotel, 
  Utensils, 
  Coffee, 
  FileText, 
  Package, 
  Bed,
  ChefHat,
  Printer,
  Briefcase,
  Gift,
  ShoppingCart
} from "lucide-react";

const Products = () => {
  const productCategories = [
    {
      id: "hotel-supplies",
      title: "Hotel Supplies",
      description: "Premium bedding, towels, and room essentials",
      icon: Hotel,
      image: "photo-1721322800607-8c38375eef04",
      products: 25,
      badge: "Premium"
    },
    {
      id: "restaurant-equipment",
      title: "Restaurant Equipment", 
      description: "Professional kitchen and dining solutions",
      icon: Utensils,
      image: "photo-1518770660439-4636190af475",
      products: 18,
      badge: "Professional"
    },
    {
      id: "beverage-solutions",
      title: "Beverage Solutions",
      description: "Coffee machines and beverage equipment",
      icon: Coffee,
      image: "photo-1486312338219-ce68d2c6f44d",
      products: 12,
      badge: "Quality"
    },
    {
      id: "office-stationery",
      title: "Office Stationery",
      description: "High-quality paper products and supplies",
      icon: FileText,
      image: "photo-1488590528505-98d2b5aba04b",
      products: 35,
      badge: "Essential"
    },
    {
      id: "custom-packaging",
      title: "Custom Packaging",
      description: "Branded packaging and promotional materials",
      icon: Package,
      image: "photo-1461749280684-dccba630e2f6",
      products: 15,
      badge: "Custom"
    },
    {
      id: "bedding-linens",
      title: "Bedding & Linens",
      description: "Luxury bedding sets and hotel linens",
      icon: Bed,
      image: "photo-1649972904349-6e44c42644a7",
      products: 20,
      badge: "Luxury"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 animate-gradient">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-lg shadow-lg border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-4 group">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Hotel className="h-7 w-7 text-white" />
              </div>
              <div className="transition-all duration-300 group-hover:translate-x-1">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Aone Hospitality Service
                </h1>
                <p className="text-sm text-gray-600 font-medium">Premium Solutions Provider</p>
              </div>
            </Link>
            <nav className="hidden md:flex space-x-10">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                Home
              </Link>
              <Link 
                to="/products" 
                className="text-blue-600 font-semibold relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600"
              >
                Products
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                Our Product
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 animate-gradient-x">
                Catalog
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Discover our comprehensive range of hospitality and stationery products designed for modern businesses seeking excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {productCategories.map((category, index) => (
              <Link 
                key={category.id} 
                to={`/products/${category.id}`}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-xl hover:scale-105 overflow-hidden bg-white/90 backdrop-blur-sm hover:bg-white relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative h-56">
                    <img 
                      src={`https://images.unsplash.com/${category.image}?w=500&h=400&fit=crop&auto=format`}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-black/60 transition-all duration-500"></div>
                    
                    <div className="absolute top-6 left-6">
                      <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg border-0 px-4 py-1.5 font-semibold">
                        {category.badge}
                      </Badge>
                    </div>
                    
                    <div className="absolute top-6 right-6">
                      <div className="w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                        <category.icon className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                  </div>

                  <CardHeader className="pb-4 relative z-10">
                    <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-900 transition-colors duration-300">
                      {category.title}
                    </CardTitle>
                    <p className="text-gray-600 text-base leading-relaxed font-medium">
                      {category.description}
                    </p>
                  </CardHeader>

                  <CardContent className="pt-0 relative z-10">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full">
                        {category.products} Products
                      </span>
                      <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 font-semibold px-6">
                        View Products
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom spacing */}
      <div className="h-20"></div>
    </div>
  );
};

export default Products;
