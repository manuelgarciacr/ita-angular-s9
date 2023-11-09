import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
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
import { LoginControlComponent } from "../login-control/login-control.component";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTabsModule } from "@angular/material/tabs";
import { MediaMatcher } from "@angular/cdk/layout";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";

@Component({
    selector: "navbar",
    standalone: true,
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.scss"],
    imports: [
        // CommonModule,
        // NgbDropdownModule,
        // NgbCollapse,
        NgFor,
        NgIf,
        TranslateModule,
        RouterLink,
        RouterLinkActive,
        ToggleThemeComponent,
        ToggleLangComponent,
        LoginControlComponent,
        MatTabsModule,
        MatToolbarModule,
        MatIconModule,
        MatTabsModule,
        MatSidenavModule,
        MatListModule,
    ],
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
    // protected links = routes
    //     .map(route => route.path)
    //     .filter(r => r != "" && r != "**"); //["Home", "Map", "Full Calendar", "Graphics"];
    protected links;
    protected activeLink;
    protected isMobile = false;

    // constructor(
    //     //private conf: ConfigurationService,
    //     protected translate: TranslateService,
    //     private router: Router
    // ) {
    //     //this.setThemeState(conf.theme);
    //     //this.setLangState(conf.locale);
    //     this.paths = routes.filter(v => v.data?.["trn"] != undefined);
    //     this.links = routes.filter(v => v.data?.["trn"] != undefined);
    //     this.activeLink = this.links[0];
    // }
    constructor(
        private router: Router,
        // private _mobileQueryListener: () => void;
        protected translate: TranslateService,
        changeDetectorRef: ChangeDetectorRef,
        media: MediaMatcher
    ) {
        this.paths = routes.filter(v => v.data?.["trn"] != undefined);
        this.links = routes.filter(v => v.data?.["trn"] != undefined);
        this.activeLink = this.links[0].path;

        const mobileQuery = media.matchMedia("(max-width: 600px)");
        mobileQuery.onchange = e => (this.isMobile = e.matches ? true : false);

        //this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        //this.mobileQuery.addListener(this._mobileQueryListener);
    }

    // ngOnDestroy(): void {
    //     this.mobileQuery.removeListener(this._mobileQueryListener);
    // }

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
