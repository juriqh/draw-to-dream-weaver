import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Sparkles, Wand2, Heart, Star } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        className="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat px-4"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${heroBackground})`,
        }}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <div className="animate-fade-in-up">
            <div className="mb-8 flex justify-center space-x-2">
              <Star className="h-8 w-8 animate-bounce-gentle text-warning" />
              <Sparkles className="h-10 w-10 animate-float text-primary" />
              <Heart className="h-8 w-8 animate-wiggle text-destructive" />
            </div>
            
            <h1 className="mb-6 text-5xl font-extrabold text-white md:text-7xl">
              Story
              <span className="bg-gradient-rainbow bg-clip-text text-transparent"> Magic</span>
            </h1>
            
            <p className="mb-8 text-xl text-white/90 md:text-2xl">
              Turn your child's drawings into amazing stories! 
              <br />
              Watch their imagination come to life with AI magic ✨
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                variant="magic"
                size="xl"
                onClick={() => navigate("/upload")}
                className="group"
              >
                <Wand2 className="mr-2 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                Start Creating Stories!
              </Button>
              
              <Button
                variant="soft"
                size="lg"
                onClick={() => navigate("/gallery")}
              >
                View Gallery
              </Button>
            </div>
          </div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="h-4 w-4 rounded-full bg-primary opacity-60"></div>
        </div>
        <div className="absolute top-40 right-20 animate-bounce-gentle">
          <div className="h-6 w-6 rounded-full bg-accent opacity-60"></div>
        </div>
        <div className="absolute bottom-20 left-20 animate-wiggle">
          <div className="h-5 w-5 rounded-full bg-secondary opacity-60"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-4xl font-bold text-foreground">
            How It Works
          </h2>
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className="rounded-3xl bg-gradient-primary p-6 shadow-primary group-hover:animate-scale-bounce">
                  <Wand2 className="h-12 w-12 text-white" />
                </div>
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-foreground">1. Upload Drawing</h3>
              <p className="text-muted-foreground">
                Take a photo or upload your child's artwork and watch the magic begin!
              </p>
            </div>

            <div className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className="rounded-3xl bg-gradient-accent p-6 shadow-soft group-hover:animate-scale-bounce">
                  <Sparkles className="h-12 w-12 text-white" />
                </div>
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-foreground">2. AI Creates Story</h3>
              <p className="text-muted-foreground">
                Our friendly AI storyteller creates an amazing adventure based on the drawing!
              </p>
            </div>

            <div className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className="rounded-3xl bg-gradient-success p-6 shadow-soft group-hover:animate-scale-bounce">
                  <Heart className="h-12 w-12 text-white" />
                </div>
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-foreground">3. Enjoy Together</h3>
              <p className="text-muted-foreground">
                Listen to the story, read together, and improve the drawing with helpful tips!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;