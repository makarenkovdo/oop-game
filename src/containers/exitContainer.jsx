import BaseItem from "../classes/items/baseItem"
import ExitModel from "../components/ExitModel"


export default function ExitContainer() {


const exitItem = new BaseItem(700, 700)

  return ( 

    
        <ExitModel exitItem={exitItem} />
  )


}