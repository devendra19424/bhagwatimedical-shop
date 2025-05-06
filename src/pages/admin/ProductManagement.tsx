
import { useState } from "react";
import AdminLayout from "./AdminLayout";
import { ProductTable } from "@/components/admin/products/ProductTable";
import { ProductDialog } from "@/components/admin/products/ProductDialog";
import { ProductHeader } from "@/components/admin/products/ProductHeader";
import { useLanguage } from "@/context/LanguageContext";
import { initialProducts, categories, initialFormData } from "@/data/admin/productData";
import { Product } from "@/types/admin";

const ProductManagement = () => {
  const { t } = useLanguage();
  const [products, setProducts] = useState(initialProducts);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState({ ...initialFormData });
  
  const resetForm = () => {
    setFormData({ ...initialFormData });
    setEditingProduct(null);
  };
  
  // Delete product
  const handleDelete = (id: number) => {
    if (window.confirm(t("confirmDelete"))) {
      setProducts(products.filter((product) => product.id !== id));
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
      // Update existing
      setProducts(
        products.map((p) => (p.id === editingProduct.id ? newProduct : p))
      );
    } else {
      // Add new
      setProducts([...products, newProduct]);
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
        />
      </div>
    </AdminLayout>
  );
};

export default ProductManagement;
