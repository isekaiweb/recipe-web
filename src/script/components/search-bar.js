import searchIcon from '../../assets/ic_search.svg';

class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector('#searchElement').value;
  }

  render() {
    this.innerHTML = `
      <input
      type="search"
      class="form-control"
      id="searchElement"
      placeholder="what do you want to cook today ..."
    />
    <button
      class="btn btn-primary btn-lg"
      type="button"
      id="searchButtonElement"
    >
      <img src=${searchIcon} alt="search" class="img-fluid" />
    </button> 
      `;

    this.querySelector('#searchButtonElement').addEventListener(
      'click',
      this._clickEvent
    );
  }
}

customElements.define('search-bar', SearchBar);
