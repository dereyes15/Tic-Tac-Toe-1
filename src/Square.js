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

  winCondition = (array) => {
    if (array[0] === "🦄" && array[1] === "🦄" && array[2] === "🦄") {
      if (setTimeout(function() {
          alert(`${array[0]} you Win!`)
        }, 150)) {
        setTimeout(function() {
          window.location.reload()
        }, 150)
      }

    } else if (array[3] === "🦄" && array[4] === "🦄" && array[5] === "🦄") {
      if (setTimeout(function() {
          alert(`${array[3]} you Win!`)
        }, 150)) {
        setTimeout(function() {
          window.location.reload()
        }, 150)
      }

    } else if (array[6] === "🦄" && array[7] === "🦄" && array[8] === "🦄") {
      if (setTimeout(function() {
          alert(`${array[6]} you Win!`)
        }, 150)) {
        setTimeout(function() {
          window.location.reload()
        }, 150)
      }

    } else if (array[0] === "🦄" && array[3] === "🦄" && array[6] === "🦄") {
      if (setTimeout(function() {
          alert(`${array[0]} you Win!`)
        }, 150)) {
        setTimeout(function() {
          window.location.reload()
        }, 150)
      }

    } else if (array[1] === "🦄" && array[4] === "🦄" && array[7] === "🦄") {
      if (setTimeout(function() {
          alert(`${array[1]} you Win!`)
        }, 150)) {
        setTimeout(function() {
          window.location.reload()
        }, 150)
      }

    } else if (array[2] === "🦄" && array[5] === "🦄" && array[8] === "🦄") {
      if (setTimeout(function() {
          alert(`${array[2]} you Win!`)
        }, 150)) {
        setTimeout(function() {
          window.location.reload()
        }, 150)
      }

    } else if (array[0] === "🦄" && array[4] === "🦄" && array[8] === "🦄") {
      if (setTimeout(function() {
          alert(`${array[0]} you Win!`)
        }, 150)) {
        setTimeout(function() {
          window.location.reload()
        }, 150)
      }

    } else if (array[2] === "🦄" && array[4] === "🦄" && array[6] === "🦄") {
      if (setTimeout(function() {
          alert(`${array[2]} you Win!`)
        }, 150)) {
        setTimeout(function() {
          window.location.reload()
        }, 150)
      }

    } else if (array[0] === "🦆" && array[1] === "🦆" && array[2] === "🦆") {
      if (setTimeout(function() {
          alert(`${array[0]} you Win!`)
        }, 150)) {
        setTimeout(function() {
          window.location.reload()
        }, 150)
      }

    } else if (array[3] === "🦆" && array[4] === "🦆" && array[5] === "🦆") {
      if (setTimeout(function() {
          alert(`${array[3]} you Win!`)
        }, 150)) {
        setTimeout(function() {
          window.location.reload()
        }, 150)
      }

    } else if (array[6] === "🦆" && array[7] === "🦆" && array[8] === "🦆") {
      if (setTimeout(function() {
          alert(`${array[6]} you Win!`)
        }, 150)) {
        setTimeout(function() {
          window.location.reload()
        }, 150)
      }

    } else if (array[0] === "🦆" && array[3] === "🦆" && array[6] === "🦆") {
      if (setTimeout(function() {
          alert(`${array[0]} you Win!`)
        }, 150)) {
        setTimeout(function() {
          window.location.reload()
        }, 150)
      }

    } else if (array[1] === "🦆" && array[4] === "🦆" && array[7] === "🦆") {
      if (setTimeout(function() {
          alert(`${array[1]} you Win!`)
        }, 150)) {
        setTimeout(function() {
          window.location.reload()
        }, 150)
      }

    } else if (array[2] === "🦆" && array[5] === "🦆" && array[8] === "🦆") {
      if (setTimeout(function() {
          alert(`${array[2]} you Win!`)
        }, 150)) {
        setTimeout(function() {
          window.location.reload()
        }, 150)
      }

    } else if (array[0] === "🦆" && array[4] === "🦆" && array[8] === "🦆") {
      if (setTimeout(function() {
          alert(`${array[0]} you Win!`)
        }, 150)) {
        setTimeout(function() {
          window.location.reload()
        }, 150)
      }

    } else if (array[2] === "🦆" && array[4] === "🦆" && array[6] === "🦆") {
      if (setTimeout(function() {
          alert(`${array[2]} you Win!`)
        }, 150)) {
        setTimeout(function() {
          window.location.reload()
        }, 150)
      }

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