import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    NgbDropdownModule,
    NgbCollapse,
} from "@ng-bootstrap/ng-bootstrap";
import { ConfigurationService } from 'src/domain/services/configuration.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
    selector: "navbar",
    standalone: true,
    imports: [CommonModule, NgbDropdownModule, NgbCollapse, TranslateModule],
    templateUrl: "./navbar.component.html",
    styles: [],
})
export class NavbarComponent {
    protected isMenuCollapsed = true;
    protected themeState = {
        svg: ["moon-stars-fill", "sun-fill"],
        alt: ["Moon icon", "Sun icon"],
        title: ["Set the dark theme", "Set the light theme"],
        state: 0, // 0: Light theme set, the icon shows the moon.
    };
    protected langState = {
        svg: ["es", "en"],
        alt: ["Spanish flag", "British flag"],
        title: ["Set the english language", "Set the spanish language"],
        state: 0, // 0: English language set, the icon shows the spanish flag.
    };

    constructor(
        private conf: ConfigurationService,
        protected translate: TranslateService
    ) {
        this.setThemeState(conf.theme);
        this.setLangState(conf.locale);
    }

    protected toggleTheme() {
        this.setThemeState(this.conf.toggleTheme());
    }

    private setThemeState(theme: string) {
        if (theme == "light") this.themeState.state = 0;
        else this.themeState.state = 1;
    }

    protected toggleLang() {
        this.setLangState(this.conf.toggleLocale());
    }

    private setLangState(lang: string) {
        console.group("SLS", lang);
        if (lang == "en") this.langState.state = 0;
        else this.langState.state = 1;
    }
}
