
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronRight, Clock, Eye, Heart, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

interface Article {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  readTime: string;
  date: string;
  views: number;
  likes: number;
}

const articles: Article[] = [
  {
    id: "1",
    title: "Understanding Antibiotic Resistance",
    description: "How overuse of antibiotics leads to resistance and what we can do about it.",
    image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?q=80&w=2070&auto=format&fit=crop",
    category: "Medicine",
    readTime: "5 min",
    date: "2023-05-12",
    views: 1245,
    likes: 89,
  },
  {
    id: "2",
    title: "Natural Ways to Improve Immunity",
    description: "Boost your immune system with these natural tips and remedies.",
    image: "https://images.unsplash.com/photo-1494390248081-4e521a5940db?q=80&w=2006&auto=format&fit=crop",
    category: "Wellness",
    readTime: "7 min",
    date: "2023-05-10",
    views: 3210,
    likes: 167,
  },
  {
    id: "3",
    title: "Managing Diabetes: A Guide",
    description: "Comprehensive guide to manage diabetes and maintain a healthy lifestyle.",
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?q=80&w=1887&auto=format&fit=crop",
    category: "Health",
    readTime: "10 min",
    date: "2023-05-08",
    views: 2789,
    likes: 143,
  },
];

const HealthArticles = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            {t("healthArticles")}
          </h2>
          <p className="text-neutral-500 text-sm mt-1">Latest health tips and medical information</p>
        </div>
        
        <Button
          variant="outline"
          className="hidden md:flex items-center gap-1"
          size="sm"
        >
          View all <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {articles.map((article, index) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col overflow-hidden hover:border-primary/30 transition-all duration-300 group">
              <Link to={`/health/articles/${article.id}`} className="block overflow-hidden relative aspect-[16/9]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <Badge 
                  variant="secondary" 
                  className="absolute top-3 left-3 bg-white/90 text-primary"
                >
                  {article.category}
                </Badge>
              </Link>
              
              <CardHeader className="pb-2">
                <Link to={`/health/articles/${article.id}`}>
                  <CardTitle className="text-base md:text-lg hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </CardTitle>
                </Link>
                <div className="flex items-center gap-4 text-xs text-neutral-500">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {article.readTime}
                  </span>
                  <span>{new Date(article.date).toLocaleDateString()}</span>
                </div>
              </CardHeader>
              
              <CardContent className="pb-4">
                <p className="text-sm text-neutral-600 line-clamp-3">
                  {article.description}
                </p>
              </CardContent>
              
              <CardFooter className="pt-0 mt-auto">
                <div className="flex items-center justify-between w-full text-xs text-neutral-500">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Eye className="h-3 w-3" /> {article.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <Heart className="h-3 w-3" /> {article.likes}
                    </span>
                  </div>
                  <Link to={`/health/articles/${article.id}`} className="text-primary font-medium hover:underline">
                    Read more
                  </Link>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-6 flex justify-center md:hidden">
        <Button
          variant="outline"
          className="flex items-center gap-1"
          size="sm"
        >
          View all articles <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default HealthArticles;
