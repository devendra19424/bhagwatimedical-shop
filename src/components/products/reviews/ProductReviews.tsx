
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, MessageSquare, ThumbsUp, Flag } from "lucide-react";
import ReviewForm from "./ReviewForm";

interface Review {
  id: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  date: string;
  title: string;
  title_hi?: string;
  content: string;
  content_hi?: string;
  helpful: number;
  isVerified: boolean;
  images?: string[];
}

interface ProductReviewsProps {
  productId: string;
  totalReviews?: number;
  averageRating?: number;
}

// Sample reviews data
const sampleReviews: Review[] = [
  {
    id: "r1",
    userName: "Rajesh Sharma",
    userAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    date: "2023-04-15",
    title: "Very effective medicine",
    title_hi: "बहुत प्रभावी दवा",
    content: "I've been using this medicine for my chronic condition and it's been very effective with minimal side effects. Highly recommended!",
    content_hi: "मैं अपनी पुरानी बीमारी के लिए इस दवा का उपयोग कर रहा हूं और यह न्यूनतम दुष्प्रभावों के साथ बहुत प्रभावी रही है। अत्यधिक अनुशंसित!",
    helpful: 12,
    isVerified: true
  },
  {
    id: "r2",
    userName: "Priya Patel",
    rating: 4,
    date: "2023-04-10",
    title: "Works as expected",
    title_hi: "जैसी उम्मीद थी वैसा काम करता है",
    content: "Good quality product. Relief was quick but the taste is a bit bitter. Overall satisfied with the purchase.",
    content_hi: "अच्छी गुणवत्ता वाला उत्पाद। राहत जल्दी मिली लेकिन स्वाद थोड़ा कड़वा है। कुल मिलाकर खरीदारी से संतुष्ट हूं।",
    helpful: 8,
    isVerified: true
  },
  {
    id: "r3",
    userName: "Amit Singh",
    userAvatar: "https://randomuser.me/api/portraits/men/44.jpg",
    rating: 3,
    date: "2023-03-25",
    title: "Decent but slow acting",
    title_hi: "ठीक है लेकिन धीमी गति से काम करता है",
    content: "It works eventually but takes longer than expected to show results. Packaging was good and delivery was prompt.",
    content_hi: "यह अंततः काम करती है लेकिन परिणाम दिखाने में अपेक्षा से अधिक समय लेती है। पैकेजिंग अच्छी थी और डिलीवरी तेज थी।",
    helpful: 5,
    isVerified: false
  },
  {
    id: "r4",
    userName: "Neha Gupta",
    userAvatar: "https://randomuser.me/api/portraits/women/67.jpg",
    rating: 5,
    date: "2023-02-18",
    title: "Best quality at this price",
    title_hi: "इस कीमत में सबसे अच्छी गुणवत्ता",
    content: "I've tried several brands but this one offers the best quality at this price point. No side effects so far and very effective for my condition.",
    content_hi: "मैंने कई ब्रांड आज़माए हैं लेकिन इस कीमत पर यह सबसे अच्छी गुणवत्ता प्रदान करता है। अब तक कोई दुष्प्रभाव नहीं हुआ है और मेरी स्थिति के लिए बहुत प्रभावी है।",
    helpful: 20,
    isVerified: true,
    images: [
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=200",
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=200"
    ]
  },
  {
    id: "r5",
    userName: "Vikram Desai",
    rating: 2,
    date: "2023-02-05",
    title: "Not as effective as claimed",
    title_hi: "जितना दावा किया गया है उतना प्रभावी नहीं है",
    content: "I didn't find this medicine very effective for my condition. Had to switch to another brand after a week of usage.",
    content_hi: "मुझे यह दवा अपनी स्थिति के लिए बहुत प्रभावी नहीं लगी। एक सप्ताह के उपयोग के बाद दूसरे ब्रांड पर स्विच करना पड़ा।",
    helpful: 3,
    isVerified: true
  }
];

