// import { Colors } from "../data";
import { categoryList } from "../data";
import { ICategory, IProduct } from "../interfaces";
import { slicetxt } from "../utils/functions";
import Button from "./ui/Button";
import CircleColor from "./ui/CircleColor";

interface Iprops {
  product: IProduct;
  openModal: () => void;
  getDataofProduct: (product: IProduct) => void;
  openEditModal: () => void;
  idx: number;
  setProdutEditIdx: (idx: number) => void;
  setSelectedCategory: (category: ICategory) => void;
  products:IProduct[],
  setProducts:(products:IProduct[])=>void
}

const ProductCard = ({
  product,
  getDataofProduct,
  openEditModal,
  idx,
  setProdutEditIdx,
  setSelectedCategory,
  products,
  setProducts
}: Iprops) => {
  const handleEdit = () => {
    const category = categoryList.find(
      (el) => el.name == product.category.name
    );
    setSelectedCategory(category as ICategory);
    openEditModal();
    getDataofProduct(product);
    setProdutEditIdx(idx);
  };
  const handleDelete=()=>{
    const filterd=products.filter(productsOld=>productsOld.id!==product.id)
    console.log(filterd);
    
    setProducts(filterd)
  }

  // render
  const circleColor = product.colors.map((color) => (
    <CircleColor color={color} key={color} />
  ));
  return (
    <div className="border rounded-lg p-2 flex md:max-w-sm max-w-sm flex-col space-y-5">
      <img className="w-full" src={product.imageUrl} alt="error" />
      <h3 className="text-lg font-bold">{product.title}</h3>
      <p className="text-slate-600 overflow-hidden">{slicetxt(product.description, 90)}</p>
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
          className="bg-blue-200"
          onClick={() => {
            handleEdit();
          }}
        >
          Edit
        </Button>
        <Button className="bg-red-200 text-black" onClick={() => handleDelete()}>
          Delete
        </Button>
      </div>
    </div>
  );
};
export default ProductCard;
