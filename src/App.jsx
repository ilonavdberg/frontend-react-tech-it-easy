import './App.css';

import ProductsSoldCard from "./components/ProductsSoldCard.jsx";
import ProductsPurchasedCard from "./components/ProductsPurchasedCard.jsx";
import ProductsInStockCard from "./components/ProductsInStockCard.jsx";
import ProductDetailsCard from "./components/ProductDetailsCard.jsx";

function App() {
    return (
        <div className="Wrapper">
            <section>
                <h1>Tech it easy dashboard</h1>
            </section>
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
                <button type="button" onClick={() => console.log('Meest verkocht eerst')}>
                    Meest verkocht eerst
                </button>
                <button type="button" onClick={() => console.log('Goedkoopste eerst')}>
                    Goedkoopste eerst
                </button>
                <button type="button" onClick={() => console.log('Meest geschikt voor sport eerst')}>
                    Meest geschikt voor sport eerst
                </button>
            </section>
        </div>
    )
}

export default App
