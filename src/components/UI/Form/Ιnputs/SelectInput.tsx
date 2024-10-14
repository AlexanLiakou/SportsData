import React, {ReactNode} from "react";

type SelectInputProps = {
    children?: ReactNode
    onChange?: (e:any) => void
    name: string
    label: string
    options: any
    customClass?: string
}

const SelectInput = ({children, options, label, customClass, onChange, name}: SelectInputProps) => {
    return (
        <label className="block grow min-w-[270px]">
            <span className="text-white font-semibold text-sm">{label}</span>
            <select 
            name={name} 
            className={`block w-full mt-3 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 ${customClass ? customClass : ''}`}
            onChange={onChange}>
                {
                    options && options.map ((option : any) => {
                        return (
                            <option>{option.label}</option>
                        )
                    })
                }
            </select>
        </label>
    )
}

export default SelectInput;