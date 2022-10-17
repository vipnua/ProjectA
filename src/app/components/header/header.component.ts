import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userEmailL:object = [''];

  constructor() { }

  ngOnInit(): void {
  }
  localStorage(){
    return localStorage.getItem('email');
  }

}
