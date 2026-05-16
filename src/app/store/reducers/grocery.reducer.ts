import { createReducer, on } from "@ngrx/store";
import { Grocery } from "../../../models/grocery.model";
import { groceryActions } from "../action/grocery.action";


// const initialState: Grocery[] = [
//     { id: 1, name: 'Milk', type: 'Dairy' },
//     { id: 2, name: 'Bread', type: 'Bakery' },
//     { id: 3, name: 'Banana', type: 'Fruit' },
//     { id: 4, name: 'Apples', type: 'Fruit' },
// ];
//we can also fetch the initial state from an API or a service 
const initialState: Grocery[] = [];

//its used to create a reducer function and it takes the initial state and an object 
// where the key is the action type and the value is a function that takes the state and the action and returns the new state
export const groceryReducer =
createReducer(
    initialState,
    on(groceryActions.loadGroceriesSuccess, (state, action) => {
        return action.groceries;
    }),
    // we can also handle other actions like addGrocerySuccess and updateGrocerySuccess like this
    on(groceryActions.addGrocerySuccess, (state, action) => {
        // const lastId = state.length > 0 ? Math.max(...state.map(item => item.id)) : 0;
        // return [...state, { ...action.grocery, id: lastId + 1 }];
        return [...state, action.grocery];
    })
);