import React from "react";
import Link from "next/link";

const QuoteDetails = (props) => {
  console.log(props);
  const { quote } = props;
  console.log(quote);
  return (
    <>
      <div className="mx-8 container">
        <p>iD:{props.id}</p>
        <p>Author:{props.author}</p>
        <p> Quote:{props.quote}</p>
        <Link href={`/Quotes`} className="btn btn-danger">
          back
        </Link>
      </div>
    </>
  );
};
export default QuoteDetails;
