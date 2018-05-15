import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1 id="hello">Hello World!</h1>
    <input id="input" type="text" pInputText /><br>
    <div class="espaco"></div>
    <p-inputMask id="inputMask" mask="99-9999"></p-inputMask><br>
    <p-calendar id="calendar" dateFormat="dd/mm/yy"></p-calendar><br>

    <p-autoComplete id="autoComplete" [(ngModel)]="brand" [suggestions]="filteredBrands" (completeMethod)="filterBrands($event)" [size]="30"
        [minLength]="1" placeholder="Hint: type 'v' or 'f'" [dropdown]="true">
        <ng-template let-brand pTemplate="item">
            <div class="ui-helper-clearfix" style="border-bottom:1px solid #D5D5D5">
                <div style="font-size:18px;float:right;margin:10px 10px 0 0">{{brand}}</div>
            </div>
        </ng-template>
    </p-autoComplete><br>

    <p-dropdown id="dropdown" [options]="cities" [(ngModel)]="selectedCity" placeholder="Select a City" optionLabel="name" [showClear]="true"></p-dropdown>
  `,
  styles: [
    `
      .espaco {
        height: 2000px;
      }
    `
  ]
})
export class AppComponent {
  title = 'app';

  brands: string[] = ['Audi', 'BMW', 'Fiat', 'Ford', 'Honda', 'Jaguar', 'Mercedes', 'Renault', 'Volvo', 'VW'];

  filteredBrands: any[];

  cities: any[] = this.cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];
  selectedCity: any;

  filterBrands(event) {
    this.filteredBrands = [];
    for (let i = 0; i < this.brands.length; i++) {
      let brand = this.brands[i];
      if (brand.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
        this.filteredBrands.push(brand);
      }
    }
  }
}
