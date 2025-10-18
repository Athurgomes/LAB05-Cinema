# Sistema Web de Controle de Cinema

Este é um projeto de estudo de caso para um sistema de controle de cinema, implementado inteiramente com HTML, CSS e JavaScript. O projeto simula o gerenciamento de filmes, salas, sessões e a venda de ingressos.

A principal característica deste projeto é o uso de **`localStorage`** para persistir os dados no navegador, permitindo que as informações cadastradas sejam compartilhadas entre as diferentes páginas HTML.

## Funcionalidades

O sistema é dividido nas seguintes páginas:

* **Cadastro de Filmes:** Formulário para salvar os dados de novos filmes.
* **Cadastro de Salas:** Formulário para salvar as salas (ex: 2D, 3D, IMAX).
* **Cadastro de Sessões:** Formulário que carrega os filmes e salas do `localStorage` para criar novas sessões.
* **Venda de Ingressos:** Formulário que carrega as sessões cadastradas e registra uma venda.
* **Listagem de Sessões:** Exibe todas as sessões disponíveis e possui um botão que redireciona para a página de venda com a sessão pré-selecionada.

## Como Rodar com Docker

Este projeto é servido como um site estático usando Nginx.

### Pré-requisitos

* Docker deve estar instalado e em execução.

### Passos

1.  **Construa (Build) a Imagem**
    Abra seu terminal na pasta do projeto e execute:

    ```bash
    docker build -t gestao-cinema .
    ```

2.  **Rode (Run) o Container**
    Após o build, execute o comando para iniciar o container:

    ```bash
    docker run -d -p 8080:80 gestao-cinema
    ```

3.  **Acesse o Sistema**
    Abra seu navegador e acesse:

    `http://localhost:8080`
