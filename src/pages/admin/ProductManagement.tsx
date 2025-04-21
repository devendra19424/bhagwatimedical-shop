
import { useState } from "react";
import AdminLayout from "./AdminLayout";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Package, Search, Plus, Edit, Trash } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Sample product data
const initialProducts = [
  {
    id: 1,
    name: "पैरासिटामोल",
    price: 25.99,
    stock: 45,
    category: "पेन किलर",
    description: "बुखार और दर्द निवारक टैबलेट",
  },
  {
    id: 2,
    name: "मल्टीविटामिन",
    price: 299.99,
    stock: 23,
    category: "विटामिन्स",
    description: "दैनिक पोषण सप्लीमेंट",
  },
  {
    id: 3,
    name: "डिजिटल थर्मामीटर",
    price: 399.99,
    stock: 15,
    category: "स्वास्थ्य उपकरण",
    description: "त्वरित और सटीक तापमान माप",
  },
  {
    id: 4,
    name: "हैंड सैनिटाइज़र",
    price: 149.99,
    stock: 32,
    category: "स्किन केयर",
    description: "99.9% जीवाणु नाशक",
  },
  {
    id: 5,
    name: "कफ सिरप",
    price: 99.99,
    stock: 18,
    category: "कफ और सर्दी",
    description: "खांसी निवारक सिरप",
  },
];

const categories = [
  { id: "pain-killers", name: "पेन किलर" },
  { id: "fever", name: "बुखार दवाइयां" },
  { id: "vitamins", name: "विटामिन्स" },
  { id: "devices", name: "स्वास्थ्य उपकरण" },
  { id: "skincare", name: "स्किन केयर" },
  { id: "cough-cold", name: "कफ और सर्दी" },
  { id: "diabetes", name: "डायबिटीज" },
  { id: "heart", name: "हृदय स्वास्थ्य" },
  { id: "nutrition", name: "पोषण" },
];

