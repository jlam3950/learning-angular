import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  testName = '';
  testNameFlag = false;

  resetServer = () => { 
    if(this.testName !== ''){
      this.testNameFlag = true;
    } 
      this.testNameFlag = false;
      return this.testName = '';
  }
}
