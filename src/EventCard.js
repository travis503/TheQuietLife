import React from 'react';
import DisplayModal from './DisplayModal.js';

export default function EventCard(props) {

  var openModal = () => {
    props.setOpenModal(true);
  }

  return (

    <div className="event tile card">
      <div>An event! {props.event.title}</div>
      <img onClick={openModal} src={`qlevent.png`} alt='Event Cards' />
      <DisplayModal event={props.event} openModal={props.openModal} setOpenModal={props.setOpenModal} />
    </div>
  )
}