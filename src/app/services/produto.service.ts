import { Injectable } from '@angular/core';
import { ProdutoInterface } from '../interfaces/produto-interface';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  url = 'http://localhost:3000/produtos'; // URL do json-server

  constructor() { }

  // Método para buscar todos os produtos
  async getAllProdutos(): Promise<ProdutoInterface[]>{
    const response = await fetch(this.url);
    return response.json();
  }

  // Método para buscar um produto pelo ID
  async getProdutoById(id: number): Promise<ProdutoInterface | undefined>{
    const response = await fetch(`${this.url}/${id}`);
    return response.json();
  }

  // Método para adicionar um produto
  async addProduto(produto: ProdutoInterface): Promise<ProdutoInterface> {
    const response = await fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(produto)
    });
    return response.json();
  }

  // Método para atualizar um produto existente
  async updateProduto(id: number, produto: ProdutoInterface): Promise<ProdutoInterface> {
    const response = await fetch(`${this.url}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(produto)
    });
    return response.json();
  }

  // Método para excluir um produto pelo ID
  async deleteProduto(id: number): Promise<void> {
    await fetch(`${this.url}/${id}`, {
      method: 'DELETE'
    });
  }

}
