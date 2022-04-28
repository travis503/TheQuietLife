import React from 'react';

export default function MineDisplay(props) {

  var workMine = () => {
    if (props.stamina >= 5) {
      props.setStamina(props.stamina - 5);
      console.log(`Worked the mines!`);
      props.setCoins(props.coins + 3);
    } else {
      alert('Not enough stamina!');
    }
  }

  return (
    <div className="FarmDisplay">
      <img src={`qlmines.png`} alt="Mine Display"></img>
      <br></br>
      <button onClick={workMine}>5 Stamina: Work at Mines</button>
    </div>
  )
}