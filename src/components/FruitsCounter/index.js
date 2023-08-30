// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoesCount: 0,
    bananasCount: 0,
  }

  onIncreaseMangoes = () => {
    this.setState(prevState => ({mangoesCount: prevState.mangoesCount + 1}))
  }

  onIncreaseBananas = () => {
    this.setState(prevState => ({bananasCount: prevState.bananasCount + 1}))
  }

  render() {
    const {mangoesCount, bananasCount} = this.state
    return (
      <div className="bg-container">
        <h1 className="main-heading">
          Bob ate <span className="number">{mangoesCount} </span>
          mangoes <span className="number"> {bananasCount}</span> bananas
        </h1>
        <div className="image-container">
          <div className="split-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
              className="image"
            />
            <button
              type="button"
              onClick={this.onIncreaseMangoes}
              className="button"
            >
              Eat Mango
            </button>
          </div>
          <div className="split-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
              className="image"
            />
            <button
              type="button"
              onClick={this.onIncreaseBananas}
              className="button"
            >
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
