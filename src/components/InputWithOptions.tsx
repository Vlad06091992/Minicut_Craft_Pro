import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {observer} from "mobx-react";
import {Store} from "../../src/store";

type Props = {
    setSpiral?:any
}

export const SelectWithOptions = observer((props:Props) => {
    const options = Store.dataArray.map(el => el.searchData.spiral).filter((item: any) => isNaN(item))

    return (
        <div>

            <FormControl style={{width:"100px"}}>
                <InputLabel id="demo-simple-select-label">Spiral</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={'spiral'}
                    label='spiral'
                    onChange={(e:SelectChangeEvent<"spiral">) => {
                        props.setSpiral(e.target?.value)
                    }}
                >
                    {options.map(option => {
                        return (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        )
                    })}


                </Select>
            </FormControl>
        </div>
    )
})
