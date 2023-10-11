import React from "react";
import { Helmet } from "react-helmet";
import { Cell } from "./style";

const Tambolacell = (props) => {
  return (
    <Cell numberCalled={props.numberCalled}>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      12
    </Cell>
  );
};

export default Tambolacell;
