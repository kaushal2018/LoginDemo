import { Component } from '@angular/core';
// import { AngularFirestore } from 'angularfire2/firestore';
// import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  /*template: `
  <ul>
    <li *ngFor="let item of items | async">
      {{ item.name }}
    </li>
  </ul>
  `,*/
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Login';
  /*items: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.items = db.collection('items').valueChanges();
  }*/
}
