import { Injectable } from '@angular/core';
import { IntroAbstractService } from '@base/abstracts/services/intro.abstract';

@Injectable({
  providedIn: 'root'
})
export class IntroService extends IntroAbstractService {

  override greetings(brand: string): string {
    return `Hello, I'm from ${brand} as a brand A`;
  }
}
