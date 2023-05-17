import { Component, OnInit } from '@angular/core';
import {AdminService} from '../services/admin.service';

@Component({
  selector: 'app-premium-customers',
  templateUrl: './premium-customers.component.html',
  styleUrls: ['./premium-customers.component.scss']
})
export class PremiumCustomersComponent implements OnInit {

  emailList = [];
  loading = false;

  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    setTimeout(() => {
      this.adminService.getPremiumCustomersEmails().subscribe(
        (res: any) => {
          console.log(res);
          this.emailList = res;
          this.loading = false;
        },
        (err) => {
          console.log(err);
          this.loading = false;
        }
      );
    }, 500);
  }

  closeEmailList() {
    this.adminService.premiumEmailsButtonClicked();
  }

}
