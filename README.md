# Mini Gerenciador de Estoque

Este projeto é um Mini Gerenciador de Estoque desenvolvido com Angular e json-server para simulação de API. Ele permite adicionar, listar e excluir produtos em um estoque simples, proporcionando uma interface intuitiva e responsiva para o gerenciamento de produtos.

https://estoque-zeta.vercel.app/

![image](https://github.com/user-attachments/assets/f09eda29-856b-4430-a912-c41b4cf0fefc)


## Descrição do Projeto

O Mini Gerenciador de Estoque tem como objetivo facilitar o controle de produtos em um estoque. A aplicação permite:

Adicionar novos produtos, informando o nome, quantidade e preço.
Listar todos os produtos cadastrados.
Excluir produtos diretamente da interface através de um botão de ação.
Além disso, a aplicação foi desenvolvida utilizando Angular Material para fornecer uma interface moderna e responsiva.

## Como Executar a Aplicação

Para executar a aplicação localmente, você precisará ter instalados:

Node.js
Angular CLI
json-server

## Passos para Execução

Clone o repositório:
git clone https://github.com/seu-usuario/nome-do-repositorio.git

cd nome-do-repositorio

Instale as dependências
npm install

Execute o json-server:
npx json-server --watch db.json --port 3000

Execute a aplicação Angular:
ng serve

Acesse a aplicação em seu navegador no endereço:
http://localhost:4200

## Tecnologias Utilizadas

Angular: Framework utilizado para o desenvolvimento do frontend.
Angular Material: Biblioteca de componentes do Angular para estilização e responsividade.
TypeScript: Linguagem de programação utilizada para o desenvolvimento da aplicação.
SCSS: Utilizado para estilização avançada.
json-server: Simulador de API para testar a persistência de dados da aplicação.

## Possíveis Melhorias Futuras

Paginação: Implementar paginação para a listagem de produtos, caso o número de itens seja muito grande.
Edição de Produtos: Adicionar funcionalidade para editar produtos já cadastrados.
Autenticação: Implementar um sistema de autenticação para controle de acesso ao gerenciador de estoque.
Relatórios: Gerar relatórios a partir dos dados dos produtos, como total em estoque e valor total dos produtos cadastrados.
