export type Category = {
  id: number;
  name: string;
};

export type Product = {
  name: string;
  category: Category;
};

export type ConvertedProduct = {
  product: Product;
};
