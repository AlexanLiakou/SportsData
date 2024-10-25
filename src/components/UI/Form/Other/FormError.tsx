import React from 'react';

type FormErrorProps = {
    errorMessage: string
    children?: any
}

const FormErrorProps = ({children, errorMessage}: FormErrorProps) =>{
    return (
        <div>
            <p className='text-red-600 italic text-sm my-[10px]'>{errorMessage}</p>
        </div>
    ) 
  }
  
  export default FormErrorProps;