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
      counter: 0,
      gameOver: false
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

  //this function takes in a particular marker, as an argument, and checks if that player has won the game already
  winCondition = (marker) => {
    //destructuring this.state.squaresArray and this.state.counter as variables in the scope of this function
    let { squaresArray, counter, gameOver } = this.state
    let { autoResetBoard } = this

    //declaring a list of arrays that contain the indices of the winning combinations for tic-tac-toe
    let winningIdices =
    [
        [ 0, 1, 2 ],
        [ 3, 4, 5 ],
        [ 6, 7, 8 ],
        [ 0, 3, 6 ],
        [ 1, 4, 7 ],
        [ 2, 5, 8 ],
        [ 0, 4, 8 ],
        [ 2, 4, 6 ]
    ]

    //declaring the variable isThereAWinner
    //setting this variable to a boolean value
      //in one specific winningIndex, it works through the .every()
    let isThereAWinner = winningIdices.some(winningIndex => {
        //for each item in one winningIndex array, check if the marker at a specfic index in the squaresArray equals to the marker
        //return a boolen for each winningIndex array
        return winningIndex.every( index => {
            return squaresArray[index] === marker
        })
    })

    autoResetBoard(isThereAWinner, marker)
  }

  //this function takes in a string, as an argument, and alerts that message
  announce = (message) => {
    let { gameOver } = this.state
    gameOver = true

    alert(message)

    //sets the state of gameOver to true, ending the
    this.setState({
        gameOver: gameOver,
        counter: 0
    })
  }

  autoResetBoard = (isThereAWinner, marker) => {
    let { counter } = this.state
    let { announce, refreshPage } = this

    //if isThereAWinner is true, alert who has won
    if( isThereAWinner ) {
        announce(`${marker} Wins!`)
        setTimeout(function() {
          refreshPage()
        }, 150)
    }
    //else if the counter is 8, then it's a tied game
    else if(counter === 8) {
        announce("It's a tie! Both worthy opponents!")
        setTimeout(function() {
          refreshPage()
        }, 150)
    }
  }

  //this function refreshes the page
    //it is used mostly in the "New Game" Button and after a player has won
  refreshPage = () => {
    window.location.reload()
  }

  render() {
    //destructures this.state.squaresArray and this.state.counter into variables
    let { squaresArray, counter, gameOver } = this.state
    //destructures the placeMarker(), refreshPage() and winCondition() function
    let { placeMarker, refreshPage, winCondition } = this

    //maps through squaresArray
      //for every index of the squaresArray, render the Square component with the following props:
        //the index of the squaresArray (to be used in placeMarker()), squaresArray, counter, gameOver, placeMarker(), winCondition()
    let squares = this.state.squaresArray.map((square, index) => {
      return ( <
        Square

        //these are the props being passed to the Square component
        key = {
          index
        }
        index = {
          index
        }
        squaresArray = {
          squaresArray
        }
        counter = {
          counter
        }
        gameOver = {
          gameOver
        }
        placeMarker = {
          placeMarker
        }
        winCondition = {
          winCondition
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
