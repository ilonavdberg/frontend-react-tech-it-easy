import './ProductsSoldCard.css'
import {inventory} from "../constants/inventory.js";
import getAmountProductsSold from "../helpers/getAmountProductsSold.js";

export default function ProductsSoldCard() {
    return (
        <div className="ProductsSoldCard">
            <p>Aantal verkochte producten</p>
            <p>{getAmountProductsSold(inventory)}</p>
        </div>
    )
}