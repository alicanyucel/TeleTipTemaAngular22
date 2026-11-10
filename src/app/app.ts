import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  imports: [RouterOutlet, AvatarModule, ButtonModule, TagModule],
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {
}
