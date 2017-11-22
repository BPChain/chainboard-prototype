import React from 'react'
import axios from 'axios'
import config from './config'


class DataRetrieval extends React.Component {

  constructor (props) {
    super(props)
    this.timer = 0
    this.state = {
      activeMiners: 0,
      activeWorkers: 0,
      averageBlockTime: 0, 
      blockTimeDifficulty: 0,
      hashRate: 0,
      timeToNextEpoch: 0,
    }
  }

  componentWillMount () {
    this.timer = setTimeout(() => {
      this.getEthereumPublicData()
      this.componentWillMount()
    }, 5000)
  }

  getEthereumPublicData = () => {
    axios
      .get(config.baseUrl + 'ethereum/publicStat')
      .then((response) => {
        const data = response.data
        console.info(data.activeMiners)
        this.setState({
          activeMiners: data.activeMiners,
          activeWorkers: data.activeWorkers,
          averageBlockTime: data.averageBlockTime, 
          blockTimeDifficulty: data.blockTimeDifficulty,
          hashRate: data.hashRate,
          timeToNextEpoch: data.timeToNextEpoch,
        })
      })
      .catch( (error) => {
        console.log(error)
      })
  }


  render () {
    return (
      <div className="ui container">
        <br></br>
        <p>Average Block Time is {this.state.averageBlockTime} seconds.</p>
        <p>Time to next Epoch is {this.state.timeToNextEpoch} seconds.</p>
      </div>
    )
  }
}

export default DataRetrieval
