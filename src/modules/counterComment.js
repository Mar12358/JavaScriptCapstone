const counterComments = (array) => {
  let num = 0;
  if (array.length > 0) {
    num = array.length;
  }
  const counter = document.querySelector('.comment-counter');
  counter.innerHTML = `${num}`;
};
export default counterComments;