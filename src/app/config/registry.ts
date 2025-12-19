import { NavbarComponent } from '@base/components/navbar/navbar.component';
import { RegisterConfig } from 'app/models/config.interface';

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