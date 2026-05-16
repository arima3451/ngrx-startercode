import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Grocery } from "../../../models/grocery.model";

//its used to create a selector function that takes the state and returns the selected data from the state
export const selectGroceries = (state:{grocery:Grocery[]})=> state.grocery;

// or we can also use the createFeatureSelector to create a selector function that takes the state and 
// returns the selected data from the state like this
// export const selectGroceries = createFeatureSelector<Grocery[]>('grocery');

export const selectGroceriesByType = (type: string) => (state:{grocery:Grocery[]}) => {
    return state.grocery.filter(item => item.type === type);
}
//or we can also use the createSelector to create a selector function that takes the state and 
// returns the selected data from the state like this
// export const selectGroceriesByType = (type:string) => createSelector(
//     selectGroceries,
//     (state) => {
//         //console.log() it will call only once whenever the selector is called 
//         // because the selector is memoized and it will return the cached value if the input state is the same as the previous state
//         console.log('Selector called ');
//         return state.filter(item => item.type === type);
//     }
// );