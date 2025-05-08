
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/hooks/use-toast";
import { Upload, X } from "lucide-react";

interface ReviewFormProps {
  productId: string;
  onClose: () => void;
}

const ReviewForm = ({ productId, onClose }: ReviewFormProps) => {
  const { t, lang } = useLanguage();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState<string>("5");
  const [images, setImages] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileList = Array.from(e.target.files);
      if (images.length + fileList.length > 5) {
        toast({
          title: lang === "en" ? "Maximum 5 images allowed" : "अधिकतम 5 छवियां अनुमत हैं",
          variant: "destructive"
        });
        return;
      }
      setImages([...images, ...fileList]);
    }
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: lang === "en" ? "Review submitted" : "समीक्षा सबमिट की गई",
        description: lang === "en" 
          ? "Thank you for your feedback!" 
          : "आपकी प्रतिक्रिया के लिए धन्यवाद!",
      });
      setIsSubmitting(false);
      onClose();
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        {/* Rating */}
        <div>
          <Label>{t("rating")}</Label>
          <RadioGroup 
            className="flex gap-4 mt-2" 
            defaultValue="5"
            onValueChange={setRating}
          >
            {[5, 4, 3, 2, 1].map(value => (
              <div key={value} className="flex items-center space-x-2">
                <RadioGroupItem value={value.toString()} id={`rating-${value}`} />
                <Label 
                  htmlFor={`rating-${value}`}
                  className="flex items-center gap-1 cursor-pointer"
                >
                  {value}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`h-4 w-4 ${parseInt(rating) >= value ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`}
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
        
        {/* Review Title */}
        <div>
          <Label htmlFor="review-title">
            {lang === "en" ? "Review Title" : "समीक्षा का शीर्षक"}
          </Label>
          <Input
            id="review-title"
            placeholder={lang === "en" ? "Summarize your experience" : "अपने अनुभव का सारांश दें"}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            maxLength={100}
            required
            className="mt-1"
          />
        </div>
        
        {/* Review Content */}
        <div>
          <Label htmlFor="review-content">
            {lang === "en" ? "Your Review" : "आपकी समीक्षा"}
          </Label>
          <Textarea
            id="review-content"
            placeholder={lang === "en" ? "Share your experience with this product" : "इस उत्पाद के साथ अपना अनुभव साझा करें"}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={5}
            required
            className="mt-1"
          />
        </div>
        
        {/* Image upload */}
        <div>
          <Label>{lang === "en" ? "Add Images (Optional)" : "छवियां जोड़ें (वैकल्पिक)"}</Label>
          <div className="mt-1 flex flex-wrap gap-2">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative w-20 h-20 rounded-md border bg-muted overflow-hidden group"
              >
                <img
                  src={URL.createObjectURL(image)}
                  alt={`Preview ${index}`}
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute top-0 right-0 bg-black/60 text-white p-1 rounded-bl-md opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            ))}
            
            {images.length < 5 && (
              <label className="w-20 h-20 rounded-md border border-dashed flex items-center justify-center cursor-pointer bg-muted/50 hover:bg-muted transition-colors">
                <div className="flex flex-col items-center justify-center text-xs text-muted-foreground">
                  <Upload className="h-4 w-4 mb-1" />
                  <span>{lang === "en" ? "Upload" : "अपलोड"}</span>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  multiple
                  className="hidden"
                />
              </label>
            )}
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            {lang === "en" ? "You can upload up to 5 images (Max 5MB each)" : "आप अधिकतम 5 छवियां अपलोड कर सकते हैं (प्रत्येक अधिकतम 5MB)"}
          </p>
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
          >
            {lang === "en" ? "Cancel" : "रद्द करें"}
          </Button>
          <Button
            type="submit"
            disabled={!title || !content || isSubmitting}
          >
            {isSubmitting 
              ? (lang === "en" ? "Submitting..." : "सबमिट कर रहा है...") 
              : (lang === "en" ? "Submit Review" : "समीक्षा सबमिट करें")}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ReviewForm;
