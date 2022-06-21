const loadFood = () => {
    const searchFood = document.getElementById("search-food");
    const searchFoodText = searchFood.value
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFoodText}`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayFood(data.meals))
}

const displayFood = (foods) => {
    const mealItems = document.getElementById('meal-items')
    mealItems.innerHTML = ''
    foods.forEach(food => {
        const div = document.createElement('div')
        div.classList.add('col')
        console.log(food);
        div.innerHTML = `
                <div class="card h-100" onclick="mealDetails('${food.idMeal}')">
                    <img src="${
                      food.strMealThumb
                    }" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${food.strMeal}</h5>
                        <p class="card-text">${food.strInstructions.slice(
                          0,
                          240
                        )}</p>
                    </div>
                </div>
        `;
        mealItems.appendChild(div)
    })
}

// Dysplay meal Details
const mealDetails = (meal) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]))
}
const displayMealDetails= (meal) => {
    const mealDetails = document.getElementById('meal-details')
        const div = document.createElement('div')
        div.classList.add('meal')
        div.innerHTML = `
            <img src="${meal.strMealThumb}" style="width: 18rem;"  alt="...">
            <div class="card-body">
                <p class="card-text">${meal.strInstructions.slice(0, 340)}</p>
            </div>
        `;
        mealDetails.appendChild(div)
}