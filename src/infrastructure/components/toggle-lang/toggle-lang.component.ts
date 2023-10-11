import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationService } from 'src/domain/services/configuration.service';

@Component({
    selector: "toggle-lang",
    standalone: true,
    imports: [CommonModule],
    template: `
        <span
            class="input-group-text ms-2"
            type="button"
            (click)="toggleLang()"
        >
            <img
                src="assets/svg/{{ langState.svg[langState.state] }}.svg"
                alt="{{ langState.alt[langState.state] }}"
                title="{{ langState.title[langState.state] }}"
                width="32"
                height="24"
            />
        </span>
    `,
    styles: [],
})
export class ToggleLangComponent {
    @Output() collapseNavbar = new EventEmitter<boolean>();
    protected langState = {
        svg: ["es", "en"],
        alt: ["Spanish flag", "British flag"],
        title: ["Set the english language", "Set the spanish language"],
        state: 0, // 0: English language set, the icon shows the spanish flag.
    };

    constructor(private conf: ConfigurationService) {}

    protected toggleLang() {
        this.setLangState(this.conf.toggleLocale());
    }

    private setLangState(lang: string) {
        console.group("SLS", lang);
        if (lang == "en") this.langState.state = 0;
        else this.langState.state = 1;
    }
}
