
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header with enhanced styling */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <Hotel className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Aone Hospitality Service</h1>
                <p className="text-sm text-gray-600">Premium Solutions Provider</p>
              </div>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Home</Link>
              <Link to="/products" className="text-blue-600 font-medium relative after:content-[''] after:absolute after:w-full after:scale-x-100 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-600">Products</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Our Product <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 animate-pulse">Catalog</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of hospitality and stationery products designed for modern businesses.
            </p>
            <div className="flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Product Categories */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <Link key={category.id} to={`/products/${category.id}`}>
                <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden relative bg-white/90 backdrop-blur-sm hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/${category.image}?w=400&h=300&fit=crop`}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 left-4 transform group-hover:scale-110 transition-transform duration-300">
                      <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg border-0 px-3 py-1">{category.badge}</Badge>
                    </div>
                    <div className="absolute top-4 right-4 transform group-hover:rotate-12 transition-transform duration-300">
                      <div className="w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        <category.icon className="h-6 w-6 text-blue-600 group-hover:text-indigo-600 transition-colors duration-300" />
                      </div>
                    </div>
                  </div>
                  <CardHeader className="relative">
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors duration-300">{category.title}</CardTitle>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{category.description}</p>
                  </CardHeader>
                  <CardContent className="pt-0 relative">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">{category.products} Products</span>
                      <Button size="sm" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md hover:shadow-lg transition-all duration-300 transform group-hover:scale-105">
                        View Products
                        <ShoppingCart className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Footer Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="7" cy="7" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8">Get in touch with our expert team for personalized solutions</p>
          <Button className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-8 py-3 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            Contact Us Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Products;
