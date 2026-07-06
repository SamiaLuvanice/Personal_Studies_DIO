interface ItemProps {
    name: string;
    check?: boolean;
}

const Item: React.FC<ItemProps> = ({ name, check }) => {

    //if (check) {
    //    return <div className="item">✅ <del>{name}</del></div>
    //}

    //return <div className="item"> ❌ {name}</div>

    // condição ? retorna1 : retorna2
    return <div className="item">{check ? <span>✅ <del>{name}</del></span> : <span>❌ {name}</span>}</div>
}

export default Item