import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-story',
  templateUrl: './create-story.component.html',
  styleUrls: ['./create-story.component.css']
})
export class CreateStoryComponent implements OnInit {
  // tslint:disable-next-line: typedef
  constructos() { }

  ngOnInit(): void {
  }

}
  this.sub = this.route.params.subscribe(params => {
    console.log("Username1 is: "||params.username);
       this.username = params.username; // (+) converts string 'id' to a number --> +params['username'];
       // In a real app: dispatch action to load the details here.
       console.log("Username2 is: "||this.username);
    });
