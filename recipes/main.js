import recipes from './recipes.mjs';

function random(num) {
    return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
    const listLength = list.length;
    const randomNum = random(listLength)
    return list[randomNum]
}

function recipeTemplate(recipe) {
  return `<figure class="recipe">
    <img src="${recipe.image}" alt="Image of ${recipe.name}" />
    <figcaption>
        <ul class="recipe__tags">
            <h3>${tagsTemplate(recipe.tags)}<h3>
        </ul>
        <h2>${recipe.name}</h2>
        <p class="recipe__rating">
            ${ratingTemplate(recipe.rating)}
        </p>
        <p class="recipe__description">
            ${recipe.description}
        </p>
</figcaption>
</figure>`;
}

function tagsTemplate(tags) {
    // loop through the tags list and transform the string into html
    let html = '';
    for (let i = 0; i < tags.length; i++) {
        html += `<span class="tag">${tags[i]} </span>`
    }
    return html;
}

function ratingTemplate(rating) {
  let html = `<span
    class="rating"
    role="img"
    aria-label="Rating: ${rating} out of 5 stars"
  >`;
  // Loop 1 to 5
  for (let i = 1; i <= 5; i++) {
    // Check if the current star should be filled or empty
    if (i <= rating) {
      html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
    } else {
      html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
    }
  }
  html += `</span>`;
  return html;
}

function renderRecipes(recipeList) {
    // get the element we will output the recipes into
    const outputElement = document.querySelector("#recipe-output");
    // use the recipeTemplate function to transform our recipe objects into recipe HTML strings
    const recipesHTML = recipeList.map(recipe => recipeTemplate(recipe)).join('');
    // Set the HTML strings as the innerHTML of our output element
    outputElement.innerHTML = recipesHTML;
}

function init() {
    // get a random recipe
    const recipe = getRandomListEntry(recipes)
    // render the recipe with renderRecipes.
    renderRecipes([recipe])
}

function filterRecipes(query){
    const filtered = recipes.filter(filterFunction)
    const sorted = filter.sort(sortFunction)
        return sorted
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#search-form');
  if (form) {
    form.addEventListener('submit', searchHandler);
  }
});

function searchHandler(e) {
    e.preventDefault()
    //get the searh input
    const searchInput = document.querySelector('#search-input');
    //convert the value in th einput to lowercase
    const query = searchInput.value.toLowerCase().trim();
    // use the filter function to filter our recipes
    const results = filterRecipes(query);
    // render the filtered list
    renderRecipes(results);
}

init();