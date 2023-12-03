import {observer} from "mobx-react";
import {ItemType, Store} from "../../../src/store";
import {useState} from "react";
import {Button} from "@mui/material";
import s from "./AddInstrument.module.css"

export const AddInstrument = observer(() => {

    const [diameter, setDiametr] = useState<string>('')
    const [numberOfTeeth, setNumberofTeeth] = useState<string>('')
    const [spiral, setSpiral] = useState<string>('')
    const [F, setF] = useState<string>('')
    const [G, setG] = useState<string>('')
    const [R, setR] = useState<string>('')

    const disabledData =[diameter, numberOfTeeth, spiral, F, G, R]
    const disabled = disabledData.some(el => {
        return el.length == 0
    })


    const stateFunctions = [setDiametr, setSpiral, setNumberofTeeth, setF, setR, setG]

    return <div>
        <h2>Добавление кругов</h2>
        <div>
            <div className={s.itemDiv}>
                <span>Диаметр</span> <input style={{position: "relative", left: '40px'}} value={diameter}
                                            onChange={(e) => {
                                                setDiametr(e.currentTarget.value.toString().trim())
                                            }}/>
            </div>
            <div className={s.itemDiv}>
                <span>Кол-во зубьев</span> <input style={{position: "relative"}} value={numberOfTeeth}
                                                  onChange={(e) => {
                                                      setNumberofTeeth(e.currentTarget.value.toString().trim())
                                                  }}/>
            </div>
            <div className={s.itemDiv}>
                <span>Спираль</span> <input style={{position: "relative", left: '42px'}} value={spiral}
                                            onChange={(e) => {
                                                setSpiral(e.currentTarget.value.toString().trim())
                                            }}/>
            </div>
            <div className={s.itemDiv}>
                <span>F</span> <input value={F} onChange={(e) => {
                setF(e.currentTarget.value.toString().trim())
            }}/>
            </div>
            <div className={s.itemDiv}>
                <span>R</span> <input value={R} onChange={(e) => {
                setR(e.currentTarget.value.toString().trim())
            }}/>
            </div>
            <div className={s.itemDiv}>
                <span>G</span> <input value={G} onChange={(e) => {
                setG(e.currentTarget.value.toString().trim())
            }}/>
            </div>


            <Button color={"warning"} disabled={disabled} variant={"contained"} style={{margin: '10px'}} onClick={(e) => {
                let searchObject: ItemType = {
                    searchData: {diameter, numberOfTeeth, spiral}, instrumentalData: {F, G, R}
                }
                Store.addItem(searchObject)
                stateFunctions.forEach((el) => el(''))
            }
            }>Add or change instrument
            </Button>
            {Store.warning &&
                <p style={{margin: '0px', paddingLeft: '10px', color: "red"}}>инструмент был изменен в памяти!</p>}
            {Store.added && !Store.warning &&
                <p style={{margin: '0px', paddingLeft: '10px', color: "green"}}>инструмент был добавлен!</p>}
        </div>
    </div>
})