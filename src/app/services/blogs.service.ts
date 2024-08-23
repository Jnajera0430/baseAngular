import { Injectable } from '@angular/core';
import { IBlog } from '../interfaces/iblog';
import { HttpServiceService } from './http-service.service';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class BlogsService {
  public Blogs$: BehaviorSubject<IBlog[]> = new BehaviorSubject([] as IBlog[]);
  public blogToCreate: IBlog = {
    title: '',
    author: '',
    url: '',
    likes: 0,
  };

  constructor(private readonly _httpService: HttpServiceService) {
    this.GetBlogs();
  }

  public GetBlogs() {
    this._httpService.Get<IBlog[]>('blogs').subscribe({
      next: (res) => {
        this.SetBlogs(res);
      },
    });
  }

  public CreateBlog(newBlog: IBlog) {
    return this._httpService.Post<IBlog, IBlog>('blogs', newBlog).subscribe({
      next: (res) => {
        this.GetBlogs();
      },
    });
  }

  public DeleteBlog(id: string) {
    return this._httpService.Delete(`blogs/${id}`).subscribe({
      next: () => {
        const blogs = this.Blogs$.getValue();
        const blogsUpdated = blogs.filter((blog) => blog.id !== id);
        this.SetBlogs(blogsUpdated);
      },
    });
  }

  public UpdateBlog(blog: IBlog) {
    this._httpService.Put<IBlog>(`blogs/${blog.id}`, blog).subscribe({
      next: (res) => {
        const blogs = this.Blogs$.getValue();
        const blogsUpdated = blogs.map((blog) => {
          if (res.id === blog.id) {
            return res;
          }
          return blog;
        });
        this.SetBlogs(blogsUpdated);
      },
    });
  }

  SetBlogs(blogs: IBlog[]) {
    this.Blogs$.next(blogs);
  }
}
