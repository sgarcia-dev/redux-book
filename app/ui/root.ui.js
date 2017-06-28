import $ from 'jquery';
import store from '../store/root.store';
import { getAddRecipeAction } from './../actions/recipes.action';

export { loadUI, updateUI };

function updateUI() {
	const { recipes } = store.getState();
	const recipeToEl = recipe => `<li>${recipe.name}</li>`
	$('.recipes > ul').html(recipes.map(recipeToEl));
}

function handleAddRecipe() {
	const $recipeNameTxt = $('.recipes > input');
	store.dispatch(getAddRecipeAction($recipeNameTxt.val()));
	$recipeNameTxt.val('');
}

function loadUI() {
	$('#app').append(`
		<div class="recipes">
			<h2>Recipes:</h2>
			<ul></ul>

			<input type="text" />
			<button>Add</button>
		</div>
	`);

	store.subscribe(updateUI);
	updateUI();
	
	$(document).on('click', '.recipes > button', handleAddRecipe);
}
