import { useRouter } from "next/router";
import React from "react";

const ProductDetails = (props) => {
  const router = useRouter();
  let handleBack = () => {
    router.push("/products");
  };
  //console.log(props);
  let data = props;
  console.log(data.images[2]);
  return (
    <>
      <div className="container">
        <div className="d-flex  justify-content-center">
          <div className="w-50 bg-danger">
            <img src={data.thumbnail} className="w-100" />
          </div>
        </div>
        <div className="row mt-4 mb-2 justify-content-center">
          <div className="col-md-4 h-50">
            <div id="carouselExample" class="carousel slide">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={data.images[0]} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={data.images[1]} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={data.images[2]} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={data.images[3]} class="d-block w-100" alt="..." />
                </div>
              </div>
              <button
                class="carousel-control-prev bg-slate-600"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon bg-slate-600"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden bg-danger">Previous</span>
              </button>
              <button
                class="carousel-control-next bg-slate-600"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <p>{data.title}</p>
            <p>category:{data.category}</p>
            <p>rating:{data.rating}</p>
            <p>description:{data.description}</p>
            <p>price:{data.price}</p>
          </div>
        </div>
        <button className="btn btn-dark form-control" onClick={handleBack}>
          back
        </button>
      </div>
    </>
  );
};
export default ProductDetails;
