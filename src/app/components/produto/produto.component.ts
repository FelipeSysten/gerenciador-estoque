import { Component, Input,  } from '@angular/core';
import { ProdutoInterface } from '../../interfaces/produto-interface';
import {MatTableModule} from '@angular/material/table' ;
import { ProdutoService } from '../../services/produto.service';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [MatTableModule, RouterLink],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.scss'
})
export class ProdutoComponent {
  @Input()produtoData!:ProdutoInterface;

  produtos: ProdutoInterface[] = [];
  displayedColumns: string[] = ['nome', 'quantidade', 'preco'];

 // Adicione a importação do Router no construtor
constructor(private produtoService: ProdutoService, private router: Router) {}

  ngOnInit(): void {
    this.produtoService.getAllProdutos().then(data => {
      this.produtos = data;
    });
  }


// Navegar para a página de adicionar produtos
navegarParaAdicionarProduto(): void {
  this.router.navigate(['/adicionar-produto']);
}

// Excluir produto pelo id
deleteProduto(id: number): void {
  this.produtoService.deleteProduto(id).then(() => {
    alert('Produto deletado com sucesso!');
    this.produtos = this.produtos.filter((produto: { id: number; }) => produto.id !== id);
  });
}
  
}


