import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BucketComponent } from './components/bucket/bucket.component';
import { GroceryComponent } from './components/grocery/grocery.component';
import { Store } from '@ngrx/store';
import { Grocery } from '../models/grocery.model';
import { groceryActions } from './store/action/grocery.action';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BucketComponent, GroceryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private store:Store<{grocery:Grocery[]}>) {}

  ngOnInit(){
    //to load the groceries from the server when the application is initialized 
    // we can dispatch the loadGroceries action in the ngOnInit lifecycle hook of the AppComponent like this
    this.store.dispatch(groceryActions.loadGroceries());
  }
}
