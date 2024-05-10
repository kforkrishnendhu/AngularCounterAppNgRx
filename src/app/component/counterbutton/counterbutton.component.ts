import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../../shared/store/counter.actions';
import { MaterialModule } from '../../Material.Module';


@Component({
  selector: 'app-counterbutton',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './counterbutton.component.html',
  styleUrl: './counterbutton.component.css'
})
export class CounterbuttonComponent {
  constructor(private store: Store<{ counter: { counter: number } }>) {

  }

  OnIncrement() {
    this.store.dispatch(increment());
  }

  OnDecrement() {
    this.store.dispatch(decrement());
  }

  OnReset() {
    this.store.dispatch(reset());
  }

}
