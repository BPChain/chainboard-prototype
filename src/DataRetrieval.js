import React from 'react';
import axios from 'axios';


class DataRetrieval extends React.Component {

  constructor(props) {
    super(props)
    this.timer = 0
    this.state = {
      blockTime: this.getBlockTime(),
      timeToEpoch: this.getTimeToNextEpoch()
    }
  }

  componentWillMount() {
    this.timer = setTimeout(() => {
      this.getBlockTime()
      this.getTimeToNextEpoch()
      this.componentWillMount()
    }, 5000)
  }

  getBlockTime = () => {
    axios
      .get('https://api.nanopool.org/v1/eth/network/avgblocktime')
      .then( (response) => {
        this.setState({blockTime: response.data.data})
      })
      .catch( (error) => {
        console.log(error)
      })
  }

  getTimeToNextEpoch = () => {
    axios
      .get('https://api.nanopool.org/v1/eth/network/timetonextepoch')
      .then( (response) => {
        this.setState({timeToEpoch: response.data.data})
      })
      .catch( (error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <div className="ui container">
        <br></br>
        <p>Average Block Time is {this.state.blockTime} seconds.</p>
        <p>Time to next Epoch is {this.state.timeToEpoch} seconds.</p>
      </div>
    );
  }
}

export default DataRetrieval;
