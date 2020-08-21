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
      .subscribe(data => this.refresh(data));

    this.blogpostService.handleBlogpostCreated().subscribe(data => {
      console.log('AdminComponent received', data);
      this.refresh(data);
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
        .subscribe(data => this.refresh(data), err => this.handleError(err));
    } else {
      return this.blogpostService
        .deleteBlogposts(ids)
        .subscribe(data => this.refresh(data), err => this.handleError(err));
    }
  }

  refresh(data) {
    console.log('data', data);
    this.blogpostService.getBlocposts().subscribe(data => {
      this.AllBlogposts = data;
    });
  }

  handleError(error) {
    console.log(error);
  }
}
