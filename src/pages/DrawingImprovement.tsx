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

  // In a real app, this would be an AI-generated improved version
  const improvedImagePlaceholder = "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=400&h=400&fit=crop";

  const improvementTips = [
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Add More Colors",
      description: "Try using bright blues for the sky and greens for grass. Rainbow colors make everything more magical!",
      color: "bg-gradient-primary"
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Add Details",
      description: "Draw some clouds in the sky, flowers in the grass, or stars twinkling above. Small details bring drawings to life!",
      color: "bg-gradient-accent"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Create a Background",
      description: "Your character is amazing! Adding a background like a castle, forest, or playground would make it even more exciting.",
      color: "bg-gradient-success"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Add Friends",
      description: "Every hero needs friends! Try drawing other characters, animals, or magical creatures to join the adventure.",
      color: "bg-gradient-secondary"
    }
  ];

  const handleDownload = () => {
    toast.success("Downloading your improved drawing! 📥");
    // In a real app, would trigger download
  };

  const handleFinish = () => {
    navigate("/gallery");
    toast.success("Great job! Your story has been added to the gallery! 🎉");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-muted/30 p-4">
        <div className="container mx-auto max-w-6xl flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="soft"
              size="icon"
              onClick={() => navigate("/story")}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Improve Your Drawing</h1>
              <p className="text-muted-foreground">See how we can make it even more amazing!</p>
            </div>
          </div>
          
          <Button
            variant="success"
            onClick={handleFinish}
          >
            Finish <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl p-4">
        {/* Before and After Comparison */}
        <div className="mb-12 grid gap-8 lg:grid-cols-2">
          {/* Original Drawing */}
          <div className="text-center">
            <div className="mb-4 rounded-3xl bg-card p-6 shadow-soft">
              <h3 className="mb-4 text-2xl font-bold text-foreground">Your Original Drawing</h3>
              {originalImage ? (
                <img
                  src={originalImage}
                  alt="Original drawing"
                  className="mx-auto max-h-80 rounded-2xl object-contain shadow-soft"
                />
              ) : (
                <div className="flex h-80 items-center justify-center rounded-2xl bg-muted">
                  <p className="text-muted-foreground">No image available</p>
                </div>
              )}
              <div className="mt-4 flex justify-center">
                <div className="rounded-full bg-gradient-primary px-6 py-2">
                  <span className="text-sm font-semibold text-white">Amazing Start! ⭐</span>
                </div>
              </div>
            </div>
          </div>

          {/* AI Improved Version */}
          <div className="text-center">
            <div className="mb-4 rounded-3xl bg-card p-6 shadow-soft relative overflow-hidden">
              <div className="absolute top-4 right-4 animate-pulse-glow">
                <div className="rounded-full bg-gradient-accent p-2">
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
              </div>
              
              <h3 className="mb-4 text-2xl font-bold text-foreground">AI Enhanced Version</h3>
              <img
                src={improvedImagePlaceholder}
                alt="AI improved drawing"
                className="mx-auto max-h-80 rounded-2xl object-contain shadow-glow"
              />
              <div className="mt-4 flex justify-center gap-2">
                <Button variant="fun" size="sm" onClick={handleDownload}>
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Improvement Tips */}
        <div className="mb-8">
          <div className="mb-6 text-center">
            <h2 className="mb-2 text-3xl font-bold text-foreground">Tips to Make It Even Better!</h2>
            <p className="text-lg text-muted-foreground">
              Here are some fun ideas to improve your next drawing
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {improvementTips.map((tip, index) => (
              <div
                key={index}
                className="group animate-fade-in-up rounded-3xl bg-card p-6 shadow-soft hover:shadow-primary transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 flex items-center gap-4">
                  <div className={`rounded-2xl p-3 text-white shadow-soft group-hover:animate-bounce-gentle ${tip.color}`}>
                    {tip.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{tip.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Encouragement Section */}
        <div className="rounded-3xl bg-gradient-rainbow p-8 text-center text-white shadow-glow">
          <div className="mb-4 flex justify-center">
            <div className="animate-bounce-gentle">
              <Star className="h-16 w-16" />
            </div>
          </div>
          <h3 className="mb-4 text-3xl font-bold">You're an Amazing Artist! 🎨</h3>
          <p className="mb-6 text-lg opacity-90">
            Every drawing you create is special and unique. Keep practicing, keep dreaming, 
            and keep creating wonderful stories with your art!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate("/upload")}
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              Create Another Story
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleFinish}
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              <Heart className="mr-2 h-5 w-5" />
              Save to Gallery
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrawingImprovement;