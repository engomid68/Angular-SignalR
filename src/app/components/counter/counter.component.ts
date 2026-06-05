import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { toSignal } from '@angular/core/rxjs-interop';
import { selectCount } from '../../services/ngrx/counter.selectors';
import { decrement, increment, reset } from '../../services/ngrx/counter.actions';

@Component({
  selector: 'app-counter',
  standalone: true,
  templateUrl: 'counter.component.html',
  styleUrls: ['counter.component.scss']
})
export class CounterComponent {
  private store = inject(Store);
  count = toSignal(this.store.select(selectCount), { initialValue: 0 });

  onIncrement() {
    this.store.dispatch(increment());
  }

  onDecrement() {
    this.store.dispatch(decrement());
  }

  onReset() {
    this.store.dispatch(reset());
  }
}