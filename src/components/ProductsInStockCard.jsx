import './ProductsInStockCard.css'
import {inventory} from "../constants/inventory.js";
import getAmountProductsInStock from "../helpers/getAmountProductsInStock.js";

export default function ProductsInStockCard() {
    return (
        <div className="ProductsInStockCard">
            <p>Aantal te verkopen producten</p>
            <p>{getAmountProductsInStock(inventory)}</p>
        </div>
    )
}