interface IProps {
    value: string;
    onValueChange: (value: string) => void;
}

function TextField({ value, onValueChange }: IProps) {
    return <input type='text' value={value} onChange={(e) => onValueChange(e.target.value)} />;
}

export default TextField;
