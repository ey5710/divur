import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Users } from './users/users';
import { Home } from './Component/home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Home, Users],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('divur');
}
