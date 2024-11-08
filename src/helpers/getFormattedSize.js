function getFormattedSize(sizeInInch) {
    const sizeInCm = Math.round(sizeInInch * 2.54);
    return `${sizeInInch} inch (${sizeInCm} cm)`;
}

export default getFormattedSize;