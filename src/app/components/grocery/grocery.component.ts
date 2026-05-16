import { Component, Signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Grocery } from '../../../models/grocery.model';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { addToBucket, removeFromBucket } from '../../store/action/bucket.action';
import { selectGroceries, selectGroceriesByType } from '../../store/selectors/grocery.selectors';



@Component({
  selector: 'app-grocery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grocery.component.html',
  styleUrl: './grocery.component.css'
})
export class GroceryComponent {

  groceries$?:Observable<Grocery[]>;
  filteredGroceries$?:Observable<Grocery[]>;

  constructor(private store:Store<{grocery:Grocery[]}>){ 
    // we can use the select method of the store to select the data from the store and get the observable of the data like this
    // this.groceries$ = this.store.select('grocery');
    //or we can also use the selector function to select the data from the store like this
    // this.groceries$ = this.store.select((state) => state.grocery);
    // this.groceries$ = this.store.select((state: {grocery:Grocery[]}) => state.grocery);

    // we can also use the selector function to select the data from the store like this
    this.groceries$ = this.store.select(selectGroceries);
  }

  onTypeChange(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    const selectedType = selectElement.value;
    
    if(selectedType) this.filteredGroceries$ = this.store.select(selectGroceriesByType(selectedType));
    else this.filteredGroceries$ = undefined;
  }


  increment(item:Grocery){
    const payload = {
      id:item.id,
      name:item.name,
      quantity:1
    }
    //its used to dispatch an action to the store and it takes an object with the type of the action and the payload
    // this.store.dispatch({type:'[Grocery] Add', grocery:payload});
    //its used to dispatch an action to the store and it takes an object with the type of the action and the payload
    // this.store.dispatch({type:'Update', payload:payload});

    //we can also create an seperate action file and import the action from there and dispatch it like this
    // this.store.dispatch(addToBucket({ id: payload.id, name: payload.name }));
    // this.store.dispatch(addToBucket({ groceries: payload }));
    this.store.dispatch(addToBucket({ payload }));

  }
  decrement(item:Grocery){
    const payload = {
      id:item.id
    }
    //its used to dispatch an action to the store and it takes an object with the type of the action and the payload
    this.store.dispatch(removeFromBucket({ payload }));



  }

}
