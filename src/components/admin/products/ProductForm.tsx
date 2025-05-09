
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/context/LanguageContext";
import { ProductFormData, Category } from "@/types/admin";
import { Image, Upload } from "lucide-react";

interface ProductFormProps {
  formData: ProductFormData;
  setFormData: React.Dispatch<React.SetStateAction<ProductFormData>>;
  categories: Category[];
  isEditing: boolean;
  onSave: () => void;
  onCancel: () => void;
  onImageUpload?: (file: File) => void;
}

export function ProductForm({
  formData,
  setFormData,
  categories,
  isEditing,
  onSave,
  onCancel,
  onImageUpload,
}: ProductFormProps) {
  const { t } = useLanguage();
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  
  // Set preview image if there's an existing image URL
  useEffect(() => {
    if (formData.imageUrl) {
      setPreviewImage(formData.imageUrl);
    }
  }, [formData.imageUrl]);
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Update the preview image
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewImage(reader.result as string);
    };
    reader.readAsDataURL(file);
    
    // Call the upload handler
    if (onImageUpload) {
      onImageUpload(file);
    }
  };

  return (
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">{t("productName")}</Label>
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
          <Label htmlFor="category">{t("category")}</Label>
          <Select
            value={formData.category}
            onValueChange={(value) =>
              setFormData({ ...formData, category: value })
            }
          >
            <SelectTrigger id="category">
              <SelectValue placeholder={t("selectCategory")} />
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
          <Label htmlFor="price">{t("price")}</Label>
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
          <Label htmlFor="stock">{t("stockQuantity")}</Label>
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
        <Label>{t("productImage")}</Label>
        <div className="border border-dashed border-gray-300 rounded-lg p-4">
          {previewImage ? (
            <div className="flex flex-col items-center gap-4">
              <div className="relative w-40 h-40 overflow-hidden rounded-md">
                <img 
                  src={previewImage} 
                  alt="Product preview" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex gap-2">
                <Label 
                  htmlFor="image-upload" 
                  className="flex items-center gap-2 px-4 py-2 text-sm bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-md cursor-pointer"
                >
                  <Upload size={16} />
                  {t("changeImage")}
                </Label>
              </div>
            </div>
          ) : (
            <Label 
              htmlFor="image-upload" 
              className="flex flex-col items-center justify-center gap-2 h-40 cursor-pointer"
            >
              <Image className="h-10 w-10 text-gray-400" />
              <span className="text-sm text-gray-500">{t("uploadProductImage")}</span>
              <span className="text-xs text-gray-400">{t("dragAndDropOrClick")}</span>
            </Label>
          )}
          <Input
            id="image-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </div>
        <p className="text-xs text-muted-foreground mt-1">{t("recommendedImageSize")}</p>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="imageUrl">{t("imageUrl")}</Label>
        <Input
          id="imageUrl"
          type="url"
          value={formData.imageUrl}
          onChange={(e) =>
            setFormData({ ...formData, imageUrl: e.target.value })
          }
          placeholder={t("productImageUrl")}
        />
        <p className="text-xs text-muted-foreground">{t("orEnterImageUrl")}</p>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="description">{t("description")}</Label>
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
        <Label htmlFor="usageInstructions">{t("usageInstructions")}</Label>
        <Textarea
          id="usageInstructions"
          value={formData.usageInstructions}
          onChange={(e) =>
            setFormData({
              ...formData,
              usageInstructions: e.target.value,
            })
          }
          placeholder={t("dosageInstructions")}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="uses">{t("uses")}</Label>
        <Textarea
          id="uses"
          value={formData.uses}
          onChange={(e) =>
            setFormData({ ...formData, uses: e.target.value })
          }
          placeholder={t("mainUses")}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="sideEffects">{t("sideEffects")}</Label>
        <Textarea
          id="sideEffects"
          value={formData.sideEffects}
          onChange={(e) =>
            setFormData({ ...formData, sideEffects: e.target.value })
          }
          placeholder={t("potentialSideEffects")}
        />
      </div>

      <div className="flex justify-end gap-2 mt-4">
        <Button type="button" variant="outline" onClick={onCancel}>
          {t("cancel")}
        </Button>
        <Button type="button" onClick={onSave}>
          {isEditing ? t("update") : t("add")}
        </Button>
      </div>
    </div>
  );
}
