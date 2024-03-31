import ProductDetails from "@/components/ProductDetails";
import React from "react";
import { useRouter } from "next/router";

const productId = ({ d }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>loading</h1>;
  }
  return <ProductDetails {...d} />;
};
export default productId;
export async function getStaticPaths() {
  return {
    paths: [
      { params: { productId: "1" } },
      { params: { productId: "2" } },
      { params: { productId: "3" } },
    ],
    fallback: "blocking",
  };
}
export async function getStaticProps(context) {
  let { params } = context;
  const res = await fetch(`https://dummyjson.com/products/${params.productId}`);
  const data = await res.json();
  return {
    props: {
      d: data,
    },
    revalidate: 10,
  };
}
