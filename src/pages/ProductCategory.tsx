import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Hotel, ArrowLeft, MessageCircle, ShoppingCart, Search } from "lucide-react";

const ProductCategory = () => {
  const { categoryId } = useParams();
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  
  const categoryData = {
    "hotel-supplies": {
      title: "Hotel Supplies",
      description: "Premium bedding, towels, and room essentials for luxury hospitality experiences",
      products: [
        { id: 1, name: "Premium Bed Sheets Set", price: "$89", image: "photo-1649972904349-6e44c42644a7", description: "100% Egyptian cotton bed sheets with 400 thread count" },
        { id: 2, name: "Luxury Bath Towels", price: "$45", image: "photo-1721322800607-8c38375eef04", description: "Ultra-soft cotton towels, hotel quality" },
        { id: 3, name: "Hotel Room Amenities Kit", price: "$25", image: "photo-1518770660439-4636190af475", description: "Complete amenities set for guest rooms" },
        { id: 4, name: "Pillow Collection", price: "$35", image: "photo-1486312338219-ce68d2c6f44d", description: "Memory foam and down alternative pillows" },
      ]
    },
    "restaurant-equipment": {
      title: "Restaurant Equipment", 
      description: "Professional kitchen equipment and dining solutions",
      products: [
        { id: 5, name: "Commercial Kitchen Set", price: "$1,299", image: "photo-1488590528505-98d2b5aba04b", description: "Complete commercial kitchen equipment package" },
        { id: 6, name: "Dining Table Set", price: "$599", image: "photo-1461749280684-dccba630e2f6", description: "Professional dining furniture for restaurants" },
        { id: 7, name: "Chef Knife Collection", price: "$189", image: "photo-1518005020951-eccb494ad742", description: "Professional grade kitchen knives" },
        { id: 8, name: "Food Storage Solutions", price: "$145", image: "photo-1486718448742-163732cd1544", description: "Commercial food storage containers" },
      ]
    },
    "beverage-solutions": {
      title: "Beverage Solutions",
      description: "Coffee machines and beverage equipment for hospitality venues",
      products: [
        { id: 9, name: "Commercial Coffee Machine", price: "$2,599", image: "photo-1581090464777-f3220bbe1b8b", description: "Professional espresso machine for high volume" },
        { id: 10, name: "Tea Service Set", price: "$89", image: "photo-1498050108023-c5249f4df085", description: "Complete tea service with premium accessories" },
        { id: 11, name: "Beverage Dispenser", price: "$299", image: "photo-1434494878577-86c23bcb06b9", description: "Stainless steel beverage dispensing system" },
        { id: 12, name: "Bar Equipment Kit", price: "$459", image: "photo-1581092795360-fd1ca04f0952", description: "Professional bar tools and accessories" },
      ]
    },
    "office-stationery": {
      title: "Office Stationery",
      description: "High-quality paper products and office supplies",
      products: [
        { id: 13, name: "Premium Paper Bundle", price: "$45", image: "photo-1483058712412-4245e9b90334", description: "High-quality printing and writing paper" },
        { id: 14, name: "Executive Pen Set", price: "$129", image: "photo-1487887235947-a955ef187fcc", description: "Luxury writing instruments collection" },
        { id: 15, name: "Office Organizer Set", price: "$79", image: "photo-1472396961693-142e6e269027", description: "Desktop organization solutions" },
        { id: 16, name: "Filing Cabinet System", price: "$299", image: "photo-1433086966358-54859d0ed716", description: "Professional document storage system" },
      ]
    },
    "custom-packaging": {
      title: "Custom Packaging",
      description: "Branded packaging solutions and promotional materials",
      products: [
        { id: 17, name: "Custom Branded Boxes", price: "$2.50/unit", image: "photo-1465146344425-f00d5f5c8f07", description: "Custom printed packaging boxes" },
        { id: 18, name: "Promotional Bags", price: "$3.99/unit", image: "photo-1482938289607-e9573fc25ebb", description: "Branded shopping and gift bags" },
        { id: 19, name: "Marketing Materials", price: "$199", image: "photo-1509316975850-ff9c5deb0cd9", description: "Complete branding package with materials" },
        { id: 20, name: "Gift Wrapping Set", price: "$89", image: "photo-1513836279014-a89f7a76ae86", description: "Professional gift wrapping solutions" },
      ]
    },
    "bedding-linens": {
      title: "Bedding & Linens",
      description: "Luxury bedding sets and hotel linens",
      products: [
        { id: 21, name: "Luxury Comforter Set", price: "$199", image: "photo-1518495973542-4542c06a5843", description: "Premium down alternative comforter with pillows" },
        { id: 22, name: "Hotel Linen Package", price: "$299", image: "photo-1469474968028-56623f02e42e", description: "Complete hotel room linen package" },
        { id: 23, name: "Decorative Pillows", price: "$45", image: "photo-1470813740244-df37b8c1edcb", description: "Elegant decorative pillows for hospitality" },
        { id: 24, name: "Mattress Protectors", price: "$65", image: "photo-1470071459604-3b5ec3a7fe05", description: "Waterproof mattress protection covers" },
      ]
    }
  };

  const category = categoryData[categoryId as keyof typeof categoryData];
  
  if (!category) {
    return <div>Category not found</div>;
  }

  // Filter products based on search query
  const filteredProducts = category.products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleProductSelection = (productId: number, checked: boolean) => {
    if (checked) {
      setSelectedProducts(prev => [...prev, productId]);
    } else {
      setSelectedProducts(prev => prev.filter(id => id !== productId));
    }
  };

  const handleSelectAll = () => {
    if (selectedProducts.length === filteredProducts.length) {
      setSelectedProducts([]);
    } else {
      setSelectedProducts(filteredProducts.map(product => product.id));
    }
  };

  const handleBulkWhatsAppInquiry = () => {
    const selectedProductsData = filteredProducts.filter(product => 
      selectedProducts.includes(product.id)
    );
    
    if (selectedProductsData.length === 0) {
      alert("Please select at least one product to inquire about.");
      return;
    }

    const productList = selectedProductsData.map(product => 
      `• ${product.name} (${product.price})`
    ).join('\n');

    const message = `Hi! I'm interested in the following products from Aone Hospitality Service:\n\n${productList}\n\nCould you please provide more details and pricing information for these items?`;
    const whatsappUrl = `https://wa.me/15551234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleWhatsAppInquiry = (productName: string) => {
    const message = `Hi! I'm interested in the ${productName} from Aone Hospitality Service. Could you please provide more details and pricing information?`;
    const whatsappUrl = `https://wa.me/15551234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

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

      {/* Breadcrumb */}
      <div className="bg-white/60 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link to="/products" className="flex items-center text-blue-600 hover:text-blue-800 transition-all duration-300 font-medium group">
            <ArrowLeft className="h-5 w-5 mr-3 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Products
          </Link>
        </div>
      </div>

      {/* Category Header */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              {category.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
              {category.description}
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 mb-10 animate-fade-in-up">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search products by name or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-6 py-4 w-full text-lg border-2 border-gray-200 focus:border-blue-500 rounded-xl shadow-sm transition-all duration-300 bg-white/80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bulk Selection Controls */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 mb-10 animate-fade-in-up">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-3">
                  <Checkbox 
                    id="select-all"
                    checked={selectedProducts.length === filteredProducts.length && filteredProducts.length > 0}
                    onCheckedChange={handleSelectAll}
                    className="w-5 h-5"
                  />
                  <label htmlFor="select-all" className="text-base font-semibold text-gray-900">
                    Select All ({filteredProducts.length} items)
                  </label>
                </div>
                <div className="text-base text-gray-600 bg-gray-100 px-4 py-2 rounded-full font-medium">
                  {selectedProducts.length} selected
                </div>
              </div>
              <Button 
                onClick={handleBulkWhatsAppInquiry}
                disabled={selectedProducts.length === 0}
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-3 text-base font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ShoppingCart className="h-5 w-5 mr-3" />
                Bulk Inquire on WhatsApp ({selectedProducts.length})
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 animate-fade-in-up">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-12 max-w-md mx-auto">
                <Search className="h-16 w-16 text-gray-400 mx-auto mb-6" />
                <p className="text-gray-500 text-xl font-medium">No products found matching your search.</p>
                <p className="text-gray-400 text-base mt-2">Try adjusting your search terms.</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product, index) => (
                <Card 
                  key={product.id} 
                  className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-xl hover:scale-105 overflow-hidden bg-white/90 backdrop-blur-sm hover:bg-white relative animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative h-56">
                    <img 
                      src={`https://images.unsplash.com/${product.image}?w=500&h=400&fit=crop&auto=format`}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-black/60 transition-all duration-500"></div>
                    
                    <div className="absolute top-4 left-4">
                      <Checkbox 
                        checked={selectedProducts.includes(product.id)}
                        onCheckedChange={(checked) => handleProductSelection(product.id, checked as boolean)}
                        className="bg-white/95 backdrop-blur-sm border-2 border-gray-300 shadow-lg w-5 h-5"
                      />
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg border-0 px-3 py-1.5 font-semibold text-base">
                        {product.price}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="pb-4 relative z-10">
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-900 transition-colors duration-300 leading-tight">
                      {product.name}
                    </CardTitle>
                    <p className="text-gray-600 text-sm leading-relaxed font-medium">
                      {product.description}
                    </p>
                  </CardHeader>

                  <CardContent className="pt-0 relative z-10">
                    <Button 
                      onClick={() => handleWhatsAppInquiry(product.name)}
                      className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 font-semibold py-3"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Inquire on WhatsApp
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProductCategory;
