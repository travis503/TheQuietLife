export default function Toolbar(props) {
  return (
    <div className="toolbar">
      <div className="stamina">Stamina: {props.stamina}</div>
      <div className="calendar">{props.season} {props.day}</div>
    </div>
  )
}