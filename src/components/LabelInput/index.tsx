import * as C from './style';

type InputChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => void;

type Props = {
    label: string;
    inputType: string;
    onChange: InputChangeEvent;
}

export const LabelInput = ({ label, inputType, onChange }: Props) => {

    return (
     
        <C.Div>
            <C.Label>{label}</C.Label>
            <C.Input type={inputType} onChange={onChange}></C.Input>
        </C.Div>
    );
}