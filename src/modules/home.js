const APIurl = 'https://www.themealdb.com/api/json/v1/1/search.php?f=f';

const getMeals = async () => {
  const data = await fetch(APIurl);
  const { meals } = await data.json();
  return meals;
};

const populateHTML = (meals) => {
  console.log(meals);
  meals.forEach((meal) => {
    console.log(meal.idMeal);
  });
};

const onLoad = async () => {
  const meals = await getMeals();
  populateHTML(meals);
};

export default onLoad;