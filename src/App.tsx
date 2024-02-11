import ProductCard from "./component/ProductCard";
import Button from "./component/ui/Button";
import Input from "./component/ui/Input";
import Modal from "./component/ui/Modal";
import { Colors, categoryList, formInputList, productList } from "./data";
import { ChangeEvent, useState, FormEvent } from "react";
import { ICategory, IProduct, TProductName } from "./interfaces";
import { IProductError, productValidation } from "./validation";
import ErrorMessage from "./component/ui/ErrorMessage";
import CircleColor from "./component/ui/CircleColor";
import { generateRandomId } from "./utils/functions";
import Select from "./component/ui/Select";

function App() {
  // State

  const [products, setProducts] = useState<IProduct[]>(productList);

  const [isOpenProduct, setIsOpenProduct] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);

  const defaultProductObj = {
    title: "",
    description: "",
    imageUrl: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageUrl: "",
    },
  };

  const [product, setProduct] = useState<IProduct>(defaultProductObj);

  const [errorMessages, setErrorMessage] = useState<IProductError>({
    title: "",
    description: "",
    price: "",
    imageUrl: "",
    chosenColor: [],
  });

  const [selectedCategory, setSelectedCategory] = useState<ICategory>(
    categoryList[0]
  );

  const [productEdit, setProdutEdit] = useState<IProduct>(defaultProductObj);
  const [productEditIdx, setProdutEditIdx] = useState(0);

  // Handler
  const closeModalProduct = () => {
    setIsOpenProduct(false);
  };

  const openModalProduct = () => {
    setSelectedCategory(categoryList[0]);
    setIsOpenProduct(true);
  };
  
  // Handler
  const closeModalEdit = () => {
    setIsOpenEdit(false);
  };

  const openModalEdit = () => {
    setIsOpenEdit(true);
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
    setErrorMessage({ ...errorMessages, [e.target.name]: "" });
  };
  const onChangeEditHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setProdutEdit({
      ...productEdit,
      [e.target.name]: e.target.value,
    });
    setErrorMessage({ ...errorMessages, [e.target.name]: "" });
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const errorMessages = productValidation({
      title: product.title,
      description: product.description,
      price: product.price,
      imageUrl: product.imageUrl,
      chosenColor: product.colors,
    });
    setErrorMessage(errorMessages);
    const isErrorMessages =
      Object.values(errorMessages).some((value) => value === "") &&
      Object.values(errorMessages).every((value) => value === "");
    if (isErrorMessages) {
      // products.unshift(product);

      setProduct((prev) => {
        const prod = prev;
        prod.category = selectedCategory;
        return prod;
      });
      console.log(product);
      setProducts((prev) => [product, ...prev]);

      setProduct(defaultProductObj);
      closeModalProduct();
    }
    console.log(errorMessages);
  };
  const submitEditHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const errorMessages = productValidation({
      title: productEdit.title,
      description: productEdit.description,
      price: productEdit.price,
      imageUrl: productEdit.imageUrl,
      chosenColor: productEdit.colors,
    });
    setErrorMessage(errorMessages);
    const isErrorMessages =
      Object.values(errorMessages).some((value) => value === "") &&
      Object.values(errorMessages).every((value) => value === "");

    if (isErrorMessages) {
      const upatedProducts = [...products];
      setProdutEdit((prev) => {
        const prod = prev;
        prod.category = {
          name: selectedCategory.name,
          imageUrl: selectedCategory.imageUrl,
        };
        return prod;
      });
      upatedProducts[productEditIdx] = productEdit;

      setProducts(upatedProducts);
      setProdutEdit(defaultProductObj);

      closeModalEdit();
    }
    console.log(errorMessages);
  };

  const canselHandler = (e: FormEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    closeModalProduct();
    closeModalEdit();
    setProduct(defaultProductObj);
    setProdutEdit(defaultProductObj);
  };

  // const removeProductHandler=()=>{
  //   const filterd=products.filter(product=>product.id!==productEdit.id)
  //   console.log(productEdit.id);
    
  //   setProducts(filterd)
  
  // }
  // Render

  const renderProductList = products.map((product, idx) => (
    <ProductCard
      key={generateRandomId()}
      product={product}
      openModal={openModalProduct}
      getDataofProduct={setProdutEdit}
      openEditModal={openModalEdit}
      setProdutEditIdx={setProdutEditIdx}
      setSelectedCategory={setSelectedCategory}
      idx={idx}
      products={products}
      setProducts={setProducts}
    />
  ));
  const renderFormInput = formInputList.map((input) => (
    <div className="mb-1 flex flex-col" key={input.id}>
      <label className="font-medium" htmlFor={input.id}>
        {input.label}
      </label>
      <Input
        id={input.id}
        type={input.type}
        name={input.name}
        onChange={onChangeHandler}
        value={product[input.name]}
      />
      <ErrorMessage errorMessages={errorMessages[input.name]} />
    </div>
  ));

  const renderProductEdit = (id: string, label: string, name: TProductName) => {
    return (
      <div className="mb-1 flex flex-col" key={id}>
        <label className="font-medium" htmlFor={id}>
          {label}
        </label>
        <Input
          id={id}
          type="text"
          name={name}
          onChange={onChangeEditHandler}
          value={productEdit[name]}
        />
        <ErrorMessage errorMessages={errorMessages[name]} />
      </div>
    );
  };

  const circleColor = Colors.map((color) => (
    <CircleColor
      color={color}
      key={color}
      onClick={() => {
        setProduct((prevProduct) => {
          const updatedColors = prevProduct.colors.includes(color)
            ? prevProduct.colors.filter((c) => c !== color)
            : [...prevProduct.colors, color];
          return { ...prevProduct, colors: updatedColors };
        });
        setErrorMessage({ ...errorMessages, chosenColor: "" });
      }}
    />
  ));
  const circleEditColor = Colors.map((color) => (
    <CircleColor
      color={color}
      key={color}
      onClick={() => {
        setProdutEdit((prevProduct) => {
          const updatedColors = prevProduct.colors.includes(color)
            ? prevProduct.colors.filter((c) => c !== color)
            : [...prevProduct.colors, color];
          return { ...prevProduct, colors: updatedColors };
        });
        setErrorMessage({ ...errorMessages, chosenColor: "" });
      }}
    />
  ));

  const appearChosenColor = product.colors.map((color) => (
    <span
      className="rounded-md p-1 text-white text-xs"
      key={color}
      style={{ background: color }}
    >
      {color}
    </span>
  ));
  const appearEditColor = productEdit.colors.map((color) => (
    <span
      className="rounded-md p-1 text-white text-xs"
      key={color}
      style={{ background: color }}
    >
      {color}
    </span>
  ));

  return (
    <div className="container">
      <div className="m-5 flex md:flex-row flex-col gap-7 flex-wrap items-center">
        <Button
          className="bg-slate-300 text-2xl font-semibold mx-auto"
          onClick={() => openModalProduct()}
        >
          Add Product
        </Button>
        {renderProductList}

        {/* Product Modal */}
        <Modal isOpen={isOpenProduct} closeModal={closeModalProduct}>
          <h3 className="text-2xl font-semibold text-sky-950 text-center -mt-4 mb-1">
            Add Product
          </h3>
          <form onSubmit={submitHandler}>
            {renderFormInput}
            <Select
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
            <div className="flex items-center mb-3 flex-wrap gap-2 mt-3">
              {appearChosenColor}
            </div>
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              {circleColor}
            </div>
            <ErrorMessage errorMessages={errorMessages.chosenColor as string} />
            <div className="flex items-center space-x-4 mt-4">
              <Button type="submit" className="bg-slate-300">
                Submit
              </Button>
              <Button className="bg-blue-200" onClick={canselHandler}>
                Cansel
              </Button>
            </div>
          </form>
        </Modal>

        {/* Edit Modal */}

        <Modal isOpen={isOpenEdit} closeModal={closeModalEdit}>
          <h3 className="text-2xl font-semibold text-sky-950 text-center -mt-4 mb-1">
            Edit Product
          </h3>

          <form onSubmit={submitEditHandler}>
            {renderProductEdit("title", "Product Title", "title")}
            {renderProductEdit(
              "description",
              "Product Description",
              "description"
            )}
            {renderProductEdit("imageUrl", "Product Image Url", "imageUrl")}
            {renderProductEdit("price", "Product Price", "price")}
            <Select
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
            <div className="flex items-center mb-3 flex-wrap gap-2 mt-3">
              {appearEditColor}
            </div>
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              {circleEditColor}
            </div>
            <ErrorMessage errorMessages={errorMessages.chosenColor as string} />
            <div className="flex items-center space-x-4 mt-4">
              <Button type="submit" className="bg-blue-200 ">
                Submit
              </Button>
              <Button className="bg-slate-700 text-white" onClick={canselHandler}>
                Cansel
              </Button>
            </div>
          </form>
        </Modal>
      </div>
    </div>
  );
}

export default App;
