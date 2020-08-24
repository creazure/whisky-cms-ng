import { Component, OnInit } from '@angular/core';
import { BlogpostService } from '../blogpost.service';
import { ActivatedRoute } from '@angular/router';
import { Blogpost } from '../models/blogpost';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.sass']
})
export class BlogpostComponent implements OnInit {
  blogpost$: Observable<Blogpost>;
  imagePath = environment.imagePath;

  constructor(private activatedRoute: ActivatedRoute, private blogpostService: BlogpostService) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.blogpost$ = this.blogpostService.getBlogpostsById(id);
  }

}
