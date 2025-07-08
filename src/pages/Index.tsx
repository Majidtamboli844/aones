
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  ShoppingCart, 
  Search, 
  User, 
  Star, 
  Truck, 
  Shield, 
  RotateCcw,
  Heart,
  Menu,
  Smartphone,
  Laptop,
  Watch,
  Headphones,
  Camera,
  Home,
  ChevronRight
} from "lucide-react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { name: "Electronics", icon: Smartphone, image: "photo-1498050108023-c5249f4df085" },
    { name: "Laptops", icon: Laptop, image: "photo-1488590528505-98d2b5aba04b" },
    { name: "Watches", icon: Watch, image: "photo-1434494878577-86c23bcb06b9" },
    { name: "Audio", icon: Headphones, image: "photo-1581090464777-f3220bbe1b8b" },
    { name: "Cameras", icon: Camera, image: "photo-1518005020951-eccb494ad742" },
    { name: "Home", icon: Home, image: "photo-1721322800607-8c38375eef04" }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 199,
      originalPrice: 299,
      rating: 4.5,
      reviews: 1250,
      image: "photo-1581090464777-f3220bbe1b8b",
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Smart Watch Pro",
      price: 399,
      originalPrice: 499,
      rating: 4.8,
      reviews: 890,
      image: "photo-1434494878577-86c23bcb06b9",
      badge: "New"
    },
    {
      id: 3,
      name: "Professional Camera",
      price: 899,
      originalPrice: 1199,
      rating: 4.7,
      reviews: 456,
      image: "photo-1518005020951-eccb494ad742",
      badge: "Sale"
    },
    {
      id: 4,
      name: "Gaming Laptop",
      price: 1299,
      originalPrice: 1599,
      rating: 4.6,
      reviews: 234,
      image: "photo-1488590528505-98d2b5aba04b",
      badge: "Hot"
    }
  ];

  const deals = [
    {
      id: 1,
      name: "Smartphone Bundle",
      price: 599,
      originalPrice: 899,
      discount: 33,
      image: "photo-1498050108023-c5249f4df085",
      timeLeft: "2 days left"
    },
    {
      id: 2,
      name: "Home Theater System",
      price: 799,
      originalPrice: 1199,
      discount: 33,
      image: "photo-1721322800607-8c38375eef04",
      timeLeft: "5 hours left"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <ShoppingCart className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">EcomStore</span>
              </Link>
              
              <div className="hidden md:flex items-center space-x-4">
                <Button variant="ghost" size="sm">
                  <Menu className="h-4 w-4 mr-2" />
                  Categories
                </Button>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search for products, brands and more..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full border-2 border-gray-200 focus:border-blue-500 rounded-lg"
                />
              </div>
            </div>

            {/* User Actions */}
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <Button variant="ghost" size="sm">
                  <User className="h-4 w-4 mr-2" />
                  Login
                </Button>
              </Link>
              <Link to="/cart">
                <Button variant="ghost" size="sm" className="relative">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Cart
                  <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    0
                  </Badge>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Shop Everything You Need
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Discover millions of products with fast delivery and great prices
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Shop Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                View Deals
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Truck className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Free Shipping</h3>
                <p className="text-gray-600">On orders over $50</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Secure Payment</h3>
                <p className="text-gray-600">100% secure transactions</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <RotateCcw className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Easy Returns</h3>
                <p className="text-gray-600">30-day return policy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <Link key={category.name} to={`/category/${category.name.toLowerCase()}`}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                      <category.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900">{category.name}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
            <Link to="/products">
              <Button variant="outline">
                View All
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`}>
                <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="relative">
                    <img 
                      src={`https://images.unsplash.com/${product.image}?w=400&h=300&fit=crop&auto=format`}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-4 left-4 bg-red-500 text-white">
                      {product.badge}
                    </Badge>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="absolute top-4 right-4 bg-white/80 hover:bg-white"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                        <span className="text-sm text-gray-500 line-through ml-2">${product.originalPrice}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Deals of the Day */}
      <section className="py-16 bg-gradient-to-r from-orange-400 to-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Deals of the Day</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {deals.map((deal) => (
              <Card key={deal.id} className="bg-white shadow-xl">
                <div className="flex">
                  <img 
                    src={`https://images.unsplash.com/${deal.image}?w=300&h=200&fit=crop&auto=format`}
                    alt={deal.name}
                    className="w-1/3 object-cover rounded-l-lg"
                  />
                  <CardContent className="flex-1 p-6">
                    <Badge className="bg-red-100 text-red-800 mb-4">
                      {deal.discount}% OFF
                    </Badge>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{deal.name}</h3>
                    <div className="flex items-center mb-4">
                      <span className="text-2xl font-bold text-red-600">${deal.price}</span>
                      <span className="text-lg text-gray-500 line-through ml-2">${deal.originalPrice}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">{deal.timeLeft}</p>
                    <Button className="w-full bg-red-600 hover:bg-red-700">
                      Shop Now
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <ShoppingCart className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">EcomStore</span>
              </div>
              <p className="text-gray-400 mb-4">
                Your one-stop shop for everything you need. Quality products, great prices, fast delivery.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-white">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link to="/shipping" className="hover:text-white">Shipping Info</Link></li>
                <li><Link to="/returns" className="hover:text-white">Returns</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Customer Service</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/help" className="hover:text-white">Help Center</Link></li>
                <li><Link to="/track" className="hover:text-white">Track Order</Link></li>
                <li><Link to="/support" className="hover:text-white">Support</Link></li>
                <li><Link to="/feedback" className="hover:text-white">Feedback</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Account</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/login" className="hover:text-white">Sign In</Link></li>
                <li><Link to="/register" className="hover:text-white">Create Account</Link></li>
                <li><Link to="/orders" className="hover:text-white">My Orders</Link></li>
                <li><Link to="/wishlist" className="hover:text-white">Wishlist</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EcomStore. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
