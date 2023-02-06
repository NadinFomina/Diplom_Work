import React from "react";
import '../style/squre.css'

const Squre = (props) => {
    return (
        <button className="squre"  onClick ={props.onClick}>{props.value}</button>
    )
}
export default Squre;
// style={'X' ? 'isActiveX' : ' '} 