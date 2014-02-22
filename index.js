
var craftingrecipes = require('craftingrecipes');
var ItemPile = require('itempile');

module.exports = function(game, opts) {
  return new RecipesPlugin(game, opts);
};

function RecipesPlugin(game, opts) {
  this.craftList = new craftingrecipes.RecipeList();
  this.thesaurus = new craftingrecipes.CraftingThesaurus();
}

RecipesPlugin.prototype.register = function(recipe) {
  return this.craftList.register(recipe);
};

RecipesPlugin.prototype.registerAmorphous = function(ingredients, result) {
  return this.register(new craftingrecipes.AmorphousRecipe(ingredients, ItemPile.fromArrayIfArray(result)));
};

RecipesPlugin.prototype.registerPositional = function(ingredients, result) {
  return this.register(new craftingrecipes.PositionalRecipe(ingredients, ItemPile.fromArrayIfArray(result)));
};

RecipesPlugin.prototype.find = function(inventory) {
  return this.craftList.find(inventory);
};

RecipesPlugin.prototype.craft = function(inventory) {
  return this.craftList.craft(inventory);
};

RecipesPlugin.prototype.registerSmelting = function(input, output) {

};

RecipesPlugin.prototype.smelted = function(input) {
};
