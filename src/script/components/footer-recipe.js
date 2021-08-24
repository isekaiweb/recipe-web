class FooterRecipe extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<p class="container fw-bold text-light text-end">Recipe &copy;${new Date().getFullYear()} built with ❤</p>`;
  }
}

customElements.define('footer-recipe', FooterRecipe);
