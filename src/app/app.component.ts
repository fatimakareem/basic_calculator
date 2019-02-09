import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value = '';
  operator:any;
  nums:any;
  public val1:any;
  public val2:any;
  title = 'Calculator';
  opr(val:any) {
    this.operator = val;
    this.clear();
  }
  num(val: number) {
     if (!this.operator) {
    this.value = this.value + val;
      this.val1 = Number(this.value);
    }
    else {
      this.value = this.value + val;
      this.val2 = Number(this.value);
    }

  }

  calculate() {
    if (this.operator == '+') {
      this.nums = Observable.of(this.val1 + this.val2);
    }
    if (this.operator == '*') {
      this.nums = Observable.of(this.val1 * this.val2);
    }
    if (this.operator == '-') {
      this.nums = Observable.of(this.val1 - this.val2);
    }
    if (this.operator == '/') {
      this.nums = Observable.of(this.val1 / this.val2);
    }
    const calValues = map((val: number) => val);
    const calculatedNums = calValues(this.nums);

    calculatedNums.subscribe(x => {
      this.value = x.toString();
    }

    );
    this.operator = '';
    this.val1 = '';
    this.val2 = '';
  }
  clear() {
    this.value = '';
  }
}
