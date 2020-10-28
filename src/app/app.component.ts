import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <div class="mainContainer">
    <p>
      Hello World! I could be the navbar... but for now go mannually to
      localhost:4200/register
    </p>
    <router-outlet></router-outlet>
  </div>`,
  styles: [
    `
      .mainContainer {
        padding: 20px;
      }
    `,
  ],
})
export class AppComponent {
  title = 'boardgame-app';
}
