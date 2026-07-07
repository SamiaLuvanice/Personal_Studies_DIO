import inspirations from "../../data/inspirations"
import FancyText from "../FancyText";
import { useState } from "react";

export default function InspirationGenarator({
    children,
}: React.PropsWithChildren) {

    const [index, setIndex] = useState(0);
    const inspiration = inspirations[index];

    const handleClick = () => {
        const randomIndex = Math.floor(Math.random() * inspirations.length);
        setIndex(randomIndex);
    }

    return (<>
        <p>Sua Frase motivacional é:</p>
        {inspiration.type === 'quote' &&
            <FancyText title text={inspiration.value} />
        }

        <button className="button" onClick={handleClick}>Gerar nova frase</button>
        {children}
    </>
    )
}