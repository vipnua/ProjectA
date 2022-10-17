import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private router:Router) { }
  name :string = '';
  ngOnInit(): void {
    let name: any;
    if(localStorage.getItem('email')){
      name = localStorage.getItem('email');
    }
    this.name = name;
  }
  logout(){
    this.router.navigate(['']);
    localStorage.removeItem("email");  
  }
}
