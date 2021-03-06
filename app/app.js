import store from './store/root.store';
import { loadUI } from './ui/root.ui';
import { getAddRecipeAction, getFetchRecipesAction } from './actions/recipes.action';
import { getAddIngredientAction } from './actions/ingredients.action';

window.store = store;
window.getAddRecipeAction = getAddRecipeAction;
window.getAddIngredientAction = getAddIngredientAction;

// add recipes
store.dispatch(getFetchRecipesAction());
loadUI();
