// import { Colors } from "../data";
import { IProduct } from "../interfaces";
import { slicetxt } from "../utils/functions";
import Button from "./ui/Button";
import CircleColor from "./ui/CircleColor";

interface Iprops {
  product: IProduct;
  openModal: () => void;
  getDataofProduct: (product: IProduct) => void;
  openEditModal: () => void;
  idx:number;
  setProdutEditIdx:(idx:number)=>void
}

const ProductCard = ({ product, getDataofProduct ,openEditModal,idx,setProdutEditIdx}: Iprops) => {
  const handleEdit = () => {
    console.log(product);
    openEditModal();
    getDataofProduct(product);
    setProdutEditIdx(idx)
  };


  // render
  const circleColor = product.colors.map((color) => (
    <CircleColor color={color} key={color} />
  ));
  return (
    <div className="border rounded-lg p-2 flex md:max-w-sm max-w-sm flex-col space-y-5">
      <img className="w-full" src={product.imageUrl} alt="error" />
      <h3 className="text-lg font-bold">{product.title}</h3>
      <p className="text-slate-600">{slicetxt(product.description, 100)}</p>
      <div className="flex items-center flex-wrap gap-2">{circleColor}</div>
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold">${product.price}</h3>
        <img
          className="w-12 h-12 rounded-full object-cover"
          src={product.category.imageUrl}
          alt="error"
        />
      </div>
      <div className="flex justify-center w-full space-x-5">
        <Button
          className="bg-slate-500"
          onClick={() => {
            handleEdit();
          }}
        >
          Edit
        </Button>
        <Button className="bg-blue-200" onClick={() =>console.log("k")}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};
export default ProductCard;
