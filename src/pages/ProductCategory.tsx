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

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/products" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Link>
        </div>
      </div>

      {/* Category Header */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {category.title}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {category.description}
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bulk Selection Controls */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="select-all"
                    checked={selectedProducts.length === filteredProducts.length && filteredProducts.length > 0}
                    onCheckedChange={handleSelectAll}
                  />
                  <label htmlFor="select-all" className="text-sm font-medium">
                    Select All ({filteredProducts.length} items)
                  </label>
                </div>
                <div className="text-sm text-gray-600">
                  {selectedProducts.length} selected
                </div>
              </div>
              <Button 
                onClick={handleBulkWhatsAppInquiry}
                disabled={selectedProducts.length === 0}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
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
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found matching your search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                  <div className="relative h-48">
                    <img 
                      src={`https://images.unsplash.com/${product.image}?w=400&h=300&fit=crop`}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Checkbox 
                        checked={selectedProducts.includes(product.id)}
                        onCheckedChange={(checked) => handleProductSelection(product.id, checked as boolean)}
                        className="bg-white border-2 border-gray-300"
                      />
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-green-600 text-white">{product.price}</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <p className="text-gray-600 text-sm">{product.description}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button 
                      onClick={() => handleWhatsAppInquiry(product.name)}
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
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
