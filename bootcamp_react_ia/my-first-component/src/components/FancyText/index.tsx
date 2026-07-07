import "./styles.css";

interface FancyTextProps {
    title: string;
    text: string;
}

export default function FancyText({ title, text }: FancyTextProps) {
    return title ? (
        <h1 className="title">{text}</h1>
    ) : (
        <h3 className="cursive">{text}</h3>
    );
}