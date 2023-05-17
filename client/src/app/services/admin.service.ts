import { Injectable } from '@angular/core';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private isElectronicEmailsShown: boolean;
  private isPremiumEmailShown: boolean;
  constructor(
    private apiService: ApiService
  ) {
    this.isElectronicEmailsShown = false;
    this.isPremiumEmailShown = false;
  }
  public getIsElectronicEmailsShown ()
{
  return this.isElectronicEmailsShown;
}

public getIsPremiumEmailShown()
{
  return this.isPremiumEmailShown;
}

public electronicEmailsButtonClicked()
  {
    this.isElectronicEmailsShown = !this.isElectronicEmailsShown;
  }
  public premiumEmailsButtonClicked()
  {
    this.isPremiumEmailShown = !this.isPremiumEmailShown;
  }

  public getElectronicCustomersEmails()
  {
     return this.apiService.getTypeRequest('cdp/electronicSegment');
  }
  public getPremiumCustomersEmails()
  {
    return this.apiService.getTypeRequest('cdp/heavyBuyersSegment');
  }
}
