import {Injectable} from "@angular/core";

@Injectable()
export class LoggingService {
  logStatusChange(name: string, status: string) {
    console.log(`A ${name} server status changed, new status: ${status}`);
  }
}
