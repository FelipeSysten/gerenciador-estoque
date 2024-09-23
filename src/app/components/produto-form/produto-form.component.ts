import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ProdutoService } from '../../services/produto.service';
import { ProdutoInterface } from '../../interfaces/produto-interface';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field'; // Angular Material form field
import { MatInputModule } from '@angular/material/input'; // Angular Material input
import { MatButtonModule } from '@angular/material/button'; // Angular Material button
import { MatCardModule } from '@angular/material/card'; // Angular Material Card

@Component({
  selector: 'app-produto-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule, // Importações do Angular Material
    MatInputModule,
    MatButtonModule,
    MatCardModule // Importando Angular Material Card
  ],
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.scss'], // Corrigindo o nome do styleUrl para styleUrls
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProdutoFormComponent {
  produtoForm: FormGroup;
  produtosAdicionados: ProdutoInterface[] = []; // Array local para armazenar os produtos adicionados

  constructor(private fb: FormBuilder, private produtoService: ProdutoService) {
    // Inicializando o formulário
    this.produtoForm = this.fb.group({
      nome: ['', Validators.required],
      quantidade: ['', [Validators.required, Validators.min(1)]],
      preco: ['', [Validators.required, Validators.min(0.01)]]
    });
  }

  // Método para enviar o formulário e adicionar o produto
  onSubmit(): void {
    if (this.produtoForm.valid) {
      const novoProduto: ProdutoInterface = this.produtoForm.value;
      this.produtoService.addProduto(novoProduto).then(() => {
        this.produtosAdicionados.push(novoProduto); // Adiciona o produto ao array local
        this.produtoForm.reset(); // Limpa o formulário após a adição
      });
    } else {
      alert('Preencha todos os campos corretamente.');
    }
  }
}
