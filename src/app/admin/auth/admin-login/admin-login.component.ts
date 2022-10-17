
import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  public loginForm !: FormGroup;
  constructor(private formBuilder: FormBuilder, private http:HttpClient,private router:Router) { }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:[''],
      password:[''],
  })}
  login(){
    this.http.get<any>('http://localhost:3000/users')
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email  === this.loginForm.value.email  && a.password === this.loginForm.value.password &&a.role===1;
      });
      if(user){
        localStorage.setItem('email', user.email);
        alert("login success");
        this.loginForm.reset();
        this.router.navigate(['/admin']);
      }else{
        alert("login failure");
      }
    })
    
  }

}
