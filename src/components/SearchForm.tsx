import {observer} from "mobx-react";
import {SearchDataType, Store} from '../store'
import {useState} from "react";

export const SearchForm = observer(() => {

    const [diameter, setDiametr] = useState<number | string>(0)
    const [numberOfTeeth, setNumberofTeeth] = useState<number | string>(0)
    const [spiral, setSpiral] = useState<number | string>('')
    const [findRes, setFindRes] = useState<any>('')

    return (
        <div>
            <div>
                Количество конфигураций инструментов : {Store.dataArray.length}
            </div>

            <div>
                <div>
                    <span>Диаметр</span> <input value={diameter} onChange={(e) => {
                    setDiametr(e.currentTarget.value)
                }}/>
                </div>
                <div>
                    <span>Количество зубьев</span> <input value={numberOfTeeth} onChange={(e) => {
                    setNumberofTeeth(e.currentTarget.value)
                }}/>
                </div>
                <div>

                    <span>Спираль</span> <input value={spiral} onChange={(e) => {
                    setSpiral(e.currentTarget.value)
                }}/>
                </div>

                <button onClick={(e) => {
                    let searchObject: SearchDataType = {diameter, numberOfTeeth, spiral}
                    Store.findItem(searchObject)
                }}>find instrument
                </button>
            </div>

            <div>
                <div> F : {Store.currentData?.F}</div>
                <div> G : {Store.currentData?.G}</div>
                <div> R : {Store.currentData?.R}</div>

            </div>

        </div>)
})