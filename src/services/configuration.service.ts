import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ConfigurationService {
    private renderer: Renderer2;
    private _theme = 'light';
    get theme() {
        return this._theme;
    }
    // private locales = ['en', 'es'];
    // private _locale = 'en-US';
    // get locale() {
    //     return this._locale;
    // }

    constructor(
        // @Inject(LOCALE_ID) locale: string,
        rendererFactory: RendererFactory2
    ) {
        this.renderer = rendererFactory.createRenderer(null, null);
        this._setTheme('light');
    }

    // private _setLocale = () => {
    //     const lang = navigator.languages;
    //     this._locale =
    //         lang.find(
    //             (lang) => this.locales.find((loc) => loc == lang) != undefined
    //         ) || this._locale;
    //     this.renderer.setAttribute(
    //         document.querySelector('html'),
    //         'lang',
    //         'tr'
    //     );
    // };

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
}
