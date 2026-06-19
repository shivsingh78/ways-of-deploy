import { useState } from 'react'

const products = [
  { id: 1, name: 'Everyday Tee', price: 28, tone: 'sand' },
  { id: 2, name: 'Canvas Tote', price: 36, tone: 'blue' },
  { id: 3, name: 'Ceramic Mug', price: 22, tone: 'rose' },
]

function App() {
  const [cartCount, setCartCount] = useState(0)

  return (
    <main className="app">
      <header className="header">
        <a className="logo" href="#top">morrow</a>
        <nav aria-label="Main navigation">
          <a href="#shop">Shop</a>
          <a href="#about">About</a>
        </nav>
        <button className="cart" type="button" aria-label={`Cart, ${cartCount} items`}>
          Bag <span>{cartCount}</span>
        </button>
      </header>

      <section className="hero" id="top">
        <p className="eyebrow">Small things, well made</p>
        <h1>Objects for everyday rituals.</h1>
        <a className="shop-link" href="#shop">Shop the collection <span aria-hidden="true">→</span></a>
      </section>

      <section className="products" id="shop" aria-labelledby="shop-title">
        <div className="section-heading">
          <h2 id="shop-title">Featured</h2>
          <p>Thoughtful essentials for the everyday.</p>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <article className="product" key={product.id}>
              <div className={`product-image ${product.tone}`} aria-hidden="true">
                <span>{product.name.slice(0, 1)}</span>
              </div>
              <div className="product-details">
                <div>
                  <h3>{product.name}</h3>
                  <p>${product.price}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setCartCount((current) => current + 1)}
                  aria-label={`Add ${product.name} to bag`}
                >
                  Add
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer id="about">© 2026 Morrow Goods</footer>
    </main>
  )
}

export default App
