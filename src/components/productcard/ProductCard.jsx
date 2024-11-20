// Styling
import './ProductCard.css'

// Components
import Specification from "../specification/Specification.jsx";


export default function ProductCard({title, price, sizes, options, imageSrc, imageAlt, variant="default"}) {
    const classNames = `ProductCard ${variant}`;

    return (
        <div className={classNames}>
            <figure className="ProductCard__image">
                <img src={imageSrc} alt={imageAlt}/>
            </figure>
            <section className="ProductCard__content">
                <h3>{title}</h3>
                <p className="ProductCard__content__price">{price}</p>
                <p>{sizes}</p>
                <div className="ProductCard__content__specifications">
                    {options.map((option) => {
                        return (
                            <Specification
                                name={option.name}
                                applicable={option.applicable}
                            />
                        )
                    })}
                </div>
            </section>
        </div>
    )
}