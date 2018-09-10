import React, {
  Component
} from 'react';
import './Board.css';
import Square from './Square.js'
// import WinCondition from './winCondition.js'

class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squaresArray: ["0", "1", "2", "3", "4", "5", "6", "7", "8"],
      turn: "p1"
    }
  }

  turnSwitcher = (boolean) => {
    let newTurn = this.state.turn

    if (boolean) {

      return
    } else if (newTurn === "p1") {
      newTurn = "p2"
      this.setState({
        turn: newTurn
      })
    } else {
      newTurn = "p1"
      this.setState({
        turn: newTurn
      })
    }
    console.log(this.state.turn);
  }

  refreshPage = () => {
    window.location.reload()
  }

  render() {
    let squares = this.state.squaresArray.map((square, index) => {
      console.log(squares)
      return ( <
        Square value = {
          index
        }
        refreshPage = {
          this.refreshPage
        }
        turnSwitcher = {
          this.turnSwitcher
        }
        turn = {
          this.state.turn
        }
        squaresArray = {
          this.state.squaresArray
        }
        />
      )
    })

    return ( <
        main className = "Main" >
        <
        header className = "Board-header" > TIC - TAC - TOE < /header> {
        squares
      }

      <
      div className = "buttonSpace" >
      <
      button type = "button"
    onClick = {
        this.refreshPage
      } > < span > New Game < /span> </button >
      <
      /div>

      <
      /main>


  );
}
}

export default Board;