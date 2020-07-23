import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-page-comp',
  templateUrl: './home-page-comp.component.html',
  styleUrls: ['./home-page-comp.component.css']
})
export class HomePageCompComponent implements OnInit {

  username: string;
  constructor(http:HttpClient) { }

  ngOnInit(): void {
  }

}