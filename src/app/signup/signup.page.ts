import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services.login/auth.service';
import { User } from '../shared/user.class';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  user: User = new User();

  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit() {
  }

  async onRegister(){
    const user = await this.authSvc.onRegistrar(this.user);
    if (user){
      console.log('Registrado correctamente');
      this.router.navigateByUrl('tipos-multas');
    }
  }

}
