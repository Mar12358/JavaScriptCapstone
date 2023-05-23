import likeImg from '../like_img.png';

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
    const mealName = meals[i].strMeal;
    const div = document.createElement('div');
    const img = meals[i].strMealThumb;

    div.id = id;
    div.className = 'card-element';
    div.innerHTML = `<img class="meal-img" src=${img} alt="">
                    <div class="info">
                      <span class="meal-name">${mealName}</span>
                      <div class="like-div">
                        <a href=""><img class="like-icon" src=${likeImg} alt=""></a>
                        <span>5 likes</span>
                      </div>
                    </div>
                    <button class="comment-button">Comments</button>`;

    container.appendChild(div);
  }
};

const onLoad = async () => {
  const meals = await getMeals();
  populateHTML(meals);
};

export default onLoad;