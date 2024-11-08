import './ProductDetailsCard.css'

import {bestSellingTv} from "../constants/inventory.js";
import checkIcon from "../assets/check.png";
import minusIcon from "../assets/minus.png";

import getProductFullName from "../helpers/getProductFullName.js"
import getFormattedPrice from "../helpers/getFormattedPrice.js";
import getAvailableSizes from "../helpers/getAvailableSizes.js";

export default function ProductDetailsCard() {
    return (
        <div className="ProductDetailsCard">
            <figure className="ProductDetailsCard__image">
                <img src={bestSellingTv.sourceImg} alt="Samsung 4K TV"/>
            </figure>
            <section className="ProductDetailsCard__content">
                <h3>{getProductFullName(bestSellingTv)}</h3>
                <p className="ProductDetailsCard__price">{getFormattedPrice(bestSellingTv)}</p>
                <p>{getAvailableSizes(bestSellingTv)}</p>
                <div className="ProductDetailsCard__specifications">
                    <div className="Spec">
                    <span className="Icon">
                        <img src={checkIcon} alt="checked icon"/>
                    </span>
                        <p>wifi</p>
                    </div>
                    <div className="Spec">
                    <span className="Icon">
                        <img src={minusIcon} alt="checked icon"/>
                    </span>
                        <p>speech</p>
                    </div>
                    <div className="Spec">
                    <span className="Icon">
                        <img src={checkIcon} alt="checked icon"/>
                    </span>
                        <p>hdr</p>
                    </div>
                    <div className="Spec">
                    <span className="Icon">
                        <img src={checkIcon} alt="checked icon"/>
                    </span>
                        <p>bluetooth</p>
                    </div>
                    <div className="Spec">
                    <span className="Icon">
                        <img src={minusIcon} alt="checked icon"/>
                    </span>
                        <p>ambilight</p>
                    </div>
                </div>
            </section>
        </div>
    )
}