const axios = require('axios');

class DataSource {
  static async #searchMeal(baseURL, keyword) {
    try {
      const response = await axios.get(`${baseURL}${keyword}`);

      const responseJson = await response.data;
      if (responseJson.meals) {
        return Promise.resolve(responseJson.meals);
      } else {
        return Promise.reject(`${keyword} is not found`);
      }
    } catch (err) {
      return alert(err);
    }
  }

  static getByFirstLetter(keyword) {
    return DataSource.#searchMeal(
      'https://www.themealdb.com/api/json/v1/1/search.php?f=',
      keyword
    );
  }

  static getByName(keyword) {
    return DataSource.#searchMeal(
      'https://www.themealdb.com/api/json/v1/1/search.php?s=',
      keyword
    );
  }

  static getById(id) {
    return DataSource.#searchMeal(
      'https://www.themealdb.com/api/json/v1/1/lookup.php?i=',
      id
    );
  }
}

export default DataSource;
