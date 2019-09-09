import {createStore} from 'redux';

const initialState = {
    name: '',
    category: '',
    firstName: '',
    lastName: '',
    ingredients: [],
    instructions: [],
    recipes: []
}

export const UPDATE_NAME = 'update name';
export const UPDATE_CATEGORY = 'update category';
export const UPDATE_FNAME = 'update first name';
export const UPDATE_LNAME = 'update last name';
export const UPDATE_INGREDIENTS = 'update ingredients';
export const UPDATE_INSTRUCTIONS = 'update instructions';
export const ADD_RECIPE = 'update recipes';

const reducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type) {
        case UPDATE_NAME:
            return {...state, name: payload};
        case UPDATE_CATEGORY:
            return {...state, category: payload};
        case UPDATE_FNAME:
            return {...state, firstName: payload};
        case UPDATE_LNAME:
            return {...state, lastName: payload};
        case UPDATE_INGREDIENTS:
            const newIngredients = [...state.ingredients, payload]
            return {...state, ingredients: newIngredients};
        case UPDATE_INSTRUCTIONS:
            const newInstructions = [...state.instructions, payload]
            return {...state, instructions: newInstructions};
        case ADD_RECIPE:
            const {
                name,
                category,
                firstName,
                lastName,
                ingredients,
                instructions
            } = state;
            const recipe = {
                name,
                category,
                firstName,
                lastName,
                ingredients,
                instructions
            };
            const newRecipes = [...state.recipes, recipe];
            return {...state, recipes: newRecipes};
        default: return state;
    }
}

export default createStore(reducer);