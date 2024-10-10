import React, {ReactNode} from "react";

type RegisterButtonProps = {
    children?: ReactNode
    onClick?: (e:any) => void
    label: string
}

const RegisterButton = ({children, label, onClick}: RegisterButtonProps) => {
    return (
        <button className="mt-3 block w-full bg-customDarkgreen text-white font-semibold text-sm block border-0 px-3 py-3 shadow-none grow rounded-lg min-w-[270px] max-h-[42px]" onClick={onClick}>
           {label}
        </button>
    )
}

export default RegisterButton;