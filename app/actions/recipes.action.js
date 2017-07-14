const getAddRecipeAction = (name) => ({
    type: 'ADD_RECIPE',
    name
});

const getSetRecipesAction = (recipes) => ({
	type: 'SET_RECIPES',
    recipes
});

const getFetchRecipesAction = () => ({
	type: 'FETCH_RECIPES'
});

export { getAddRecipeAction, getSetRecipesAction, getFetchRecipesAction };
