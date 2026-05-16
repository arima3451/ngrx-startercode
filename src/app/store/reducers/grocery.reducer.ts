import { createReducer } from "@ngrx/store";
import { Grocery } from "../../../models/grocery.model";


const initialState: Grocery[] = [
    { id: 1, name: 'Milk', type: 'Dairy' },
    { id: 2, name: 'Bread', type: 'Bakery' },
    { id: 3, name: 'Banana', type: 'Fruit' },
    { id: 4, name: 'Apples', type: 'Fruit' },
];

//its used to create a reducer function and it takes the initial state and an object 
// where the key is the action type and the value is a function that takes the state and the action and returns the new state
export const groceryReducer =
createReducer(
    initialState,
    // on(addGrocery, (state, action) => [...state, action.grocery]),
    // on(removeGrocery, (state, action) => state.filter(grocery => grocery.id !== action.id)),
    // on(updateGrocery, (state, action) => state.map(grocery => grocery.id === action.grocery.id ? action.grocery : grocery))
);