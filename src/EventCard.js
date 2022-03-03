import React from 'react';

export default function EventCard(props) {

  return (
    <div className="event tile card">
      <div>An event! {props.event.title}</div>
      <img src={`qlevent.png`} alt='Event Cards' />
    </div>
  )
}