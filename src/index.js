import React from "react";
import { createRoot } from "react-dom/client";
import TambolaCell from "./components/tambola-cell";

const App = () => {
  return (
    <div>
      <h1>Tambola Game!</h1>
      <TambolaCell />
      <br />
      <TambolaCell numberCalled />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
