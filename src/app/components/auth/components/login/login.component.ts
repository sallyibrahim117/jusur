import { Component, signal } from '@angular/core';
import { LanguageService } from '../../../../services/language.service';
import { key } from '../../../../core/localStorage';
import { Router, RouterModule, RouterOutlet } from "@angular/router";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../../../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,HttpClientModule,TranslateModule,RouterModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
 language = signal<string>('en');
//  phone:string="sally101"
//  password:string="123456"

   constructor(private readonly __LanguageService: LanguageService ,private fb:FormBuilder,private router :Router,
    private loginService:LoginService) { }
   myForm:FormGroup=this.fb.group({ phone:['',[Validators.required]],
      password:['',[Validators.required]]
   })
    ngOnInit(): void {
        this.__LanguageService.setLanguage();
    this.language.set(this.__LanguageService.getLanguage());
    }
     changeLanguage(lang: string): void {
    this.__LanguageService.changeLang(lang);

    localStorage.setItem(key.language, lang);
    window.location.reload();


  }
   get formControlls():any{
      return this.myForm.controls;
    }
       submit(){

      if (this.myForm.valid){


        console.log(this.myForm);
        console.log(this.myForm.value);

      }
      else {
  this.myForm.markAllAsTouched();
      }


    }
    login(){
     let data={
   "email": this.myForm.value?.phone,
    "password": this.myForm.value?.password
  }
  this.loginService.login(data).subscribe({
    next:(res:any)=>{
console.log("hi"+res)
this.router.navigate(['/home'])
    },
   error:(err:any)=>{

   }
  })

    }

}
