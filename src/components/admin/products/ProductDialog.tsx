
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ProductForm } from "@/components/admin/products/ProductForm";
import { useLanguage } from "@/context/LanguageContext";
import { ProductFormData, Category } from "@/types/admin";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Tooltip, 
  TooltipContent, 
  TooltipTrigger 
} from "@/components/ui/tooltip";
import { InfoIcon } from "lucide-react";

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
      <DialogContent className="max-w-3xl max-h-[95vh]">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <DialogTitle>
              {isEditing ? t("editProduct") : t("addNewProduct")}
            </DialogTitle>
            <Tooltip>
              <TooltipTrigger asChild>
                <InfoIcon className="h-4 w-4 text-muted-foreground cursor-help" />
              </TooltipTrigger>
              <TooltipContent>
                <p>{isEditing ? t("editProductTooltip", "Edit product details") : t("addProductTooltip", "Add new product to inventory")}</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </DialogHeader>
        <ScrollArea className="h-[70vh] pr-4">
          <div className="pb-4">
            <ProductForm
              formData={formData}
              setFormData={setFormData}
              categories={categories}
              isEditing={isEditing}
              onSave={handleSave}
              onCancel={onCancel}
              onImageUpload={onImageUpload}
            />
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
