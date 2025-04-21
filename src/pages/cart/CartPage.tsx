
import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Trash, MinusCircle, PlusCircle, ShoppingCart } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";

// Sample cart items
const initialCartItems = [
  {
    id: 1,
    name: "पैरासिटामोल",
    imageUrl: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?h=200&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-4.0.3&w=300",
    price: 25.99,
    quantity: 2,
    category: "पेन किलर",
  },
  {
    id: 2,
    name: "मल्टीविटामिन",
    imageUrl: "https://images.unsplash.com/photo-1550572017-edd951b55104?h=200&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-4.0.3&w=300",
    price: 299.99,
    quantity: 1,
    category: "विटामिन्स",
  },
];

const CartPage = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [couponCode, setCouponCode] = useState("");
  const [isCouponApplied, setIsCouponApplied] = useState(false);
  const [couponDiscount, setCouponDiscount] = useState(0);
  
  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  
  // Update item quantity
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  
  // Remove item from cart
  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };
  
  // Apply coupon code
  const applyCoupon = () => {
    if (couponCode.toLowerCase() === "first10") {
      setIsCouponApplied(true);
      // 10% discount
      setCouponDiscount(subtotal * 0.1);
    } else {
      alert("अमान्य कूपन कोड!");
    }
  };
  
  // Calculate total with discount and delivery charges
  const deliveryCharge = subtotal > 500 ? 0 : 40;
  const total = subtotal - couponDiscount + deliveryCharge;

  // Empty cart view
  if (cartItems.length === 0) {
    return (
      <Layout>
        <div className="container py-16 text-center">
          <div className="max-w-md mx-auto">
            <div className="mb-6 text-gray-400 flex justify-center">
              <ShoppingCart size={64} />
            </div>
            <h1 className="text-2xl font-bold mb-4">आपका कार्ट खाली है</h1>
            <p className="text-gray-600 mb-8">
              आपके कार्ट में अभी कोई आइटम नहीं है। खरीदारी शुरू करने के लिए हमारे प्रोडक्ट सेक्शन पर जाएं।
            </p>
            <Link to="/products">
              <Button size="lg">शॉपिंग जारी रखें</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-8">आपका कार्ट</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={item.id}>
                      <div className="flex items-start gap-4">
                        <div className="w-20 h-20 rounded-md overflow-hidden shrink-0">
                          <img
                            src={item.imageUrl}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <div>
                              <Link to={`/products/${item.id}`}>
                                <h3 className="font-medium">{item.name}</h3>
                              </Link>
                              <p className="text-sm text-gray-500">{item.category}</p>
                            </div>
                            <p className="font-bold">₹{item.price.toFixed(2)}</p>
                          </div>
                          
                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center border rounded-md">
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                disabled={item.quantity <= 1}
                              >
                                <MinusCircle className="h-4 w-4" />
                              </Button>
                              <span className="w-8 text-center">{item.quantity}</span>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                <PlusCircle className="h-4 w-4" />
                              </Button>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-red-500 hover:text-red-700 hover:bg-red-50"
                              onClick={() => removeItem(item.id)}
                            >
                              <Trash className="h-4 w-4 mr-1" />
                              हटाएं
                            </Button>
                          </div>
                        </div>
                      </div>
                      <Separator className="mt-6" />
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between p-6 pt-0">
                <Link to="/products">
                  <Button variant="outline">शॉपिंग जारी रखें</Button>
                </Link>
                <Link to="/checkout">
                  <Button>चेकआउट करें</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
          
          {/* Order Summary */}
          <div>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-bold mb-4">ऑर्डर सारांश</h2>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">सबटोटल</span>
                    <span>₹{subtotal.toFixed(2)}</span>
                  </div>
                  
                  {isCouponApplied && (
                    <div className="flex justify-between text-green-600">
                      <span>कूपन डिस्काउंट</span>
                      <span>-₹{couponDiscount.toFixed(2)}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">डिलीवरी चार्ज</span>
                    <span>{deliveryCharge === 0 ? "मुफ्त" : `₹${deliveryCharge.toFixed(2)}`}</span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between font-bold">
                    <span>कुल</span>
                    <span>₹{total.toFixed(2)}</span>
                  </div>
                  
                  {!isCouponApplied && (
                    <div className="flex gap-2 mt-4">
                      <Input
                        placeholder="कूपन कोड"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                      />
                      <Button variant="outline" onClick={applyCoupon}>
                        अप्लाई
                      </Button>
                    </div>
                  )}
                  
                  {isCouponApplied && (
                    <div className="bg-green-50 text-green-800 p-2 rounded text-sm mt-2">
                      कूपन सफलतापूर्वक लागू किया गया!
                    </div>
                  )}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Link to="/checkout" className="w-full">
                  <Button className="w-full" size="lg">
                    चेकआउट करें
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
