export interface Iproduct {
  id?: string | undefined;
  title: string;
  description: string;
  price: string;
  colors: string[];
  category: {
    name: string;
    imageUrl: string;
  };
}
