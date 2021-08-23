import '../components/app-bar.js';
import '../components/alphabet-list.js';
import '../components/meal-list.js';
import DataSource from '../data/data-source.js';

const main = () => {
  const alphabetListElement = document.querySelector('alphabet-list');
  const mealListElement = document.querySelector('meal-list');

  const onButtonAlphabetClicked = async () => {
    try {
      const results = await DataSource.getByFirstLetter(
        alphabetListElement.value
      );
      renderResult(results);
    } catch (rejectedReason) {
      fallbackResult(rejectedReason);
    }
  };

  const renderResult = (results) => {
    mealListElement.mealsData = results;
  };

  const fallbackResult = (message) => {
    mealListElement.renderError(message);
  };

  onButtonAlphabetClicked();
  alphabetListElement.clickEvent = onButtonAlphabetClicked;
};

export default main;
