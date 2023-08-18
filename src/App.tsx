import React from "react";
import styles from "./App.module.scss";
import {observer} from "mobx-react";
import {SearchForm} from "../src/components/SearchForm";

const App = observer(() => {
    return (
        <div className={styles.App}>
           <h1> Minicut Craft Pro v0.01 </h1>
            <SearchForm/>
        </div>
    );
});

export default App;
