import { Component } from '@angular/core';
import { BlogsService } from '../../services/blogs.service';
import { NgFor } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { IBlog } from '../../interfaces/iblog';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css',
})
export class BlogsComponent {
  public Blogs: IBlog[] = [];
  private _subscriptions: Subscription = new Subscription();
  constructor(public _blogService: BlogsService) {}

  ngOnInit() {
    this._subscriptions.add(
      this._blogService.Blogs$.subscribe({
        next: (res) => {
          this.Blogs = res;
        },
      })
    );
  }

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }

  public ResetForm(form: NgForm) {
    form.reset();
  }

  public AddBlog(form: NgForm) {
    if (form.value.id) {
      const result = confirm('are you sure want to edit it?');
      if (result) {
        this._blogService.UpdateBlog(form.value);
      }
    } else {
      const { id, ...blogToCreate } = form.value;
      this._blogService.CreateBlog(blogToCreate);
    }
  }

  public DeleteBlog(id: string | undefined) {
    const result = confirm('are you sure want to delete it?');
    if (result && id) {
      this._blogService.DeleteBlog(id);
    }
  }

  public EditBlog(blog: IBlog) {
    this._blogService.blogToCreate = blog;
  }

  public AddLike(blog: IBlog) {
    const result = confirm('are you sure you want to like this blog?');
    if (result) {
      blog = { ...blog, likes: blog.likes + 1 };
      this._blogService.UpdateBlog(blog);
    }
  }
}
