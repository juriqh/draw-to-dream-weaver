import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Upload as UploadIcon, Image, Camera, ArrowLeft, Sparkles } from "lucide-react";
import { toast } from "sonner";

const Upload = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileSelect = (file: File) => {
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
      toast.success("Drawing uploaded! Ready to create a story 🎨");
    } else {
      toast.error("Please select an image file");
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleCreateStory = () => {
    if (selectedFile) {
      // In a real app, you'd upload the file here
      navigate("/story", { state: { image: preview } });
    }
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8 flex items-center gap-4">
          <Button
            variant="soft"
            size="icon"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-4xl font-bold text-foreground">Upload Your Drawing</h1>
            <p className="text-lg text-muted-foreground">
              Share your amazing artwork and let's create a story together!
            </p>
          </div>
        </div>

        {/* Upload Area */}
        <div className="mb-8">
          <div
            className={`relative rounded-3xl border-4 border-dashed p-12 text-center transition-all duration-300 ${
              isDragging
                ? "border-primary bg-primary/10 scale-105"
                : "border-muted-foreground/30 hover:border-primary/50 hover:bg-muted/50"
            }`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
          >
            {preview ? (
              <div className="animate-fade-in-up">
                <img
                  src={preview}
                  alt="Preview"
                  className="mx-auto mb-4 max-h-64 rounded-2xl object-contain shadow-soft"
                />
                <p className="text-lg font-semibold text-foreground">
                  Amazing drawing! Ready to create your story?
                </p>
              </div>
            ) : (
              <div className="animate-fade-in-up">
                <div className="mb-6 flex justify-center">
                  <div className="rounded-3xl bg-gradient-primary p-6 shadow-primary">
                    <UploadIcon className="h-16 w-16 text-white animate-bounce-gentle" />
                  </div>
                </div>
                
                <h3 className="mb-4 text-2xl font-bold text-foreground">
                  Drop your drawing here!
                </h3>
                <p className="mb-6 text-lg text-muted-foreground">
                  Drag and drop your image, or click to browse
                </p>

                <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                  <Button
                    variant="playful"
                    size="lg"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Image className="mr-2 h-5 w-5" />
                    Choose Image
                  </Button>
                  
                  <Button
                    variant="fun"
                    size="lg"
                    onClick={() => {
                      // In a real app, you'd open camera
                      toast("Camera feature coming soon! 📷");
                    }}
                  >
                    <Camera className="mr-2 h-5 w-5" />
                    Take Photo
                  </Button>
                </div>
              </div>
            )}

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileInputChange}
              className="hidden"
            />
          </div>
        </div>

        {/* Action Buttons */}
        {preview && (
          <div className="animate-fade-in-up flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              variant="magic"
              size="xl"
              onClick={handleCreateStory}
            >
              <Sparkles className="mr-2 h-6 w-6" />
              Create My Story!
            </Button>
            
            <Button
              variant="soft"
              size="lg"
              onClick={() => {
                setSelectedFile(null);
                setPreview(null);
              }}
            >
              Choose Different Image
            </Button>
          </div>
        )}

        {/* Tips */}
        <div className="mt-12 rounded-3xl bg-muted/50 p-8">
          <h3 className="mb-4 text-2xl font-semibold text-foreground">Tips for Best Results:</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary"></span>
              Make sure the drawing is well-lit and clear
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent"></span>
              Include lots of colorful details - they make the best stories!
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-success"></span>
              Any drawing style works - from stick figures to masterpieces!
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Upload;