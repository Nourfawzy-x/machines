import React from "react";
import { useRouter } from "next/router";
const error = () => {
  return <div>data not-found</div>;
};
export default error;
error.getLayout = function pageLayout(page) {
  return <>{page}</>;
};
