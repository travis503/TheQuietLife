import React, {useState} from 'react';

export default function EventCard(props) {

  const [eventModal, setEventModal] = useState(false);

  var openModal = () => {
    setEventModal(true);
  }

  var closeModal = () => {
    setEventModal(false);
  }

  function EventModal(props) {
    if (eventModal) {
      return (
        <div className="modal">
          <div>{props.event.title}</div>
          <img src={'qlevent.png'} alt='Event card' />
          <div>{props.event.description}</div>
          <button onClick={closeModal}>Close</button>
        </div>
      )
    } else {
      return null;
    }
  }

  return (

    <div className="event tile card">
      <div>An event! {props.event.title}</div>
      <img onClick={openModal} src={`qlevent.png`} alt='Event Cards' />
      <EventModal event={props.event} />
    </div>
  )
}