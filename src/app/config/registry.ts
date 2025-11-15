import { NavbarComponent } from '@base/components/navbar/navbar.component';

export const registryConfig: {
    base: {
        components: {
            'navbar'?: () => Promise<{ NavbarComponent: NavbarComponent }>;
        };
        services: {
            'intro'?: () => Promise<{ IntroService: any }>;
        };
    };
    custom: {
        [brand: string]: {
            components: {
                'navbar'?: () => Promise<{ NavbarComponent: NavbarComponent }>;
            };
            services: {
                'intro'?: () => Promise<{ IntroService: any }>;
            };
        };
    }
} = {
   base: {
    'components': {
        'navbar': () => import('@base/components/navbar/navbar.component')
    },
    'services': {
        'intro': () => import('@base/services/intro.service')
    }
   },
   custom: {
    'brand-A': {
        'components': {
            'navbar': () => import('@custom/brand-A/components/navbar/navbar.component')
        },
        'services': {
            'intro': () => import('@custom/brand-A/services/intro.service')
        }
    }
   },
}