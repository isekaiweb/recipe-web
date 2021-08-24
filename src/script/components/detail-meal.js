class DetailMeal extends HTMLElement {
  set data(data) {
    this._data = data;
    this.render();
  }

  render() {
    const { strMeal, strInstructions, strMealThumb, strCategory, strArea } =
      this._data;

    let li = '';

    for (let i = 1; i <= 20; i++) {
      if (
        this._data[`strIngredient${i}`] != '' &&
        this._data[`strIngredient${i}`] != null
      ) {
        li += `<li class="list-group-item rounded-pill flex-fill">${
          this._data[`strIngredient${i}`]
        }   <span class="badge bg-secondary rounded-pill">${
          this._data[`strMeasure${i}`]
        }</span></li>`;
      }
    }

    this.innerHTML = `
    <nav aria-label="breadcrumb breadcrumb-white">
    <ol class="breadcrumb">
      <li class="breadcrumb-item text-white"><a href="">Home</a></li>
      <li class="breadcrumb-item active text-white fw-bold" aria-current="page">${strCategory}</li>
    </ol>
  </nav>
  <div class="mb-3">
<div class="row g-3 mt-3">
  <div class="col-md-4">
    <img src="${strMealThumb}" class="img-fluid rounded border border-white" alt="img_${strMeal}">
  </div>
  <div class="col-md-8">
      <h1 class="card-title text-primary h1">${strMeal}</h1>
      <p class="card-text"><small class="text-muted">${strArea} Food</small></p>
      <p class="card-text text-white h4">Ingredients</p>
      <ul class="mt-3 text-white list-group flex-wrap list-group-horizontal gap-4">
         ${li}
      </ul>
  </div>
  <div class="cold-md-12">
     <p class="card-text text-white h4">Instruction</p>
     <p class="card-text text-white">${strInstructions}</p>
    
  </div>
</div>
</div> `;
  }
}

customElements.define('detail-meal', DetailMeal);
