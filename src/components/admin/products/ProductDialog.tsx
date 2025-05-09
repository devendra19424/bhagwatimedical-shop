
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ProductForm } from "@/components/admin/products/ProductForm";
import { useLanguage } from "@/context/LanguageContext";
import { ProductFormData, Category } from "@/types/admin";

interface ProductDialogProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  formData: ProductFormData;
  setFormData: React.Dispatch<React.SetStateAction<ProductFormData>>;
  categories: Category[];
  handleSave: () => void;
  isEditing: boolean;
  resetForm: () => void;
  onImageUpload?: (file: File) => void;
}

export function ProductDialog({
  isOpen,
  setIsOpen,
  formData,
  setFormData,
  categories,
  handleSave,
  isEditing,
  resetForm,
  onImageUpload,
}: ProductDialogProps) {
  const { t } = useLanguage();

  const onCancel = () => {
    setIsOpen(false);
    resetForm();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>
            {isEditing ? t("editProduct") : t("addNewProduct")}
          </DialogTitle>
        </DialogHeader>
        <ProductForm
          formData={formData}
          setFormData={setFormData}
          categories={categories}
          isEditing={isEditing}
          onSave={handleSave}
          onCancel={onCancel}
          onImageUpload={onImageUpload}
        />
      </DialogContent>
    </Dialog>
  );
}
