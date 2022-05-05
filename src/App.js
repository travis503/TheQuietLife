import { useState, useRef } from 'react';
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
    'description': 'Up and at \'em. Your luck is slightly increased today.',
    'button1': function() {
      setLuck(luck + 1);
      setLuckModifier(1);
      setOpenModal(false);},
    'button2': function() {alert('That button shouldn\'t be there! Tell Travis about this, then press the other one.')},
    'button1name': 'Nifty.',
    'button2name': 'None',
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
  const staminaRef = useRef({});
  staminaRef.current = stamina;
  const [coins, setCoins] = useState(10);
  const coinsRef = useRef({});
  coinsRef.current = coins;
  // const [coinCost, setCoinCost] = useState(0);
  const [farmGrowth, setFarmGrowth] = useState(0);
  const [farmWeeds, setFarmWeeds] = useState(0);
  const [tendOrHarvest, setTendOrHarvest] = useState('Tend');
  const [luck, setLuck] = useState(5);
  const luckRef = useRef({});
  luckRef.current = luck;
  const [luckModifier, setLuckModifier] = useState(0);
  const [prayers, setPrayers] = useState(0);
  const [community, setCommunity] = useState(0);
  const communityRef = useRef({});
  communityRef.current = community;
  const [openModal, setOpenModal] = useState(false);


  const eventList = [
    {
      'label': 0,
      'title': 'A fine day.',
      'effect': 'None',
      'description': 'Up and at \'em. Your luck is slightly increased today.',
      'button1': function() {
        setLuck(luckRef.current + 5);
        setLuckModifier(5);
        setOpenModal(false);},
      'button2': function() {alert('That button shouldn\'t be there! Tell Travis about this, then press the other one.')},
      'button1name': 'Nifty.',
      'button2name': 'None',
    },
    {
      'label': 1,
      'title': 'A great day.',
      'effect': 'None',
      'description': 'You slept like a log, and you\'re ready to tackle the day! Luck is increased today.',
      'button1': function() {
        setLuck(luckRef.current + 10);
        setLuckModifier(10);
        setOpenModal(false);},
      'button2': function() {alert('That button shouldn\'t be there! Tell Travis about this, then press the other one.')},
      'button1name': 'Great!',
      'button2name': 'None',
    },
    {
      'label': 2,
      'title': 'An excellent day.',
      'effect': 'None',
      'description': 'You feel unstoppable! Luck is greatly increased today.',
      'button1': function() {
        setLuck(luckRef.current + 25);
        setLuckModifier(25);
        setOpenModal(false);},
      'button2': function() {alert('That button shouldn\'t be there! Tell Travis about this, then press the other one.')},
      'button1name': 'Amazing!',
      'button2name': 'None',
    },
    {
      'label': 3,
      'title': 'A lousy day.',
      'effect': 'None',
      'description': 'You didn\'t sleep very well. Luck is reduced today.',
      'button1': function() {
        setLuck(luckRef.current - 10);
        setLuckModifier(-10);
        setOpenModal(false);},
      'button2': function() {alert('That button shouldn\'t be there! Tell Travis about this, then press the other one.')},
      'button1name': 'Phooey...',
      'button2name': 'None',
    },
    {
      'label': 4,
      'title': 'Something shiny!',
      'effect': 'None',
      'description': 'You found a coin that somebody dropped on the ground. Lucky you!',
      'button1': function() {
        setCoins(coinsRef.current + 1);
        setOpenModal(false);},
      'button2': function() {alert('That button shouldn\'t be there! Tell Travis about this, then press the other one.')},
      'button1name': 'I\'ll take that!',
      'button2name': 'None',
    },
    {
      'label': 5,
      'title': 'An uncommon offer.',
      'effect': 'None',
      'description': 'The supply shop has a package of high-quality weedkiller on sale. It\'s more expensive than your usual brand, but if your farm is in a bit of state, this could definitely put you back on track.',
      'button1': function() {
        setCoins(coinsRef.current - 2);
        setFarmWeeds(0);
        setOpenModal(false);},
      'button2': function() {setOpenModal(false)},
      'button1name': 'I\'ll take it! (-2 coins)',
      'button2name': 'I\'ll pass.',
    },
    {
      'label': 6,
      'title': 'A stranded villager.',
      'effect': 'None',
      'description': 'You receive a phone call from Roland, a local businessman. "My car broke down on the way to town! Could you pick me up and give me a ride?" It\'s pretty far out of your way, but he would be grateful.',
      'button1': function() {
        if (staminaRef.current >= 4) {
          setStamina(staminaRef.current - 4);
          setCommunity(communityRef.current + 1);
          setOpenModal(false);
        } else {
          alert('Not enough stamina!');
        }
      },
      'button2': function() {setOpenModal(false)},
      'button1name': 'Sure, be right there! (-4 stamina, +1 community)',
      'button2name': 'Sorry, can you call someone else?',
    },
    {
      'label': 7,
      'title': 'Community involvement.',
      'effect': 'None',
      'description': 'Mayor Townsend is asking townsfolk how the community improvement fund should be allocated. He has narrowed the fund\'s useage down to two projects: restoring and cleaning the forest shrine, or making improvements to the local park. How would you vote?',
      'button1': function() {
        setLuck(luckRef.current + 2);
        setOpenModal(false);
      },
      'button2': function() {
        setCommunity(communityRef.current + 2);
        setOpenModal(false);
      },
      'button1name': 'Renovate the shrine. (+2 luck)',
      'button2name': 'Improve the park. (+2 community)',
    },
    {
      'label': 8,
      'title': 'Clearing out the clutter.',
      'effect': 'None',
      'description': 'Your garage is getting a little crowded, and some of your old junk hasn\'t seen use is years. It\'s time to let some of it go. Much of it is still in good enough condition to sell, although much of it could be donated to those in need instead.',
      'button1': function() {
        setCommunity(communityRef.current + 3);
        setOpenModal(false);
      },
      'button2': function() {
        setLuck(luckRef.current + 3);
        setOpenModal(false);
      },
      'button1name': 'Sell it. (+3 gold)',
      'button2name': 'Donate it. (+3 community)',
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
      <EventCard event={event} setEvent={setEvent} openModal={openModal} setOpenModal={setOpenModal} claimed={claimed} setClaimed={setClaimed} />
      <MineDisplay stamina={stamina} setStamina={setStamina} coins={coins} setCoins={setCoins} />
      <NewItemCard newItem={newItem} setNewItem={setNewItem} inventory={inventory} setInventory={setInventory} claimed={claimed} setClaimed={setClaimed} />
      {/* <button className="endTurnButton" onClick={spendStamina}>Spend Stamina</button>
      <br></br>
      <input type="number" onChange={coinCoster} className="endTurnButton"/>
      <button onClick={spendCoins} className="spendCoinsButton">Spend coins</button>
      <br></br> */}
      <EndTurnButton tendOrHarvest={tendOrHarvest} setTendOrHarvest={setTendOrHarvest} farmGrowth={farmGrowth} setFarmGrowth={setFarmGrowth} farmWeeds={farmWeeds} setFarmWeeds={setFarmWeeds} setWeather={setWeather} eventList={eventList} setEvent={setEvent} day={day} setDay={setDay} season={season} setSeason={setSeason} setNewItem={setNewItem} setClaimed={setClaimed} setStamina={setStamina} luck = {luck} setLuck={setLuck} luckModifier={luckModifier} setLuckModifier={setLuckModifier} />
      <PlayerBar inventory={inventory} setInventory={setInventory} />
    </div>
  );
}

export default App;