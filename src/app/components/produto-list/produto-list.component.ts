import { Component, inject, Input } from '@angular/core';
import { ProdutoInterface } from '../../interfaces/produto-interface';
import { ProdutoService } from '../../services/produto.service';
import { CommonModule } from '@angular/common';
import { ProdutoComponent } from '../produto/produto.component';

@Component({
  selector: 'app-produto-list',
  standalone: true,
  imports: [CommonModule, ProdutoComponent],
  templateUrl: './produto-list.component.html',
  styleUrl: './produto-list.component.scss'
})
export class ProdutoListComponent {
produtosList: ProdutoInterface [] = []
produtoService: ProdutoService = inject(ProdutoService)

constructor(){
  this.produtoService.getAllProdutos().then(produtosList=>{
    this.produtosList = produtosList;
  })
}
}
