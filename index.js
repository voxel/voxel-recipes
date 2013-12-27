
var craftingrecipes = require('craftingrecipes');

module.exports = function(game, opts) {
  return new Recipes(game, opts);
};

function Recipes(game, opts) {
  this.list = new craftingrecipes.RecipeLocator();
}

Recipes.prototype.register = function(recipe) {
  return this.list.register(recipe);
};

Recipes.prototype.find = function(inventory) {
  return this.list.find(inventory);
};

Recipes.prototype.craft = function(inventory) {
  return this.list.craft(inventory);
};

