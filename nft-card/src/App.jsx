import "./App.css";

function App() {
  return (
    <main className="page">
      <div className="card">
        <div className="image-container">
          <img
            src="https://images.unsplash.com/photo-1634973357973-f2ed2657db3c?auto=format&fit=crop&w=800&q=80"
            alt="NFT artwork"
          />
          <div className="overlay">👁</div>
        </div>

        <h1>Equilibrium #3429</h1>

        <p className="description">
          Our Equilibrium collection promotes balance and calm.
        </p>

        <div className="info">
          <span className="price">◆ 0.041 ETH</span>
          <span className="time">◷ 3 days left</span>
        </div>

        <div className="creator">
          <div className="avatar">👤</div>
          <p>
            Creation of <strong>Jules Wyvern</strong>
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;