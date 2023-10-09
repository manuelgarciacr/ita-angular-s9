import { Component, LOCALE_ID, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../componeents/navbar/navbar.component";
import { ConfigurationService } from 'src/services/configuration.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: "app-root",
    standalone: true,
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
    imports: [CommonModule, RouterOutlet, NavbarComponent],
})
export class AppComponent {
    title = "ita-angular-s9";

    constructor(private translate: TranslateService, private conf: ConfigurationService) {
        translate.setDefaultLang("en");
        translate.use(conf.locale);
    }
}
