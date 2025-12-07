import { NavbarComponent } from '@base/components/navbar/navbar.component';

interface RegisterConfig {
    base: {
        components: {
            'navbar'?: () => Promise<{ NavbarComponent: any }>;
        };
        services: {
            'intro'?: () => Promise<{ IntroService: any }>;
        };
    };
    custom: {
        [brand: string]: {
            components: {
                'navbar'?: () => Promise<{ NavbarComponent: any }>;
            };
            services: {
                'intro'?: () => Promise<{ IntroService: any }>;
            };
        };
    }
}

export const registryConfig: RegisterConfig  = {
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