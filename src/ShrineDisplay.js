import React from 'react';

export default function ShrineDisplay(props) {

  var pray = () => {
    if (props.stamina >= 3) {
      props.setStamina(props.stamina - 3);
      console.log(`Prayers set to ${props.prayers} and luck set to ${props.luck}`);
      props.setLuck(props.luck + 1);
      props.setPrayers(props.prayers + 1);
    } else {
      alert('Not enough stamina!');
    }
  }

  return (
    <div className="FarmDisplay">
      <img src={`qlshrine.png`} alt="Shrine Display"></img>
      <br></br>
      <button onClick={pray}>3 Stamina: Pray at Shrine</button>
    </div>
  )
}