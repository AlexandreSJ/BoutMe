import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-info',
  templateUrl: 'info.page.html',
  styleUrls: ['info.page.scss']
})
export class InfoPage {
  age: number;
  constructor() { }

  ngOnInit() {
    var today = new Date();
    var birthDate = new Date('2002/09/17');
    var age = today.getFullYear() - birthDate.getFullYear();
    var month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    this.age = age;
  }
}
