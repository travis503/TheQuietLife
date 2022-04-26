export default function DisplayModal(props) {

  // var openModal = () => {
  //   props.setOpenModal(true);
  // }

  var closeModal = () => {
    props.setOpenModal(false);
  }

  if (props.openModal) {
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