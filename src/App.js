import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [amount, setAmount] = useState(0);
  const onSubmit = (event) => {
    event.preventDefault();
    setAmount(0);
  };
  const onChange = (event) => {
    setAmount(event.target.value);
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> : null}
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={amount}
          type="number"
          placeholder="Write the amount"
        />
        <button>Click</button>
      </form>
      <ul>
        {coins.map((coin) => (
          <li key={coin.id}>
            {coin.name} ({coin.symbol}) : {amount / coin.quotes.USD.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
