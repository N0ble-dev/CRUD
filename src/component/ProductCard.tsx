import { Iproduct } from "../data/interfaces";
import { slicetxt } from "../utils/functions";
import Button from "./ui/Button";

interface Iprops {
  product: Iproduct;
}

const ProductCard = ({ product }: Iprops) => {
  return (
    <div className="border rounded-md p-2 flex md:max-w-sm max-w-80 flex-col space-y-5">
      <img className="w-full" src={product.category.imageUrl} alt="error" />
      <h3 className="text-lg font-bold">{product.title}</h3>
      <p className="text-slate-600">{slicetxt(product.description,100)}</p>
      <div className="flex items-center space-x-2">
        <span className={`w-6 h-6 rounded-full cursor-pointer bg-red-600`}></span>
        <span className="w-6 h-6 rounded-full cursor-pointer bg-green-600"></span>
        <span className="w-6 h-6 rounded-full cursor-pointer bg-slate-950"></span>
      </div>
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold">${product.price}</h3>
        <img className="w-12 h-12 rounded-full object-cover" src={product.category.imageUrl} alt="error" />
      </div>
      <div className="flex justify-center w-full space-x-5">
        <Button className="bg-slate-900" onClick={() => console.log("hi")}>
          hi
        </Button>
        <Button className="bg-blue-900" onClick={() => console.log("hi")}>
          shit
        </Button>
      </div>
    </div>
  );
};
export default ProductCard;
