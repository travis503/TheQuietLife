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
        <img src={'qlevent.png'} alt='Modal display' />
        <div>{props.event.description}</div>
        <button onClick={button1}>{props.event.button1name}</button>
        {props.event.button2name !== "None" &&
          <button onClick={button2}>{props.event.button2name}</button>
        }
      </div>
    )
  } else {
    return null;
  }
}