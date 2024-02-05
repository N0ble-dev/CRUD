import ProductCard from "./component/ProductCard";
import { productList } from "./data";

function App() {
  const renderProductList= productList.map((product)=><ProductCard key={product.id} product={product}/>
  )
  return (
    <div className="container">
      <div className="m-5 flex md:flex-row flex-col gap-7 flex-wrap items-center">
          {renderProductList}
      </div>
    </div>
  );
}

export default App;
