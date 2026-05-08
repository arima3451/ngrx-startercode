import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Bucket } from '../../../models/bucket.model';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-bucket',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bucket.component.html',
  styleUrl: './bucket.component.css'
})
export class BucketComponent {

   myBucket$?:Observable<Bucket[]>; 
  constructor(private store:Store<{bucket:Bucket[]}>) {
    // we can also use the async pipe in the template to subscribe to the observable and get the data like this
    // this.myBucket$ = this.store.select('bucket'); 
    //above code is also correct but we can also use the selector function to select the data from the store like this
    this.myBucket$ = this.store.select((state: {bucket:Bucket[]}) => state.bucket);
  }

}
