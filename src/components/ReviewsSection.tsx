import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface Review {
  id: string;
  companyName: string;
  rating: number;
}

export function ReviewsSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();
  const { toast } = useToast();
  const [reviews, setReviews] = useState<Review[]>([
    { id: "1", companyName: "DATOFFEE", rating: 5 },
    { id: "2", companyName: "TOURIXAA", rating: 5 },
  ]);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [selectedRating, setSelectedRating] = useState(0);
  const [companyName, setCompanyName] = useState("");

  const averageRating = reviews.length > 0 
    ? reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length 
    : 5;

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedRating === 0) {
      toast({
        title: "Please select a rating",
        variant: "destructive",
      });
      return;
    }
    if (!companyName.trim()) {
      toast({
        title: "Please enter your company name",
        variant: "destructive",
      });
      return;
    }

    const newReview: Review = {
      id: Date.now().toString(),
      companyName: companyName.trim(),
      rating: selectedRating,
    };

    setReviews([...reviews, newReview]);
    setSelectedRating(0);
    setCompanyName("");
    toast({
      title: "Thank you for your review!",
      description: "Your rating has been submitted.",
    });
  };

  return (
    <section ref={ref} className="py-24 relative">
      <div className="container mx-auto px-6">
        <div 
          className={`text-center space-y-4 mb-12 opacity-0 ${
            isVisible ? "animate-fade-in" : ""
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Client <span className="text-primary">Reviews</span>
          </h2>
          <div className="decorative-line w-24 mx-auto" />
        </div>

        {/* Average rating display */}
        <div 
          className={`text-center mb-12 opacity-0 ${
            isVisible ? "animate-fade-in" : ""
          }`}
          style={{ animationDelay: "0.2s" }}
        >
          <div className="flex items-center justify-center gap-1 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-8 h-8 ${
                  star <= Math.round(averageRating)
                    ? "text-primary fill-primary"
                    : "text-muted-foreground"
                }`}
              />
            ))}
          </div>
          <p className="text-lg text-foreground font-display">
            {averageRating.toFixed(1)} out of 5
          </p>
          <p className="text-muted-foreground">Trusted for originality and clarity</p>
        </div>

        {/* Recent reviews */}
        <div 
          className={`flex flex-wrap justify-center gap-4 mb-12 opacity-0 ${
            isVisible ? "animate-fade-in" : ""
          }`}
          style={{ animationDelay: "0.3s" }}
        >
          {reviews.slice(-6).map((review) => (
            <div 
              key={review.id}
              className="glass-card px-4 py-2 rounded-full flex items-center gap-2"
            >
              <span className="text-foreground text-sm font-medium">{review.companyName}</span>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-3 h-3 ${
                      star <= review.rating ? "text-primary fill-primary" : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Submit review form */}
        <form 
          onSubmit={handleSubmitReview}
          className={`max-w-md mx-auto glass-card p-6 rounded-lg space-y-6 opacity-0 ${
            isVisible ? "animate-scale-in" : ""
          }`}
          style={{ animationDelay: "0.4s" }}
        >
          <h3 className="text-lg font-display font-semibold text-center text-foreground">
            Rate Your Experience
          </h3>

          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onMouseEnter={() => setHoveredStar(star)}
                onMouseLeave={() => setHoveredStar(0)}
                onClick={() => setSelectedRating(star)}
                className="transition-transform hover:scale-110"
              >
                <Star
                  className={`w-10 h-10 transition-colors ${
                    star <= (hoveredStar || selectedRating)
                      ? "text-primary fill-primary"
                      : "text-muted-foreground"
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Company Name</Label>
            <Input
              id="company"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Your company name"
              className="bg-background/50"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Submit Review
          </Button>
        </form>
      </div>
    </section>
  );
}
