import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private toaster: ToastrService
  ) {}

  ngOnInit(): void {}
  login(loginForm: NgForm) {
    this.authService.login(loginForm.value).subscribe(
      (data) => {
        // enregistrer le token
        localStorage.setItem('token', data.id);
        // redirect
        this.router.navigate(['cv']);
      },
      (erreur) => {
        // error message
        console.log(erreur);
        this.toaster.error(`Veuillez vérifier vos credentials`);
      }
    );
  }
}
