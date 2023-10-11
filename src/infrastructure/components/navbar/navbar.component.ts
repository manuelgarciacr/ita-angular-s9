import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    NgbDropdownModule,
    NgbCollapse,
} from "@ng-bootstrap/ng-bootstrap";
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { noDragging } from 'src/ulils/noDragging';
import { Route, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { routes } from 'src/app/app.routes';
import { ToggleThemeComponent } from "../toggle-theme/toggle-theme.component";
import { ToggleLangComponent } from "../toggle-lang/toggle-lang.component";

@Component({
    selector: "navbar",
    standalone: true,
    templateUrl: "./navbar.component.html",
    styles: [],
    imports: [
        CommonModule,
        NgbDropdownModule,
        NgbCollapse,
        TranslateModule,
        RouterLink,
        RouterLinkActive,
        ToggleThemeComponent,
        ToggleLangComponent
    ]
})
export class NavbarComponent implements OnInit {
    protected isMenuCollapsed = true;
    // protected themeState = {
    //     svg: ["moon-stars-fill", "sun-fill"],
    //     alt: ["Moon icon", "Sun icon"],
    //     title: ["Set the dark theme", "Set the light theme"],
    //     state: 0, // 0: Light theme set, the icon shows the moon.
    // };
    // protected langState = {
    //     svg: ["es", "en"],
    //     alt: ["Spanish flag", "British flag"],
    //     title: ["Set the english language", "Set the spanish language"],
    //     state: 0, // 0: English language set, the icon shows the spanish flag.
    // };
    protected paths: Route[] = [];

    constructor(
        //private conf: ConfigurationService,
        protected translate: TranslateService,
        private router: Router
    ) {
        //this.setThemeState(conf.theme);
        //this.setLangState(conf.locale);
        this.paths = routes.filter(v => v.data?.["trn"] != undefined);
    }

    ngOnInit(): void {
        noDragging();
        console.log("RRR", this.router, this.router.url);
    }

    // protected toggleTheme() {
    //     this.setThemeState(this.conf.toggleTheme());
    // }

    // private setThemeState(theme: string) {
    //     if (theme == "light") this.themeState.state = 0;
    //     else this.themeState.state = 1;
    // }

    // protected toggleLang() {
    //     this.setLangState(this.conf.toggleLocale());
    // }

    // private setLangState(lang: string) {
    //     console.group("SLS", lang);
    //     if (lang == "en") this.langState.state = 0;
    //     else this.langState.state = 1;
    // }
}
