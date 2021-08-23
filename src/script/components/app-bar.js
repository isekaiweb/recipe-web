import './search-bar.js';
import logo from '../../assets/ic_recipe.svg';

class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <img
      src=${logo}
      alt="logo"
      class="img-fluid flex-grow"
    />
    <search-bar class="input-group flex-nowrap input-group-lg"></search-bar>
    `;
  }
}

customElements.define('app-bar', AppBar);
