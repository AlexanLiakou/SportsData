import {ReactNode, MouseEvent} from "react";

type FormButtonProps = {
    children?: ReactNode
    onClick?: (e:MouseEvent) => void
    label: string
    form: string;
    type: "submit" | "reset" | "button",
    disabled?: boolean
}

const FormButton = ({children, disabled = false, form, type, label, onClick}: FormButtonProps) => {
    return (
        <div className="w-[100%] flex justify-center px-5 mb-5">
            <button
                disabled={disabled}
                form={form} 
                type={type} 
                className="bg-customDarkgreen text-white font-semibold text-sm border-0 px-3 py-3 shadow-none rounded-lg w-[273px] max-h-[42px]"
                onClick={onClick}>
                {label}
                {children && children}
            </button>
        </div>
    )
}

export default FormButton;