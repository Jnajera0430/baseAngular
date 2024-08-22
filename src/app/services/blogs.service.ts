import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlogInterface } from '../models/Blogs';
@Injectable({
  providedIn: 'root',
})
export class BlogsService {
  private readonly URL_API = 'http://localhost:8000/api';
  private readonly token =
    'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNzI0MzYwMTc2LCJleHAiOjE3MjQzNjM3NzYsIm5iZiI6MTcyNDM2MDE3NiwianRpIjoiQ0daZENVejBSNkJUODlyOSIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.qs77uJuSwN2CYCukeyrDBMk_HOIdqHUOtbEgYEC3fe0';
  constructor(private readonly http: HttpClient) {}
  public blogs: BlogInterface[] = [];
  public blogToCreate: BlogInterface = {
    title: '',
    author: '',
    url: '',
    likes: 0,
  };
  public getBlogs() {
    return this.http.get<BlogInterface[]>(`${this.URL_API}/blogs`, {
      headers: {
        Authorization: this.token,
      },
    });
  }

  public createBlog(newBlog: BlogInterface) {
    return this.http.post(`${this.URL_API}/blogs`, newBlog, {
      headers: {
        Authorization: this.token,
      },
    });
  }

  public deleteBlog(id: string) {
    return this.http.delete(`${this.URL_API}/blogs/${id}`, {
      headers: {
        Authorization: this.token,
      },
    });
  }

  public updateBlog(blog: BlogInterface) {
    return this.http.put(`${this.URL_API}/blogs/${blog.id}`, blog, {
      headers: {
        Authorization: this.token,
      },
    });
  }
}
