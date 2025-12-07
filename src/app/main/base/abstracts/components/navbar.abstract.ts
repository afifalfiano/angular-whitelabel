import { Directive, inject } from "@angular/core";
import { GlobalService } from "@base/services/private/global.service";

@Directive() 
export abstract class NavbarAbstractComponent {
  private readonly globalSrv = inject(GlobalService);
 
  scrollTo(section: string) {
    this.globalSrv.scrollTo(section);
  }
}