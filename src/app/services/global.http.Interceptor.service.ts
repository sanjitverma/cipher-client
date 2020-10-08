import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from "rxjs";
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobalHttpInterceptorService implements HttpInterceptor{


  constructor(public router: Router) {
  }

  // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

  //   return next.handle(req).pipe(
  //     catchError((error) => {
  //       console.log('Http error cocured')
  //       console.error(error);
  //       return throwError(error.message);
  //     })
  //   )
  // }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (sessionStorage.getItem('username') && sessionStorage.getItem('basicauth')) {
      req = req.clone({
        setHeaders: {
          Authorization: sessionStorage.getItem('basicauth')
        }
      })
    }
    
    return next.handle(req).pipe(
      catchError((errorResponse) => {
        let handled: boolean = false;
        console.error(errorResponse);
        if (errorResponse instanceof HttpErrorResponse) {
          if (errorResponse.error instanceof ErrorEvent) {
            console.error("Error Event");
          } else {
            console.log(`error status : ${errorResponse.status} ${errorResponse.statusText}`);
            switch (errorResponse.status) {
              case 401:      //login
                this.router.navigateByUrl("/login");
                console.log(`Authentication error, redirect to login`);
                handled = false;
                break;
              case 403:     //forbidden
                this.router.navigateByUrl("/login");
                console.log(`Authorization error, redirect to login`);
                handled = false;
                break;
              default:
                this.router.navigateByUrl("/error"); 
                console.log(`redirect to error`); 
                handled = true;
            }
          }
        }
        else {
          console.error("Other Errors");
        }

        if (handled) {
          console.log('return back ');
          return of(errorResponse);
        } else {
          //console.log('throw error back to to the subscriber');
          return throwError(errorResponse);
        }

      })
    )
  }
}
