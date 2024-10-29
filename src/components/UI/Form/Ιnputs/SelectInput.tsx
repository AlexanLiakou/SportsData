import {ChangeEvent} from "react";

type SelectInputProps = {
    onChange?: (e:ChangeEvent) => void
    name: string
    label: string
    options: any
    customClass?: string
}

const SelectInput = ({options, label, customClass, onChange, name}: SelectInputProps) => {
    return (
        <label className="block grow min-w-[270px]">
            <span className="text-white font-semibold text-sm">{label}</span>
            <select 
            name={name} 
            className={`block h-[42px] w-full mt-3 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 ${customClass ? customClass : ''}`}
            onChange={onChange}>
                {
                    options && options.map ((option : any) => {
                        return (
                            <option key={option.value}>{option.label}</option>
                        )
                    })
                }
            </select>
        </label>
    )
}

export default SelectInput;