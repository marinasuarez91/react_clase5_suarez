import ItemCount from "./ItemCount"
import "./ItemListContainer.css"

function ItemCard ({name, color, price}) {
    return <div className="ItemCard">
                <p>{name}</p>
                <p>Color: {color}</p>
                <p>{price}</p>
                <ItemCount />
            </div>
}

export default ItemCard
