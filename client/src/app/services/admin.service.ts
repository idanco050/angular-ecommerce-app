import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private isEmailsShown: boolean;
  constructor() {
    this.isEmailsShown = false;
  }
  public getisEmailsShowen ()
{
  return this.isEmailsShown;
}

public EmailsButtonClicked()
  {
    this.isEmailsShown = !this.isEmailsShown;
    console.log(this.isEmailsShown);
  }
}