const ProductManagement = () => {
  const [products, setProducts] = useState(initialProducts);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<any>(null);
  
  // Form state for new/edit product
  const [formData, setFormData] = useState({
    id: 0,
    name: "",
    price: "",
    stock: "",
    category: "",
    description: "",
    imageUrl: "",
    usageInstructions: "",
    uses: "",
    sideEffects: "",
  });
  
  const resetForm = () => {
    setFormData({
      id: 0,
      name: "",
      price: "",
      stock: "",
      category: "",
      description: "",
      imageUrl: "",
      usageInstructions: "",
      uses: "",
      sideEffects: "",
    });
  };
  
  // Filter products based on search
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Delete product
  const handleDelete = (id: number) => {
    if (window.confirm("क्या आप वाकई इस उत्पाद को हटाना चाहते हैं?")) {
      setProducts(products.filter((product) => product.id !== id));
    }
  };
  
  // Edit product
  const handleEdit = (product: any) => {
    setEditingProduct(product);
    setFormData({
      id: product.id,
      name: product.name,
      price: product.price.toString(),
      stock: product.stock.toString(),
      category: product.category,
      description: product.description,
      imageUrl: product.imageUrl || "",
      usageInstructions: product.usageInstructions || "",
      uses: product.uses || "",
      sideEffects: product.sideEffects || "",
    });
    setIsAddDialogOpen(true);
  };
  
  // Save product (add or update)
  const handleSave = () => {
    const newProduct = {
      id: formData.id || Date.now(),
      name: formData.name,
      price: parseFloat(formData.price),
      stock: parseInt(formData.stock),
      category: formData.category,
      description: formData.description,
      imageUrl: formData.imageUrl,
      usageInstructions: formData.usageInstructions,
      uses: formData.uses,
      sideEffects: formData.sideEffects,
    };
    
    if (editingProduct) {
      // Update existing
      setProducts(
        products.map((p) => (p.id === editingProduct.id ? newProduct : p))
      );
    } else {
      // Add new
      setProducts([...products, newProduct]);
    }
    
    resetForm();
    setEditingProduct(null);
    setIsAddDialogOpen(false);
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <h1 className="text-2xl font-bold">उत्पाद प्रबंधन</h1>
          
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="relative flex-grow md:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                type="search"
                placeholder="उत्पाद खोजें..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Dialog
              open={isAddDialogOpen}
              onOpenChange={(open) => {
                setIsAddDialogOpen(open);
                if (!open) {
                  resetForm();
                  setEditingProduct(null);
                }
              }}
            >
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  नया उत्पाद
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>
                    {editingProduct ? "उत्पाद अपडेट करें" : "नया उत्पाद जोड़ें"}
                  </DialogTitle>
                  <DialogDescription>
                    {editingProduct
                      ? "इस उत्पाद की जानकारी अपडेट करें।"
                      : "अपने स्टोर में एक नया उत्पाद जोड़ें।"}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">उत्पाद का नाम</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category">श्रेणी</Label>
                      <Select
                        value={formData.category}
                        onValueChange={(value) =>
                          setFormData({ ...formData, category: value })
                        }
                      >
                        <SelectTrigger id="category">
                          <SelectValue placeholder="श्रेणी चुनें" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem
                              key={category.id}
                              value={category.name}
                            >
                              {category.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="price">मूल्य (₹)</Label>
                      <Input
                        id="price"
                        type="number"
                        value={formData.price}
                        onChange={(e) =>
                          setFormData({ ...formData, price: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="stock">स्टॉक मात्रा</Label>
                      <Input
                        id="stock"
                        type="number"
                        value={formData.stock}
                        onChange={(e) =>
                          setFormData({ ...formData, stock: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="description">विवरण</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({ ...formData, description: e.target.value })
                      }
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="imageUrl">इमेज URL</Label>
                    <Input
                      id="imageUrl"
                      type="url"
                      value={formData.imageUrl}
                      onChange={(e) =>
                        setFormData({ ...formData, imageUrl: e.target.value })
                      }
                      placeholder="उत्पाद की इमेज का URL"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="usageInstructions">उपयोग निर्देश</Label>
                    <Textarea
                      id="usageInstructions"
                      value={formData.usageInstructions}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          usageInstructions: e.target.value,
                        })
                      }
                      placeholder="खुराक और उपयोग के निर्देश"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="uses">उपयोग (अलग पंक्तियों में)</Label>
                    <Textarea
                      id="uses"
                      value={formData.uses}
                      onChange={(e) =>
                        setFormData({ ...formData, uses: e.target.value })
                      }
                      placeholder="उत्पाद के मुख्य उपयोग"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="sideEffects">साइड इफेक्ट्स (अलग पंक्तियों में)</Label>
                    <Textarea
                      id="sideEffects"
                      value={formData.sideEffects}
                      onChange={(e) =>
                        setFormData({ ...formData, sideEffects: e.target.value })
                      }
                      placeholder="संभावित साइड इफेक्ट्स"
                    />
                  </div>
                </div>
                
                <DialogFooter>
                  <Button type="button" variant="outline" onClick={() => {
                    resetForm();
                    setEditingProduct(null);
                    setIsAddDialogOpen(false);
                  }}>
                    रद्द करें
                  </Button>
                  <Button type="button" onClick={handleSave}>
                    {editingProduct ? "अपडेट करें" : "जोड़ें"}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>उत्पाद</TableHead>
                <TableHead>श्रेणी</TableHead>
                <TableHead className="text-right">मूल्य</TableHead>
                <TableHead className="text-right">स्टॉक</TableHead>
                <TableHead className="text-right">एक्शन</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center">
                          <Package className="h-5 w-5 text-gray-500" />
                        </div>
                        <div>
                          <div className="font-medium">{product.name}</div>
                          <div className="text-sm text-gray-500 line-clamp-1">
                            {product.description}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{product.category}</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      ₹{product.price.toFixed(2)}
                    </TableCell>
                    <TableCell className="text-right">
                      <Badge
                        variant={product.stock < 10 ? "destructive" : "success"}
                        className={
                          product.stock < 10
                            ? "bg-red-100 text-red-800"
                            : undefined
                        }
                      >
                        {product.stock}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleEdit(product)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-red-500"
                          onClick={() => handleDelete(product.id)}
                        >
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-6 text-gray-500">
                    कोई उत्पाद नहीं मिला
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default ProductManagement;
