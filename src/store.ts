import {action, autorun, makeObservable, observable, toJS} from "mobx";

import {v1} from "uuid";
import {compareObjects} from "../src/utils/compareObjects";

export type SearchDataType = {
    diameter: string | number
    numberOfTeeth: string | number
    spiral: string | number
}

export type InstrumentalDataType = {
    F: string | number
    R: string | number
    G: string | number
}

export type ItemType = {
    searchData: SearchDataType
    instrumentalData: InstrumentalDataType
}

class DataStore {
    dataArray: ItemType[] = [
        {
            searchData: { diameter: 3, numberOfTeeth: 4, spiral: "35.37" },
            instrumentalData: { F: "F1.5 8'", R: "R1.4(1)8'", G: "G25'" }
        },
        {
            searchData: { diameter: 5, numberOfTeeth: 4, spiral: "35.37" },
            instrumentalData: { F: "F-T4 8'", R: "R1.5 8'", G: "G25'" }
        },
        {
            searchData: { diameter: 6, numberOfTeeth: 6, spiral: 45 },
            instrumentalData: { F: "F-T4 25'", R: "-", G: "G10 45'" }
        },
        {
            searchData: { diameter: 16, numberOfTeeth: 5, spiral: "41.5-42(Волновая)" },
            instrumentalData: { F: "F-T825'", R: "R-T3 8", G: "G45'" }
        },
        {
            searchData: { diameter: "8", numberOfTeeth: "6", spiral: 45 },
            instrumentalData: { F: "F-T4 25'", G: "G45'", R: "-" }
        },
        {
            searchData: { diameter: "8", numberOfTeeth: "4", spiral: "35.37" },
            instrumentalData: { F: "Т5 10'", G: "25'", R: "Т3 8'" }
        },
        {
            searchData: { diameter: "10", numberOfTeeth: "4", spiral: "27.30" },
            instrumentalData: { F: "Т15 8'", G: "30'", R: "Т4 8'" }
        },
        {
            searchData: { diameter: "10", numberOfTeeth: "2", spiral: 46 },
            instrumentalData: { F: "Т10.5 8'", G: "30'", R: "Т6 8'" }
        },
        {
            searchData: { diameter: "12", numberOfTeeth: "4", spiral: "27.30" },
            instrumentalData: { F: "Т15 8'", G: "30'", R: "Т4 8'" }
        },
        {
            searchData: { diameter: "12", numberOfTeeth: "4", spiral: "35.37" },
            instrumentalData: { F: "Т10.5 8'", G: "25'", R: "Т3 8'" }
        },
        {
            searchData: { diameter: "12", numberOfTeeth: "6", spiral: 45 },
            instrumentalData: { F: "Т8 25'", G: "45'", R: "-" }
        },
        {
            searchData: { diameter: "16", numberOfTeeth: "5", spiral: "41.5-42.5(волновая)" },
            instrumentalData: { F: "Т8 25'", G: "45'", R: "Т3 8'" }
        },
        {
            searchData: { diameter: "16", numberOfTeeth: "3", spiral: 46 },
            instrumentalData: { F: "Т10.5 8'", G: "30'", R: "Т6 8'" }
        },
        {
            searchData: { diameter: "16", numberOfTeeth: "4", spiral: "35.37" },
            instrumentalData: { F: "Т10.5 8'", G: "25'", R: "Т4 8'" }
        },
        {
            searchData: { diameter: "16", numberOfTeeth: "6", spiral: 45 },
            instrumentalData: { F: "Т10 25'", G: "45'", R: "-" }
        },
        {
            searchData: { diameter: "20", numberOfTeeth: "4", spiral: "35.37" },
            instrumentalData: { F: "Т15 8'", G: "30'", R: "Т6 8'" }
        }
    ];

    currentData = null as InstrumentalDataType | null;
    warning = false as boolean
    added = false as boolean

    constructor() {
        makeObservable(this, {
            dataArray: observable,
            findItem: action,
            currentData: observable,
            warning: observable,
            showWarning: action,
            added : observable,
            showAdded: action,

        });
        this.getData();
    }

    getData() {
        let savedValue = localStorage.getItem("someValue");
        if (savedValue) {
            this.dataArray = JSON.parse(savedValue);
        }
    }

    // getData() {
    //     let savedValue = localStorage.getItem("someValue");
    //     if (savedValue && this.dataArray.length > JSON.parse(savedValue).length) {
    //         localStorage.setItem("someValue", JSON.stringify(this.dataArray))
    //         this.getData()
    //     } else if (savedValue) {
    //         this.dataArray = JSON.parse(savedValue);
    //     }
    // }

    showWarning() {
        this.warning = true
        setTimeout(() => {
            this.warning = false
        }, 1500)
    }

    showAdded() {
        this.added = true
        setTimeout(() => {
            this.added = false
        }, 1500)
    }

    findItem(data: SearchDataType) {
        let res = this.dataArray.find(el => {
            let item = (toJS(el))
            if (compareObjects(item.searchData, data)) {
                return el.instrumentalData
            }
        })
        if (res) {
            this.currentData = res.instrumentalData
        } else {
            this.currentData = null
        }
    }

    addItem(item: ItemType) {
        let findIndexItem = this.dataArray.findIndex(el => {

            let it = (toJS(el))
            if (compareObjects(it.searchData, item.searchData)) {
                this.showWarning()
                return el.instrumentalData
            }
            this.showAdded()
        })

        if (findIndexItem > 0) {
            this.dataArray.splice(findIndexItem, 1, item)
        } else {
            this.dataArray.push(item)
        }
    }
}


export const Store = new DataStore();

autorun(() => {
    localStorage.setItem("someValue", JSON.stringify(Store.dataArray));
});
