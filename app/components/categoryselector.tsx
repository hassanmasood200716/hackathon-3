"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Category, Product } from "@/sanity.types";
import { getProductsByCategory } from "@/sanity/lib/products/getProductsByCategory";

interface CategorySelectorProps {
  categories: Category[];
}

export function CategorySelectorComponent({ categories }: CategorySelectorProps) {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("");
  const [products, setProducts] = React.useState<Product[]>([]);
  const router = useRouter();

  const handleSelect = async (categoryId: string, slug: string | undefined) => {
    setSelectedCategory(categoryId);
    if (slug) {
      router.push(`/categories/${slug}`);
    }

    // Fetch products for the selected category
    try {
      const fetchedProducts = await getProductsByCategory(slug || "");
      setProducts(fetchedProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div className="p-4">
      {/* Category Selection */}
      <RadioGroup
        value={selectedCategory}
        onValueChange={async (newValue) => {
          const selectedCategory = categories.find((c) => c._id === newValue);
          await handleSelect(newValue, selectedCategory?.slug?.current);
        }}
      >
        {categories.map((category) => (
          <div key={category._id} className=" items-center space-x-2 w-1/5 flex gap-y-16   gap-4 ">
            <RadioGroupItem value={category._id} id={category._id} />
            <Label htmlFor={category._id}>{category.title}</Label>
          </div>
        ))}
      </RadioGroup>

    </div>
  );
}
