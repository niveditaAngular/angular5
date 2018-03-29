import {Injectable} from "@angular/core";
import {CanActivate,
        CanActivateChild,
        CanDeactivate} from "@angular/router";
import {PagetwoComponent} from "./pagetwo.component";
@Injectable()
export class AuthService implements CanActivate,
  CanActivateChild,
  CanDeactivate<PagetwoComponent>{
  canActivate(): boolean {
    return confirm('Do you want to enter into page one ??');
  }
  canActivateChild(): boolean {
    return confirm("Do you want to enter into child one ??");
  }
  canDeactivate(obj:PagetwoComponent):boolean{
    return confirm("Do you want to leave page two ??");
  }
}
