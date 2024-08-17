import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogsComponent } from './components/blogs/blogs.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, BlogsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'proyectBaseAngular';
}
