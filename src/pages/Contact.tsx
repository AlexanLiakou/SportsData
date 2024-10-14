import React, {useState} from "react";
import TextInput from "../components/UI/Form/Ιnputs/TextInput";
import TextArea from "../components/UI/Form/Ιnputs/TextArea";
import FormButton from "../components/UI/Buttons/FormButton";



const Contact = () => {
    const[formData, setFormData] = useState({
        subject: '',
        message: '',
    });
    return(
        <div className="flex content-center justify-center mt-[-55px]">
            <div className="bg-customLightGreen max-w-[600px] rounded-3xl">
                <p className="p-5 w-100 text-white font-bold">Please leave your message below:</p>
                <div className="flex flex-wrap flex-col gap-5 p-5">
                    <TextInput label={'Subject'} name='subject' type='text' onChange={(e:any) => setFormData({...formData, subject: e?.target.value})}/>
                    <TextArea label={'Message*'} name='message' onChange={(e:any) => setFormData({...formData, message: e?.target.value})}/>
                </div>
                <FormButton label={'Contact us'} onClick={(e:any) => console.log("Contact pressed!!")}/>
            </div>
        </div>
    )
}

export default Contact;