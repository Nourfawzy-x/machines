import ProductsComponents from "@/components/productsComponent";
import React from "react";

const products = ({ r }) => {
  return <ProductsComponents {...r} />;
};
export default products;
export async function getStaticProps() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  /// console.log(data);
  return {
    props: {
      r: data,
    },
  };
}
