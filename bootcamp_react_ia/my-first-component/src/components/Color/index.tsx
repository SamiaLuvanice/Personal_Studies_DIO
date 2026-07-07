import "./styles.css";

interface Props {
    value: string;
}

export default function Color({ value }: Props) {
    return (
        <div className="colorBox" style={{ backgroundColor: value }}>
            {value}
        </div>
    )
}