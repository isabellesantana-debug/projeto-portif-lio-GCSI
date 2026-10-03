
 import "./App.css";

const cards = [
  {
    id: 1,
    title: "Equilibrium #3429",
    description: "Our Equilibrium collection promotes balance and calm.",
    price: "0.041 ETH",
    time: "3 days left",
    creator: "Jules Wyvern",
    image:
      "https://images.unsplash.com/photo-1634973357973-f2ed2657db3c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Digital Dream #128",
    description: "A unique digital artwork inspired by futuristic worlds.",
    price: "0.055 ETH",
    time: "5 days left",
    creator: "Alex Morgan",
    image:
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Cyber Space #721",
    description: "Explore a colorful universe created in the digital world.",
    price: "0.032 ETH",
    time: "2 days left",
    creator: "Lucas Stone",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80",
  },
];

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <span>◆</span> NFT Gallery
      </div>

      <nav>
        <a href="#">Home</a>
        <a href="#">Gallery</a>
        <a href="#">About</a>
      </nav>
    </header>
  );
}

function Card({ card }) {
  return (
    <article className="card">
      <div className="image-container">
        <img src={card.image} alt={card.title} />

        <div className="overlay">
          <span>👁</span>
        </div>
      </div>

      <h2>{card.title}</h2>

      <p className="description">{card.description}</p>

      <div className="info">
        <span className="price">◆ {card.price}</span>
        <span className="time">◷ {card.time}</span>
      </div>

      <div className="creator">
        <div className="avatar">👤</div>

        <p>
          Creation of <strong>{card.creator}</strong>
        </p>
      </div>
    </article>
  );
}

function CardList() {
  return (
    <section className="card-list">
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </section>
  );
}

function App() {
  return (
    <>
      <Header />

      <main className="page">
        <h1 className="page-title">NFT Collection</h1>
        <CardList />
      </main>
    </>
  );
}

export default App;