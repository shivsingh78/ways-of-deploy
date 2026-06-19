import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="app">
      <section className="card" aria-labelledby="title">
        <span className="eyebrow">React + Vite</span>
        <h1 id="title">Your React app is ready.</h1>
        <p>
          This is a small starter screen. Edit <code>src/App.jsx</code> to begin
          building your project.
        </p>
        <button type="button" onClick={() => setCount((current) => current + 1)}>
          Clicked {count} {count === 1 ? 'time' : 'times'}
        </button>
      </section>
    </main>
  )
}

export default App
