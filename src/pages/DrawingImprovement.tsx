import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  Lightbulb, 
  Palette, 
  Star,
  Download,
  Heart
} from "lucide-react";
import { toast } from "sonner";

const DrawingImprovement = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { image: originalImage } = location.state || {};
  
  const [showTips, setShowTips] = useState(true);

  // Placeholder for improved image
  const improvedImagePlaceholder = "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=400&h=400&fit=crop";

  const improvementTips = [
    {
      icon: <Palette className="h-6 w-6" />,
      title: "أضف المزيد من الألوان",
      description: "جرب استخدام الأزرق الزاهي للسماء والأخضر للعشب. الألوان الزاهية تجعل كل شيء أكثر سحراً!",
      color: "bg-gradient-primary"
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "أضف التفاصيل",
      description: "ارسم بعض الغيوم في السماء، أو الأزهار في العشب، أو النجوم المتلألئة في الأعلى. التفاصيل الصغيرة تحيي الرسوم!",
      color: "bg-gradient-secondary"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "اصنع خلفية جميلة",
      description: "شخصيتك رائعة! إضافة خلفية مثل قصر، أو واحة، أو مسجد جميل ستجعلها أكثر إثارة.",
      color: "bg-gradient-accent"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "أضف أصدقاء",
      description: "كل بطل يحتاج أصدقاء! جرب رسم شخصيات أخرى، أو حيوانات، أو مخلوقات سحرية للانضمام للمغامرة.",
      color: "bg-gradient-success"
    }
  ];

  const handleDownload = () => {
    toast.success("تحميل رسمتك المحسنة! 📥");
  };

  const handleFinish = () => {
    navigate("/gallery");
    toast.success("أحسنت! تم إضافة قصتك للمعرض! 🎉");
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
              onClick={() => navigate("/story")}
            >
              <ArrowLeft className="h-5 w-5 scale-x-[-1]" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-foreground font-amiri">حسن رسمتك</h1>
              <p className="text-muted-foreground">شاهد كيف يمكننا جعلها أكثر روعة!</p>
            </div>
          </div>
          
          <Button
            variant="success"
            onClick={handleFinish}
          >
            <ArrowRight className="ml-2 h-4 w-4 scale-x-[-1]" />
            إنهاء
          </Button>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl p-4">
        {/* Before and After Comparison */}
        <div className="mb-12 grid gap-8 lg:grid-cols-2">
          {/* Original Drawing */}
          <div className="text-center">
            <div className="mb-4 rounded-3xl bg-card p-6 shadow-warm">
              <h3 className="mb-4 text-2xl font-bold text-foreground font-amiri">رسمتك الأصلية</h3>
              {originalImage ? (
                <img
                  src={originalImage}
                  alt="الرسمة الأصلية"
                  className="mx-auto max-h-80 rounded-2xl object-contain shadow-soft"
                />
              ) : (
                <div className="flex h-80 items-center justify-center rounded-2xl bg-muted">
                  <p className="text-muted-foreground">لا توجد صورة متاحة</p>
                </div>
              )}
              <div className="mt-4 flex justify-center">
                <div className="rounded-full bg-gradient-primary px-6 py-2">
                  <span className="text-sm font-semibold text-white">بداية رائعة! ⭐</span>
                </div>
              </div>
            </div>
          </div>

          {/* AI Improved Version */}
          <div className="text-center">
            <div className="mb-4 rounded-3xl bg-card p-6 shadow-warm relative overflow-hidden">
              <div className="absolute top-4 left-4 animate-pulse-glow">
                <div className="rounded-full bg-gradient-secondary p-2">
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
              </div>
              
              <h3 className="mb-4 text-2xl font-bold text-foreground font-amiri">النسخة المحسنة بالذكاء الاصطناعي</h3>
              <img
                src={improvedImagePlaceholder}
                alt="الرسمة المحسنة"
                className="mx-auto max-h-80 rounded-2xl object-contain shadow-glow"
              />
              <div className="mt-4 flex justify-center gap-2">
                <Button variant="fun" size="sm" onClick={handleDownload}>
                  <Download className="ml-2 h-4 w-4" />
                  تحميل
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Improvement Tips */}
        <div className="mb-8">
          <div className="mb-6 text-center">
            <h2 className="mb-2 text-3xl font-bold text-foreground font-amiri">نصائح لجعلها أفضل!</h2>
            <p className="text-lg text-muted-foreground">
              إليك بعض الأفكار الممتعة لتحسين رسمتك القادمة
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {improvementTips.map((tip, index) => (
              <div
                key={index}
                className="group animate-fade-in-up rounded-3xl bg-card p-6 shadow-warm hover:shadow-primary transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 flex items-center gap-4">
                  <div className={`rounded-2xl p-3 text-white shadow-soft group-hover:animate-bounce-gentle ${tip.color}`}>
                    {tip.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{tip.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-right">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Encouragement Section */}
        <div className="rounded-3xl bg-gradient-saudi p-8 text-center text-white shadow-glow">
          <div className="mb-4 flex justify-center">
            <div className="animate-bounce-gentle">
              <Star className="h-16 w-16" />
            </div>
          </div>
          <h3 className="mb-4 text-3xl font-bold font-amiri">أنت فنان مبدع! 🎨</h3>
          <p className="mb-6 text-lg opacity-90 leading-relaxed">
            كل رسمة تبدعها مميزة وفريدة. استمر في الممارسة، واستمر في الحلم، 
            واستمر في إنشاء قصص رائعة بفنك!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate("/upload")}
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              أنشئ قصة أخرى
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleFinish}
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              <Heart className="ml-2 h-5 w-5" />
              احفظ في المعرض
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrawingImprovement;