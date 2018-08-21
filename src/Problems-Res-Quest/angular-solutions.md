## Angular (v 5)
##### Содержание
* How to change format ngbdatepicker to 'dd/mm/yyyy'
* Click outside for closing datepicker
* Import moment

---

#### How to change format ngbdatepicker to 'dd/mm/yyyy'
###### ngb-date-fr-parser-formatter.ts
```ts
import { Injectable } from "@angular/core";
import { NgbDateParserFormatter, NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";

function padNumber(value: number) {
    if (isNumber(value)) {
        return `0${value}`.slice(-2);
    } else {
        return "";
    }
}

function isNumber(value: any): boolean {
    return !isNaN(toInteger(value));
}

function toInteger(value: any): number {
    return parseInt(`${value}`, 10);
}


@Injectable()
export class NgbDateFRParserFormatter extends NgbDateParserFormatter {
    parse(value: string): NgbDateStruct {
        if (value) {
            const dateParts = value.trim().split('/');
            if (dateParts.length === 1 && isNumber(dateParts[0])) {
                return {year: toInteger(dateParts[0]), month: null, day: null};
            } else if (dateParts.length === 2 && isNumber(dateParts[0]) && isNumber(dateParts[1])) {
                return {year: toInteger(dateParts[1]), month: toInteger(dateParts[0]), day: null};
            } else if (dateParts.length === 3 && isNumber(dateParts[0]) && isNumber(dateParts[1]) && isNumber(dateParts[2])) {
                return {year: toInteger(dateParts[2]), month: toInteger(dateParts[1]), day: toInteger(dateParts[0])};
            }
        }
        return null;
    }

    format(date: NgbDateStruct): string {
        let stringDate: string = "";
        if(date) {
            stringDate += isNumber(date.day) ? padNumber(date.day) + "/" : "";
            stringDate += isNumber(date.month) ? padNumber(date.month) + "/" : "";
            stringDate += date.year;
        }
        return stringDate;
    }
}

```


###### app.component.ts
```ts
...
// these 2 settings
import { NgbDateParserFormatter }     from '@ng-bootstrap/ng-bootstrap';
import { NgbDateFRParserFormatter }   from "../../settings/ngb-date-fr-parser-formatter";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    RequestService,
    {provide: NgbDateParserFormatter, useClass: NgbDateFRParserFormatter}  // <!-- here
   ]
})

// after it on a app.component.html it will out dd/mm/yyyy
```


#### Click outside for closing datepicker
https://developer.mozilla.org/en-US/docs/Web/API/Event
```html
<input #d1="ngbDatepicker"
       (click)="d1.toggle(); openDatepicker($event, d1)"
       [(ngModel)]="date"
       ngbDatepicker
       class="form-control"
       placeholder="dd/mm/yyyy">
```

```ts
@Component({
  ...
  host: {
    '(document:click)': 'checkDatepicker($event)',
  },
})

dynamicId = '';
...

openDatepicker(event, id){
   event.stopPropagation();
   this.dynamicId = id;
   // console.log("Datepicker Reference", id);
}


 checkDatepicker(event) {
    if(this.dynamicId){
      let self = this;
      setTimeout(function(){
         self.dynamicId.close();
       },10);
    }
 }
```


#### Import moment
```ts
// .angular-cli.json
{
  ...
  "apps": [
     ...
     "scripts": [
        "../node_modules/moment/min/moment.min.js"
     ]
     ...
  ]
  ...
}

// app.component.js
import * as moment from 'moment'; // add this 1 of 4

...
utc_format: string =  'YYYY-MM-DDTHH:mm:ss.SSSZ';
return moment(date, this.utc_format).format('DD/MM/YYYY HH:mm:ss');

```
