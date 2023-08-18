import React from "react";
import styles from "./App.module.scss";
import {observer} from "mobx-react";
import {SearchForm} from "../src/components/SearchForm";
import {AddInstrument} from "../src/components/AddInstrument";
import GetState from "../src/components/getState";
import {Store} from "../src/store";
import  {SelectWithOptions} from "../src/components/InputWithOptions";

const App = observer(() => {

    const options = ['Apple', 'Banana', 'Cherry', 'Grapes', 'Orange', 'Pineapple'];

    return (
        <div className={styles.App}>
           <h1> Minicut Craft Pro v0.07 </h1>
            <SearchForm/>
            <AddInstrument/>
            <GetState store={Store}/>
<SelectWithOptions/>
        </div>
    );
});

export default App;
