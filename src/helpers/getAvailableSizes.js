import getFormattedSize from "./getFormattedSize.js";

function getAvailableSizes(tv) {
    let availableSizes = "";
    for (let i = 0; i < tv.availableSizes.length; i++) {
        if (i === 0) {
            availableSizes += getFormattedSize(tv.availableSizes[i]);
        } else {
            availableSizes += ` | ${getFormattedSize(tv.availableSizes[i])}`;
        }
    }

    return availableSizes;
}

export default getAvailableSizes;