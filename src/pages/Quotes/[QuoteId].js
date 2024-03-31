import QuotesComponent from "@/Components/QuoteComponent";
import QuoteDetails from "@/Components/QuoteDetails";

import React from "react";

const QuoteId = ({ quote }) => {
  return (
    <>
      <QuoteDetails {...quote} />
    </>
  );
};
export default QuoteId;
export async function getServerSideProps(context) {
  const { params } = context;
  const res = await fetch(`https://dummyjson.com/quotes/${params.QuoteId}`);
  const data = await res.json();
  return {
    props: {
      quote: data,
    },
  };
}
