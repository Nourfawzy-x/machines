import React from "react";
import useSWR from "swr";
const getData = async () => {
  const res = await fetch(`http://localhost:4000/data`);
  const data = await res.json();
  return data[0];
};
const SwrComponent = () => {
  const { data, error } = useSWR("data", getData);
  if (error) return "error";
  if (!data) return "loading.....";
  return (
    <div className="container">
      <h5 className="my-2">id:{data.id}</h5>
      <h6 className="my-2">title:{data.title}</h6>
      <p className="my-2">body:{data.body}</p>
      <p className="my-2">userId:{data.userId}</p>
    </div>
  );
};
export default SwrComponent;
