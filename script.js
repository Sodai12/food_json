const recipes = [
  {
    title: 'Sushi',
    image: './img/sushi.jpg',
    description: 'A classic dish with vinegared rice and fresh seafood.',
    difficulty: 'Intermediate',
    cookTime: '30 mins',
    id: '1',
  },
  {
    title: 'Ramen',
    image: './img/ramen.jpg',
    description:
      'A flavorful noodle soup with rich broth, topped with ingredients such as slices of pork, seaweed, and green onions.',
    difficulty: 'Moderate',
    cookTime: '45 mins',
    id: '2',
  },
  {
    title: 'Tempura',
    image: './img/tempura.jpg',
    description:
      'A dish of seafood or vegetables that have been battered and deep fried, resulting in a light and crispy texture.',
    difficulty: 'Easy',
    cookTime: '20 mins',
    id: '3',
  },
  {
    title: 'Takoyaki',
    image: './img/takoyaki.jpg',
    description:
      'Ball-shaped Japanese snack made of a wheat flour-based batter and cooked in a special molded pan, filled with minced octopus, tempura scraps, pickled ginger, and green onion.',
    difficulty: 'Moderate',
    cookTime: '30 mins',
    id: '4',
  },
  {
    title: 'Teriyaki Chicken',
    image: './img/teriyaki_chicken.jpg',
    description:
      'Chicken glazed in a sweet and savory teriyaki sauce, often served with rice or vegetables.',
    difficulty: 'Easy',
    cookTime: '25 mins',
    id: '5',
  },
  {
    title: 'Katsudon',
    image: './img/katsudon.jpg',
    description:
      'A popular comfort food consisting of a breaded deep-fried pork cutlet served over rice with an egg and onion broth.',
    difficulty: 'Moderate',
    cookTime: '35 mins',
    id: '6',
  },
]

var recipesContainer = document.getElementById('recipes')
var listStr = ''
recipes.forEach((recipe) => {
  console.log(recipe)
  console.log(111)
  // const card = document.createElement('div');
  // card.className = 'recipe-card';
  listStr += recipesContainer.innerHTML = `
    <div class="information_item${recipe.id}">
    <div class="information_item_title">${recipe.title}</div>
    <div class="information_item_text">${recipe.description}</div>
    <div class="information_item_text">${recipe.difficulty}</div>
    <div class="information_item_text">${recipe.cookTime}</div>
    <div><img src="${recipe.image}" alt="${recipe.id}"></div>
</div>

    `
  // var innerDiv = recipesContainer.querySelector('.information_item_title')
  // console.log(innerDiv.style)
  // innerDiv.style.backgroundColor = recipe.colours
  recipesContainer.innerHTML = listStr
})