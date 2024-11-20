// Styling
import './App.css';

// Components
import StockCard from "./components/stockcard/StockCard.jsx";
import ProductCard from "./components/productcard/ProductCard.jsx";

// Data
import "./constants/inventory.js";
import {bestSellingTv, inventory} from "./constants/inventory.js"

// Functions
import getAmountProductsSold from "./helpers/getAmountProductsSold.js";
import getAmountProductsPurchased from "./helpers/getAmountProductsPurchased.js";
import getAmountProductsInStock from "./helpers/getAmountProductsInStock.js";
import getProductFullName from "./helpers/getProductFullName.js";
import getFormattedPrice from "./helpers/getFormattedPrice.js";
import getAvailableSizes from "./helpers/getAvailableSizes.js";


function App() {
    return (
        <main className="PageContainer">
            <h1>Tech it easy dashboard</h1>
            <section>
                <h2>Verkoopoverzicht</h2>
                <div className="SalesDashboard">
                    <StockCard
                        cardText={"Aantal verkochte producten"}
                        quantity={getAmountProductsSold(inventory)}
                        variant={"green"}
                    />
                    <StockCard
                        cardText={"Aantal ingekochte producten"}
                        quantity={getAmountProductsPurchased(inventory)}
                        variant={"blue"}
                    />
                    <StockCard
                        cardText={"Aantal te verkopen producten"}
                        quantity={getAmountProductsInStock(inventory)}
                        variant={"red"}
                    />
                </div>
            </section>
            <section>
                <h2>Best verkochte tv</h2>
                <ProductCard
                    title={getProductFullName(bestSellingTv)}
                    price={getFormattedPrice(bestSellingTv)}
                    sizes={getAvailableSizes(bestSellingTv)}
                    options={bestSellingTv.options}
                    imageSrc={bestSellingTv.sourceImg}
                    imageAlt={"Samsung 4K TV"}
                    variant={"featured"}
                />
            </section>
            <section>
                <h2>Alle TV's</h2>
                <button type="button" onClick={() => console.log(inventory.sort((a, b) => b.sold - a.sold))}>
                    Meest verkocht eerst
                </button>
                <button type="button" onClick={() => console.log(inventory.sort((a, b) => a.price - b.price))}>
                    Goedkoopste eerst
                </button>
                <button type="button"
                        onClick={() => console.log(inventory.sort((a, b) => b.refreshRate - a.refreshRate))}>
                    Meest geschikt voor sport eerst
                </button>
                <div>
                    {inventory.map(tv => (
                        <ProductCard
                            title={getProductFullName(tv)}
                            price={getFormattedPrice(tv)}
                            sizes={getAvailableSizes(tv)}
                            options={tv.options}
                            imageSrc={tv.sourceImg}
                            imageAlt={"Samsung 4K TV"}
                        />
                    ))}
                </div>
            </section>
        </main>
    )
}

export default App
