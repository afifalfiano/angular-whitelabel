export interface RegisterConfig {
    base: {
        components: {
            [key: string]: () => Promise<{ [key: string]: any }>;
        };
        services: {
            [key: string]: () => Promise<{ [key: string]: any }>;
        };
    };
    custom: {
        [brand: string]: {
            components: {
                [key: string]: () => Promise<{ [key: string]: any }>;
            };
            services: {
                [key: string]: () => Promise<{ [key: string]: any }>;
            };
        };
    }
}