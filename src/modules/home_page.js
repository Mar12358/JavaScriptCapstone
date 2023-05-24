import commentsButtonListener from './popup.js';
import likeImg from '../like_img.png';

const MealsAPIurl = 'https://www.themealdb.com/api/json/v1/1/search.php?f=f';
const InvAPIurl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/aZwedqY3IXDWCJKZoRkM/likes';

const getMeals = async () => {
  const data = await fetch(MealsAPIurl);
  const { meals } = await data.json();
  return meals;
};

const getLikes = async () => {
  try {
    const response = await fetch(InvAPIurl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return response.json();
    }
    return []; // Return an empty array if the response body is empty or not in JSON format
  } catch (error) {
    return []; // Return an empty array in case of an error
  }
};

const populateHTML = (meals, allLikes) => {
  const container = document.querySelector('.food-list');
  /* console.log(meals); */
  for (let i = 0; i < 6; i += 1) {
    const id = meals[i].idMeal;
    const mealName = meals[i].strMeal;
    const div = document.createElement('div');
    const img = meals[i].strMealThumb;
    const mealLikes = allLikes.find((like) => like.item_id === id);
    div.id = id;
    div.className = 'card-element';
    div.innerHTML = `<a class="img-container"><img class="meal-img" src=${img} alt=""></a>
                    <div class="info">
                      <span class="meal-name">${mealName}</span>
                      <div class="like-div">
                        <a href=""><img class="like-icon" src=${likeImg} alt=""></a>
                        <span>${mealLikes ? mealLikes.likes : 0} likes</span>
                      </div>
                    </div>
                    <div class="btn-container"><button id="${id}" class="comment-button">Comments</button></div>
                    <div class="reservations-container"><button class="reservations-button">Reservations</button></div>`;

    container.appendChild(div);
  }
};

const onLoad = async () => {
  const meals = await getMeals();
  const allLikes = await getLikes();
  populateHTML(meals, allLikes);
  commentsButtonListener();
};

export default onLoad;