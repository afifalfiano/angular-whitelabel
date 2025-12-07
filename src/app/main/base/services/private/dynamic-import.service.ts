import {
  Component,
  inject,
  Injectable,
  Injector,
  Type,
} from '@angular/core';
import { Router } from '@angular/router';
import { registryConfig } from '@config/registry';

@Injectable({
  providedIn: 'root',
})
export class DynamicImportService {
  private readonly router = inject(Router);
  private readonly injector = inject(Injector);

  getBrand(): string {
    const brand =
      this.router.routerState.snapshot.root.firstChild?.paramMap.get('brand');
    return brand ?? 'base';
  }

  /**
   * Load ANY dynamic component from registry
   */
  async loadComponent(
    componentKey: string
  ): Promise<Type<Component>> {
    try {
      let components = registryConfig.base.components;

      if (this.getBrand() !== 'base') {
        components =
          registryConfig.custom[
            this.getBrand() as keyof typeof registryConfig.custom
          ]?.components || components;
      }

      const loader = (components as Record<string, () => Promise<any>>)[
        componentKey
      ];

      if (!loader) {
        throw new Error(`Component loader for "${componentKey}" not found`);
      }

      const loadedModule = await loader();

      // detect exported component dynamically (NavbarComponent, IntroComponent, etc.)
      const componentName = Object.keys(loadedModule).find((name) =>
        name.endsWith('Component')
      );

      if (!componentName) {
        throw new Error(`No component exported for "${componentKey}"`);
      }

      const component = loadedModule[componentName];

      return Promise.resolve(component);

    } catch (error) {
      console.error(`Error loading component "${componentKey}"`, error);
      return Promise.reject(null);
    }
  }

  /**
   * Load ANY dynamic service from registry
   */
  async loadService<T = any>(serviceKey: string): Promise<T | null> {
    try {
      let services = registryConfig.base.services;

      if (this.getBrand() !== 'base') {
        services =
          registryConfig.custom[
            this.getBrand() as keyof typeof registryConfig.custom
          ]?.services || services;
      }

      const loader = (services as Record<string, () => Promise<any>>)[
        serviceKey
      ];

      if (!loader) {
        throw new Error(`Service loader for "${serviceKey}" not found`);
      }

      const loadedModule = await loader();

      const serviceName = Object.keys(loadedModule).find((name) =>
        name.endsWith('Service')
      );

      if (!serviceName) {
        throw new Error(`No service exported for "${serviceKey}"`);
      }

      const serviceClass: Type<T> = loadedModule[serviceName];

      return this.injector.get(serviceClass);
    } catch (error) {
      console.error(`Error loading service "${serviceKey}"`, error);
      return null;
    }
  }
}
