import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Hotel, 
  Utensils, 
  Coffee, 
  FileText, 
  Package, 
  Star,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Users,
  Award,
  Truck
} from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: Hotel,
      title: "Hotel Supplies",
      description: "Premium bedding, towels, amenities, and room essentials for luxury hospitality experiences."
    },
    {
      icon: Utensils,
      title: "Restaurant Equipment", 
      description: "Professional kitchen equipment, dining furniture, and tableware for restaurants and cafes."
    },
    {
      icon: Coffee,
      title: "Beverage Solutions",
      description: "Complete coffee machines, tea services, and beverage equipment for hospitality venues."
    },
    {
      icon: FileText,
      title: "Office Stationery",
      description: "High-quality paper products, writing materials, and office supplies for business operations."
    },
    {
      icon: Package,
      title: "Custom Packaging",
      description: "Branded packaging solutions and promotional materials for hospitality businesses."
    },
    {
      icon: Truck,
      title: "Logistics Support",
      description: "Reliable delivery and supply chain management for consistent product availability."
    }
  ];

  const features = [
    { icon: Star, text: "Premium Quality Products" },
    { icon: Users, text: "Expert Customer Service" },
    { icon: Award, text: "Industry Leading Solutions" },
    { icon: CheckCircle, text: "Reliable Supply Chain" }
  ];

  const products = [
    {
      category: "Hospitality",
      items: ["Hotel Linens", "Room Amenities", "Kitchen Equipment", "Furniture"]
    },
    {
      category: "Stationery",
      items: ["Office Paper", "Writing Instruments", "Filing Solutions", "Promotional Items"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Hotel className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Aone Hospitality Service</h1>
                <p className="text-sm text-gray-600">Premium Solutions Provider</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <Link to="/products" className="text-gray-700 hover:text-blue-600 transition-colors">Products</Link>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
              Trusted by 500+ Businesses
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              Premium Hospitality &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                {" "}Stationery Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Elevate your business with our comprehensive range of hospitality equipment and premium stationery products. 
              Quality, reliability, and exceptional service - that's our commitment to you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3">
                  Explore Products
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
                Contact Us Today
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Business Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From hospitality essentials to office supplies, we provide everything your business needs to thrive.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover-scale">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Product Range
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our extensive catalog of premium products designed for modern businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {products.map((category, index) => (
              <Card key={index} className="border-0 shadow-xl overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                </div>
                <CardContent className="p-8">
                  <div className="grid grid-cols-2 gap-4">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors">
                        <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 text-center">
                    <Link to="/products">
                      <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
                        View All Products
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Your Trusted Partner in Business Excellence
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                With years of experience in the hospitality and stationery industry, Aone Hospitality Service 
                has established itself as a reliable partner for businesses seeking quality products and exceptional service.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  <span className="text-lg">ISO Certified Quality Standards</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  <span className="text-lg">24/7 Customer Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  <span className="text-lg">Nationwide Delivery Network</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
                <div className="text-blue-200">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">10K+</div>
                <div className="text-blue-200">Products Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">15+</div>
                <div className="text-blue-200">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">99%</div>
                <div className="text-blue-200">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to elevate your business? Contact us today for personalized solutions and competitive pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow p-8 text-center">
              <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">Speak directly with our experts</p>
              <p className="text-blue-600 font-semibold">+1 (555) 123-4567</p>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow p-8 text-center">
              <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Send us your requirements</p>
              <p className="text-blue-600 font-semibold">info@aonehospitality.com</p>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow p-8 text-center">
              <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-4">Our main office location</p>
              <p className="text-blue-600 font-semibold">123 Business District<br />City, State 12345</p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-12 py-4">
              Request a Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Hotel className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Aone Hospitality Service</h3>
                  <p className="text-gray-400">Premium Solutions Provider</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                Your trusted partner for hospitality and stationery solutions. 
                Quality products, exceptional service, reliable delivery.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
                <li><Link to="/products" className="hover:text-blue-400 transition-colors">Products</Link></li>
                <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-300">
                <li>+1 (555) 123-4567</li>
                <li>info@aonehospitality.com</li>
                <li>123 Business District<br />City, State 12345</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Aone Hospitality Service. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
