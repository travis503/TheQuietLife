import React from 'react';

export default function ShopDisplay(props) {

  var openShop = () => {
    alert('Oops, no shop menu yet! >_>');
  }

  return (
    <div className="TownDisplay">
      <img src={`qlshop.png`} alt="Shop Display"></img>
      <br></br>
      <button onClick={openShop}>0 Stamina: Visit Store</button>
    </div>
  )
}