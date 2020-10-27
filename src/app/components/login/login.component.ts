import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getMaxListeners } from 'process';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email;
  pass;
  error = false;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  login(){
    if(this.email === 'sergionexx1@gmail.com' && this.pass === '123456'){
      this.router.navigate(['summary']);
      this.error = false;
    }else{
      this.error = true;
    }
  }

}
