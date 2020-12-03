import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  title = 'mindsystem';

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
    // tslint:disable-next-line: prefer-const
    let firebaseConfig = {
      apiKey: 'AIzaSyD26Xk-PBBYaWJU4E6Janxnima3ky_n9NM',
      authDomain: 'mindsystem-5c32d.firebaseapp.com',
      databaseURL: 'https://mindsystem-5c32d.firebaseio.com',
      projectId: 'mindsystem-5c32d',
      storageBucket: 'mindsystem-5c32d.appspot.com',
      messagingSenderId: '728980532653',
      appId: '1:728980532653:web:f68312971f4c4d2b000524',
      measurementId: 'G-MFJ43V8CE5'
    };
    firebase.default.initializeApp(firebaseConfig);

  }
}
