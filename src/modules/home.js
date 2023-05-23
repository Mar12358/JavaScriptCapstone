const APIurl = 'https://www.themealdb.com/api/json/v1/1/search.php?f=f';
const renderOnLoad = async () => {
  const data = await fetch(APIurl);
  const { meals } = await data.json();
  console.log(meals);
  meals.forEach((meal) => {
    console.log(meal.idMeal);
  });
};

export default renderOnLoad;