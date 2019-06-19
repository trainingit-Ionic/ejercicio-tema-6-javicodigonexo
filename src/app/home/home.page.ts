import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{
    users = [];
    userdetail = [];
    constructor(private callNumber: CallNumber, public userService: UserService) {
        userService.get().subscribe( usersdata => this.users = usersdata );
    }

   llamar(numero){
    this.callNumber.callNumber(numero, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
      }
}
