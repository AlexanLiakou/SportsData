import React, {ReactNode} from "react";

type TextInputProps = {
    children?: ReactNode
    onChange?: (e:any) => void
    name: string
    type: string
    label: string
    placeholder?: string
    registerFunction?: any
    validationRules?:  any
    errorsObject?: any
}

const TextInput = ({children, placeholder, registerFunction, errorsObject, validationRules, label, onChange, type='text', name}: TextInputProps) => {
    return (
        <label className="block mb-5 grow min-w-[270px]">
            <span className="text-white font-semibold text-sm">{label}</span>
            <input
                {...registerFunction(name, validationRules)}
                type={type} 
                className="mt-3 block w-full rounded-md border-transparent focus:ring-transparent focus:border-transparent focus:outline-0 focus:outline-offset-0"
                onChange={onChange}
                placeholder={placeholder}/>
                {errorsObject[name] && <p className="text-white italic text-xs mt-2">{errorsObject[name].message}</p>}
        </label>
    )
}

export default TextInput;