import './meal-item.js';

class MealList extends HTMLElement {
  set mealsData(meals) {
    this._meals = meals;
    this.render();
  }

  render() {
    this.innerHTML = `<style>
    
    meal-item{
        cursor:pointer;
    }

    meal-item:hover{
        box-shadow: 0 0 6px #F1F0F0;
    }

    meal-item > img{
        height:100px;
        width:100px;
    }

    meal-item > p {
        width:230px;
    }
    </style>`;
    this._meals.forEach((meal) => {
      const mealItemElement = document.createElement('meal-item');
      mealItemElement.classList.add('d-flex', 'gap-2', 'p-2', 'rounded');
      mealItemElement.setAttribute('id', `${meal.idMeal}`);
      mealItemElement.mealData = meal;
      this.appendChild(mealItemElement);
    });
  }

  renderError(message) {
    this.innerHTML = `<h2 class="h2 fw-lighter text-white font-monospace text-center">${message}</h2>`;
  }
}

customElements.define('meal-list', MealList);
