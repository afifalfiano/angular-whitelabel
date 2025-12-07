import {
  AfterViewInit,
  Component,
  inject,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { IntroService } from '@base/services/intro.service';
import { DynamicImportService } from '@base/services/private/dynamic-import.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss',
})
export class PagesComponent implements AfterViewInit {
  private readonly dynamicImportSrv = inject(DynamicImportService);

  @ViewChild('navbar', { read: ViewContainerRef, static: true })
  navbarContainer!: ViewContainerRef;

  introSrv: IntroService | null = null;

  async ngAfterViewInit(): Promise<void> {
    this.loadNavbarComponent();
    this.loadServices();
  }

  private async loadNavbarComponent() {
    try {
      const component = await this.dynamicImportSrv.loadComponent('navbar');
      if (component) {
        this.navbarContainer.clear();
        this.navbarContainer.createComponent(component);
      }
    } catch (error) {
      console.log(error);
    }
  }

  private async loadServices() {
    try {
      const service = await this.dynamicImportSrv.loadService('intro');
      if (service) {
        this.introSrv = service;
      }
    } catch (error) {
      console.log('error',error);
    }
  }

  sayHi(): void {
    const message = this.introSrv?.greetings(this.dynamicImportSrv.getBrand());
    console.info(message);
  }
}
