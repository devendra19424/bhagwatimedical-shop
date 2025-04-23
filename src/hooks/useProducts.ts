
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/context/LanguageContext";

export const useProducts = (categoryId?: string) => {
  const { lang } = useLanguage();

  return useQuery({
    queryKey: ["products", categoryId],
    queryFn: async () => {
      let query = supabase
        .from("products")
        .select(`
          *,
          product_categories (
            id,
            name_en,
            name_hi,
            slug
          )
        `);

      if (categoryId) {
        query = query.eq("category_id", categoryId);
      }

      const { data, error } = await query;

      if (error) {
        throw error;
      }

      return data.map((product) => ({
        ...product,
        name: product[`name_${lang}`],
        description: product[`description_${lang}`],
        category: {
          ...product.product_categories,
          name: product.product_categories[`name_${lang}`],
        },
      }));
    },
  });
};
