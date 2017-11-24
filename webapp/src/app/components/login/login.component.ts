import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {



  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLogin(form) {
    if("admin" === form.username.value && "admin" === form.password.value) {
      console.log("welcome back!");
      this.router.navigateByUrl('/dashboard');
    }
     else {
       console.log("who are you?");
     }
  }

}
