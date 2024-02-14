import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../auth/component/register/register.component';
import { LoginComponent } from '../auth/component/login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _dialog: MatDialog) { }

  ngOnInit(): void {
  }

  OpenRegisterForm() {
    this._dialog.open(RegisterComponent)
  }

  OpenLoginForm() {
    this._dialog.open(LoginComponent)
  }

}
