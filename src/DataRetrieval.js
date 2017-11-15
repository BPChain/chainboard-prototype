import React from 'react';
import axios from 'axios';


class DataRetrieval extends React.Component {

  constructor(props) {
    super(props)
    this.timer = 0
    this.state = {
      hashRate: this.getHashRate()
    }
  }

  componentWillMount() {
    this.timer = setTimeout(() => {
      this.getHashRate()
      this.componentWillMount();
    }, 5000)
  }

  getHashRate = () => {
    axios
      .get('https://api.nanopool.org/v1/eth/network/avgblocktime')
      .then( (response) => {
        this.setState({hashRate: response.data.data})
      })
      .catch( (error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <div>
        <p>Hashrate is {this.state.hashRate}</p>
      </div>
    );
  }
}

export default DataRetrieval;
