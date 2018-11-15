import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stencil-angular-test';

  progress: number = 0;
  label: string = 'UP PROGRESS';

  upProgress() {
    if (this.progress < 99) {
      this.progress = this.progress + 10;
      console.log(this.progress)
    }
  }
}
