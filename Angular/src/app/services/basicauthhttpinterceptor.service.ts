import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasicauthhttpinterceptorService implements HttpInterceptor {

  constructor() { }


  intercept(req: HttpRequest<any>, next: HttpHandler) {

    
      req = req.clone({
        
          headers: req.headers.set('Authorization', 'Basic ' +  (sessionStorage.getItem('name') + ':' + sessionStorage.getItem('password'))) 
        
      })
    

    return next.handle(req);

}}
