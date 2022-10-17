import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { of } from 'rxjs';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  public signinForm !: FormGroup;
  constructor(private formBuilder: FormBuilder, private http:HttpClient,private router:Router) { }
  ngOnInit(): void {
    this.signinForm = this.formBuilder.group({
      name:[''],
      email:[''],
      password:[''],
  })}
  API = 'http://localhost:3000/users';
  signin(){
    this.http.get<any>(this.API)
    .subscribe(res=>{
         const user = res.find((a:any)=>{
         return a.email  === this.signinForm.value.email;
      });
      if(!user){   
        const data = this.signinForm.value;
        console.log(data);
        this.http.post<object>(this.API,data).subscribe({
        next: (success)=>  alert("signin success!"),
        })
        this.router.navigate(['home']);
      }else{
        alert("login failure");
      }
    })
    
  }
}
