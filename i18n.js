import { I18n } from 'i18n-js';

const i18nCMS = new I18n({
    app: 'any_app',
    brand: 'any_brand',
    country: 'any_country',
    loading_from_redis: true
});

export { i18nCMS };