const ProductReviews = ({ productId, totalReviews = sampleReviews.length, averageRating = 4.2 }: ProductReviewsProps) => {
  const { t, lang } = useLanguage();
  const [reviews, setReviews] = useState<Review[]>(sampleReviews);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [helpfulReviews, setHelpfulReviews] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<"recent" | "helpful">("recent");
  
  // Calculate ratings distribution
  const ratingCounts = reviews.reduce((acc: Record<number, number>, review) => {
    acc[review.rating] = (acc[review.rating] || 0) + 1;
    return acc;
  }, {});
  
  // Helper function to render stars
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star 
          key={i}
          className={`h-4 w-4 ${i <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
        />
      );
    }
    return stars;
  };
  
  const handleHelpfulClick = (reviewId: string) => {
    if (helpfulReviews.includes(reviewId)) return;
    
    setReviews(reviews.map(review => 
      review.id === reviewId 
        ? { ...review, helpful: review.helpful + 1 } 
        : review
    ));
    
    setHelpfulReviews([...helpfulReviews, reviewId]);
  };
  
  // Sort reviews
  const sortedReviews = [...reviews].sort((a, b) => {
    if (sortBy === "recent") {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    return b.helpful - a.helpful;
  });

  return (
    <div className="mt-8">
      <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">
            {t("reviews")} ({totalReviews})
          </h2>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex">
              {renderStars(Math.round(averageRating))}
            </div>
            <span className="text-lg font-medium">{averageRating.toFixed(1)}</span>
            <span className="text-muted-foreground">/ 5</span>
          </div>
          
          {/* Rating distribution */}
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map(rating => {
              const count = ratingCounts[rating] || 0;
              const percentage = totalReviews > 0 ? Math.round((count / totalReviews) * 100) : 0;
              
              return (
                <div key={rating} className="flex items-center gap-2">
                  <span className="text-sm w-3">{rating}</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  </div>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full max-w-[200px]">
                    <div 
                      className="h-full bg-yellow-400 rounded-full" 
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-muted-foreground w-8">{count}</span>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="flex flex-col gap-3">
          <Button onClick={() => setShowReviewForm(!showReviewForm)}>
            {lang === "en" ? "Write a Review" : "समीक्षा लिखें"}
          </Button>
          <div className="flex items-center gap-2">
            <span className="text-sm">{lang === "en" ? "Sort by:" : "क्रमबद्ध करें:"}</span>
            <Button 
              variant={sortBy === "recent" ? "default" : "outline"} 
              size="sm"
              onClick={() => setSortBy("recent")}
            >
              {lang === "en" ? "Recent" : "हाल ही का"}
            </Button>
            <Button 
              variant={sortBy === "helpful" ? "default" : "outline"} 
              size="sm"
              onClick={() => setSortBy("helpful")}
            >
              {lang === "en" ? "Most Helpful" : "सबसे उपयोगी"}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Review form */}
      {showReviewForm && (
        <Card className="mb-8 border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle>
              {lang === "en" ? "Write a Review" : "समीक्षा लिखें"}
            </CardTitle>
            <CardDescription>
              {lang === "en" ? "Share your experience with this product" : "इस उत्पाद के साथ अपना अनुभव साझा करें"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ReviewForm 
              productId={productId} 
              onClose={() => setShowReviewForm(false)} 
            />
          </CardContent>
        </Card>
      )}
      
      {/* Reviews list */}
      <div className="space-y-6">
        {sortedReviews.map(review => (
          <Card key={review.id} className="overflow-hidden">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage 
                      src={review.userAvatar} 
                      alt={review.userName} 
                    />
                    <AvatarFallback>
                      {review.userName.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{review.userName}</div>
                    <div className="text-xs text-muted-foreground">
                      {new Date(review.date).toLocaleDateString(lang === "en" ? "en-US" : "hi-IN")}
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  {review.isVerified && (
                    <Badge variant="outline" className="mr-2">
                      {t("verified")}
                    </Badge>
                  )}
                  <div className="flex">
                    {renderStars(review.rating)}
                  </div>
                </div>
              </div>
              <CardTitle className="text-lg mt-2">
                {lang === "en" ? review.title : (review.title_hi || review.title)}
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-3">
              <p className="text-muted-foreground">
                {lang === "en" ? review.content : (review.content_hi || review.content)}
              </p>
              
              {/* Review images */}
              {review.images && review.images.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {review.images.map((img, index) => (
                    <div 
                      key={index} 
                      className="w-20 h-20 rounded-md overflow-hidden border"
                    >
                      <img 
                        src={img} 
                        alt={`Review image ${index + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
            <CardFooter className="border-t pt-3 flex justify-between">
              <div className="flex items-center gap-4">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="flex items-center gap-1 text-xs h-8"
                  onClick={() => handleHelpfulClick(review.id)}
                  disabled={helpfulReviews.includes(review.id)}
                >
                  <ThumbsUp className="h-3 w-3" />
                  {lang === "en" ? "Helpful" : "उपयोगी"} ({review.helpful})
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="flex items-center gap-1 text-xs h-8"
                >
                  <MessageSquare className="h-3 w-3" />
                  {lang === "en" ? "Comment" : "टिप्पणी करें"}
                </Button>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                className="flex items-center gap-1 text-xs h-8"
              >
                <Flag className="h-3 w-3" />
                {lang === "en" ? "Report" : "रिपोर्ट करें"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductReviews;
