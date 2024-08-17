import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlogInterface } from '../models/Blogs';
@Injectable({
  providedIn: 'root',
})
export class BlogsService {
  private readonly URL_API = 'http://localhost:4000/api';
  constructor(private readonly http: HttpClient) {}
  blogs: BlogInterface[] = [];
  public getBlogs() {
    return this.http.get<BlogInterface[]>(`${this.URL_API}/blogs`);
  }
}
