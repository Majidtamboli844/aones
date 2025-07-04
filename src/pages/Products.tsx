
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Hotel className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Aone Hospitality Service</h1>
                <p className="text-sm text-gray-600">Premium Solutions Provider</p>
              </div>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
              <Link to="/products" className="text-blue-600 font-medium">Products</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Product <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Catalog</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover our comprehensive range of hospitality and stationery products designed for modern businesses.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category) => (
              <Link key={category.id} to={`/products/${category.id}`}>
                <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover-scale overflow-hidden">
                  <div className="relative h-48">
                    <img 
                      src={`https://images.unsplash.com/${category.image}?w=400&h=300&fit=crop`}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-blue-600 text-white">{category.badge}</Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
                        <category.icon className="h-5 w-5 text-blue-600" />
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                    <p className="text-gray-600">{category.description}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{category.products} Products</span>
                      <Button size="sm" className="bg-gradient-to-r from-blue-600 to-indigo-600">
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
    </div>
  );
};

export default Products;
