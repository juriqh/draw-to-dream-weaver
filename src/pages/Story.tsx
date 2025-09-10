import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { 
  ArrowLeft, 
  Volume2, 
  VolumeX, 
  BookOpen, 
  Mic, 
  ArrowRight,
  Sparkles,
  Play,
  Pause
} from "lucide-react";
import { toast } from "sonner";
import storyAvatar from "@/assets/story-avatar.jpg";

const Story = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const uploadedImage = location.state?.image;
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentMode, setCurrentMode] = useState<'listen' | 'read'>('listen');
  const [isRecording, setIsRecording] = useState(false);

  // Sample story - in real app this would come from backend
  const story = {
    title: "The Magical Adventure",
    content: `Once upon a time, in a land filled with wonder and magic, there lived a brave little adventurer. Their colorful drawing came to life, and amazing creatures began to dance around them. 

    The sun painted golden stripes across the sky, and the flowers sang beautiful melodies. Every stroke of their crayon had created something extraordinary - a world where imagination knew no bounds.

    As they explored this magical realm, they discovered that their creativity had the power to bring joy to everyone they met. And they all lived happily ever after, knowing that every drawing holds the magic of infinite possibilities.`,
    audioUrl: null // In real app, this would be generated audio
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      toast.success("Playing your magical story! 🎵");
      // In real app, would start audio playback
    } else {
      toast("Story paused");
    }
  };

  const handleRecord = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      toast.success("Recording started! Tell us what you think 🎤");
      // In real app, would start recording
    } else {
      toast("Recording stopped. Great job!");
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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-muted/30 p-4">
        <div className="container mx-auto max-w-6xl flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="soft"
              size="icon"
              onClick={() => navigate("/upload")}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Your Story</h1>
              <p className="text-muted-foreground">Listen, read, and interact!</p>
            </div>
          </div>
          
          <Button
            variant="success"
            onClick={handleContinue}
          >
            Continue <ArrowRight className="ml-2 h-4 w-4" />
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
                  src={storyAvatar}
                  alt="Story Avatar"
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
              <div className="absolute -top-4 -right-4 animate-bounce-gentle">
                <div className="rounded-full bg-accent p-2 shadow-soft">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 animate-float">
                <div className="rounded-full bg-success p-2 shadow-soft">
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
                    <Pause className="mr-2 h-5 w-5" />
                    Pause
                  </>
                ) : (
                  <>
                    <Play className="mr-2 h-5 w-5" />
                    Play Story
                  </>
                )}
              </Button>

              <Button
                variant={currentMode === 'listen' ? 'primary' : 'soft'}
                size="lg"
                onClick={() => {
                  setCurrentMode('listen');
                  toast("Listening mode activated! 👂");
                }}
              >
                <Volume2 className="mr-2 h-5 w-5" />
                Listen
              </Button>

              <Button
                variant={currentMode === 'read' ? 'primary' : 'soft'}
                size="lg"
                onClick={() => {
                  setCurrentMode('read');
                  toast("Reading mode activated! 📖");
                }}
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Read
              </Button>

              <Button
                variant={isRecording ? "destructive" : "fun"}
                size="lg"
                onClick={handleRecord}
              >
                <Mic className={`mr-2 h-5 w-5 ${isRecording ? 'animate-pulse' : ''}`} />
                {isRecording ? 'Stop' : 'Record'}
              </Button>
            </div>
          </div>

          {/* Story Content */}
          <div className="flex flex-col">
            <div className="mb-6 rounded-3xl bg-card p-8 shadow-soft">
              <h2 className="mb-6 text-3xl font-bold text-center text-foreground animate-fade-in-up">
                {story.title}
              </h2>
              
              <div className={`transition-all duration-500 ${
                currentMode === 'read' ? 'text-lg leading-relaxed' : 'text-base'
              }`}>
                {currentMode === 'listen' && (
                  <div className="mb-4 text-center">
                    <div className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2">
                      <Volume2 className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">
                        {isPlaying ? 'Playing story...' : 'Ready to play'}
                      </span>
                    </div>
                  </div>
                )}
                
                <div className="space-y-4 text-foreground">
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
                <h3 className="mb-4 text-xl font-semibold text-foreground">
                  Your Amazing Drawing
                </h3>
                <img
                  src={uploadedImage}
                  alt="Your drawing"
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