import React,{useState} from 'react'
import WhiteBoard from './WhiteBoard'
import "./container.css";
function Container() {
    const [color,setColor] = useState("#000")
    const [brushsize,setBrushsize] = useState(5) 
    return (
        <div className="container">
            <div className="color-picker-container">
                <input type="color" value={color} onChange={(e)=>setColor(e.target.value)}/>
            </div>
            <div className="size-picker-container">
                select size
                <select value={brushsize} onChange={(e)=>{setBrushsize(e.target.value)}}>
                    <option>5</option>
                    <option>10</option>
                    <option>20</option>
                    <option>30</option>
                </select>
            </div>
            <div className="board-container">
                <WhiteBoard color={color} size={brushsize} />
            </div>
        </div>
    )
}

export default Container
