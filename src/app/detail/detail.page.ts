import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  constructor(private route: ActivatedRoute, private callNumber: CallNumber, public userService: UserService) {
      userService.getOne(this.route.snapshot.paramMap.get('id')).subscribe( usersdata => this.user = usersdata );
  }

  ngOnInit() {
  }

}
