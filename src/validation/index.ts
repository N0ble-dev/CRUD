/**
 * Validates the product object and returns any validation errors.
 *
 * @param {{ title: string; description: string; price: string; imageUrl: string; }} product - the product object to be validated
 * @return {{ title: string; description: string; price: string; imageUrl: string; }} the validation errors
 */

export interface IProductError {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  chosenColor:string|string[];
}
export const productValidation = (product: IProductError) => {
  const errors = {
    title: "",
    description: "",
    price: "",
    imageUrl: "",
chosenColor:"",
  };

  const validUrl = /\bhttps?:\/\/\S+?\.(?:png|jpe?g|gif|bmp)(?:\?.*?)?\b/.test(
    product.imageUrl
  );

  if (
    product.title.length < 5 ||
    product.title.length > 30 ||
    typeof product.title !== "string" ||
    !product.title.trim()
  ) {
    errors.title = "Product Title Must be betwean 5 and 30 characters";
  }
  if (
    product.description.length < 15 ||
    product.description.length > 700 ||
    typeof product.description !== "string" ||
    !product.description.trim()
  ) {
    errors.description =
      "Product Description Must be betwean 15 and 200 characters";
  }

  if (validUrl || !product.imageUrl.trim()) {
    errors.imageUrl = "Enter Valid ImageUrl";
  }

  if (isNaN(Number(product.price)) || !product.price.trim()) {
    errors.price = "Enter Valid Price";
  }
  if(product.chosenColor.length===0){
    errors.chosenColor="Please Choose Color"
  }

  return errors;
};
