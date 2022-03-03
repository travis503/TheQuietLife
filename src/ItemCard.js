import React from 'react';

export default function ItemCard(props) {

  return (
    <div className={'itemCard'}>
      <img src={`qlemptycardbox.png`} alt={'An item'} />
      <div>{props.title}</div>
    </div>
  );
}