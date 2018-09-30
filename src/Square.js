import React, {
  Component
} from 'react';
import './Square.css'

class Square extends Component {

  determineTurn = () => {
    let { counter } = this.props
    let currentMarker

    if(counter % 2) {
      currentMarker = "🦄"
    } else {
      currentMarker = "🦆"
    }

    return currentMarker
  }

  handleClick = () => {
    let { index, squaresArray, counter, gameOver, placeMarker, winCondition } = this.props
    let { determineTurn } = this
    let currentMarker

    console.log(squaresArray[index]);
    if( squaresArray[index] === "" ) {
      currentMarker = determineTurn()

      if(!gameOver){
        placeMarker( index, currentMarker )
      }
    }

    if( counter > 3 ) {
      winCondition( currentMarker )
    }

  }

  render() {
    let { handleClick } = this
    let { squaresArray, index } = this.props

    return (
      <section onClick = { handleClick }>
        { squaresArray[index] }
      </section>
    );
  }
}

export default Square
