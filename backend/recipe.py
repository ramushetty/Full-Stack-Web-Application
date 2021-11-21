
from flask_restx import fields,Resource,Namespace
from flask import request,jsonify
from models import Recipe



recipe_ns = Namespace('recipe',description='A namespace for recipe')


recipe_model = recipe_ns.model("Recipe", {
    "id": fields.Integer(),
    "title": fields.String(),
    "description": fields.String()
})



@recipe_ns.route('/recipes')
class RecipesResource(Resource):
    @recipe_ns.marshal_list_with(recipe_model)
    def get(self):
        recipes = Recipe.query.all()
        return recipes
    @recipe_ns.marshal_with(recipe_model)
    @recipe_ns.expect(recipe_model)
    def post(self):
        data = request.get_json()
        recipe_obj = Recipe(title=data.get('title'),description=data.get('description'))
        recipe_obj.save()
        return recipe_obj,201

@recipe_ns.route('/recipe/<int:id>')
class RecipeResource(Resource):
    @recipe_ns.marshal_with(recipe_model)
    def get(self,id):
        return Recipe.query.get_or_404(id)
    @recipe_ns.marshal_with(recipe_model)
    @recipe_ns.expect(recipe_model)
    def put(self,id):
        data = request.get_json()
        recipe_to_update = Recipe.query.get_or_404(id)
        recipe_to_update.update(data.get('title'),data.get('description'))
        return recipe_to_update
    @recipe_ns.marshal_with(recipe_model)
    def delete(self,id):
        recipe_to_delete = Recipe.filter.get_or_404(id)
        recipe_to_delete.delete()

        return recipe_to_delete