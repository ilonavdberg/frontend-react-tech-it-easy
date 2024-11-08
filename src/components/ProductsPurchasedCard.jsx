import './ProductsPurchasedCard.css'
import {inventory} from "../constants/inventory.js";
import getAmountProductsPurchased from "../helpers/getAmountProductsPurchased.js";

export default function ProductsPurchasedCard() {
    return (
        <div className="ProductsPurchasedCard">
            <p>Aantal ingekochte producten</p>
            <p>{getAmountProductsPurchased(inventory)}</p>
        </div>
    )
}