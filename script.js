document.addEventListener('DOMContentLoaded', function () {
  const app = {
    recipes: [
      {
        title: "சர்க்கரை பொங்கல் ",
        ingredients:
`பச்சரிசி - 200கிராம் (1கப்)
சி.பருப்பு - 100கிராம் (½ கப்)
பாகு வெல்லம் காய்ச்சியது - 400கிராம் (2கப்)
தண்ணீர் - 400மிலி  (4கப்)
நெய் - 100மிலி
முந்திரி - 100கிராம்
திராட்சை - 100கிராம்
இலவங்கம் - 2 
ஏலக்கா - 5 
சுக்கு - சிறிதளவு 
சக்கரை - சிறிதளவு`,
        instructions: `3 லிட்டர் அளவுள்ள பத்திரத்தில் 400 மிலி 
 தண்ணீர் சேர்த்து கொதிக்கவிடவும்.

 பச்சரிசி,  சி. பருப்பு சேர்த்து நன்றாக அலசி கொதிக்கும் தண்ணீரீல்  சேர்க்கவும்.

அரிசி நன்றாக கொதித்தவுடன் அடுப்பை சிறு தீயில் வைத்து அவ்வப்போது நன்றாக கிளறி அரிசியை குழையவிடவும்.

நன்றாக குழைந்து வெந்தவுடன்  
வேறேர் பாத்திரத்தில் 2கப் பொடித்த பாகுவெல்லம் 1/4கப் தண்ணீர் சேர்த்து கொதிக்கவிடவும். 

பிறகு கொதித்தபின் வடிகட்டி அரிசியுடன் சேர்க்கவும் நன்றாக கிளறவும்.

சுக்கு ஏலக்கா சிறிது சக்கரை சேர்த்து மிக்ஸியில் அரைத்து கெள்ளவும் அரைத்த பொடியை அரிசி சி. பருப்பு வெல்லம் கலவையில்  சேர்த்து கொதித்து கொண்டிருக்கும்,

மற்றொரு பாத்திரத்தில் அடுப்பில் சிறுதீயில் நெய் சேர்த்து காய்ந்தவுடன் இலவங்கம் முந்திரி பொன்னிறமாக வறுக்கவும் பிறகு திராட்சை  சேர்த்து பொங்கலில் சேர்க்கவும்.
பின் சூடாக பரிமாறவும்.

      தேங்காய் துருவி நெய்யில் வறுத்து பொங்கலில் சேர்த்து பரிமாறலாம்.`,
        readyIn: "20 minutes",
        serves: "4 people",
        calories: "400 calories"
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
