import { LOCALE_ID, Injectable, inject, Inject } from '@angular/core';

@Injectable({
    providedIn: "root",
})
export class ConfigurationService {
    private locales = ["en", "es"];
    private _theme = "light";
    private _locale = "en-US";
    get locale() {
        return this._locale;
    }

    constructor(@Inject(LOCALE_ID) locale: string) {
        this.setLocale();

        console.log("LOC", this.locales, navigator.languages, this._locale);
    }

    private setLocale = () => {
        const lang = navigator.languages;
        this._locale =
            lang.find(
                lang => this.locales.find(loc => loc == lang) != undefined
            ) || this._locale;
    };
}
