import {observer} from "mobx-react";
import {SearchDataType, Store} from '../store'
import {useState} from "react";
import {Button} from "@mui/material";
import {SelectWithOptions} from "../../src/components/InputWithOptions";

export const SearchForm = observer(() => {

    const [diameter, setDiametr] = useState<number | string>(0)
    const [numberOfTeeth, setNumberofTeeth] = useState<number | string>(0)
    const [spiral, setSpiral] = useState<number | string>('')


    return (
        <div>
            <h1>Поиск кругов</h1>
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
                <SelectWithOptions setSpiral={setSpiral}/>

                <Button variant={'outlined'} onClick={(e) => {
                    let searchObject: SearchDataType = {diameter, numberOfTeeth, spiral}
                    Store.findItem(searchObject)
                }}>find instrument
                </Button>
            </div>

            <div>
                <div> F : {Store.currentData?.F}</div>
                <div> R : {Store.currentData?.R}</div>
                <div> G : {Store.currentData?.G}</div>


            </div>

        </div>)
})