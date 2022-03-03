export default function Toolbar(props) {
  return (
    <div className="toolbar">
      Toolbar goes here
      <div className="calendar">{props.season} {props.day}</div>
    </div>
  )
}