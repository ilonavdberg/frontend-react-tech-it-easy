function getAmountProductsPurchased(inventory) {
    let amount = 0;

    for (let i = 0; i < inventory.length; i++) {
        amount += inventory[i].originalStock;
    }

    console.log(amount);
    return amount;
}

export default getAmountProductsPurchased;