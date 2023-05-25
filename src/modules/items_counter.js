const itemsCounter = (items) => {
  const count = items.childElementCount;
  const itemsBtnNav = document.getElementById('items-link');
  itemsBtnNav.innerHTML = `Items(${count})`;
};
export default itemsCounter;