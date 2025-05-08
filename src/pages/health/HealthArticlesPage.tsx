
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Layout from "@/components/layout/Layout";
import { HealthArticle } from "@/types/common";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

// Sample health articles data
const healthArticlesData: HealthArticle[] = [
  {
    id: "1",
    title: "Understanding Blood Pressure Medications",
    description: "Learn about different types of blood pressure medications and how they work.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=500",
    category: "Medications",
    readTime: "5 min",
    date: "2023-04-15",
    views: 1250,
    likes: 45,
    content: "Blood pressure medications work in different ways to lower blood pressure by relaxing blood vessels, reducing heart rate, or removing excess fluid from the body. Common types include ACE inhibitors, ARBs, calcium channel blockers, diuretics, and beta-blockers. Each type has specific benefits and potential side effects that should be discussed with your doctor."
  },
  {
    id: "2",
    title: "Managing Diabetes Through Diet",
    description: "Tips for managing blood sugar levels through proper nutrition.",
    image: "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?auto=format&fit=crop&w=500",
    category: "Nutrition",
    readTime: "7 min",
    date: "2023-05-20",
    views: 2100,
    likes: 78,
    content: "Managing diabetes through diet involves focusing on consistent carbohydrate intake, choosing whole grains over refined carbs, eating plenty of non-starchy vegetables, controlling portion sizes, and maintaining a regular eating schedule. Monitoring blood glucose levels can help you understand how different foods affect your body."
  },
  {
    id: "3",
    title: "The Importance of Vitamin D",
    description: "Why vitamin D is crucial for your health and how to ensure you get enough.",
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=500",
    category: "Vitamins",
    readTime: "4 min",
    date: "2023-06-10",
    views: 1890,
    likes: 63,
    content: "Vitamin D is essential for bone health, immune function, and reducing inflammation. Your body produces it when your skin is exposed to sunlight, but many people don't get enough, especially during winter months or in areas with limited sun. Food sources include fatty fish, fortified milk, and egg yolks, but supplements may be necessary for optimal levels."
  },
  {
    id: "4",
    title: "Mental Health and Medication",
    description: "Understanding psychiatric medications and their role in mental health treatment.",
    image: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?auto=format&fit=crop&w=500",
    category: "Mental Health",
    readTime: "8 min",
    date: "2023-07-05",
    views: 3200,
    likes: 112,
    content: "Psychiatric medications play an important role in treating many mental health conditions. Common types include antidepressants, anti-anxiety medications, antipsychotics, mood stabilizers, and stimulants. These medications work by balancing brain chemicals called neurotransmitters that affect mood and emotions. They're most effective when used as part of a comprehensive treatment plan that may include therapy and lifestyle changes."
  },
  {
    id: "5",
    title: "Seasonal Allergies: Prevention and Treatment",
    description: "How to manage seasonal allergies with medications and lifestyle changes.",
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=500",
    category: "Allergies",
    readTime: "6 min",
    date: "2023-08-12",
    views: 1750,
    likes: 51,
    content: "Managing seasonal allergies involves both prevention and treatment strategies. Keeping windows closed during high pollen days, showering after being outdoors, and using air purifiers can help reduce exposure. Over-the-counter options like antihistamines, decongestants, and nasal sprays can provide relief, while prescription medications or immunotherapy may be recommended for severe cases."
  },
  {
    id: "6",
    title: "Understanding Antibiotics",
    description: "What you need to know about antibiotic use and antibiotic resistance.",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=500",
    category: "Medications",
    readTime: "5 min",
    date: "2023-09-20",
    views: 1980,
    likes: 67,
    content: "Antibiotics are powerful drugs that fight bacterial infections but are ineffective against viruses like colds or flu. Overuse and misuse of antibiotics contribute to antibiotic resistance, where bacteria evolve to withstand the drugs designed to kill them. To prevent this, always take antibiotics exactly as prescribed, never save them for later use, and never use someone else's prescription."
  }
];

const HealthArticlesPage = () => {
  const { t, lang } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  
  // Get unique categories from articles
  const categories = ["all", ...new Set(healthArticlesData.map(article => article.category))];
  
  // Filter articles based on search query and active category
  const filteredArticles = healthArticlesData.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         article.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "all" || article.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6">{t("healthArticles")}</h1>
        
        {/* Search bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="search"
            placeholder={lang === "en" ? "Search health articles..." : "स्वास्थ्य लेख खोजें..."}
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        {/* Categories tabs */}
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="mb-4 flex flex-wrap">
            {categories.map(category => (
              <TabsTrigger 
                key={category} 
                value={category}
                onClick={() => setActiveCategory(category)}
                className="capitalize"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        
        {/* Articles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.length > 0 ? (
            filteredArticles.map(article => (
              <Card key={article.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <Badge variant="outline" className="capitalize">
                      {article.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{article.readTime}</span>
                  </div>
                  <CardTitle className="line-clamp-2">{article.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{article.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3 text-sm text-muted-foreground">{article.content}</p>
                </CardContent>
                <CardFooter className="flex justify-between border-t pt-4">
                  <span className="text-sm text-muted-foreground">{article.date}</span>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                      {article.views}
                    </span>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                      {article.likes}
                    </span>
                  </div>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-lg font-medium">
                {lang === "en" ? "No articles found" : "कोई लेख नहीं मिला"}
              </p>
              <p className="text-muted-foreground">
                {lang === "en" ? "Try adjusting your search query or category filter" : "अपनी खोज क्वेरी या श्रेणी फिल्टर को समायोजित करने का प्रयास करें"}
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default HealthArticlesPage;
