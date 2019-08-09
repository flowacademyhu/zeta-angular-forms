import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  public saveForm(formData) {
    console.log(formData)
  }
}

/* 1. Létrehozzuk a logservicet, amiben létrehozunk egy metódust, ami annyit csinál, hogy kiíratjuk
a paraméterben kapott adatokat. */