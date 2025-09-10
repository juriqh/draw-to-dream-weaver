import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { 
  ArrowLeft, 
  Volume2, 
  BookOpen, 
  Mic, 
  ArrowRight,
  Sparkles,
  Play,
  Pause
} from "lucide-react";
import { toast } from "sonner";
import saudiStoryAvatar from "@/assets/saudi-story-avatar.jpg";

const Story = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const uploadedImage = location.state?.image;
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentMode, setCurrentMode] = useState<'listen' | 'read'>('listen');
  const [isRecording, setIsRecording] = useState(false);

  // Sample story in Arabic
  const story = {
    title: "المغامرة السحرية",
    content: `في يوم من الأيام، في أرض مليئة بالعجائب والسحر، كان يعيش مغامر صغير شجاع. رسمته الملونة انبعثت بالحياة، وبدأت مخلوقات مذهلة ترقص من حوله.

    رسمت الشمس خطوطاً ذهبية عبر السماء، وغنت الأزهار ألحاناً جميلة. كل ضربة من قلم الرصاص خلقت شيئاً استثنائياً - عالماً لا يعرف فيه الخيال حدوداً.

    وأثناء استكشافه لهذا العالم السحري، اكتشف أن إبداعه لديه القوة على إدخال الفرح لكل من يلتقي بهم. وعاشوا جميعاً في سعادة وهناء، عالمين أن كل رسمة تحمل سحر الإمكانيات اللانهائية.`,
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      toast.success("تشغيل قصتك السحرية! 🎵");
    } else {
      toast("تم إيقاف القصة");
    }
  };

  const handleRecord = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      toast.success("بدأ التسجيل! أخبرنا برأيك 🎤");
    } else {
      toast("توقف التسجيل. أحسنت!");
    }
  };

  const handleContinue = () => {
    navigate("/drawing-improvement", { 
      state: { 
        image: uploadedImage,
        story: story 
      } 
    });
  };

  return (
    <div className="min-h-screen bg-background font-arabic">
      {/* Header */}
      <div className="bg-muted/30 p-4">
        <div className="container mx-auto max-w-6xl flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="soft"
              size="icon"
              onClick={() => navigate("/upload")}
            >
              <ArrowLeft className="h-5 w-5 scale-x-[-1]" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-foreground font-amiri">قصتك</h1>
              <p className="text-muted-foreground">استمع، اقرأ، وتفاعل!</p>
            </div>
          </div>
          
          <Button
            variant="success"
            onClick={handleContinue}
          >
            <ArrowRight className="ml-2 h-4 w-4 scale-x-[-1]" />
            متابعة
          </Button>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl p-4">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Avatar Section */}
          <div className="flex flex-col items-center">
            <div className="relative mb-6">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-4 shadow-glow">
                <img
                  src={saudiStoryAvatar}
                  alt="راوي القصص"
                  className="h-80 w-80 object-cover rounded-2xl"
                />
                {isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-2xl">
                    <div className="animate-pulse-glow rounded-full bg-white/20 p-4">
                      <Sparkles className="h-8 w-8 text-white animate-spin" />
                    </div>
                  </div>
                )}
              </div>
              
              {/* Floating animation elements */}
              <div className="absolute -top-4 -left-4 animate-bounce-gentle">
                <div className="rounded-full bg-secondary p-2 shadow-warm">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 animate-float">
                <div className="rounded-full bg-accent p-2 shadow-warm">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>

            {/* Control Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant={isPlaying ? "destructive" : "playful"}
                size="lg"
                onClick={handlePlayPause}
                className="min-w-32"
              >
                {isPlaying ? (
                  <>
                    <Pause className="ml-2 h-5 w-5" />
                    إيقاف
                  </>
                ) : (
                  <>
                    <Play className="ml-2 h-5 w-5" />
                    تشغيل القصة
                  </>
                )}
              </Button>

              <Button
                variant={currentMode === 'listen' ? 'primary' : 'soft'}
                size="lg"
                onClick={() => {
                  setCurrentMode('listen');
                  toast("تم تفعيل وضع الاستماع! 👂");
                }}
              >
                <Volume2 className="ml-2 h-5 w-5" />
                استمع
              </Button>

              <Button
                variant={currentMode === 'read' ? 'primary' : 'soft'}
                size="lg"
                onClick={() => {
                  setCurrentMode('read');
                  toast("تم تفعيل وضع القراءة! 📖");
                }}
              >
                <BookOpen className="ml-2 h-5 w-5" />
                اقرأ
              </Button>

              <Button
                variant={isRecording ? "destructive" : "fun"}
                size="lg"
                onClick={handleRecord}
              >
                <Mic className={`ml-2 h-5 w-5 ${isRecording ? 'animate-pulse' : ''}`} />
                {isRecording ? 'توقف' : 'سجل'}
              </Button>
            </div>
          </div>

          {/* Story Content */}
          <div className="flex flex-col">
            <div className="mb-6 rounded-3xl bg-card p-8 shadow-warm">
              <h2 className="mb-6 text-3xl font-bold text-center text-foreground animate-fade-in-up font-amiri">
                {story.title}
              </h2>
              
              <div className={`transition-all duration-500 ${
                currentMode === 'read' ? 'text-lg leading-relaxed' : 'text-base leading-relaxed'
              }`}>
                {currentMode === 'listen' && (
                  <div className="mb-4 text-center">
                    <div className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2">
                      <Volume2 className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">
                        {isPlaying ? 'تشغيل القصة...' : 'جاهز للتشغيل'}
                      </span>
                    </div>
                  </div>
                )}
                
                <div className="space-y-4 text-foreground text-right">
                  {story.content.split('\n\n').map((paragraph, index) => (
                    <p 
                      key={index} 
                      className={`animate-fade-in-up ${
                        isPlaying && currentMode === 'listen' 
                          ? 'animate-pulse' 
                          : ''
                      }`}
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      {paragraph.trim()}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Uploaded Image Preview */}
            {uploadedImage && (
              <div className="rounded-3xl bg-muted/30 p-6">
                <h3 className="mb-4 text-xl font-semibold text-foreground font-amiri">
                  رسمتك المذهلة
                </h3>
                <img
                  src={uploadedImage}
                  alt="رسمتك"
                  className="w-full max-w-sm mx-auto rounded-2xl shadow-soft"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;