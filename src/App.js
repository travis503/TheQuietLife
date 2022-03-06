import { useState } from 'react';
import WeatherCard from './WeatherCard.js';
import EndTurnButton from './EndTurnButton.js';
import EventCard from './EventCard.js';
import Toolbar from './Toolbar.js';
import NewItemCard from './NewItemCard.js';
import PlayerBar from './PlayerBar.js';

function App() {

  const [weather, setWeather] = useState('sunny');
  const [event, setEvent] = useState(    {
    'label': 0,
    'title': 'A fine day.',
    'effect': 'None',
  });
  const [season, setSeason] = useState('Spring');
  const [day, setDay] = useState(1);
  const [newItem, setNewItem] = useState({
    'label': 0,
    'title': 'a rock',
    'effect': 'None',
  });
  const [inventory, setInventory] = useState([]);
  const [claimed, setClaimed] = useState(false);
  const [stamina, setStamina] = useState(12);
  const [coins, setCoins] = useState(10);
  const [coinCost, setCoinCost] = useState(0);

  var spendStamina = () => {
    if (stamina > 0) {
      setStamina(stamina - 1);
    }
  }

  var spendCoins = (e) => {
    e.preventDefault();
    if (coins >= coinCost) {
      setCoins(coins - coinCost);
    } else {
      alert('Not enough coins!');
    }
  }

  var coinCoster = (e) => {
    setCoinCost(e.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>The Quiet Life</h2>
      </header>
      <Toolbar season={season} day={day} stamina={stamina} coins={coins} />
      <WeatherCard weather={weather} setWeather={setWeather} />
      <EventCard event={event} setEvent={setEvent}/>
      <NewItemCard newItem={newItem} setNewItem={setNewItem} inventory={inventory} setInventory={setInventory} claimed={claimed} setClaimed={setClaimed} />
      <button className="endTurnButton" onClick={spendStamina}>Spend Stamina</button>
      <br></br>
      <input type="number" onChange={coinCoster} className="endTurnButton"/>
      <button onClick={spendCoins} className="endTurnButton">Spend coins</button>
      <br></br>
      <EndTurnButton setWeather={setWeather} setEvent={setEvent} day={day} setDay={setDay} season={season} setSeason={setSeason} setNewItem={setNewItem} setClaimed={setClaimed} setStamina={setStamina} />
      <PlayerBar inventory={inventory} setInventory={setInventory} />
    </div>
  );
}

export default App;
