import {action, autorun, makeObservable, observable, toJS} from "mobx";

import {v1} from "uuid";
import {compareObjects} from "../src/utils/compareObjects";

export type SearchDataType = {
    diameter: number
    numberOfTeeth: number
    spiral: string | number
}

type InstrumentalDataType = {
    F: string
    R: string
    G: string
}

type ItemType = {
    searchData: SearchDataType
    instrumentalData: InstrumentalDataType
}

class DataStore {
    dataArray: ItemType[] = [
        {
            searchData: {
                diameter: 3,
                numberOfTeeth: 4,
                spiral: '35.37'
            },
            instrumentalData: {
                F: "F1.5 8'",
                R: "R1.4(1)8'",
                G: "G25'",
            }
        },
        {
            searchData: {
                diameter: 5,
                numberOfTeeth: 4,
                spiral: '35.37'
            },
            instrumentalData: {
                F: "F-T4 8'",
                R: "R1.5 8'",
                G: "G25'",
            }
        },
        {
            searchData: {
                diameter: 6,
                numberOfTeeth: 6,
                spiral: 45
            },
            instrumentalData: {
                F: "F-T4 25'",
                R: "-",
                G: "G10 45'",
            }
        }

    ]

    currentData = null as InstrumentalDataType | null;

    constructor() {
        makeObservable(this, {
            dataArray: observable,
            findItem: action,

        });
        this.getData();
    }

    getData() {
        let savedValue = localStorage.getItem("someValue");
        if (savedValue) {
            this.dataArray = JSON.parse(savedValue);
        }
    }

    findItem(data: SearchDataType) {

        let res = this.dataArray.find(el => {

            let item = (toJS(el))

            if (compareObjects(item.searchData, data)) return el.instrumentalData
        })
        if (res) this.currentData = res.instrumentalData

    }


}

export const Store = new DataStore();

autorun(() => {
    localStorage.setItem("someValue", JSON.stringify(Store.dataArray));
});
