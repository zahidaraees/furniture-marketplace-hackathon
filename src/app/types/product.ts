export interface Product {
  _id: string;
  title: string;
  description: string;  // ✅ Keep as string
  price: number;
  discountPercentage?: number;  // ✅ Correct field
  dicountPercentage?: number;   // ❌ Incorrect field but must be included
  isNew: boolean;
  tags: string[];

  productImage?: {
    asset: {
      _ref: string;
      _type: "image";
    };
  };
}
