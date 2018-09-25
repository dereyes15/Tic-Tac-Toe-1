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
      squaresArray: ["", "", "", "", "", "", "", "", ""],
      counter: 0
    }
  }

  placeMarker = (index, currentPlayer) => {
      let { squaresArray, counter } = this.state

      squaresArray[ index ] = currentPlayer

      this.setState({
          squaresArray: squaresArray,
          counter: counter + 1
      })

  }



  refreshPage = () => {
    window.location.reload()
  }

  render() {
    let { squaresArray, counter } = this.state
    let { placeMarker, refreshPage } = this

    let squares = this.state.squaresArray.map((square, index) => {
      return ( <
        Square
        index = {
          index
        }
        counter = {
          counter
        }
        squaresArray = {
          squaresArray
        }
        placeMarker = {
          placeMarker
        }
        />
      )
    })

    return (
      <main className = "Main" >
        <header className = "Board-header"> TIC - TAC - TOE </header>

        {squares}

        <div className = "buttonSpace" >
          <button type = "button" onClick = { refreshPage } >
           <span> New Game </span>
          </button>
        </div>

      </main>


  );
}
}

export default Board;
