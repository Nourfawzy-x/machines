import React, { useEffect, useState } from "react";

const DashboardComponent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dashBoardData, setDashBoardData] = useState(null);

  useEffect(() => {
    async function getData() {
      const res = await fetch("http://localhost:4000/data");
      const data = await res.json();
      console.log(data);
      setDashBoardData(data[0]);
      setIsLoading(false);
    }
    getData();
  }, []);
  if (isLoading) {
    return <h1>is loading</h1>;
  }
  return (
    <>
      <div className="container">
        <h1>dashboard component</h1>
        <p>id:{dashBoardData.id}</p>
        <p>title:{dashBoardData.title}</p>
      </div>
    </>
  );
};
export default DashboardComponent;
