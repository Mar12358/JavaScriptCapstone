const commentsPopup = (id) => {
  // your codew with id
};

const commentsButtonListener = () => {
  const btn = document.querySelectorAll('.comment-button');
  for (let i = 0; i < btn.length; i += 1) {
    btn[i].addEventListener('click', () => { commentsPopup(btn[i].id); });
  }
};

export default commentsButtonListener;