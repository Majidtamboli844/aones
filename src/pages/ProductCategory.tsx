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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Enhanced Header */}
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
              <Link to="/products" className="text-blue-600 font-medium">Products</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Enhanced Breadcrumb */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/products" className="flex items-center text-blue-600 hover:text-blue-800 transition-all duration-300 group">
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-600 after:origin-bottom-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-bottom-left">Back to Products</span>
          </Link>
        </div>
      </div>

      {/* Enhanced Category Header */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {category?.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              {category?.description}
            </p>
            <div className="flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Search Section */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 p-8 mb-8 transform hover:scale-[1.02] transition-transform duration-300">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-3 w-full text-lg border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Bulk Selection Controls */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 p-6 mb-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="select-all"
                    checked={selectedProducts.length === filteredProducts.length && filteredProducts.length > 0}
                    onCheckedChange={handleSelectAll}
                    className="w-5 h-5"
                  />
                  <label htmlFor="select-all" className="text-sm font-medium">
                    Select All ({filteredProducts.length} items)
                  </label>
                </div>
                <div className="text-sm text-gray-600 bg-blue-50 px-3 py-1 rounded-full">
                  {selectedProducts.length} selected
                </div>
              </div>
              <Button 
                onClick={handleBulkWhatsAppInquiry}
                disabled={selectedProducts.length === 0}
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Bulk Inquire on WhatsApp ({selectedProducts.length})
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Products Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full flex items-center justify-center">
                <Search className="h-12 w-12 text-gray-400" />
              </div>
              <p className="text-gray-500 text-xl">No products found matching your search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product, index) => (
                <Card key={product.id} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden relative bg-white/90 backdrop-blur-sm hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/${product.image}?w=400&h=300&fit=crop`}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 left-4 transform group-hover:scale-110 transition-transform duration-300">
                      <Checkbox 
                        checked={selectedProducts.includes(product.id)}
                        onCheckedChange={(checked) => handleProductSelection(product.id, checked as boolean)}
                        className="bg-white/90 backdrop-blur-sm border-2 border-gray-300 w-5 h-5"
                      />
                    </div>
                    <div className="absolute top-4 right-4 transform group-hover:scale-110 transition-transform duration-300">
                      <Badge className="bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg border-0 px-3 py-1">{product.price}</Badge>
                    </div>
                  </div>
                  <CardHeader className="relative">
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors duration-300">{product.name}</CardTitle>
                    <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">{product.description}</p>
                  </CardHeader>
                  <CardContent className="pt-0 relative">
                    <Button 
                      onClick={() => handleWhatsAppInquiry(product.name)}
                      className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
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
