import { useState } from "react";

export default function LudoGame(){
    let [moves, setMoves] = useState({blue:0, yellow:0, green:0, red:0});
    let [color, setColor] = useState(["no Color"]);

    let updateArray = ()=>{
        setColor((preColor)=>{
            return [...preColor, "colorAdded"];
        });
    };

    let updateBlue = ()=>{
        //console.log(`moves.blue = ${moves.blue}`);
        setMoves((preMoves)=>{
            return {...preMoves, blue: preMoves.blue + 1};
        });
    };

    let updateYellow = ()=>{
        setMoves((preMoves)=>{
            return {...preMoves, yellow: preMoves.yellow + 1};
        });
    };

    let updateGreen = ()=>{
        setMoves((preMoves)=>{
            return {...preMoves, green: preMoves.green + 1};
        });
    };

    let updateRed = ()=>{
        setMoves((preMoves)=>{
            return {...preMoves, red: preMoves.red + 1};
        });
    };

    return (
        <div>
            <p>Game begins!</p>
            <div className="board">
                <p>Array demo: {color}</p>
                <button style={{backgroundColor:"gray", width:"100px",height:"40px"}} onClick={updateArray}>Add in Array</button>
                <p>Blue moves = {moves.blue}</p>
                <button style={{backgroundColor:"blue", width:"100px",height:"40px"}} onClick={updateBlue}>+1</button>
                <p>Yellow moves = {moves.yellow}</p>
                <button style={{backgroundColor:"yellow", width:"100px",height:"40px"}} onClick={updateYellow}>+1</button>
                <p>Green moves = {moves.green}</p>
                <button style={{backgroundColor:"green", width:"100px",height:"40px"}} onClick={updateGreen}>+1</button>
                <p>Red moves = {moves.red}</p>
                <button style={{backgroundColor:"red", width:"100px",height:"40px"}} onClick={updateRed}>+1</button>
            </div>
        </div>
    );
}