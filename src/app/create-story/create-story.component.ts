import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreatestoryjsService  } from "./createstoryjs.service";
import {flatMap} from "rxjs/operators"

@Component({
  selector: 'app-create-story',
  templateUrl: './create-story.component.html',
  styleUrls: ['./create-story.component.css']
})
export class CreateStoryComponent implements OnInit {
  // tslint:disable-next-line: typedef
   storyname:string;
   username:string;
   sub:any;
  constructor(private route:ActivatedRoute, private createService:CreatestoryjsService) { 
  
  }
 

  ngOnInit(){
    this.sub = this.route.queryParamMap.pipe(
      flatMap((params) => this.createService.createRoom(params.get('username')||""))
    ).subscribe((data) => {
     
    });
    
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  
}

