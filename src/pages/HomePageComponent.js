import React from "react";
import { Helmet } from "react-helmet";

const HomePageComponent = () => {
  const title = () => (
    <Helmet>
      <title>This is my page</title>
    </Helmet>
  );

  const onClick = () => console.log("hey there");

  return (
    <>
      {title()}
      <p className="para">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, iure.
      </p>
      <button onClick={() => onClick()}>Console</button>
    </>
  );
};

export default HomePageComponent;
