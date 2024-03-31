import React from "react";
import Link from "next/link";

const ProductsComponents = (props) => {
  let { products } = props;
  // console.log({ products });
  return (
    <>
      <div className="container">
        <div className="row">
          <h1>products</h1>
          {products?.map((p) => {
            return (
              <div className="col-md-4 " key={p.id}>
                <div class="card">
                  <img src={p.thumbnail} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{p.title}</h5>
                    <p class="card-text">{p.description}</p>
                    <span>brand:{p.brand}</span>
                    <br />
                    <span>price:{p.price}</span>
                    <br />
                    <div className="py-5">
                      <Link href={`/products/${p.id}`} class="btn btn-dark">
                        see More....
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default ProductsComponents;
