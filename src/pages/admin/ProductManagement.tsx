
import { useState } from "react";
import AdminLayout from "./AdminLayout";
import { ProductTable } from "@/components/admin/products/ProductTable";
import { ProductDialog } from "@/components/admin/products/ProductDialog";
import { ProductHeader } from "@/components/admin/products/ProductHeader";
import { useLanguage } from "@/context/LanguageContext";
import { initialProducts, categories, initialFormData } from "@/data/admin/productData";
import { Product } from "@/types/admin";
import { toast } from "sonner";

const ProductManagement = () => {
  const { t } = useLanguage();
  const [products, setProducts] = useState(initialProducts);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState({ ...initialFormData });
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  
  const resetForm = () => {
    setFormData({ ...initialFormData });
    setEditingProduct(null);
    setUploadedImage(null);
  };
  
  const handleImageUpload = (file: File) => {
    setUploadedImage(file);
    
    // Create a temporary URL for preview
    const imageUrl = URL.createObjectURL(file);
    setFormData(prev => ({ ...prev, imageUrl }));
    
    toast.success(t("imageUploaded"), {
      description: file.name
    });
  };
  
  // Delete product
  const handleDelete = (id: number) => {
    if (window.confirm(t("confirmDelete"))) {
      setProducts(products.filter((product) => product.id !== id));
      toast.success(t("productDeleted"));
    }
  };
  
  // Edit product
  const handleEdit = (product: Product) => {
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
    // In a real application, we would upload the image to a server here
    // and get back a URL to store in the database
    
    const newProduct: Product = {
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
      // Update existing product - fix to properly update the products array
      setProducts(
        products.map((p) => (p.id === editingProduct.id ? newProduct : p))
      );
      toast.success(t("productUpdated"), {
        description: newProduct.name
      });
    } else {
      // Add new
      setProducts([...products, newProduct]);
      toast.success(t("productAdded"), {
        description: newProduct.name
      });
    }
    
    resetForm();
    setIsAddDialogOpen(false);
  };

  const openAddDialog = () => {
    resetForm();
    setIsAddDialogOpen(true);
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <ProductHeader 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          openAddDialog={openAddDialog}
        />

        <ProductTable 
          products={products}
          searchQuery={searchQuery}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
        
        <ProductDialog 
          isOpen={isAddDialogOpen}
          setIsOpen={setIsAddDialogOpen}
          formData={formData}
          setFormData={setFormData}
          categories={categories}
          handleSave={handleSave}
          isEditing={!!editingProduct}
          resetForm={resetForm}
          onImageUpload={handleImageUpload}
        />
      </div>
    </AdminLayout>
  );
};

export default ProductManagement;
