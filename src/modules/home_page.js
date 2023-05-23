const APIurl = 'https://www.themealdb.com/api/json/v1/1/search.php?f=f';

const getMeals = async () => {
  const data = await fetch(APIurl);
  const { meals } = await data.json();
  return meals;
};

const populateHTML = (meals) => {
  const container = document.querySelector('.food-list');
  console.log(meals);
  for (let i = 0; i < 6; i += 1) {
    const id = meals[i].idMeal;
    const div = document.createElement('div');
    const btn = document.createElement('button');

    btn.innerHTML = 'Comments';
    btn.className = 'comment-button';
    btn.id = id;

    div.id = id;
    div.className = 'card-element';
    div.innerHTML = meals[i].strMeal;
    div.appendChild(btn);

    container.appendChild(div);
  }
};

const onLoad = async () => {
  const meals = await getMeals();
  populateHTML(meals);
};

export default onLoad;