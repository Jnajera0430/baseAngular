import { Component } from '@angular/core';
import { BlogsService } from '../../services/blogs.service';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css',
})
export class BlogsComponent {
  constructor(public readonly blogService: BlogsService) {}

  ngOnInit() {
    this.getBlogs();
  }

  getBlogs() {
    this.blogService.getBlogs().subscribe((data) => {
      this.blogService.blogs = data;
    });
  }
}
