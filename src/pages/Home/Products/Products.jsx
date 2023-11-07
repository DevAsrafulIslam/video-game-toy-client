import { useEffect, useState } from "react";
import ProductCard from "./ProductsCart";

const Products = () => {
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="mt-[130px] text-center">
      <div className="text-center">
        <h4 className="text-[#FF3811] font-bold ">Popular Products</h4>
        <h2 className="text-[45px]  font-serif">Browse Our Products</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
      <div className=" mx-auto mb-[50px] items-center" >
        <button className="btn btn-outline text-[#FF3811] border-[#FF3811] mr-5">
          More Products
        </button>
      </div>
    </div>
  );
};

export default Products;
