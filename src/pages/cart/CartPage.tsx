
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Trash, MinusCircle, PlusCircle, ShoppingCart } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart, subtotal } = useCart();
  const { t } = useLanguage();
  const [couponCode, setCouponCode] = useState("");
  const [isCouponApplied, setIsCouponApplied] = useState(false);
  const [couponDiscount, setCouponDiscount] = useState(0);
  
  // Apply coupon code
  const applyCoupon = () => {
    if (couponCode.toLowerCase() === "first10") {
      setIsCouponApplied(true);
      // 10% discount
      setCouponDiscount(subtotal * 0.1);
    } else {
      alert(t("invalidCouponCode"));
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
            <h1 className="text-2xl font-bold mb-4">{t("cartEmpty")}</h1>
            <p className="text-gray-600 mb-8">
              {t("cartEmptyDescription")}
            </p>
            <Link to="/products">
              <Button size="lg">{t("continueShopping")}</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-8">{t("yourCart")}</h1>
        
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
                              onClick={() => removeFromCart(item.id)}
                            >
                              <Trash className="h-4 w-4 mr-1" />
                              {t("remove")}
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
                  <Button variant="outline">{t("continueShopping")}</Button>
                </Link>
                <Link to="/checkout">
                  <Button>{t("checkout")}</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
          
          {/* Order Summary */}
          <div>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-bold mb-4">{t("orderSummary")}</h2>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t("subtotal")}</span>
                    <span>₹{subtotal.toFixed(2)}</span>
                  </div>
                  
                  {isCouponApplied && (
                    <div className="flex justify-between text-green-600">
                      <span>{t("couponDiscount")}</span>
                      <span>-₹{couponDiscount.toFixed(2)}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t("deliveryCharge")}</span>
                    <span>{deliveryCharge === 0 ? t("free") : `₹${deliveryCharge.toFixed(2)}`}</span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between font-bold">
                    <span>{t("total")}</span>
                    <span>₹{total.toFixed(2)}</span>
                  </div>
                  
                  {!isCouponApplied && (
                    <div className="flex gap-2 mt-4">
                      <Input
                        placeholder={t("couponCode")}
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                      />
                      <Button variant="outline" onClick={applyCoupon}>
                        {t("apply")}
                      </Button>
                    </div>
                  )}
                  
                  {isCouponApplied && (
                    <div className="bg-green-50 text-green-800 p-2 rounded text-sm mt-2">
                      {t("couponApplied")}
                    </div>
                  )}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Link to="/checkout" className="w-full">
                  <Button className="w-full" size="lg">
                    {t("checkout")}
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
