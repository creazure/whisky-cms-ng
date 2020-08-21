import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Blogpost} from '../models/blogpost';
import { BlogpostService } from '../blogpost.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {
  // blogposts$: Observable<Blogpost[]>;
  AllBlogposts: Blogpost[];

  constructor(private blogpostService: BlogpostService) { }

  ngOnInit() {
    // this.blogposts$ = this.blogpostService.getBlocposts();
    this.blogpostService
      .getBlocposts()
      .subscribe(data => {
        // console.log(data);
        this.AllBlogposts = data;
      });
  }

  deleteBlogposts(selectedOption) {
    console.log(`Selected Options`, selectedOption);
    const ids = selectedOption.map(so => so.value);
    // console.log(`Ids`, ids);
    this.blogpostService.DeleteSingleBlogpost(ids[0]).subscribe(data => console.log(data));
    if (ids.length === 1) {
      this.blogpostService
        .DeleteSingleBlogpost(ids[0])
        .subscribe(data => console.log(data), err => console.error(err));
    } else {
      return this.blogpostService
        .deleteBlogposts(ids)
        .subscribe(data => console.log(data), err => console.error(err));
    }
  }
}
