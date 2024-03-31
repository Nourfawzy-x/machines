import QuotesComponent from "@/Components/QuoteComponent";

import React from "react";

const Quotes = ({ q }) => {
  return (
    <>
      <QuotesComponent {...q} />
    </>
  );
};
export default Quotes;
export async function getServerSideProps() {
  const res = await fetch("https://dummyjson.com/quotes");
  const data = await res.json();
  return {
    props: {
      q: data,
    },
  };
}
