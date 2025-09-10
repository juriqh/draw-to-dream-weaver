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
      toast.success("تم رفع الرسمة! جاهز لإنشاء القصة 🎨");
    } else {
      toast.error("يرجى اختيار ملف صورة");
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
      navigate("/story", { state: { image: preview } });
    }
  };

  return (
    <div className="min-h-screen bg-background p-4 font-arabic">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8 flex items-center gap-4">
          <Button
            variant="soft"
            size="icon"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="h-5 w-5 scale-x-[-1]" />
          </Button>
          <div>
            <h1 className="text-4xl font-bold text-foreground font-amiri">ارفع رسمتك</h1>
            <p className="text-lg text-muted-foreground">
              شارك عملك الفني المذهل ودعنا ننشئ قصة معاً!
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
                  alt="معاينة"
                  className="mx-auto mb-4 max-h-64 rounded-2xl object-contain shadow-soft"
                />
                <p className="text-lg font-semibold text-foreground">
                  رسمة رائعة! جاهز لإنشاء قصتك؟
                </p>
              </div>
            ) : (
              <div className="animate-fade-in-up">
                <div className="mb-6 flex justify-center">
                  <div className="rounded-3xl bg-gradient-primary p-6 shadow-warm">
                    <UploadIcon className="h-16 w-16 text-white animate-bounce-gentle" />
                  </div>
                </div>
                
                <h3 className="mb-4 text-2xl font-bold text-foreground font-amiri">
                  اسحب رسمتك هنا!
                </h3>
                <p className="mb-6 text-lg text-muted-foreground">
                  اسحب وأفلت صورتك، أو انقر للتصفح
                </p>

                <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                  <Button
                    variant="playful"
                    size="lg"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Image className="ml-2 h-5 w-5" />
                    اختر صورة
                  </Button>
                  
                  <Button
                    variant="fun"
                    size="lg"
                    onClick={() => {
                      toast("ميزة الكاميرا قريباً! 📷");
                    }}
                  >
                    <Camera className="ml-2 h-5 w-5" />
                    التقط صورة
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
              <Sparkles className="ml-2 h-6 w-6" />
              أنشئ قصتي!
            </Button>
            
            <Button
              variant="soft"
              size="lg"
              onClick={() => {
                setSelectedFile(null);
                setPreview(null);
              }}
            >
              اختر صورة مختلفة
            </Button>
          </div>
        )}

        {/* Tips */}
        <div className="mt-12 rounded-3xl bg-muted/50 p-8 bg-pattern-islamic">
          <h3 className="mb-4 text-2xl font-semibold text-foreground font-amiri">نصائح للحصول على أفضل النتائج:</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary"></span>
              تأكد من أن الرسمة مضاءة جيداً وواضحة
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-secondary"></span>
              أضف الكثير من التفاصيل الملونة - فهي تصنع أفضل القصص!
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent"></span>
              أي أسلوب رسم يعمل - من الرسوم البسيطة إلى التحف الفنية!
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Upload;