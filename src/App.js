import BasketballPlayerCard from "./components/basketballPlayerCard/BasketballPlayerCard";
import player from './assets/player.webp'
import "./App.css";

function App() {
  return (
    <div className="App">
      <BasketballPlayerCard
        name="LeBron James"
        image={player}
        position="Forward"
        stats={{
          pointsPerGame: 25.4,
          assistsPerGame: 7.1,
          reboundsPerGame: 10.5,
        }}
      />
    </div>
  );
}

export default App;
