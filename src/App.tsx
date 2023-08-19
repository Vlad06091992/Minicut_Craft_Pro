import React, {useEffect} from "react";
import styles from "./App.module.scss";
import {observer} from "mobx-react";
import {Store} from "../src/store";
import {Link, Outlet} from "react-router-dom";
import {Button} from "@mui/material";

const App = observer(() => {

    // useEffect(()=>{
    //     Store.showWarning()
    // },[])

    return (
        <div className={styles.App}>
            <h1>Minicut Craft Pro v1.05</h1>
            <div>
                Количество конфигураций инструментов : {Store.dataArray.length}
            </div>
            <Link to={"search"} ><Button color={"warning"} variant={"contained"} style={{margin:'10px'}}>find</Button></Link>
            <Link to={"add"} ><Button color={"warning"} variant={"contained"} style={{margin:'10px'}}>add</Button></Link>
            <Link to={"state"} ><Button color={"warning"} variant={"contained"} style={{margin:'10px'}}>state</Button></Link>
            <Outlet/>
        </div>
    );
});

export default App;
