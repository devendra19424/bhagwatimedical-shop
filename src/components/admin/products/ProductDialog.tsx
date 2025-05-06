
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ProductForm } from "./ProductForm";
import { useLanguage } from "@/context/LanguageContext";
import { Category, ProductFormData } from "@/types/admin";

interface ProductDialogProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  formData: ProductFormData;
  setFormData: React.Dispatch<React.SetStateAction<ProductFormData>>;
  categories: Category[];
  handleSave: () => void;
  isEditing: boolean;
  resetForm: () => void;
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
}: ProductDialogProps) {
  const { t } = useLanguage();

  const handleClose = () => {
    setIsOpen(false);
    resetForm();
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        setIsOpen(open);
        if (!open) {
          resetForm();
        }
      }}
    >
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {isEditing ? t("updateProduct") : t("addNewProduct")}
          </DialogTitle>
          <DialogDescription>
            {isEditing ? t("updateProductInfo") : t("addProductInfo")}
          </DialogDescription>
        </DialogHeader>

        <ProductForm
          formData={formData}
          setFormData={setFormData}
          categories={categories}
          isEditing={isEditing}
          onSave={handleSave}
          onCancel={handleClose}
        />
      </DialogContent>
    </Dialog>
  );
}
