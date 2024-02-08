import { IFormInput, IProduct } from "./interfaces";

export const productList: IProduct[] = [
  {
    title: "Product 1",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nam
        tempore commodi doloremque reiciendis ipsum expedita quis quasi
        voluptatem, obcaecati natus cupiditate veniam quos similique quas saepe
        aliquam dolor soluta.`,
    imageUrl:
      "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: "100",
    colors: ["red", "#ab8383", "pink"],
    category: {
      name: "Electronics",
      imageUrl:
        "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    },
  },
  {
    title: "Product 2",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nam
        tempore commodi doloremque reiciendis ipsum expedita quis quasi
        voluptatem, obcaecati natus cupiditate veniam quos similique quas saepe
        aliquam dolor soluta.`,
    imageUrl:
      "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: "200",
    colors: ["gray", "black", "blue"],
    category: {
      name: "Electronics",
      imageUrl:
        "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    title: "Product 2",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nam
        tempore commodi doloremque reiciendis ipsum expedita quis quasi
        voluptatem, obcaecati natus cupiditate veniam quos similique quas saepe
        aliquam dolor soluta.`,
    imageUrl:
      "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    price: "200",
    colors: ["#4b0246", "green", "#b0bf36"],
    category: {
      name: "Electronics",
      imageUrl:
        "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },

];

export const formInputList: IFormInput[] = [
  {
    id: "title",
    name: "title",
    type: "text",
    label: "Product Title",
  },
  {
    id: "description",
    name: "description",
    type: "text",
    label: "Product Description",
  },
  {
    id: "image",
    name: "imageUrl",
    type: "text",
    label: "Product Image Url",
  },
  {
    id: "price",
    name: "price",
    type: "text",
    label: "Product Price",
  },
];
export const Colors: string[] = [
  "#ab8383",
  "#1d585e",
  "#255e1d",
  "#5e1d1d",
  "#1d1d5e",
  "#1d5e1d",
  "#bf36b0",
  "#b0bf36",
  "#070d18",
  "#7e806f",
  "#4b0246",
];
