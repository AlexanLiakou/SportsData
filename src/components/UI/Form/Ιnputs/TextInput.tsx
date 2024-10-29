import {ReactNode, ChangeEvent} from "react";
import {Errors} from "../../../../models/Credentials";
import FormError from "../Other/FormError";


type TextInputProps = {
    children?: ReactNode
    onChange?: (e:ChangeEvent<HTMLInputElement>) => void
    name: string
    type: string
    label: string
    placeholder?: string
    errorsObject: Errors
    value?: string | number
}

const TextInput = ({children, placeholder, errorsObject, label, onChange, type='text', name, value}: TextInputProps) => {
    return (
        <label className="block md:mb-0 grow min-w-[270px] min-h-[120px]">
            <span className="text-white font-semibold text-sm">{label}</span>
            <input
                type={type}
                value={value} 
                className="mt-3 block w-full rounded-md border-transparent focus:ring-transparent focus:border-transparent focus:outline-0 focus:outline-offset-0"
                onChange={onChange}
                placeholder={placeholder}/>
                {errorsObject[name] && <FormError errorMessage={errorsObject[name][0]}/>}
            {children}
        </label>
    )
}

export default TextInput;