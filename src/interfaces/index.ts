export interface IProduct {
  id?: string | undefined;
  title: string;
  description: string;
  imageUrl: string;
  price: string;
  colors: string[];
  category: {
    name: string;
    imageUrl: string;
  };
}
export type TProductName="title"|"description"|"price"|"imageUrl";
export interface IFormInput {
  id: string;
  name: TProductName;
  type: string;
  label: string;
}
export interface ICategory{
id:string;
name:string;
imageUrl:string;
}
