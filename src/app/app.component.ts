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
  result: any;
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
    } else {
      this.value = this.value + val;
      this.val2 = Number(this.value);
    }

  }


  calculate(): void {
    if (this.operator == '+') {
      this.nums = Observable.of(this.val1 + this.val2);
    } else if (this.operator == '*') {
      this.nums = Observable.of(this.val1 * this.val2);
    } else if (this.operator == '-') {
      this.nums = Observable.of(this.val1 - this.val2);
    } else if (this.operator == '/') {
      this.nums = Observable.of(this.val1 / this.val2);
    }
    const calValues = map((val: number) => val);
    const calculatedNums = calValues(this.nums);
    this.value = (this.val1 + this.operator + this.val2).toString()
    calculatedNums.subscribe(x => {
        this.value = x.toString();
        this.val1 = Number(x);
    }

    );
    this.operator = '';
    this.val2 = '';
  }

  clear(): void {
    this.value = '';
  }

  clearScreen(): void {
    this.value = '';
    this.val1 = '' ;
    this.operator = '';
    this.val2 = '';
  }
}
