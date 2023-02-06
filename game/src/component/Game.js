import React from "react";
import { useState } from "react";
import '../style/game.css'
import "../style/squre.css"
import Board from "./Board";
import { calculateWinner } from "../helper";
const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null))// доска с 9ю ячейками
    const [xIsNext, setXisNext] = useState(true) // массив кто ходит
    const winner = calculateWinner(board);
    const handelClick = (index) => {
        const newBoard = [...board]
        // Определение был ли клик по  ячейке или игра закончилась
        if (winner || newBoard[index]) return
        // определить чей ход Х?О
        newBoard[index] = xIsNext ? 'X' : 'O'
        // обновить состояние
        setBoard(newBoard)
        setXisNext(!xIsNext)

    }
    const startNewGame = () => {
        return (
            <button className="start_btn" onClick={()=>setBoard(Array(9).fill(null))}> Начать заново</button>
        )
    }

    return (
        <div className="game">
            <h3 className="text_game">{winner ? "Выйграл игрок -" + " " + winner : "Сейчас ход -" + " " + (xIsNext ? "X" : "O" ) }</h3>
            <Board squres={board} style={xIsNext ? "isActiveX" : " "} click={handelClick} />
            {startNewGame()}
        </div>
    )
}
export default Game;