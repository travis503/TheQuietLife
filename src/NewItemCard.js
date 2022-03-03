import React, {useState} from 'react';

export default function NewItemCard(props) {

  var addCard = () => {
    if (!props.claimed) {
      props.setInventory([...props.inventory, props.newItem]);
      props.setClaimed(true);
    }
  }

  return (
    <div className="newItem tile card" onClick={addCard}>
      <div>You found a new item: {props.newItem['title']}</div>
      <img src={`qlnewitem.png`} alt='Item Cards' />
    </div>
  )
}
// Git test