class MealItem extends HTMLElement {
  set mealData(mealData) {
    this._mealData = mealData;
    this.render();
  }

  render() {
    const { strMeal, strInstructions, strMealThumb } = this._mealData;
    this.innerHTML = `
        <img src="${strMealThumb}" class="rounded border border-white" alt="${strMeal}"/>
        <p class="m-0 p-0">
            <span class="fw-bold text-wrap text-white h4">${strMeal}</span>
            <span class="text-truncate text-white d-block mt-2">${strInstructions}</span>
         </p>

    `;
  }
}

customElements.define('meal-item', MealItem);
