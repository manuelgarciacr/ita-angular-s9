import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "src/infrastructure/components/navbar/navbar.component";

@Component({
    standalone: true,
    templateUrl: './home.component.html',
    styles: [],
    imports: [CommonModule, NavbarComponent]
})
export class HomeComponent {

}
