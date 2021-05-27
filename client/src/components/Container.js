import React from 'react'
import WhiteBoard from './WhiteBoard'
import "./container.css";
function Container() {
    return (
        <div className="container">
            <div className="color-picker-container">
                <input type="color" />
            </div>
            <div className="board-container">
                <WhiteBoard />
            </div>
        </div>
    )
}

export default Container
