import { createAction, createActionGroup, emptyProps, props } from "@ngrx/store";
import { Grocery } from "../../../models/grocery.model";


//to create an action we can use the createAction function from ngrx store 
// and it takes the type of the action as a string and an optional payload as an object
export const loadGroceries = createAction('[Grocery] Load Groceries');
export const loadGroceriesSuccess = createAction('[Grocery] Load Groceries Success', props<{ groceries: Grocery[] }>()); 
export const loadGroceriesFailure = createAction('[Grocery] Load Groceries Failure', props<{ error: any }>()); 

export const addGrocery = createAction('[Grocery] Add Grocery', props<{ grocery: Grocery }>());
export const addGrocerySuccess = createAction('[Grocery] Add Grocery Success', props<{ grocery: Grocery }>());
export const addGroceryFailure = createAction('[Grocery] Add Grocery Failure', props<{ error: any }>());

//instead of creating separate actions for loading, adding, updating and deleting groceries 
// we can also create a single action for each operation and pass the type of the operation as a payload like this

export const groceryOperation = createAction(
    '[Grocery] Grocery Operation', 
    props<{ operation: 'load' | 'add' | 'update' | 'delete', grocery?: Grocery, error?: any }>()
);

// we can use createActionGroup to create a group of related actions like this
//in source we can specify the source of the actions and in events we can specify the type of the actions and the payload of the actions
export const groceryActions = createActionGroup({
    source: 'Grocery API',
    events: {
        'Load Groceries': emptyProps(),
        'Load Groceries Success': props<{ groceries: Grocery[] }>(),
        'Load Groceries Failure': props<{ error: any }>(),
        'Add Grocery': props<{ grocery: Grocery }>(),   
        'Add Grocery Success': props<{ grocery: Grocery }>(),
        'Add Grocery Failure': props<{ error: any }>(),
        // we can also add other operations like update and delete here
    }
});