import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  checkuser(uname: string, pwd: string): boolean {
    if (uname === "karthik" && pwd === "karthik") {
      localStorage.setItem('uname', uname);
      
      return true;
    } else {
      
      return false;
      localStorage.removeItem('uname');
      
    }
  }
}
