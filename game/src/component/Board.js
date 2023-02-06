import React from "react";
import '../style/board.css'
import Squre from './Squre'
const Board = ({squres, click}) => {
    return (
        <div className="board">
         {squres.map((squre,i)=>
            <Squre key={i} value={squre} onClick={()=>click(i)}/>
         )}
        </div>
    )
}
export default Board;