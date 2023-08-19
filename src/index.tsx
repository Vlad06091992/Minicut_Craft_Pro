import React from "react";
import "./index.css";
import App from "./App";
import {observer} from "mobx-react";
import {createRoot} from "react-dom/client";
import {createHashRouter, RouterProvider} from "react-router-dom";
import {SearchForm} from "../src/components/SearchForm";
import {AddInstrument} from "../src/components/AddInstrument";
import GetState from "../src/components/getState";
import {Store} from "../src/store";


const RootComponent = observer(() => {

    const router = createHashRouter([
        {
            path: '/',
            element: <App/>,
            children:[ {
                path: 'search',
                element:  <SearchForm/>,
            },
                {
                    path: 'add',
                    element:<AddInstrument/>,
                },
                {
                    path: 'state',
                    element:<GetState store={Store}/>,
                }]
        },
    ])

  return (
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
  );
});

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(<RootComponent />);
