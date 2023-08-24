import { Injectable } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { ActivatedRouteSnapshot, CanActivate, CanMatch, Route, Router, RouterStateSnapshot, UrlSegment } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class AuthGuard  {

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

    private checkAuthStatus(){
      if(!this.authService.user){
        this.router.navigate(['/auth/login']);
      }
    }

// canMatch(
//   route:Route,
//   segments: UrlSegment[]
//   ):boolean | Observable<boolean> {
//     this.checkAuthStatus();
//     return true;
//   }

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): boolean | Observable<boolean> {
//     this.checkAuthStatus();
//     return true;
//     }

}
