type Category = "mobile" | "front" | "back" | "testing" | "styles" | "others";

export const techPriority: Record<Category, number> = {
  front: 1,
  styles: 2,
  mobile: 3,
  back: 4,
  testing: 5,
  others: 6,
};

export interface Technology {
  name: string;
  href: string;
  image: ImageMetadata;
  category: Category;
}


