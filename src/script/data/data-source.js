const axios = require('axios')

class DataSource {
  static async searchMeal(baseURL, keyword) {
    try {
      const response = await axios.get(`${baseURL}${keyword}`)
      const responseJson = await response.data

      return new Promise((resolve, reject) => {
        if (responseJson.meals) {
          resolve(responseJson.meals)
        }
        reject(`${keyword} not found`)
      })
    } catch (err) {
      return alert(err)
    }
  }

  static getByFirstLetter(keyword) {
    return DataSource.searchMeal(
      'https://www.themealdb.com/api/json/v1/1/search.php?f=',
      keyword
    )
  }

  static getByName(keyword) {
    return DataSource.searchMeal(
      'https://www.themealdb.com/api/json/v1/1/search.php?s=',
      keyword
    )
  }
}

export default DataSource
