import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IntroService {

  constructor() { }

  greetings(brand: string): string {
    return `Hello, Good morning everyone, I'm ${brand}`;
  }
}
