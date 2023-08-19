import {observer} from "mobx-react";
import {SearchDataType, Store} from '../../../src/store'
import {useEffect, useState} from "react";
import {Button} from "@mui/material";
import s from "./SearchForm.module.css"
import {useLocation} from "react-router-dom";

export const SearchForm = observer(() => {

    const [diameter, setDiametr] = useState<number | string>('')
    const [numberOfTeeth, setNumberofTeeth] = useState<number | string>('')
    const [spiral, setSpiral] = useState<number | string>('')

    const stateFunctions = [setDiametr, setNumberofTeeth, setSpiral]

    const disabledData = [diameter, numberOfTeeth, spiral]
    const disabled = disabledData.some(el => {
        if (typeof el === 'number') {
            return el < 1
        } else {
            return el.length == 0
        }
    })


    let location = useLocation()

    useEffect(() => {
        Store.currentData = null
    }, [location])

    const clearResIfChangesField = () => {
        const start = disabledData.every(el => {
            if (typeof el === 'number') {
                return el > 1
            } else {
                return el.length > 0
            }
        })

        if (start && Store.currentData) {
            stateFunctions.forEach((el) => el(''))
        }
        Store.currentData = null
    }

    return (
        <div>
            <h2>Поиск кругов</h2>
            <div>
                <div className={s.itemDiv}>
                    <span>Диаметр</span> <input style={{position: "relative", left: '40px'}} value={diameter}
                                                onChange={(e) => {
                                                    setDiametr(e.currentTarget.value)
                                                    clearResIfChangesField()

                                                }}/>
                </div>
                <div className={s.itemDiv}>
                    <span>Кол-во зубьев</span> <input value={numberOfTeeth} onChange={(e) => {
                    setNumberofTeeth(e.currentTarget.value)
                    clearResIfChangesField()

                }}/>
                </div>
                <div className={s.itemDiv}>

                    <span>Спираль</span> <input style={{position: "relative", left: '42px'}} value={spiral}
                                                onChange={(e) => {
                                                    setSpiral(e.currentTarget.value)
                                                    clearResIfChangesField()
                                                }}/>
                </div>
                {/*<SelectWithOptions setSpiral={setSpiral}/>*/}

                <Button disabled={disabled} color={"warning"} variant={"contained"} style={{margin: '10px'}}
                        onClick={(e) => {
                            let searchObject: SearchDataType = {diameter, numberOfTeeth, spiral}
                            Store.findItem(searchObject)
                            // stateFunctions.forEach((el) => el(''))
                        }}>find instrument
                </Button>
            </div>

            {Store.currentData && <div>
                <div> F : {Store.currentData?.F}</div>
                <div> R : {Store.currentData?.R}</div>
                <div> G : {Store.currentData?.G}</div>
            </div>}

            {!Store.currentData && <div>Инструмент на найден!</div>}

        </div>)
})