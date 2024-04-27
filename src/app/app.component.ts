import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'foodorder';

  modalActive = false;
  opening = false;
  closing = false;

  showModal(){
    this.modalActive = true;
    this.opening = true;
  }

  closeModal(){
    this.closing = true;
    const t = setTimeout(() => {
      clearTimeout(t);
      this.modalActive = false;
      this.closing = false;
      this.opening = false;
    }, 500)
  }
}
