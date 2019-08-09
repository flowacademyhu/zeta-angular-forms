import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';
  
@Component({
  selector: 'app-input-fields',
  templateUrl: './input-fields.component.html',
  styleUrls: ['./input-fields.component.css']
})
export class InputFieldsComponent implements OnInit {

  public name: string;
  public age: number;
  public description: string;

  constructor(
    private _logService: LogService
  ) { }

  ngOnInit() {
  }

  public onSubmit() {
    const data = {
      name: this.name,
      age: this.age,
      description: this.description,
    }
    this._logService.saveForm(data);
  }

}

/* 2. Beinjektáljuk a logService-t. Elkészítjük az onSubmit() metódusunkat, ami először kimenti az ngModellel
bekötött input mezők aktuális értékét. Meghívjuk a logservice saveform metódusát, úgy hogy paraméterként
átadjuk az elkészített objectünket. */