import React, {
  Component
} from 'react';
import './Square.css';

var winChecker = []

class Square extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggle: " ",
      amIFull: false,
    }
  }

  handleToggle = (e) => {
    let marker = this.state.toggle
    let {
      amIFull
    } = this.state
    let {
      turn
    } = this.props
    let winningArray = winChecker


    if (marker === "🦄" || marker === "🦆") {
      return

    } else if (turn === "p1") {
      marker = "🦄"
      winningArray[this.props.value] = marker
      amIFull = true
      this.setState({
        toggle: marker,
        winchecker: winningArray,
        amIFull: amIFull
      })

    } else if (turn === "p2") {
      marker = "🦆"
      winningArray[this.props.value] = marker
      amIFull = true
      this.setState({
        toggle: marker,
        winchecker: winningArray,
        amIFull: amIFull
      })

    }
  }


  clicked = (e) => {
    this.handleToggle()
    this.props.turnSwitcher(this.state.amIFull)
    console.log(this.winCondition(winChecker))

  }

  render() {
    return ( <
      section onClick = {
        this.clicked
      } > {
        this.state.toggle
      } <
      /section>
    );
  }
}

export default Square;
