import { Component, inject, Injector, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { IntroService } from '@base/services/intro.service';
import { registryConfig } from '@config/registry';

@Component({
  selector: 'app-pages',
  imports: [RouterOutlet],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss'
})
export class PagesComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly injector = inject(Injector);
  private brand = this.route.snapshot.paramMap.get('brand');

  @ViewChild('navbar', { read: ViewContainerRef, static: true }) navbarContainer!: ViewContainerRef;

  introSrv: IntroService | null = null;
  message: string | undefined;

  ngOnInit(): void {
    this.loadNavbarComponent();
    this.loadServices();
  }

  private async loadNavbarComponent() {
    console.log(this.brand)
    try {
      let component = registryConfig.base.components;
      if (this.brand !== 'base') {
        component  = registryConfig.custom[this.brand as keyof typeof registryConfig.custom]?.components || component;
      }
      const data = await (component as unknown as Record<string, () => Promise<any>>)['navbar']();
      if (data) {
        const { NavbarComponent } = data;
        this.navbarContainer.clear();
        this.navbarContainer.createComponent(NavbarComponent);
      } else {
        throw new Error('Navbar component not found in registry');
      }
    } catch (error) {
      console.error('Error load navbar component', error);
      
    } 
  }

  private async loadServices() {
    try {
      let services = registryConfig.base.services;
      if (this.brand !== 'base') {
        services  = registryConfig.custom[this.brand as keyof typeof registryConfig.custom]?.services || services;
      }
      const data = await (services as unknown as Record<string, () => Promise<any>>)['intro']();
      if (data) {
        this.introSrv = this.injector.get(data.IntroService);
      }
    } catch (error) {
      console.error('Error load intro service', error);
    }
  }

  sayHi(): void {
    this.message = this.introSrv?.greetings(this.brand as string);
  }
}
