import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ProdutoListComponent } from './components/produto-list/produto-list.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ProdutoListComponent, MatSlideToggleModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Gerenciador Estoque';
}
