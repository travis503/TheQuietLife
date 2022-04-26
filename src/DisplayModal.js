export default function DisplayModal(props) {

  // var openModal = () => {
  //   props.setOpenModal(true);
  // }

  // var closeModal = () => {
  //   props.setOpenModal(false);
  // }

  var button1 = () => {
    props.event.button1();
  }

  var button2 = () => {
    props.event.button2();
  }

  if (props.openModal) {
    return (
      <div className="modal">
        <div>{props.event.title}</div>
        <img src={'qlevent.png'} alt='Event card' />
        <div>{props.event.description}</div>
        <button onClick={button1}>button1</button>
        <button onClick={button2}>button2</button>
      </div>
    )
  } else {
    return null;
  }
}