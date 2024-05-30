document.addEventListener('DOMContentLoaded', function () {
  const app = {
    recipes: [
      {
        title: "Spaghetti Carbonara",
        ingredients: "Spaghetti, Eggs, Parmesan, Pancetta, Pepper",
        instructions: "Boil pasta. Cook pancetta. Mix eggs and cheese. Combine all with pasta.",
        readyIn: "20 minutes",
        serves: "4 people",
        calories: "400 calories",
        image: "spaghetti.jpg"
      },
      {
        title: "Strawberry Vanilla Pancakes",
        ingredients: "Lorem ipsum dolor sit amet, Consectetuer adipiscing elit, Suspendisse scelerisque, Libero interdum auctor",
        instructions: "Lorem ipsum dolor sit amet consectetuer adipiscing elit sed do tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Suspendisse scelerisque mi ami. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; libero interdum auctor cursus, sapien enim dictum quam. Phasellus vehicula nonummy nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation. Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        readyIn: "20 minutes",
        serves: "8 people",
        calories: "280 calories",
        image: "pancake.jpg"
      }
      // Add more recipes as needed
    ],

    elements: {
      recipeList: document.getElementById('recipe-list'),
      searchInput: document.getElementById('search'),
      modal: document.getElementById('recipe-modal'),
      modalContent: document.getElementById('recipe-details')
    },

    init: function () {
      this.displayRecipes(this.recipes);
      this.addEventListeners();
    },

    displayRecipes: function (recipes) {
      this.elements.recipeList.innerHTML = '';
      recipes.forEach((recipe, index) => {
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe');
        recipeDiv.dataset.index = index;
        recipeDiv.innerHTML = `
          <img src="${recipe.image}" alt="${recipe.title}">
          <h2>${recipe.title}</h2>
          <p>${recipe.ingredients}</p>
        `;
        this.elements.recipeList.appendChild(recipeDiv);
      });
    },

    searchRecipes: function (query) {
      const filteredRecipes = this.recipes.filter((recipe) => {
        return recipe.title.toLowerCase().includes(query.toLowerCase());
      });
      this.displayRecipes(filteredRecipes);
    },

    displayModal: function (recipe) {
      this.elements.modalContent.innerHTML = `
        <h2>${recipe.title}</h2>
        <img src="${recipe.image}" alt="${recipe.title}">
        <p>${recipe.ingredients}</p>
        <p>${recipe.instructions}</p>
        <p>Ready in: ${recipe.readyIn}</p>
        <p>Serves: ${recipe.serves}</p>
        <p>Calories: ${recipe.calories}</p>
      `;
      this.elements.modal.style.display = 'block';
    },

    addEventListeners: function () {
      this.elements.recipeList.addEventListener('click', (event) => {
        if (event.target.closest('.recipe')) {
          const recipeIndex = event.target.closest('.recipe').dataset.index;
          const recipe = this.recipes[recipeIndex];
          this.displayModal(recipe);
        }
      });

      this.elements.modal.addEventListener('click', (event) => {
        if (event.target === this.elements.modal) {
          this.elements.modal.style.display = 'none';
        }
      });

      this.elements.searchInput.addEventListener('input', (event) => {
        this.searchRecipes(event.target.value);
      });
    }
  };

  app.init();
});