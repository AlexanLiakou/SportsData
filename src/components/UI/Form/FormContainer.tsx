import React, {ReactNode} from "react";
import FormButton from "../Buttons/FormButton";

type FormContainerProps = {
    children?: ReactNode
    action?: (e:any) => void
    formTitle: string
    buttonLabel: string
}

const FormContainer = ({children, action, formTitle, buttonLabel} : FormContainerProps) => {

    return(
        <div className="flex content-center justify-center">
          <div className="bg-customLightGreen max-w-[600px] rounded-3xl mb-[140px]">
            <p className="p-5 w-100 text-white font-bold">{formTitle}</p>
            <div className="flex flex-wrap gap-5 p-5">
              {children}
            </div>
            <FormButton label={buttonLabel} onClick={action}/>
          </div>
        </div>
    )
}

export default FormContainer;