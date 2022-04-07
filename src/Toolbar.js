export default function Toolbar(props) {
  return (
    <div className="toolbar">
      <div className="calendar">{props.season} {props.day}</div>
      <div className="toolbarRight">Stamina: {props.stamina} Coins: {props.coins} Community: {props.community}</div>
    </div>
  )
}