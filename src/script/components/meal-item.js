import './detail-meal.js'

class MealItem extends HTMLElement {
  set mealData(mealData) {
    this._mealData = mealData
    this.render()
  }

  render() {
    const { strMeal, strInstructions, strMealThumb } = this._mealData
    const detailMealElement = document.createElement('detail-meal')

    this.innerHTML = `
        <img src="${strMealThumb}" class="rounded border border-white" alt="${strMeal}"/>
        <p class="m-0 p-0">
            <span class="text-wrap text-white h5">${strMeal}</span>
            <span class="text-white d-block mt-1">${strInstructions.slice(
              0,
              60
            )} ...</span>
         </p>

    `

    this.classList.add('d-flex', 'gap-2', 'p-2', 'rounded')
    this.addEventListener('click', () => {
      detailMealElement.data = this._mealData
      this.parentElement.parentElement.innerHTML = `${detailMealElement.outerHTML}`
    })
  }
}

customElements.define('meal-item', MealItem)
