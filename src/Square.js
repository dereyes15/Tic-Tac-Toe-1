import React, {
  Component
} from 'react';
import './Square.css';

class Square extends Component {

  determineTurn = () => {
    let { counter } = this.props
    let currentMarker

    if(counter % 2) {
      current = "🦄"
    } else {
      current = "🦆"
    }

    return currentMarker
  }

  handleClick = () => {
    let { index, squaresArray, counter, gameOver, placeMarker, winCondition } = this.props
    let { determineTurn } = this

    if( squaresArray[index] === "" ) {
      let currentMarker = determineTurn()
    }

    if(!gameOver){
      placeMarker( index, currentMarker )
    }

    if( counter > 4 ) {
      winCondition( currentMarker )
    }

  }

  render() {
    let { handleClick } = this
    let { squaresArray, index } = this.props
    
    return (
      <div onClick = { handleClick }>
        { squaresArray[index] }
      </div>
    );
  }
}

export default Square;
