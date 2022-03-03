import ItemCard from './ItemCard.js';

function InventoryTitles (props) {
  return (
    <div>
      {props.inventory.map((item, index) => {
        return(
          // <>
          // <div key={index}>{item.title}</div>
          <ItemCard key={index} label={item.label} title={item.title} effect={item.effect} />
          // </>
          )
      })}
    </div>
  )
}

export default function Playerbar(props) {
  return (
    <div className="playerbar toolbar">
      <InventoryTitles inventory={props.inventory} />
    </div>
  )
}