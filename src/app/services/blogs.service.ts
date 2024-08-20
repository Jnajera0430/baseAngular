import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlogInterface } from '../models/Blogs';
@Injectable({
  providedIn: 'root',
})
export class BlogsService {
  private readonly URL_API = 'http://localhost:4000/api';
  private readonly token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJvb3QiLCJpZCI6IjY2MmFkZTIwMjk5YjUxZDhjODk1OTA1MyIsImlhdCI6MTcyNDExMjkzNSwiZXhwIjoxNzI0MTE2NTM1fQ.h-HUqUeAaZJz9hfT3BjPcozdWwVcJAGtr9aIAKEj1Ks";
  constructor(private readonly http: HttpClient) {}
  public blogs: BlogInterface[] = [];
  public blogToCreate:BlogInterface={
    title:"",
    author:"",
    url: "",
    likes:0
  }
  public getBlogs() {
    return this.http.get<BlogInterface[]>(`${this.URL_API}/blogs`);
  }

  public createBlog(newBlog:BlogInterface){
    return this.http.post(`${this.URL_API}/blogs`, newBlog,{
      headers: {
        Authorization: this.token
      }
    })
  }

  public deleteBlog(id:string){
    return this.http.delete(`${this.URL_API}/blogs/${id}`,{
      headers: {
        Authorization: this.token
      }
    });
  }

  public updateBlog(blog: BlogInterface){
    return this.http.put(`${this.URL_API}/blogs/${blog.id}`,blog,{
      headers: {
        Authorization: this.token
      }
    })
  }
}
