export type TProduct = {
  _id: string;
  title: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
  category: {
    ar: string;
    en: string;
  };
  price: {
    eg: number;
    ae: number;
    sa: number;
  };
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  availabilityStatus: string;
  reviews: [];
  returnPolicy: string;
  minimumOrderQuantity: number;
  images: string[];
  thumbnail: string;
  quantity?: number;
};
