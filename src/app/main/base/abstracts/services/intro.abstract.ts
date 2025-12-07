import { Directive } from "@angular/core";


@Directive() 
export abstract class IntroAbstractService {
 
  abstract greetings(brand: string): string;
}