import React from 'react';

export default function FarmDisplay(props) {

  var tendFarm = () => {
    if (props.stamina >= 6) {
      if (props.farmGrowth >= 8) {
        props.setStamina(props.stamina - 6);
        harvest();
        props.setTendOrHarvest('Tend');
      }
      if (props.farmGrowth < 8) {
        props.setStamina(props.stamina - 6);
        if (props.farmGrowth === 7) {
          props.setTendOrHarvest('Harvest');
        }
        props.setFarmGrowth(props.farmGrowth + 1);
        if (props.setFarmWeeds > 0) {
          props.setFarmWeeds(props.farmWeeds - 1);
        }
      }
      console.log(`You tended the farm! You now have ${props.farmGrowth+1} growth and ${props.farmWeeds-1} weeds.`);
    } else {
      alert('Not enough stamina!');
    }
  }

  var harvest = () => {
    props.setCoins(props.coins + props.farmGrowth - props.farmWeeds);
    props.setFarmGrowth(0);
    props.setFarmWeeds(0);
    console.log(`You harvested your crops and earned ${props.farmGrowth - props.farmWeeds} coins!`);
  }

  return (
    <div className="FarmDisplay">
      <img src={`qlfarmdisplay.png`} alt="Farm Display"></img>
      <br></br>
      <button onClick={tendFarm}>6 Stamina: {props.tendOrHarvest} the Farm</button>
    </div>
  )
}