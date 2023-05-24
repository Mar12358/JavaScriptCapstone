import commentsButtonListener from './popup.js';
import likeImg from '../like_img.png';
import { getLikes, addLike } from './likes.js';

const MealsAPIurl = 'https://www.themealdb.com/api/json/v1/1/search.php?f=f';

const getMeals = async () => {
  const data = await fetch(MealsAPIurl);
  const { meals } = await data.json();
  return meals;
};

const addLikesListenerButtons = () => {
  const likeButtons = document.querySelectorAll('.like-btn');
  likeButtons.forEach((likeBtn) => {
    likeBtn.addEventListener('click', (event) => {
      event.preventDefault();
      addLike(likeBtn.id);
    });
  });
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
                        <a id=${id} class="like-btn" href=""><img class="like-icon" src=${likeImg} alt=""></a>
                        <span>${mealLikes ? mealLikes.likes : 0} likes</span>
                      </div>
                    </div>
                    <div class="btn-container"><button id="${id}" class="comment-button">Comments</button></div>
                    <div class="reservations-container"><button class="reservations-button">Reservations</button></div>`;

    container.appendChild(div);
    addLikesListenerButtons();
  }
};

const onLoad = async () => {
  const meals = await getMeals();
  const allLikes = await getLikes();
  populateHTML(meals, allLikes);
  commentsButtonListener();
};

export default onLoad;