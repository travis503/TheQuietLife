import { useState } from 'react';
import WeatherCard from './WeatherCard.js';
import EndTurnButton from './EndTurnButton.js';
import EventCard from './EventCard.js';
import Toolbar from './Toolbar.js';
import NewItemCard from './NewItemCard.js';
import PlayerBar from './PlayerBar.js';
import FarmDisplay from './FarmDisplay.js';
import ShrineDisplay from './ShrineDisplay.js';
import TownDisplay from './TownDisplay.js';
import MineDisplay from './MineDisplay.js';
import ShopDisplay from './ShopDisplay.js';

function App() {

  const [weather, setWeather] = useState('sunny');
  const [event, setEvent] = useState(    {
    'label': 0,
    'title': 'A fine day.',
    'effect': 'None',
    'description': 'This day is fine!',
    'button1': function() {alert('You pushed the button!')},
    'button2': function() {setOpenModal(false)},
    'button1name': 'Push the button!',
    'button2name': 'Close',
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
  // const [coinCost, setCoinCost] = useState(0);
  const [farmGrowth, setFarmGrowth] = useState(0);
  const [farmWeeds, setFarmWeeds] = useState(0);
  const [tendOrHarvest, setTendOrHarvest] = useState('Tend');
  const [luck, setLuck] = useState(5);
  const [prayers, setPrayers] = useState(0);
  const [community, setCommunity] = useState(0);
  const [openModal, setOpenModal] = useState(false);


  const eventList = [
    {
      'label': 0,
      'title': 'A fine day.',
      'effect': 'None',
      'description': 'This day is fine!',
      'button1': function() {alert('You pushed the button!')},
      'button2': function() {setOpenModal(false)},
      'button1name': 'Push the button!',
      'button2name': 'Close',
    },
    {
      'label': 1,
      'title': 'A great day.',
      'effect': 'None',
      'description': 'This day is great!',
      'button1': function() {alert('You pushed the button!')},
      'button2': function() {setOpenModal(false)},
      'button1name': 'Push the button!',
      'button2name': 'Close',
    },
    {
      'label': 2,
      'title': 'An excellent day.',
      'effect': 'None',
      'description': 'This day is excellent!',
      'button1': function() {alert('You pushed the button!')},
      'button2': function() {setOpenModal(false)},
      'button1name': 'Push the button!',
      'button2name': 'Close',
    },
    {
      'label': 3,
      'title': 'A lousy day.',
      'effect': 'None',
      'description': 'This day is lousy.',
      'button1': function() {alert('You pushed the button!')},
      'button2': function() {setOpenModal(false)},
      'button1name': 'Push the button!',
      'button2name': 'Close',
    },
  ]
  // var spendStamina = () => {
  //   if (stamina > 0) {
  //     setStamina(stamina - 1);
  //   }
  // }

  // var spendCoins = (e) => {
  //   e.preventDefault();
  //   if (coins >= coinCost) {
  //     setCoins(coins - coinCost);
  //   } else {
  //     alert('Not enough coins!');
  //   }
  // }

  // var coinCoster = (e) => {
  //   setCoinCost(e.target.value);
  // }

  return (
    <div className="App">
      <header className="App-header">
        <h2>The Quiet Life</h2>
      </header>
      <Toolbar season={season} day={day} stamina={stamina} coins={coins} community={community} />
      <FarmDisplay tendOrHarvest={tendOrHarvest} setTendOrHarvest={setTendOrHarvest} stamina={stamina} setStamina={setStamina} coins={coins} setCoins={setCoins} farmGrowth={farmGrowth} setFarmGrowth={setFarmGrowth} farmWeeds={farmWeeds} setFarmWeeds={setFarmWeeds}/>
      <ShopDisplay />
      <WeatherCard weather={weather} setWeather={setWeather} />
      <TownDisplay community={community} setCommunity={setCommunity} stamina={stamina} setStamina={setStamina} />
      <ShrineDisplay stamina={stamina} setStamina={setStamina} luck={luck} setLuck={setLuck} prayers={prayers} setPrayers={setPrayers} />
      <EventCard event={event} setEvent={setEvent} openModal={openModal} setOpenModal={setOpenModal}/>
      <MineDisplay stamina={stamina} setStamina={setStamina} coins={coins} setCoins={setCoins} />
      <NewItemCard newItem={newItem} setNewItem={setNewItem} inventory={inventory} setInventory={setInventory} claimed={claimed} setClaimed={setClaimed} />
      {/* <button className="endTurnButton" onClick={spendStamina}>Spend Stamina</button>
      <br></br>
      <input type="number" onChange={coinCoster} className="endTurnButton"/>
      <button onClick={spendCoins} className="spendCoinsButton">Spend coins</button>
      <br></br> */}
      <EndTurnButton tendOrHarvest={tendOrHarvest} setTendOrHarvest={setTendOrHarvest} farmGrowth={farmGrowth} setFarmGrowth={setFarmGrowth} farmWeeds={farmWeeds} setFarmWeeds={setFarmWeeds} setWeather={setWeather} eventList={eventList} setEvent={setEvent} day={day} setDay={setDay} season={season} setSeason={setSeason} setNewItem={setNewItem} setClaimed={setClaimed} setStamina={setStamina} />
      <PlayerBar inventory={inventory} setInventory={setInventory} />
    </div>
  );
}

export default App;