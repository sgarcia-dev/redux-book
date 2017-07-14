const getAddRecipeAction = (name) => ({
    type: 'ADD_RECIPE',
    name
});

const getSetRecipesAction = () => ({
	type: 'SET_RECIPES'
});

const getFetchRecipesAction = () => ({
	type: 'FETCH_RECIPES'
});

export { getAddRecipeAction, getSetRecipesAction, getFetchRecipesAction };
