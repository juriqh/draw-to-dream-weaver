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

  // Sample gallery data - in real app this would come from backend
  const stories = [
    {
      id: 1,
      title: "The Dragon's Castle",
      thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop",
      date: "2 days ago",
      likes: 12,
      plays: 25
    },
    {
      id: 2,
      title: "Underwater Adventure",
      thumbnail: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=300&fit=crop",
      date: "1 week ago",
      likes: 8,
      plays: 18
    },
    {
      id: 3,
      title: "Space Explorer",
      thumbnail: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=300&h=300&fit=crop",
      date: "2 weeks ago",
      likes: 15,
      plays: 32
    },
    {
      id: 4,
      title: "Magic Forest",
      thumbnail: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop",
      date: "3 weeks ago",
      likes: 20,
      plays: 45
    },
    {
      id: 5,
      title: "Robot Friends",
      thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=300&fit=crop",
      date: "1 month ago",
      likes: 6,
      plays: 12
    },
    {
      id: 6,
      title: "Princess Palace",
      thumbnail: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=300&h=300&fit=crop",
      date: "1 month ago",
      likes: 22,
      plays: 38
    }
  ];

  const achievements = [
    { icon: <Star className="h-6 w-6" />, title: "First Story", description: "Created your first magical story!" },
    { icon: <Heart className="h-6 w-6" />, title: "Story Lover", description: "Created 5 amazing stories!" },
    { icon: <Trophy className="h-6 w-6" />, title: "Creative Artist", description: "Your stories got 50+ likes!" }
  ];

  const handleStoryClick = (storyId: number) => {
    setSelectedStory(storyId);
    toast.success("Playing story! 🎵");
  };

  const handleShare = (storyId: number) => {
    toast.success("Story shared with friends! 📤");
  };

  const handleDownload = (storyId: number) => {
    toast.success("Story downloaded! 📥");
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
              onClick={() => navigate("/")}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-foreground">My Story Gallery</h1>
              <p className="text-muted-foreground">All your magical adventures in one place!</p>
            </div>
          </div>
          
          <Button
            variant="playful"
            onClick={() => navigate("/upload")}
          >
            <Plus className="mr-2 h-4 w-4" />
            New Story
          </Button>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl p-4">
        {/* Achievements Section */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Your Achievements 🏆</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group animate-fade-in-up rounded-2xl bg-gradient-success p-4 text-white shadow-soft hover:animate-scale-bounce"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-2 flex items-center gap-3">
                  <div className="rounded-full bg-white/20 p-2">
                    {achievement.icon}
                  </div>
                  <h3 className="font-semibold">{achievement.title}</h3>
                </div>
                <p className="text-sm opacity-90">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stories Grid */}
        <div className="mb-8">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground">Your Stories ({stories.length})</h2>
            <div className="text-sm text-muted-foreground">
              Total plays: {stories.reduce((sum, story) => sum + story.plays, 0)}
            </div>
          </div>

          {stories.length === 0 ? (
            <div className="rounded-3xl bg-muted/30 p-12 text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-3xl bg-gradient-primary p-6 shadow-primary">
                  <Plus className="h-16 w-16 text-white" />
                </div>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-foreground">No Stories Yet</h3>
              <p className="mb-6 text-muted-foreground">
                Upload your first drawing and create an amazing story!
              </p>
              <Button
                variant="magic"
                size="lg"
                onClick={() => navigate("/upload")}
              >
                Create Your First Story
              </Button>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {stories.map((story, index) => (
                <div
                  key={story.id}
                  className={`group animate-fade-in-up cursor-pointer rounded-3xl bg-card p-4 shadow-soft hover:shadow-primary transition-all duration-300 ${
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

                  <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {story.title}
                  </h3>
                  
                  <p className="mb-3 text-sm text-muted-foreground">{story.date}</p>

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
        <div className="rounded-3xl bg-gradient-primary p-8 text-center text-white shadow-glow">
          <h3 className="mb-4 text-3xl font-bold">Keep Creating! ✨</h3>
          <p className="mb-6 text-lg opacity-90">
            You've created {stories.length} amazing stories and inspired others with your creativity!
          </p>
          <div className="flex flex-wrap justify-center gap-8 mb-6">
            <div className="text-center">
              <div className="text-3xl font-bold">{stories.length}</div>
              <div className="text-sm opacity-75">Stories Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">{stories.reduce((sum, story) => sum + story.likes, 0)}</div>
              <div className="text-sm opacity-75">Total Likes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">{stories.reduce((sum, story) => sum + story.plays, 0)}</div>
              <div className="text-sm opacity-75">Times Played</div>
            </div>
          </div>
          <Button
            variant="outline"
            size="lg"
            onClick={() => navigate("/upload")}
            className="bg-white/10 border-white/30 text-white hover:bg-white/20"
          >
            Create Another Masterpiece
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;