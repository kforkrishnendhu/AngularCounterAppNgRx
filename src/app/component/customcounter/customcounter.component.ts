import { Component } from '@angular/core';
import { MaterialModule } from '../../Material.Module';
import { Store } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { customIncrement } from '../../shared/store/counter.actions';

@Component({
  selector: 'app-customcounter',
  standalone: true,
  imports: [MaterialModule, FormsModule],
  templateUrl: './customcounter.component.html',
  styleUrl: './customcounter.component.css'
})
export class CustomcounterComponent {
  constructor(private store: Store<{ counter: { counter: number } }>) {

  }
  counterInput!: number;
  actionType: string = 'add';

  OnIncrement() {
    this.store.dispatch(customIncrement({ value: +this.counterInput, action: this.actionType }));

  }

}
