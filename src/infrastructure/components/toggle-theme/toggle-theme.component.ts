import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationService } from 'src/domain/services/configuration.service';

@Component({
    selector: "toggle-theme",
    standalone: true,
    imports: [CommonModule],
    template: `
        <span
            class="input-group-text ms-2"
            type="button"
            (click)="toggleTheme()"
        >
            <img
                src="assets/svg/{{ themeState.svg[themeState.state] }}.svg"
                alt="{{ themeState.alt[themeState.state] }}"
                title="{{ themeState.title[themeState.state] }}"
                width="32"
                height="24"
            />
        </span>
    `,
    styles: [],
})
export class ToggleThemeComponent {
    @Output() collapseNavbar = new EventEmitter<boolean>();
    protected themeState = {
        svg: ["moon-stars-fill", "sun-fill"],
        alt: ["Moon icon", "Sun icon"],
        title: ["Set the dark theme", "Set the light theme"],
        state: 0, // 0: Light theme set, the icon shows the moon.
    };

    constructor(private conf: ConfigurationService) {}

    protected toggleTheme() {
        this.setThemeState(this.conf.toggleTheme());
        this.collapseNavbar.emit(true);
    }

    private setThemeState(theme: string) {
        if (theme == "light") this.themeState.state = 0;
        else this.themeState.state = 1;
    }
}
