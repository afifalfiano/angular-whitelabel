import {
  Component,
  inject,
} from '@angular/core';
import { GlobalService } from '@base/services/private/global.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss',
})
export class PagesComponent {
  private readonly globalSrv = inject(GlobalService);

  scrollTo(id: string): void {
    this.globalSrv.scrollTo(id);
  }
}
