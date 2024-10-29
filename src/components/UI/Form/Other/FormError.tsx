type FormErrorProps = {
    errorMessage: string
}

const FormErrorProps = ({errorMessage}: FormErrorProps) =>{
    return (
        <div>
            <p className='text-red-600 italic text-sm my-[10px]'>{errorMessage}</p>
        </div>
    ) 
  }
  
  export default FormErrorProps;