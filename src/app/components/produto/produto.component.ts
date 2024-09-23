import { Component, Input,  } from '@angular/core';
import { ProdutoInterface } from '../../interfaces/produto-interface';
import {MatTableModule} from '@angular/material/table' ;
import { ProdutoService } from '../../services/produto.service';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [MatTableModule, RouterLink, MatIcon],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.scss'
})
export class ProdutoComponent {
  @Input()produtoData!:ProdutoInterface;

  produtos: ProdutoInterface[] = [];
  displayedColumns: string[] = ['nome', 'quantidade', 'preco', 'acao'];

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
    if (confirm('Tem certeza que deseja deletar este produto?')) {
      this.produtoService.deleteProduto(id).then(() => {
        alert('Produto deletado com sucesso!');
        // Atualiza a lista de produtos após a exclusão
        this.produtos = this.produtos.filter((produto: ProdutoInterface) => produto.id !== id);
      }).catch((error) => {
        console.error('Erro ao deletar produto:', error);
        alert('Ocorreu um erro ao tentar deletar o produto.');
      });
}
  
}

}
