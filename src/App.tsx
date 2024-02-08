import ProductCard from "./component/ProductCard";
import Button from "./component/ui/Button";
import Input from "./component/ui/Input";
import Modal from "./component/ui/Modal";
import { Colors, formInputList, productList } from "./data";
import { ChangeEvent, useState, FormEvent } from "react";
import { IProduct } from "./data/interfaces";
import { IProductError, productValidation } from "./validation/inde";
import ErrorMessage from "./component/ui/ErrorMessage";
import CircleColor from "./component/ui/CircleColor";

function App() {
  // State
  const [isOpen, setIsOpen] = useState(false);

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
  });

  // Handler
  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
    setErrorMessage({ ...errorMessages, [e.target.name]: "" });
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const errorMessages = productValidation({
      title: product.title,
      description: product.description,
      price: product.price,
      imageUrl: product.imageUrl,
    });
    console.log(errorMessages);
    setErrorMessage(errorMessages);
    const isErrorMessages =
      Object.values(errorMessages).some((value) => value === "") &&
      Object.values(errorMessages).every((value) => value === "");
      if (isErrorMessages) {
        closeModal();
      }
  };

  const canselHandler = (e: FormEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    closeModal();
    setProduct(defaultProductObj);
  };
  // Render

  const renderProductList = productList.map((product) => (
    <ProductCard key={product.id} product={product} openModal={openModal} />
  ));
  const renderFormInput = formInputList.map((input) => (
    <div className="mb-2 flex flex-col" key={input.id}>
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
      }}
    />
  ));

  const appearChosenColor = product.colors.map((color) => (
<span className="rounded-md p-1 text-white text-xs" key={color} style={{background:color}}>{color}</span>
  ));

  return (
    <div className="container">
      <div className="m-5 flex md:flex-row flex-col gap-7 flex-wrap items-center">
        <Button
          className="bg-slate-300 text-2xl font-semibold"
          onClick={() => openModal()}
        >
          Add Product
        </Button>
        {renderProductList}
        <Modal isOpen={isOpen} closeModal={closeModal}>
          <form onSubmit={submitHandler}>
            {renderFormInput}
        <div className="flex items-center mb-3 flex-wrap gap-2">
              {appearChosenColor}
            </div>
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              {circleColor}
            </div>
            <div className="flex items-center space-x-4">
              <Button type="submit" className="bg-slate-300">
                Submit
              </Button>
              <Button className="bg-blue-200" onClick={canselHandler}>
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
