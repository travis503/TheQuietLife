import React from 'react';

export default function TownDisplay(props) {

  var visitTown = () => {
    if (props.stamina >= 4) {
      props.setStamina(props.stamina - 4);
      console.log(`Community increased by 1 and is now ${props.community}`);
      props.setCommunity(props.community + 1);
    } else {
      alert('Not enough stamina!');
    }
  }

  return (
    <div className="TownDisplay">
      <img src={`qltown.png`} alt="Town Display"></img>
      <br></br>
      <button onClick={visitTown}>4 Stamina: Visit the Town</button>
    </div>
  )
}