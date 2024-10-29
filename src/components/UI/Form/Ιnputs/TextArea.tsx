import {ChangeEvent} from "react";

type TextAreaProps = {
    onChange?: (e:ChangeEvent) => void
    name: string
    label: string
}

const TextArea = ({label, onChange, name}: TextAreaProps) => {
    return (
        <label className="block mb-5 grow min-w-[270px]">
            <span className="text-white font-semibold text-sm">{label}</span>
            <textarea
                className="mt-3 block w-full rounded-md border-transparent focus:ring-transparent focus:border-transparent focus:outline-0 focus:outline-offset-0"
                name={name}
                onChange={onChange}
                style={{resize: 'none'}}
                rows={6}
                cols={40}
            />
        </label>
    )
}

export default TextArea;