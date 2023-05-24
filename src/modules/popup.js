import displayComment from "./displayComments";
import addComment from "./addComment";
const toggle = () => {
  const elements = document.querySelectorAll('body > *');
  elements.forEach((element) => {
    element.classList.toggle('invisible');
  });
};

const commentsPopup = async (id) => {
  const popupDiv = document.querySelector('.popup-window');
  await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).then((res) => res.json()).then((d) => {
    popupDiv.innerHTML = `
    <div class="test-div">
  
  <button id="btnClose">X</button>  
  <img src="${d.meals[0].strMealThumb}"/>
  </div>
  <h3 class="food-name">${d.meals[0].strMeal}</h3>

  <div class="names-content" id="names-content">
      <div class="area">Area: ${d.meals[0].strArea} </div>
      <div  class="likesNum">Likes:</div>
      <div  class="category">Category: ${d.meals[0].strCategory}</div>
      <div  class="strComment">Comments: </div>
  </div>
  <h3 class="show-comment-title"> Conments:(2)</h3>
  <div class="comment-list">  </div>

  <h3 class="add-comment-title"> Add Comments</h3>
  <form id ="form-comment">
  <input type="text", name ="name" class="userName" placeholder="Add your name" required>
  <textarea type="text", name="comment" class="userComent" cols="3" rows="5" placeholder="Add your comment" required></textarea>
  <button class="submit">Add new comment</button>  
  </form>
  `;
  });

  displayComment(id);
  const btnClose = document.querySelector('#btnClose');
  btnClose.addEventListener('click', () => {
    toggle();
  });
  const submit = document.querySelector('.submit');
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    addComment(id);
  })
};

const commentsButtonListener = () => {
  const btn = document.querySelectorAll('.comment-button');
  for (let i = 0; i < btn.length; i += 1) {
    btn[i].addEventListener('click', () => {
      toggle();
      commentsPopup(btn[i].id);
    });
  }
};

export default commentsButtonListener;