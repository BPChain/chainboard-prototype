const request = require('request-promise-native')
module.exports = () => {



  async function getHashrate () {
    const hashrateOptions = {
      uri: 'https://api.nanopool.org/v1/eth/pool/hashrate',
      method: 'GET',
    }
    const result = await request(hashrateOptions)
    const data = JSON.parse(result).data
    return data.toString()
  }

  async function getAvgBlocktimeAndDifficulty(options = {count: 1000}) {
    const avgBlocktimeOptions = {
      uri: `https://api.nanopool.org/v1/eth/block_stats/0/${options.count}`,
      method: 'GET',
    }
    const lastBlocks = await request(avgBlocktimeOptions)
    const data = JSON.parse(lastBlocks).data
    const averageBlockTime = data.reduce((sum, element) => {
      return parseFloat(sum) + parseFloat(element.block_time)
    }, 0) / data.length
    const averageDifficulty = data.reduce((sum, element) => {
      return parseFloat(sum) + parseFloat(element.difficulty)
    }, 0) / data.length
    const result = {avgBlockTime: averageBlockTime.toString(), avgDifficulty: averageDifficulty.toString()}
    return result
  }

  async function getActiveMiners () {
    const minerOptions = {
      uri: 'https://api.nanopool.org/v1/eth/pool/activeminers',
      method: 'GET',
    }
    const result = await request(minerOptions)
    const data = JSON.parse(result).data
    return data.toString()
  }

  return {
    getHashrate,
    getAvgBlocktimeAndDifficulty,
    getActiveMiners,
  }
}







