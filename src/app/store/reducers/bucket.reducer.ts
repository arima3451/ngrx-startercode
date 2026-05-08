import { createReducer, on } from '@ngrx/store';
import { Bucket } from '../../../models/bucket.model';
import { addToBucket, removeFromBucket } from '../action/bucket.action';




const initialState: Bucket[] = [];


//its used to create a reducer function and it takes the initial state and an object 
// where the key is the action type and the value is a function that takes the state and the action and returns the new state
export const bucketReducer = createReducer(
    initialState,
    //its used to handle the action and update the state and it takes the action type and a function
    // that takes the state and the action and returns the new state
    on(addToBucket, (state, action) => {
        //check if the item already exists in the bucket and if it does then increment the quantity else add the item to the bucket
        const existingItem = state.find(item => item.id === action.payload.id);
        if (existingItem) {
            // return state.map(item => item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item);
            // or we can also use the payload quantity to increment the quantity like this
            return state.map(item => item.id === action.payload.id ? { ...item, quantity: item.quantity + action.payload.quantity } : item);
        }
        return [...state, action.payload]
    }),

    // we can also handle other actions like removeFromBucket and updateBucket like this
    on(removeFromBucket, (state, action) => {
        const existingItem = state.find(item => item.id === action.payload.id);
        if (existingItem && existingItem?.quantity > 1) {
            return state.map(item => item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item);
        }
        return state.filter(item => item.id !== action.payload.id);
        
    })
);


