import { Component } from '@angular/core';
import { BlogsService } from '../../services/blogs.service';
import { NgFor } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { BlogInterface } from '../../models/Blogs';
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

  resetForm(form: NgForm) {
    form.reset();
  }

  getBlogs() {
    this.blogService.getBlogs().subscribe((data) => {
      this.blogService.blogs = data;
    });
  }

  addBlog(form: NgForm) {
    if (form.value.id) {
      console.log('actualizando');
      const result = confirm('are you sure want to edit it?');
      if (result) {
        this.blogService.updateBlog(form.value).subscribe(()=>{
          try {
            this.getBlogs();            
          } catch (error) {
            console.log({error});
          }
        });
      }
    } else {
      this.blogService.createBlog(form.value).subscribe(() => {
        try {
          this.getBlogs();
        } catch (error) {
          console.log({ error });
        }
      });
    }
  }

  deleteBlog(id: string | undefined) {
    const result = confirm('are you sure want to delete it?');
    if (result && id) {
      this.blogService.deleteBlog(id).subscribe(() => {
        try {
          this.getBlogs();
        } catch (error) {
          console.log({ error });
        }
      });
    }
  }

  editBlog(blog: BlogInterface) {
    this.blogService.blogToCreate = blog;
  }
}
