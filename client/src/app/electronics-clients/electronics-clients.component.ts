import { Component, OnInit } from '@angular/core';
import {AdminService} from '../services/admin.service';

@Component({
  selector: 'app-electronics-clients',
  templateUrl: './electronics-clients.component.html',
  styleUrls: ['./electronics-clients.component.scss']
})
export class ElectronicsClientsComponent implements OnInit {
  emailList = [];
  loading = false;
  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
    this.loading = true;
     setTimeout(() => {
      this.adminService.getElectronicCustomersEmails().subscribe(
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
    this.adminService.electronicEmailsButtonClicked();
  }


}
