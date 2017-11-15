import React from 'react';
import axios from 'axios';

class DataRetrieval extends React.Component {

  componentDidMount() {
    this.getHashRate();
  }
  
  constructor(props) {
    super(props);
    this.state = {
      hashRate: []
    }
  }
 
  getHashRate = () => {
    axios.get('https://api.nanopool.org/v1/eth/network/avgblocktime')
    .then( (response) => {
      this.setState({hashRate: response.data.data});
    })
    .catch( (error) => {
      console.log(error);
    });
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
