import { useState } from 'react';
import './Sudoku.css';
const difficulty = [1,2,3];
const ChoosenDifficulty = 1;
const board = [
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,4,6,7,8,9],
    [1,2,3,4,-5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [-1,2,3,4,-5,6,7,8,-9],
];

const board2 = [
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,4,6,7,8,9],
    [1,2,3,4,-5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,-3,4,-5,6,7,-8,9],
];
const board3 = [
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,4,6,7,8,9],
    [1,2,3,4,-5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,-2,3,-4,5,-6,7,-8,9],
];


function Sudoku() {
 
    const [game,Setgame] = useState(null)
    let GameBoard = useState(board)
    
    function StartGame(){

        if(ChoosenDifficulty === 2){
            GameBoard = board2;
        }else if(ChoosenDifficulty === 3){
            GameBoard = board3;
        }else{
            GameBoard = board;
        }

       return <div class="board">
        {
            GameBoard.map((row,Rindex) => {
                return <div key={Rindex} class="row">
                    {
                        row.map((col,Cindex) => {

                            return <div key={Cindex} class="number">
                                {
                                     CheckEmptyNumber(Rindex,Cindex)
                                }
                            </div>
                        })
                    }

                </div>
            })
        }    
        </div>
     
    }

function CheckEmptyNumber(RowIndex, ColIndex ){
   var number = GameBoard[RowIndex][ColIndex];
    if(number > 0){
        return number
    }else{
        return ""
    }
}

  return (
    <div className="Sudoku">
        <label>Svårighetsgrad</label>
        
      <select  >
        {
            difficulty.map((diffi,index) => {
                return <option value={diffi}>{diffi}</option>
            })
        }
      </select>
      <button onClick={(() => Setgame(StartGame))}>Starta Spelet</button>
      {game}
    </div>
  );
}

export default Sudoku;



