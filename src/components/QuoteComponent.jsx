import Link from "next/link";
import React from "react";

const QuotesComponent = (props) => {
  console.log(props);
  const { quotes } = props;
  return (
    <>
      {quotes.map((q) => {
        return (
          <>
            <div key={q.id} className="container">
              <div className="row">
                <div className="col-md-5 bg-light my-4 py-3">
                  <p className="">
                    <span className="text-xl">quote:</span>
                    {q.quote}
                  </p>
                  <Link href={`/Quotes/${q.id}`} class="btn btn-dark">
                    see More....
                  </Link>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};
export default QuotesComponent;
