import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { GroceryService } from '../../grocery.service';
import { groceryActions } from '../action/grocery.action';

@Injectable()
export class GroceryEffects {
  loadGroceries$ = createEffect(() =>
    //actions$ is an observable of all the actions dispatched in the application and we can 
    // use it to listen to specific actions and perform some side effects like making an API call or updating the state
    this.actions$.pipe(
      ofType(groceryActions.loadGroceries), 
      //when the loadGroceries action is dispatched we will switch to a new observable that will make an API call
      //  to fetch the groceries from the server and then dispatch the loadGroceriesSuccess action with the groceries as payload 
      // if the API call is successful or dispatch the loadGroceriesFailure action with the error as payload if the API call fails

      switchMap(() =>
        // switchMap is used to switch to a new observable and cancel the previous one if it is still running
        // exhaustMap is used to ignore the new observable if the previous one is still running
        this.groceryService.fetchAllGroceries().pipe(
          map((groceries:any) => groceryActions.loadGroceriesSuccess({ groceries })),
          catchError((error) => of(groceryActions.loadGroceriesFailure({ error })))
          //catchError is used to catch the error from the API call and return a new observable with the error as payload of the loadGroceriesFailure action
        )
      )
    )
  );

  addGrocery$ = createEffect(() =>
    this.actions$.pipe(
      ofType(groceryActions.addGrocery),
      switchMap(({ grocery }) =>
        this.groceryService.addGrocery(grocery).pipe(
          map((savedGrocery:any) => groceryActions.addGrocerySuccess({ grocery: savedGrocery })),
          catchError((error) => of(groceryActions.addGroceryFailure({ error })))
        )
      )
    )
  );

    constructor(private actions$: Actions, private groceryService: GroceryService) {}

}
