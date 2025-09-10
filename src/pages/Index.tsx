import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Sparkles, Wand2, Heart, Star } from "lucide-react";
import saudiHeroBackground from "@/assets/saudi-hero-background.jpg";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background font-arabic">
      {/* Hero Section */}
      <section
        className="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat px-4"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1)), url(${saudiHeroBackground})`,
        }}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <div className="animate-fade-in-up">
            <div className="mb-8 flex justify-center space-x-reverse space-x-2">
              <Star className="h-8 w-8 animate-bounce-gentle text-warning" />
              <Sparkles className="h-10 w-10 animate-float text-primary" />
              <Heart className="h-8 w-8 animate-wiggle text-destructive" />
            </div>
            
            <h1 className="mb-6 text-5xl font-bold text-white md:text-7xl font-amiri">
              سحر
              <span className="bg-gradient-saudi bg-clip-text text-transparent"> الحكايات</span>
            </h1>
            
            <p className="mb-8 text-xl text-white/90 md:text-2xl leading-relaxed">
              حول رسومات طفلك إلى قصص مذهلة!
              <br />
              شاهد خياله ينبض بالحياة مع سحر الذكاء الاصطناعي ✨
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                variant="magic"
                size="xl"
                onClick={() => navigate("/upload")}
                className="group bg-gradient-saudi"
              >
                <Wand2 className="ml-2 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                ابدأ في إنشاء القصص!
              </Button>
              
              <Button
                variant="soft"
                size="lg"
                onClick={() => navigate("/gallery")}
              >
                عرض المعرض
              </Button>
            </div>
          </div>
        </div>

        {/* Floating decorative elements - traditional patterns */}
        <div className="absolute top-20 right-10 animate-float">
          <div className="h-6 w-6 bg-primary opacity-60 rounded-full"></div>
        </div>
        <div className="absolute top-40 left-20 animate-bounce-gentle">
          <div className="h-8 w-8 bg-secondary opacity-60 rounded-full"></div>
        </div>
        <div className="absolute bottom-20 right-20 animate-wiggle">
          <div className="h-5 w-5 bg-accent opacity-60 rounded-full"></div>
        </div>
        
        {/* Crescent moon decoration */}
        <div className="absolute top-32 left-1/4 animate-float">
          <div className="text-warning text-4xl opacity-70">☪️</div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30 bg-pattern-islamic">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-4xl font-bold text-foreground font-amiri">
            كيف يعمل التطبيق
          </h2>
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className="rounded-3xl bg-gradient-primary p-6 shadow-warm group-hover:animate-scale-bounce">
                  <Wand2 className="h-12 w-12 text-white" />
                </div>
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-foreground">١. ارفع الرسمة</h3>
              <p className="text-muted-foreground leading-relaxed">
                التقط صورة أو ارفع عمل طفلك الفني وشاهد السحر يبدأ!
              </p>
            </div>

            <div className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className="rounded-3xl bg-gradient-secondary p-6 shadow-warm group-hover:animate-scale-bounce">
                  <Sparkles className="h-12 w-12 text-white" />
                </div>
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-foreground">٢. الذكاء الاصطناعي ينشئ القصة</h3>
              <p className="text-muted-foreground leading-relaxed">
                راوي القصص الودود ينشئ مغامرة مذهلة مبنية على الرسمة!
              </p>
            </div>

            <div className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className="rounded-3xl bg-gradient-accent p-6 shadow-warm group-hover:animate-scale-bounce">
                  <Heart className="h-12 w-12 text-white" />
                </div>
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-foreground">٣. استمتعوا معاً</h3>
              <p className="text-muted-foreground leading-relaxed">
                استمع للقصة، اقرأ معاً، وحسن الرسمة بنصائح مفيدة!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;