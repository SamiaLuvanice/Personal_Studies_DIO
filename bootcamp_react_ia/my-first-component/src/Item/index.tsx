import { useState } from "react";

interface ItemProps {
    name: string;
    check?: boolean;
}

const Item: React.FC<ItemProps> = ({ name, check }) => {

    const [isChecked, setCheck] = useState(check);
    
    const handleClick = () => {
        //ser for true, vira false, se for false, vira true
        setCheck(!isChecked);
    }

    let itemName: React.ReactNode = name;
    if (isChecked) {
        itemName = <del>{name}</del>;
    }

    return (
        <div className="item" onClick={handleClick}>
            {isChecked ? "✅" : "❌"} 
            {itemName} 
        </div>
    );
}

export default Item

// o !! significa que se count for 0, ele não vai mostrar o span, porque 0 é considerado falso. Então, se count for maior que 0, ele vai mostrar o span com o count.
// exemplo: count = 2, então !!count = true, então ele vai mostrar o span com o count. count = 0, então !!count = false, então ele não vai mostrar o span com o count.