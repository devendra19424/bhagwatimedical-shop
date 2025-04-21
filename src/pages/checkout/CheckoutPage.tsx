
import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Check, CreditCard, MapPin } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Sample cart items
const cartItems = [
  {
    id: 1,
    name: "पैरासिटामोल",
    price: 25.99,
    quantity: 2,
    category: "पेन किलर",
  },
  {
    id: 2,
    name: "मल्टीविटामिन",
    price: 299.99,
    quantity: 1,
    category: "विटामिन्स",
  },
];

const CheckoutPage = () => {
  // Saved addresses
  const [selectedAddress, setSelectedAddress] = useState("home");
  const addresses = {
    home: {
      type: "घर",
      name: "राम शर्मा",
      address: "123, शिवाजी नगर",
      city: "इटारसी",
      state: "मध्य प्रदेश",
      pincode: "461111",
      phone: "9876543210",
    },
    office: {
      type: "दफ्तर",
      name: "राम शर्मा",
      address: "45, एमजी रोड",
      city: "इटारसी",
      state: "मध्य प्रदेश",
      pincode: "461111",
      phone: "9876543210",
    },
  };
  
  // Payment method
  const [paymentMethod, setPaymentMethod] = useState("cod");
  
  // Calculate price details
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const discount = 0;
  const deliveryCharge = subtotal > 500 ? 0 : 40;
  const total = subtotal - discount + deliveryCharge;
  
  // Handle placing order
  const handlePlaceOrder = () => {
    // Logic to place order would go here
    console.log("Order placed with:", {
      items: cartItems,
      address: addresses[selectedAddress as keyof typeof addresses],
      paymentMethod,
      total,
    });
    
    // Redirect to order confirmation page
    // navigate("/order-success");
  };

  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-8">चेकआउट</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Delivery Address */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  डिलीवरी पता
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup
                  value={selectedAddress}
                  onValueChange={setSelectedAddress}
                  className="space-y-4"
                >
                  {Object.entries(addresses).map(([key, address]) => (
                    <div key={key} className="flex items-start space-x-3">
                      <RadioGroupItem value={key} id={`address-${key}`} className="mt-1" />
                      <div className="grid gap-1.5 w-full">
                        <Label htmlFor={`address-${key}`} className="flex items-center gap-2">
                          <span className="font-semibold">{address.name}</span>
                          <span className="text-xs px-2 py-0.5 bg-gray-100 rounded-full">
                            {address.type}
                          </span>
                        </Label>
                        <div className="text-sm text-gray-600">
                          <p>{address.address}</p>
                          <p>
                            {address.city}, {address.state} - {address.pincode}
                          </p>
                          <p>फोन: {address.phone}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </RadioGroup>
                
                <Accordion type="single" collapsible className="mt-4">
                  <AccordionItem value="new-address">
                    <AccordionTrigger className="text-primary">
                      नया पता जोड़ें
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid gap-4 mt-2">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="full-name">पूरा नाम</Label>
                            <Input id="full-name" placeholder="पूरा नाम दर्ज करें" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone-number">फोन नंबर</Label>
                            <Input id="phone-number" placeholder="मोबाइल नंबर दर्ज करें" />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="street-address">पता</Label>
                          <Textarea
                            id="street-address"
                            placeholder="घर/फ्लैट नंबर, बिल्डिंग, स्ट्रीट"
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="city">शहर</Label>
                            <Input id="city" defaultValue="इटारसी" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="state">राज्य</Label>
                            <Input id="state" defaultValue="मध्य प्रदेश" />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="pincode">पिनकोड</Label>
                            <Input id="pincode" placeholder="पिनकोड दर्ज करें" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="landmark">लैंडमार्क (वैकल्पिक)</Label>
                            <Input id="landmark" placeholder="कोई पास का लैंडमार्क" />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="address-type">पता प्रकार</Label>
                          <RadioGroup defaultValue="home" id="address-type" className="flex gap-4">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="home" id="home" />
                              <Label htmlFor="home">घर</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="office" id="office" />
                              <Label htmlFor="office">दफ्तर</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="other" id="other" />
                              <Label htmlFor="other">अन्य</Label>
                            </div>
                          </RadioGroup>
                        </div>
                        
                        <Button className="mt-2 w-full md:w-auto">पता सहेजें</Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
            
            {/* Payment Method */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  भुगतान विधि
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup
                  value={paymentMethod}
                  onValueChange={setPaymentMethod}
                  className="space-y-4"
                >
                  <div className="flex items-start space-x-3">
                    <RadioGroupItem value="cod" id="payment-cod" className="mt-1" />
                    <div className="grid gap-1.5 w-full">
                      <Label htmlFor="payment-cod" className="font-semibold">
                        कैश ऑन डिलीवरी (COD)
                      </Label>
                      <p className="text-sm text-gray-600">
                        डिलीवरी के समय नकद भुगतान करें
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <RadioGroupItem value="online" id="payment-online" className="mt-1" />
                    <div className="grid gap-1.5 w-full">
                      <Label htmlFor="payment-online" className="font-semibold">
                        ऑनलाइन भुगतान
                      </Label>
                      <p className="text-sm text-gray-600">
                        UPI, क्रेडिट/डेबिट कार्ड, नेट बैंकिंग द्वारा भुगतान करें
                      </p>
                    </div>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>
            
            <Button size="lg" className="w-full" onClick={handlePlaceOrder}>
              ऑर्डर प्लेस करें
            </Button>
          </div>
          
          {/* Order Summary */}
          <div>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>ऑर्डर सारांश</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Items */}
                <div className="space-y-3">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <div>
                        <span className="font-medium">{item.name}</span>
                        <span className="text-gray-500 ml-1">x{item.quantity}</span>
                      </div>
                      <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                
                <Separator />
                
                {/* Price Details */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">सबटोटल</span>
                    <span>₹{subtotal.toFixed(2)}</span>
                  </div>
                  
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>डिस्काउंट</span>
                      <span>-₹{discount.toFixed(2)}</span>
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
                </div>
              </CardContent>
              <CardFooter className="bg-gray-50 border-t rounded-b-lg">
                <div className="w-full">
                  <div className="flex items-center gap-2 text-green-600 mb-2">
                    <Check className="h-4 w-4" />
                    <span className="text-sm font-medium">इटारसी क्षेत्र में तीव्र डिलीवरी</span>
                  </div>
                  <div className="text-xs text-gray-600">
                    इस ऑर्डर के लिए अनुमानित डिलीवरी: 60 मिनट
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutPage;
