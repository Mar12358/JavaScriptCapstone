import renderHeaderFooter from './render_header_footer.js';

const commentsPopup = async (id) => {
  const popupDiv = document.createElement('div');
  popupDiv.className = 'popup-window';

  const containerPopup = document.querySelector('body');
  await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).then((res) => res.json()).then((d) => {
    popupDiv.innerHTML = `
  <button id="btnClose">x</button>  
  <div class="meal-image"><img src="${d.meals[0].strMealThumb}" /></div>
  <h3 class="food-name">${d.meals[0].strMeal}</h3>

  <div class="names-content" id="names-content">
      <div class="area">Area: ${d.meals[0].strArea} </div>
      <div  class="likesNum">Likes:</div>
      <div  class="category">Category: ${d.meals[0].strCategory}</div>
      <div  class="strComment">Comments: </div>
  </div>
  `;
  });
  containerPopup.innerHTML = '';
  containerPopup.append(popupDiv);

  const btnClose = document.querySelector('#btnClose');
  btnClose.addEventListener('click', () => {
    popupDiv.setAttribute('style', 'display:none;');
    renderHeaderFooter();
  });
};

const commentsButtonListener = () => {
  const btn = document.querySelectorAll('.comment-button');
  for (let i = 0; i < btn.length; i += 1) {
    btn[i].addEventListener('click', () => { commentsPopup(btn[i].id); });
  }
};

export default commentsButtonListener;