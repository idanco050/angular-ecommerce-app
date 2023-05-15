import { Component, OnInit } from '@angular/core';
import {AdminService} from '../services/admin.service';

@Component({
  selector: 'app-electronics-clients',
  templateUrl: './electronics-clients.component.html',
  styleUrls: ['./electronics-clients.component.scss']
})
export class ElectronicsClientsComponent implements OnInit {
  emailList = ['john@example.com', 'jane@example.com', 'bob@example.com'];
  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
  }
  closeEmailList() {
    this.adminService.EmailsButtonClicked();
  }
}
