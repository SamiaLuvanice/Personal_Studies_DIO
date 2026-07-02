interface ItemProps {
    name: string;
    check?: boolean;
}

const Item: React.FC<ItemProps> = ({ name, check }) => {

    if (check) {
        return (<div className="item"> <del>✅ {name} </del></div>)
    }
    return (<div className="item"> ❌ {name} </div>
    )
}

export default Item