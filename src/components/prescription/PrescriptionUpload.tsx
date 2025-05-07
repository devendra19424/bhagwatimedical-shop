
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
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
import { Upload, Camera, FilePlus, FileText, X } from "lucide-react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { toast } from "@/components/ui/use-toast";
import { Progress } from "@/components/ui/progress";

const PrescriptionUpload = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const [files, setFiles] = useState<File[]>([]);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [isUploading, setIsUploading] = useState(false);
  
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const newFiles = Array.from(event.target.files);
      setFiles([...files, ...newFiles]);
    }
  };

  const handleRemoveFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleUpload = () => {
    if (files.length === 0) {
      toast({
        title: "No files selected",
        description: "Please select at least one prescription file to upload",
        variant: "destructive",
      });
      return;
    }

    // Simulate upload
    setIsUploading(true);
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setIsUploading(false);
        toast({
          title: "Upload Successful",
          description: "Your prescription has been uploaded successfully",
        });
        setFiles([]);
        setUploadProgress(0);
      }
    }, 300);
  };

  return (
    <Card className="w-full max-w-3xl mx-auto border border-neutral-200 shadow-sm">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-t-lg">
        <CardTitle className="text-center flex items-center justify-center gap-2 text-lg md:text-xl">
          <FilePlus className="h-5 w-5 text-primary" />
          {t("prescriptionUpload")}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6 px-4 md:px-6">
        <div className="mb-4 text-sm text-neutral-600 text-center max-w-xl mx-auto">
          Upload your prescription for quick medicine delivery. We accept JPG, PNG, and PDF files.
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          <div className="col-span-1">
            <div
              className="border-2 border-dashed border-neutral-200 rounded-lg p-6 text-center hover:border-primary/50 transition-colors h-full min-h-40 flex flex-col items-center justify-center cursor-pointer"
              onClick={() => document.getElementById("file-input")?.click()}
            >
              <Upload className="h-8 w-8 text-primary/60 mb-2" />
              <p className="text-sm font-medium mb-1">Drop your files here</p>
              <p className="text-xs text-neutral-500">or click to browse</p>
              <Input
                id="file-input"
                type="file"
                className="hidden"
                multiple
                accept="image/jpeg,image/png,application/pdf"
                onChange={handleFileChange}
              />
            </div>
          </div>
          
          <div className="col-span-1">
            <div className="bg-neutral-50 rounded-lg p-4 h-full min-h-40">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-medium">Selected Files</h4>
                {files.length > 0 && (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-7 text-xs"
                    onClick={() => setFiles([])}
                  >
                    Clear All
                  </Button>
                )}
              </div>
              
              <div className="space-y-2 max-h-32 overflow-y-auto">
                {files.length === 0 ? (
                  <div className="text-center py-8 text-neutral-400 text-sm">
                    No files selected
                  </div>
                ) : (
                  files.map((file, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center justify-between bg-white rounded p-2 text-xs"
                    >
                      <div className="flex items-center gap-2 overflow-hidden">
                        <FileText className="h-4 w-4 text-primary/70 flex-shrink-0" />
                        <span className="truncate">{file.name}</span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0 rounded-full"
                        onClick={() => handleRemoveFile(index)}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </motion.div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
        
        {isUploading && (
          <div className="mt-4">
            <div className="flex justify-between text-xs mb-1">
              <span>Uploading...</span>
              <span>{uploadProgress}%</span>
            </div>
            <Progress value={uploadProgress} className="h-2" />
          </div>
        )}
        
        <div className="mt-6 flex gap-2 items-center justify-center md:justify-end">
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                className="gap-1 text-xs sm:text-sm"
                disabled={isUploading}
              >
                <Camera className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>Take Photo</span>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Take a photo of your prescription</DialogTitle>
                <DialogDescription>
                  Allow camera access to take a photo of your prescription
                </DialogDescription>
              </DialogHeader>
              <div className="bg-neutral-100 aspect-video rounded-md flex items-center justify-center">
                <Camera className="h-12 w-12 text-neutral-400" />
              </div>
              <DialogFooter>
                <Button variant="outline">Cancel</Button>
                <Button>Capture</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          
          <Button 
            className="gap-1 text-xs sm:text-sm"
            onClick={handleUpload}
            disabled={isUploading}
          >
            <Upload className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>Upload</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PrescriptionUpload;
