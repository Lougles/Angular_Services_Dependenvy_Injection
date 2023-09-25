import {Component, inject, Input} from '@angular/core';
import {LoggingService} from "../logging.service";
import {AccountsService} from "../accounts.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  private loggingService: LoggingService;
  private accountService: AccountsService;
  constructor() {
    this.loggingService = inject(LoggingService);
    this.accountService = inject(AccountsService)
  }

  onSetTo(status: string) {
    this.accountService.updateAccount(this.id, status);
    this.loggingService.logStatusChange(this.account.name, status);
  }
}
