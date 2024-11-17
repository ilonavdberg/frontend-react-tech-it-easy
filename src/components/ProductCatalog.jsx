import './ProductCatalog.css'

import {inventory} from "../constants/inventory.js";
import checkIcon from "../assets/check.png";
import minusIcon from "../assets/minus.png";

import getProductFullName from "../helpers/getProductFullName.js";
import getFormattedPrice from "../helpers/getFormattedPrice.js";
import getAvailableSizes from "../helpers/getAvailableSizes.js";

export default function ProductCatalog() {
    // for (let i = 0; i < inventory.length; i++) {
    //     console.log(inventory[i].brand + ' ' + inventory[i].name);
    // }

    const output = inventory.map((tv) => tv.brand + ' ' + tv.name)
    console.log(output);

    return (
        inventory.map(tv => (
            <div className="ProductCatalog">
                <figure className="ProductCatalog__image">
                    <img src={tv.sourceImg} alt="Samsung 4K TV"/>
                </figure>
                <section className="ProductCatalog__content">
                    <h3>{getProductFullName(tv)}</h3>
                    <p className="ProductCatalog__price">{getFormattedPrice(tv)}</p>
                    <p>{getAvailableSizes(tv)}</p>
                    <div className="ProductCatalog__specifications">
                        {tv.options.map((option) => {
                                return (
                                    <div className="Spec">
                                        <span className="Icon">
                                            {option.applicable ? <img src={checkIcon} alt="checked icon"/> : <img src={minusIcon} alt="minus icon"/>}
                                        </span>
                                        <p>{option.name}</p>
                                    </div>
                                )
                        })}
                    </div>
                </section>
            </div>


        ))
    );
}