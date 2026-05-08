import { createAction, props } from "@ngrx/store";
import { Bucket } from "../../../models/bucket.model";

//to create an action we can use the createAction function from ngrx store 
// and it takes the type of the action as a string and an optional payload as an object
export const addToBucket = createAction(
    '[Bucket] Add', 
    //we can also directly pass the properties of the payload as props like this
    // props<{  id: number, name: string }>()
    //or we can pass the whole payload as an object like this also works fine
    // props<{ groceries: Bucket }>()

    props<{ payload: Bucket }>()
);

//we can also create other actions like removeFromBucket and updateBucket like this
export const removeFromBucket = createAction(
    '[Bucket] Remove', 
    props<{ payload: Partial<Bucket> }>()
);