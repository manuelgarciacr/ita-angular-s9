import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfigurationService } from 'src/services/configuration.service';

@Component({
    selector: 'navbar',
    standalone: true,
    imports: [CommonModule, NgbDropdownModule],
    templateUrl: './navbar.component.html',
    styles: [],
})
export class NavbarComponent {
    protected themeState = {
        svg: ['moon-stars-fill', 'sun-fill'],
        alt: ['Moon icon', 'Sun icon'],
        title: ['Set the dark theme', 'Set the light theme'],
        state: 0, // 0: Light theme set, the icon shows the moon.
    };

    constructor(private conf: ConfigurationService) {
        this.setThemeState(conf.theme);
    }

    protected toggleTheme() {
        this.setThemeState(this.conf.toggleTheme());
    }

    private setThemeState(theme: string) {
        if (theme == 'light') this.themeState.state = 0;
        else this.themeState.state = 1;
    }
}
