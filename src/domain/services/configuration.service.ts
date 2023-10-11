import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HttpAdapter } from 'src/infrastructure/adapters/HttpAdapter';

@Injectable({
    providedIn: 'root',
})
export class ConfigurationService {
    private renderer: Renderer2;

    private _theme = 'light';
    get theme() {
        return this._theme;
    }

    private locales = ['en', 'es'];
    private _locale = 'en'; // Default
    get locale() {
        return this._locale;
    }

    constructor(rendererFactory: RendererFactory2, private translate: TranslateService, private httpAdapter: HttpAdapter) {
        this.renderer = rendererFactory.createRenderer(null, null);
        this._setTheme('light');
        this._setLocale();

        const resp = httpAdapter.get('https://swapi.py4e.com/api/planets'); // 3
        resp.subscribe((resp) => console.log(resp));
    }

    private _setTheme(theme: string) {
        this._theme = theme;

        this.renderer.setAttribute(
            document.querySelector('html'),
            'data-bs-theme',
            theme
        );
    }

    toggleTheme() {
        if (this.theme == 'light') this._setTheme('dark');
        else this._setTheme('light');

        return this.theme;
    }

    private _setLocale = (locale?: string) => {


        if (locale == undefined) {
            const lang = navigator.languages;

            this.translate.setDefaultLang('en');

            locale = lang.find(
                (lang) => this.locales.find((loc) => loc == lang) != undefined
            ) || this.translate.getDefaultLang();
        }

        this._locale = locale;

        this.renderer.setAttribute(
            document.querySelector('html'),
            'lang',
            locale
        );
console.log("SL", locale)
        this.translate.use(locale);
    };

    toggleLocale() {
        if (this.locale == 'en') this._setLocale('es');
        else this._setLocale('en');

        return this.locale;
    }
}
