import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { flatMap } from "rxjs/operators";
import { CreatestoryjsService } from '../create-story/createstoryjs.service';

@Component({
  selector: 'app-estimate-story',
  templateUrl: './estimate-story.component.html',
  styleUrls: ['./estimate-story.component.css']
})
export class EstimateStoryComponent implements OnInit {
  // tslint:disable-next-line: ban-types
  username: string;
  storyName: string;
  private sub: any;

  constructor(private route: ActivatedRoute,private createService:CreatestoryjsService) { }

  ngOnInit(): void {
    this.sub = this.route.queryParamMap.pipe(
      flatMap((params) => this.createService.createStory(params.get('username')||"",params.get('storyname')||""))
    ).subscribe((data) => {
     
    });
  }

  // tslint:disable-next-line: typedef
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
