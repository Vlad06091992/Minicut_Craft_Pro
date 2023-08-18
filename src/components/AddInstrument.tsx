import {observer} from "mobx-react";
import {ItemType, SearchDataType, Store} from "../../src/store";
import {useState} from "react";
import {Button} from "@mui/material";

export const AddInstrument = observer(() => {

    const [diameter, setDiametr] = useState<number | string>(0)
    const [numberOfTeeth, setNumberofTeeth] = useState<number | string>(0)
    const [spiral, setSpiral] = useState<number | string>('')
    const [F, setF] = useState<number | string>('')
    const [G, setG] = useState<number | string>('')
    const [R, setR] = useState<number | string>('')

    return <div>
        <h1>Добавление кругов</h1>
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
            <div>
                <span>F</span> <input value={F} onChange={(e) => {
                setF(e.currentTarget.value)
            }}/>
            </div>
            <div>
                <span>R</span> <input value={R} onChange={(e) => {
                setR(e.currentTarget.value)
            }}/>
            </div>
            <div>
                <span>G</span> <input value={G} onChange={(e) => {
                setG(e.currentTarget.value)
            }}/>
            </div>


            <Button variant={'outlined'} onClick={(e) => {
                let searchObject: ItemType = {
                    searchData: {diameter, numberOfTeeth, spiral}, instrumentalData: {F, G, R}}
                    Store.addItem(searchObject)
                }
            }>add instrument
                </Button>
                </div>
                </div>
            })