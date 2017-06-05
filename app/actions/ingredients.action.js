const getAddIngredientAction = (recipe, name, quantity) => ({
    type: 'ADD_INGREDIENT',
    recipe,
    name,
    quantity
});

export { getAddIngredientAction };
