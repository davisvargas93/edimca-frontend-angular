import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject} from 'rxjs';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginValid = true;
  public user = 'edimca@prueba.com';
  public password = '12345';

  private _destroySub$ = new Subject<void>();

  constructor(
    private loginServices:LoginService,
    private router: Router,
  ) {
  }

  public ngOnInit(): void {

  }

  public ngOnDestroy(): void {
    this._destroySub$.next();
  }

  public onSubmit(): void {
    this.loginServices.validUser({user:this.user,password:this.password})
      .subscribe((res:any)=>{
        console.log(res)
        if (res) {
          this.router.navigate(['/products'])
        }
      })
  }
}

