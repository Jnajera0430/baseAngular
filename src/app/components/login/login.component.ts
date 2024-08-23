import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthServiceService } from '../../services/auth-service.service';
import { Iuser } from '../../interfaces/iuser';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  public Credentials: Iuser = {
    username: '',
    password: '',
  };
  constructor(private readonly _authService: AuthServiceService) {}

  public Login(form: NgForm) {
    this._authService.AuhtLogin(form.value);
  }
}
