import '../components/app-bar.js'
import '../components/alphabet-list.js'
import '../components/meal-list.js'
import '../components/footer-recipe.js'
import { debounce } from 'throttle-debounce'

import DataSource from '../data/data-source.js'

const main = () => {
  const alphabetListElement = document.querySelector('alphabet-list')
  const mealListElement = document.querySelector('meal-list')
  const searchElement = document.querySelector('search-bar')

  const renderResult = results => {
    mealListElement.mealsData = results
  }

  const fallbackResult = message => {
    mealListElement.renderError(message)
  }

  const onButtonSearchClicked = debounce(400, async () => {
    try {
      const results = await DataSource.getByName(searchElement.value)
      renderResult(results)
    } catch (rejectedReason) {
      fallbackResult(rejectedReason)
    }
  })

  const onButtonAlphabetClicked = async () => {
    try {
      const results = await DataSource.getByFirstLetter(
        alphabetListElement.value
      )

      renderResult(results)
    } catch (rejectedReason) {
      fallbackResult(rejectedReason)
    }
  }

  onButtonAlphabetClicked()
  alphabetListElement.clickEvent = onButtonAlphabetClicked
  searchElement.clickEvent = onButtonSearchClicked
}

export default main
