import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-estimate-story',
  templateUrl: './estimate-story.component.html',
  styleUrls: ['./estimate-story.component.css']
})
export class EstimateStoryComponent implements OnInit {
  // tslint:disable-next-line: ban-types
  username: String;
  private sub: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
     this.sub = this.route.params.subscribe(params => {
       this.username = params.username; // (+) converts string 'id' to a number --> +params['username'];
       // In a real app: dispatch action to load the details here.
    });
  }

  // tslint:disable-next-line: typedef
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
