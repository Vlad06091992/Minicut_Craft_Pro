import React from "react";
import "./index.css";
import App from "./App";
import {observer} from "mobx-react";
import {createRoot} from "react-dom/client";


const RootComponent = observer(() => {

  return (
    <React.StrictMode>

        <App />

    </React.StrictMode>
  );
});

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(<RootComponent />);
