// import "./styles.css";
import { Highlighter } from "rc-highlight";
import { observer } from "mobx-react";
import { Store } from "../../../src/store";
import {toJS} from "mobx";

const GetState = observer((props: { store: any }) => {
    // debugger

    const res = toJS(props.store.dataArray)
    console.log(res)
    return (
        <div style={{ maxWidth: '80%' }}>
            <Highlighter  >{`${JSON.stringify(res)}`}</Highlighter>
        </div>
    );
});

export default GetState;