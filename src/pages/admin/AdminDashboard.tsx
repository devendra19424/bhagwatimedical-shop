
import AdminLayout from "./AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ShoppingCart,
  Users,
  Package,
  TrendingUp,
  Clock,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

// Demo data
const recentOrders = [
  {
    id: "ORD-001",
    customer: "राम शर्मा",
    date: "2023-10-10",
    total: 399.98,
    status: "पूरा",
    items: 3,
  },
  {
    id: "ORD-002",
    customer: "सीमा वर्मा",
    date: "2023-10-09",
    total: 599.97,
    status: "चल रहा है",
    items: 2,
  },
  {
    id: "ORD-003",
    customer: "राजेश गुप्ता",
    date: "2023-10-09",
    total: 149.99,
    status: "पूरा",
    items: 1,
  },
  {
    id: "ORD-004",
    customer: "मोहन पटेल",
    date: "2023-10-08",
    total: 1299.99,
    status: "पूरा",
    items: 4,
  },
  {
    id: "ORD-005",
    customer: "दीपा जोशी",
    date: "2023-10-08",
    total: 325.97,
    status: "पूरा",
    items: 3,
  },
];

const lowStockProducts = [
  {
    id: 1,
    name: "पैरासिटामोल",
    stock: 5,
    threshold: 10,
    category: "पेन किलर",
  },
  {
    id: 2,
    name: "मल्टीविटामिन",
    stock: 3,
    threshold: 8,
    category: "विटामिन्स",
  },
  {
    id: 3,
    name: "हैंड सैनिटाइज़र",
    stock: 2,
    threshold: 12,
    category: "स्किन केयर",
  },
];

const activeDeliveries = [
  {
    id: "DEL-001",
    order: "ORD-002",
    customer: "सीमा वर्मा",
    address: "45, शिवाजी नगर, इटारसी",
    rider: "अमित यादव",
    status: "पिकअप",
    time: "11:30 AM",
  },
  {
    id: "DEL-002",
    order: "ORD-006",
    customer: "अनिल शर्मा",
    address: "22, गांधी रोड, इटारसी",
    rider: "सुरेश वर्मा",
    status: "रास्ते में",
    time: "11:45 AM",
  },
];

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">कुल ऑर्डर</p>
                  <h3 className="text-2xl font-bold mt-1">152</h3>
                  <p className="text-xs text-green-500 mt-1 flex items-center">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +12.5% पिछले महीने से
                  </p>
                </div>
                <div className="bg-blue-100 p-3 rounded-full">
                  <ShoppingCart className="w-6 h-6 text-blue-700" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">कुल उपयोगकर्ता</p>
                  <h3 className="text-2xl font-bold mt-1">84</h3>
                  <p className="text-xs text-green-500 mt-1 flex items-center">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +8.2% पिछले महीने से
                  </p>
                </div>
                <div className="bg-green-100 p-3 rounded-full">
                  <Users className="w-6 h-6 text-green-700" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">कुल उत्पाद</p>
                  <h3 className="text-2xl font-bold mt-1">324</h3>
                  <p className="text-xs text-green-500 mt-1 flex items-center">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +15.3% पिछले महीने से
                  </p>
                </div>
                <div className="bg-purple-100 p-3 rounded-full">
                  <Package className="w-6 h-6 text-purple-700" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">आज के ऑर्डर</p>
                  <h3 className="text-2xl font-bold mt-1">12</h3>
                  <p className="text-xs text-neutral-500 mt-1 flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    आज का अपडेट
                  </p>
                </div>
                <div className="bg-orange-100 p-3 rounded-full">
                  <Truck className="w-6 h-6 text-orange-700" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Orders */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>हाल के ऑर्डर</CardTitle>
            <Link to="/admin/orders">
              <Button variant="outline" size="sm">
                सभी देखें
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ऑर्डर आईडी</TableHead>
                  <TableHead>ग्राहक</TableHead>
                  <TableHead>दिनांक</TableHead>
                  <TableHead>आइटम</TableHead>
                  <TableHead>राशि</TableHead>
                  <TableHead>स्थिति</TableHead>
                  <TableHead className="text-right">एक्शन</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>{order.customer}</TableCell>
                    <TableCell>{order.date}</TableCell>
                    <TableCell>{order.items}</TableCell>
                    <TableCell>₹{order.total.toFixed(2)}</TableCell>
                    <TableCell>
                      <Badge
                        variant={order.status === "पूरा" ? "success" : "secondary"}
                        className={
                          order.status === "पूरा"
                            ? "bg-green-100 text-green-800"
                            : "bg-blue-100 text-blue-800"
                        }
                      >
                        {order.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Link to={`/admin/orders/${order.id}`}>
                        <Button variant="ghost" size="sm">
                          विवरण
                        </Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Low Stock Products */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>कम स्टॉक वाले उत्पाद</CardTitle>
              <Link to="/admin/products">
                <Button variant="outline" size="sm">
                  सभी देखें
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>उत्पाद</TableHead>
                    <TableHead>स्टॉक</TableHead>
                    <TableHead>श्रेणी</TableHead>
                    <TableHead className="text-right">एक्शन</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {lowStockProducts.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell className="font-medium">{product.name}</TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className="bg-red-100 text-red-800 border-red-200"
                        >
                          {product.stock}/{product.threshold}
                        </Badge>
                      </TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell className="text-right">
                        <Link to={`/admin/products/${product.id}`}>
                          <Button variant="ghost" size="sm">
                            स्टॉक अपडेट
                          </Button>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Active Deliveries */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>चल रही डिलीवरी</CardTitle>
              <Link to="/admin/delivery">
                <Button variant="outline" size="sm">
                  सभी देखें
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ऑर्डर</TableHead>
                    <TableHead>ग्राहक</TableHead>
                    <TableHead>राइडर</TableHead>
                    <TableHead>स्थिति</TableHead>
                    <TableHead className="text-right">ट्रैक</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {activeDeliveries.map((delivery) => (
                    <TableRow key={delivery.id}>
                      <TableCell className="font-medium">{delivery.order}</TableCell>
                      <TableCell>{delivery.customer}</TableCell>
                      <TableCell>{delivery.rider}</TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={`
                            ${
                              delivery.status === "पिकअप"
                                ? "bg-yellow-100 text-yellow-800 border-yellow-200"
                                : "bg-blue-100 text-blue-800 border-blue-200"
                            }
                          `}
                        >
                          {delivery.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Link to={`/admin/delivery/${delivery.id}`}>
                          <Button variant="ghost" size="sm">
                            ट्रैक
                          </Button>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
