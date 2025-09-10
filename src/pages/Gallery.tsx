import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  Plus, 
  Heart, 
  Star, 
  Trophy,
  Download,
  Share2,
  Play
} from "lucide-react";
import { toast } from "sonner";

const Gallery = () => {
  const navigate = useNavigate();
  const [selectedStory, setSelectedStory] = useState<number | null>(null);

  // Sample gallery data with Saudi-themed stories
  const stories = [
    {
      id: 1,
      title: "قصر الأمير الصغير",
      thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop",
      date: "منذ يومين",
      likes: 12,
      plays: 25
    },
    {
      id: 2,
      title: "مغامرة في الواحة",
      thumbnail: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=300&fit=crop",
      date: "منذ أسبوع",
      likes: 8,
      plays: 18
    },
    {
      id: 3,
      title: "رحلة الجمل الذكي",
      thumbnail: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=300&h=300&fit=crop",
      date: "منذ أسبوعين",
      likes: 15,
      plays: 32
    },
    {
      id: 4,
      title: "سحر الصحراء",
      thumbnail: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop",
      date: "منذ ٣ أسابيع",
      likes: 20,
      plays: 45
    },
    {
      id: 5,
      title: "أصدقاء النخلة",
      thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=300&fit=crop",
      date: "منذ شهر",
      likes: 6,
      plays: 12
    },
    {
      id: 6,
      title: "حكاية المسجد الجميل",
      thumbnail: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=300&h=300&fit=crop",
      date: "منذ شهر",
      likes: 22,
      plays: 38
    }
  ];

  const achievements = [
    { 
      icon: <Star className="h-6 w-6" />, 
      title: "أول قصة", 
      description: "أنشأت قصتك السحرية الأولى!" 
    },
    { 
      icon: <Heart className="h-6 w-6" />, 
      title: "عاشق القصص", 
      description: "أنشأت ٥ قصص مذهلة!" 
    },
    { 
      icon: <Trophy className="h-6 w-6" />, 
      title: "فنان مبدع", 
      description: "حصلت قصصك على أكثر من ٥٠ إعجاب!" 
    }
  ];

  const handleStoryClick = (storyId: number) => {
    setSelectedStory(storyId);
    toast.success("تشغيل القصة! 🎵");
  };

  const handleShare = (storyId: number) => {
    toast.success("تم مشاركة القصة مع الأصدقاء! 📤");
  };

  const handleDownload = (storyId: number) => {
    toast.success("تم تحميل القصة! 📥");
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
              onClick={() => navigate("/")}
            >
              <ArrowLeft className="h-5 w-5 scale-x-[-1]" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-foreground font-amiri">معرض قصصي</h1>
              <p className="text-muted-foreground">جميع مغامراتك السحرية في مكان واحد!</p>
            </div>
          </div>
          
          <Button
            variant="playful"
            onClick={() => navigate("/upload")}
          >
            <Plus className="ml-2 h-4 w-4" />
            قصة جديدة
          </Button>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl p-4">
        {/* Achievements Section */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-foreground font-amiri">إنجازاتك 🏆</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group animate-fade-in-up rounded-2xl bg-gradient-success p-4 text-white shadow-warm hover:animate-scale-bounce"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-2 flex items-center gap-3">
                  <div className="rounded-full bg-white/20 p-2">
                    {achievement.icon}
                  </div>
                  <h3 className="font-semibold">{achievement.title}</h3>
                </div>
                <p className="text-sm opacity-90 text-right">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stories Grid */}
        <div className="mb-8">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground font-amiri">قصصك ({stories.length})</h2>
            <div className="text-sm text-muted-foreground">
              إجمالي المشاهدات: {stories.reduce((sum, story) => sum + story.plays, 0)}
            </div>
          </div>

          {stories.length === 0 ? (
            <div className="rounded-3xl bg-muted/30 p-12 text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-3xl bg-gradient-primary p-6 shadow-warm">
                  <Plus className="h-16 w-16 text-white" />
                </div>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-foreground font-amiri">لا توجد قصص بعد</h3>
              <p className="mb-6 text-muted-foreground">
                ارفع رسمتك الأولى وأنشئ قصة مذهلة!
              </p>
              <Button
                variant="magic"
                size="lg"
                onClick={() => navigate("/upload")}
              >
                أنشئ قصتك الأولى
              </Button>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {stories.map((story, index) => (
                <div
                  key={story.id}
                  className={`group animate-fade-in-up cursor-pointer rounded-3xl bg-card p-4 shadow-warm hover:shadow-primary transition-all duration-300 ${
                    selectedStory === story.id ? 'ring-2 ring-primary' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => handleStoryClick(story.id)}
                >
                  <div className="relative mb-4 overflow-hidden rounded-2xl">
                    <img
                      src={story.thumbnail}
                      alt={story.title}
                      className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="rounded-full bg-white/90 p-3">
                          <Play className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors text-right">
                    {story.title}
                  </h3>
                  
                  <p className="mb-3 text-sm text-muted-foreground text-right">{story.date}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4 text-destructive" />
                        <span>{story.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Play className="h-4 w-4 text-primary" />
                        <span>{story.plays}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleShare(story.id);
                        }}
                      >
                        <Share2 className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDownload(story.id);
                        }}
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Stats Section */}
        <div className="rounded-3xl bg-gradient-saudi p-8 text-center text-white shadow-glow">
          <h3 className="mb-4 text-3xl font-bold font-amiri">استمر في الإبداع! ✨</h3>
          <p className="mb-6 text-lg opacity-90 leading-relaxed">
            لقد أنشأت {stories.length} قصة مذهلة وألهمت الآخرين بإبداعك!
          </p>
          <div className="flex flex-wrap justify-center gap-8 mb-6">
            <div className="text-center">
              <div className="text-3xl font-bold">{stories.length}</div>
              <div className="text-sm opacity-75">قصص مُنشأة</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">{stories.reduce((sum, story) => sum + story.likes, 0)}</div>
              <div className="text-sm opacity-75">إجمالي الإعجابات</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">{stories.reduce((sum, story) => sum + story.plays, 0)}</div>
              <div className="text-sm opacity-75">مرات التشغيل</div>
            </div>
          </div>
          <Button
            variant="outline"
            size="lg"
            onClick={() => navigate("/upload")}
            className="bg-white/10 border-white/30 text-white hover:bg-white/20"
          >
            أنشئ تحفة أخرى
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;