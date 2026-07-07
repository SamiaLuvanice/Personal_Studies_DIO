import inspirations from "../../data/inspirations"
import Color from "../Color";
import FancyText from "../FancyText";
import { useState } from "react";

export default function InspirationGenarator({
    children,
}: React.PropsWithChildren) {

    const [index, setIndex] = useState(0);
    const inspiration = inspirations[index];

    const handleClick = () => {
        setIndex((prevIndex) => (prevIndex + 1) % inspirations.length);
    }

    return (<>
        <p>Sua Frase motivacional é:</p>
        {inspiration.type === 'quote'
            ? <FancyText text={inspiration.value} />
            :
            <Color value={inspiration.value} />
        }

        <button className="button" onClick={handleClick}>Me inspire novamente</button>
        {children}
    </>
    )
}