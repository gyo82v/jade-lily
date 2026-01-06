import { InputEl } from "./InputEl";

type Props ={
    label: string;
    type: string;
    name?: string;
    id?: string;
}

export function LabelEl({label, type, name, id}: Props){
    return(
        <label htmlFor={id}>
            {label}
            <InputEl type={type} name={name} id={id} />
        </label>
    )
}