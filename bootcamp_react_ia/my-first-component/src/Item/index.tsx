interface ItemProps {
    name: string;
    quantity: number;
}

const Item: React.FC<ItemProps> = ({ name, quantity }) => {
    return (
        <div className="item">
            {name} - {quantity}
        </div>
    )
}

export default Item