import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  // constructor(private  _AuthService:AuthService,private _Router:Router){}
  constructor(private _Router:Router){}
  // errMsg:string='';
  // isLoading:boolean=false;
registerForm:FormGroup=new FormGroup({
  name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
  idNumber:new FormControl('',[Validators.required,Validators.pattern(/^[0-9]{14}$/)]),
  age:new FormControl('',[Validators.required,Validators.min(18),Validators.max(65)]),
  weight:new FormControl('',[Validators.required,Validators.pattern(/^[5-9][0-9]$/)]),
  gender:new FormControl('',[Validators.required]),
  bloodType:new FormControl('',[Validators.required]),
  lastDonationDate:new FormControl('',[Validators.required,Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)]),
  phone:new FormControl('',[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
  email:new FormControl('',[Validators.required,Validators.email]),
  password:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z0-9_@]{6,}$/)]),

});
handleForm():void{
  // const userData=this.registerForm.value;
  // this.isLoading=true;
  if(this.registerForm.valid==true){
    // this._AuthService.register(userData).subscribe({
      // next:(response)=>{
        // if(response.message=="success"){
          // this.isLoading=false;

this._Router.navigate(['/login'])
        // }
      }
      // error:(err)=>{
        // this.errMsg=err.error.message;
        // this.isLoading=false;

    //   },
    // });
  
}
}
// }
