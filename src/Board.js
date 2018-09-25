import React, {
  Component
} from 'react';
import './Board.css';
import Square from './Square.js'

class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squaresArray: ["", "", "", "", "", "", "", "", ""],
      counter: 0
    }
  }

  //This function takes in two arguments - index and the marker of the current player
      //This function is passed to the Square component (its child) as props
      //The index is determined by the .map() in the render
      //The currentMarker is determined by the marker of the current player in the Square component
  placeMarker = (index, currentMarker) => {
      //destructure the two states, squaresArray and counter, to interact with and update
      let { squaresArray, counter } = this.state

      //place the current player's marker on the board
      //it also add the current marker to the squaresArray
      //this will display the marker of the current player on the board
      squaresArray[ index ] = currentMarker

      //updates the state squaresArray and counter
        //sets this.state.squaresArray to the destructed squaresArray variable
        //increases this.state.counter by one to determine whose turn it is
      this.setState({
          squaresArray: squaresArray,
          counter: counter + 1
      })

  }


  //this function refreshes the page
    //it is used mostly in the "New Game" Button and after a player has won
  refreshPage = () => {
    window.location.reload()
  }

  render() {
    //destructures this.state.squaresArray and this.state.counter into variables
    let { squaresArray, counter } = this.state
    //destructures the placeMarker() and refreshPage() function
    let { placeMarker, refreshPage } = this

    //maps through squaresArray
      //for every index of the squaresArray, render the Square component with the following props:
        //the index of the squaresArray (to be used in placeMarker()), this.state.counter, squaresArray, placeMarker()
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
