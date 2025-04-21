
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Clock, MapPin, Package, ShoppingBag, Truck } from "lucide-react";
import { Separator } from "@/components/ui/separator";

// Sample order data for tracking
const orderData = {
  orderId: "ORD-001",
  placedAt: "10:15 AM, 10 अक्टूबर 2023",
  total: 399.98,
  paymentMethod: "कैश ऑन डिलीवरी",
  items: [
    {
      id: 1,
      name: "पैरासिटामोल",
      quantity: 2,
      price: 25.99,
    },
    {
      id: 2,
      name: "मल्टीविटामिन",
      quantity: 1,
      price: 299.99,
    },
  ],
  deliveryAddress: {
    name: "राम शर्मा",
    address: "123, शिवाजी नगर, इटारसी, मध्य प्रदेश - 461111",
    phone: "9876543210",
  },
  status: "चल रहा है", // "पूरा" | "चल रहा है" | "पेंडिंग"
  deliveryProgress: 2, // 0: Order Placed, 1: Preparing, 2: Out for Delivery, 3: Delivered
  estimatedDelivery: "11:30 AM",
  deliveryPerson: {
    name: "सुरेश वर्मा",
    phone: "9876543211",
    vehicleNumber: "MP 09 AB 1234",
    rating: 4.8,
  },
  currentLocation: {
    latitude: 22.6159,
    longitude: 78.05,
    lastUpdated: "11:10 AM",
  },
};

const deliverySteps = [
  {
    title: "ऑर्डर प्लेस किया गया",
    description: "10:15 AM, 10 अक्टूबर 2023",
    icon: ShoppingBag,
    completed: true,
  },
  {
    title: "ऑर्डर तैयार किया जा रहा है",
    description: "10:25 AM, 10 अक्टूबर 2023",
    icon: Package,
    completed: true,
  },
  {
    title: "डिलीवरी के लिए निकला",
    description: "11:00 AM, 10 अक्टूबर 2023",
    icon: Truck,
    completed: true,
  },
  {
    title: "डिलीवर किया गया",
    description: "अनुमानित: 11:30 AM",
    icon: Check,
    completed: false,
  },
];

const OrderTrackingPage = () => {
  // For real implementation, this would come from route params and API
  const [order, setOrder] = useState(orderData);

  return (
    <Layout>
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">ऑर्डर ट्रैकिंग</h1>
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-gray-600">ऑर्डर आईडी: {order.orderId}</p>
              <span className="text-gray-400">|</span>
              <p className="text-gray-600">
                ऑर्डर किया गया: {order.placedAt}
              </p>
              <span className="text-gray-400">|</span>
              <Badge
                variant={order.status === "पूरा" ? "success" : "secondary"}
                className="ml-1"
              >
                {order.status}
              </Badge>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Delivery Progress */}
            <Card>
              <CardHeader>
                <CardTitle>डिलीवरी प्रगति</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  {/* Vertical line connecting steps */}
                  <div className="absolute left-[22px] top-0 bottom-0 w-0.5 bg-gray-200 z-0" />
                  
                  {/* Timeline steps */}
                  <div className="space-y-8 relative z-10">
                    {deliverySteps.map((step, index) => (
                      <div key={index} className="flex gap-4">
                        <div
                          className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 ${
                            step.completed
                              ? "bg-primary text-primary-foreground"
                              : "bg-gray-100 text-gray-400"
                          }`}
                        >
                          <step.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium">{step.title}</h4>
                          <p className="text-sm text-gray-500">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Delivery Person */}
            <Card>
              <CardHeader>
                <CardTitle>डिलीवरी पार्टनर</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold">
                        {order.deliveryPerson.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-medium">{order.deliveryPerson.name}</h4>
                      <div className="flex items-center text-sm text-yellow-500 mt-1">
                        <span className="mr-1">★</span>
                        <span>{order.deliveryPerson.rating}</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">
                        {order.deliveryPerson.vehicleNumber}
                      </p>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col sm:flex-row gap-2">
                    <Button className="flex-1" variant="outline" size="sm">
                      कॉल करें
                    </Button>
                    <Button className="flex-1" size="sm">
                      संदेश भेजें
                    </Button>
                  </div>
                </div>

                <div className="mt-6 bg-blue-50 p-4 rounded-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="flex items-start gap-2">
                    <Clock className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h5 className="font-medium text-blue-900">अनुमानित पहुंचने का समय</h5>
                      <p className="text-blue-800">
                        {order.estimatedDelivery} (<span className="text-blue-600">15-20 मिनट</span>)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h5 className="font-medium text-blue-900">वर्तमान स्थान</h5>
                      <p className="text-blue-800">
                        500 मीटर दूर (<span className="text-blue-600">अंतिम अपडेट: {order.currentLocation.lastUpdated}</span>)
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card>
              <CardContent className="p-0">
                <div className="h-64 bg-gray-100 flex items-center justify-center">
                  <div className="text-center p-6">
                    <MapPin className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">
                      यहां रियल-टाइम डिलीवरी मैप दिखाई देगा
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {/* Order Summary */}
            <Card>
              <CardHeader>
                <CardTitle>ऑर्डर सारांश</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {order.items.map((item) => (
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

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">सबटोटल</span>
                    <span>₹{order.total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">डिलीवरी चार्ज</span>
                    <span>मुफ्त</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold">
                    <span>कुल</span>
                    <span>₹{order.total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <span className="text-sm text-gray-600">भुगतान विधि</span>
                  <p className="font-medium">{order.paymentMethod}</p>
                </div>
              </CardContent>
            </Card>

            {/* Delivery Address */}
            <Card>
              <CardHeader>
                <CardTitle>डिलीवरी पता</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <p className="font-medium">{order.deliveryAddress.name}</p>
                  <p className="text-gray-600">{order.deliveryAddress.address}</p>
                  <p className="text-gray-600">
                    फोन: {order.deliveryAddress.phone}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <Card>
              <CardContent className="p-4">
                <div className="space-y-2">
                  <Button variant="outline" className="w-full">
                    ऑर्डर रद्द करें
                  </Button>
                  <Button variant="outline" className="w-full">
                    समस्या की रिपोर्ट करें
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderTrackingPage;
