import React, {ReactNode} from "react";

type FormButtonProps = {
    children?: ReactNode
    onClick?: (e:any) => void
    label: string
}

const FormButton = ({children, label, onClick}: FormButtonProps) => {
    return (
        <div className="w-[100%] flex justify-center px-5 mb-5">
            <button className="bg-customDarkgreen text-white font-semibold text-sm border-0 px-3 py-3 shadow-none rounded-lg w-[273px] max-h-[42px]" onClick={onClick}>
            {label}
            </button>
        </div>
    )
}

export default FormButton;