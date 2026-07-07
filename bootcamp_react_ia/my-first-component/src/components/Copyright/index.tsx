interface CopyrightProps {
    year: number;
}

export default function Copyright({ year }: CopyrightProps) {
    return (
        <p>© {year}</p>
    );
}