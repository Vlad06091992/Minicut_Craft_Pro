import {observer} from "mobx-react";
import {SearchDataType, Store} from '../store'
import {useState} from "react";

export const SearchForm = observer(() => {

    const [diameter, setDiametr] = useState<number>(0)
    const [numberOfTeeth, setNumberofTeeth] = useState<number>(0)
    const [spiral, setSpiral] = useState<number | string>('')
    const [findRes, setFindRes] = useState<any>('')

    return (
        <div>
            <div>
                Количество конфигураций инструментов : {Store.dataArray.length}
            </div>

            <form onSubmit={(event) => {
                event.preventDefault()
                let searchObject: SearchDataType = {diameter, numberOfTeeth, spiral}
                setFindRes(Store.findItem(searchObject))
                console.log(searchObject)
            }}>
                <div>
                    <span>Диаметр</span> <input type={"number"} value={diameter} onChange={(e) => {
                    setDiametr(+e.currentTarget.value)
                }}/>
                </div>
                <div>
                    <span>Количество зубьев</span> <input type={"number"} value={numberOfTeeth} onChange={(e) => {
                    setNumberofTeeth(+e.currentTarget.value)
                }}/>
                </div>
                <div>

                    <span>Спираль</span> <input type={"number"} value={spiral} onChange={(e) => {
                    setSpiral(+e.currentTarget.value)
                }}/>
                </div>

                <button type="submit">find instrument</button>
            </form>

            <div>
                {Store.currentData?.F}
                {Store.currentData?.G}
                {Store.currentData?.R}
            </div>

        </div>)
})