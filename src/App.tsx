import React from "react";
import styles from "./App.module.scss";
import {observer} from "mobx-react";
import {SearchForm} from "../src/components/SearchForm";
import {AddInstrument} from "../src/components/AddInstrument";
import GetState from "../src/components/getState";
import {Store} from "../src/store";

const App = observer(() => {
    return (
        <div className={styles.App}>
           <h1> Minicut Craft Pro v0.06 </h1>
            <SearchForm/>
            <AddInstrument/>
            <GetState store={Store}/>
        </div>
    );
});

export default App;
