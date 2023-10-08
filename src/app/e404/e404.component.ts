import { Component, OnInit } from '@angular/core';

@Component({
    standalone: true,
    template: `
        <h1 class="p-5">HTTP Error <span class="text-danger">404</span> Page not found</h1>
    `,
    styles: [],
})
export class E404Component implements OnInit {
    constructor() {}

    ngOnInit() {}
}
