import React from "react";

const Page2 = ({ onRouteChange }) => {
  return (
    <>
      <button onClick={() => onRouteChange("page1")}>Page 1</button>
      <button className="disabled">Page 2</button>
      <button onClick={() => onRouteChange("page3")}>Page 3</button>
    </>
  );
};

export default Page2;
