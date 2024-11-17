import './App.css';

import ProductsSoldCard from "./components/ProductsSoldCard.jsx";
import ProductsPurchasedCard from "./components/ProductsPurchasedCard.jsx";
import ProductsInStockCard from "./components/ProductsInStockCard.jsx";
import ProductDetailsCard from "./components/ProductDetailsCard.jsx";

import "./constants/inventory.js";
import {inventory} from "./constants/inventory.js"
import ProductCatalog from "./components/ProductCatalog.jsx";

function App() {
    return (
        <main className="page-container">
            <h1>Tech it easy dashboard</h1>
            <section>
                <h2>Verkoopoverzicht</h2>
                <div className="SalesOverview">
                    <ProductsSoldCard/>
                    <ProductsPurchasedCard/>
                    <ProductsInStockCard/>
                </div>
            </section>
            <section>
                <h2>Best verkochte tv</h2>
                <ProductDetailsCard/>
            </section>
            <section>
                <h2>Alle TV's</h2>
                <button type="button" onClick={() => console.log(inventory.sort((a,b) => b.sold - a.sold))}>
                    Meest verkocht eerst
                </button>
                <button type="button" onClick={() => console.log(inventory.sort((a,b) => a.price - b.price))}>
                    Goedkoopste eerst
                </button>
                <button type="button" onClick={() => console.log(inventory.sort((a,b) => b.refreshRate - a.refreshRate))}>
                    Meest geschikt voor sport eerst
                </button>
                <ProductCatalog/>
            </section>
        </main>
    )
}

export default App
