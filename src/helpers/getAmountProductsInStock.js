import getAmountProductsPurchased from "./getAmountProductsPurchased.js";
import getAmountProductsSold from "./getAmountProductsSold.js";

function getAmountProductsInStock(inventory) {
    return getAmountProductsPurchased(inventory) - getAmountProductsSold(inventory);
}

export default getAmountProductsInStock;