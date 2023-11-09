import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from 'src/domain/services/users.service';
import { IUser } from 'src/domain/model/IUser';

@Component({
    selector: 'login-control',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div ngbDropdown class="d-inline-block">
            <button
                type="button"
                class="input-group-text"
                id="dropdownBasic1"
                ngbDropdownToggle
                translate
            >
                LOGIN_CONTROL.LogIn
            </button>
            <div ngbDropdownMenu aria-labelledby="dropdownBasic1">
                <button ngbDropdownItem>Profile</button>
                <button ngbDropdownItem>Log Out</button>
                <button ngbDropdownItem>Something else is here</button>
            </div>
        </div>
    `,
    styles: [],
})
export class LoginControlComponent {
    @Output() collapseNavbar = new EventEmitter<boolean>();
    //private user: IUser |null

    constructor(private usersService: UsersService) {

    }


}
