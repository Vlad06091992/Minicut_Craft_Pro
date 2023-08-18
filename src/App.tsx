import React from "react";
import styles from "./App.module.scss";
import {observer} from "mobx-react";
import {SearchForm} from "../src/components/SearchForm";
import {AddInstrument} from "../src/components/AddInstrument";

const App = observer(() => {
    return (
        <div className={styles.App}>
           <h1> Minicut Craft Pro v0.05 </h1>
            <SearchForm/>
            <AddInstrument/>
        </div>
    );
});

export default App;
