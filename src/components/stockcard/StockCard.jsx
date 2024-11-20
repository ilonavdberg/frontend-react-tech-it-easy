import './StockCard.css'

export default function StockCard({cardText, quantity, variant}) {
    const classNames = `StockCard ${variant}`;

    return (
        <div className={classNames}>
            <p>{cardText}</p>
            <p>{quantity}</p>
        </div>
    )
}