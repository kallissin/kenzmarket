# Kenzmarket

Este projeto tem por base gerenciar o estoque de produtos de uma empresa. Sendo assim, segue a documentação no swagger para fazer a manipulação da API:

```
localhost:3000/api-docs
```

## **Instalando dependencias**

Basta entrar dentro da pasta do projeto e rodas o seguinte comando

```
yarn
```

## **.env**

Tem um arquivo *.env.example* com as variáveis que serão utilizadas no desenvolvimento e com os seus respectivos valores, copie elas para o seu arquivo *.env*


## **Subindo container**

Para rodar a aplicação docker, digite o seguinte comando no terminal que logo em seguida será feito o download da imagem e irá iniciar o container:

```
docker-compose up
```

## **migrations**

Após adicionar as variáveis de ambiente você vai rodar a aplicação docker em um terminal. E logo depois você poderá abrir um segundo terminal e rodar o seguinte comando para entrar no bash do docker.

```
docker exec -it <containerid> /bin/bash
```
Após isso, vamos executar as tabelas da migration:

```
yarn typeorm migration:run
```


## **EndPoints**

A rota `User` tem por objetivo cadastrar um usuário, visuálizar todos os usuários cadastrados ou um usuário específico. Se voce for um administrador, poderá visualizar todos os perfis, caso contrário, poderá visualizar somente o seu.

A rota de `produtos` tem por objetivo cadastrar os produtos no sistema, porem somente administradores podem cadastrar. Alem disso, é possível visualizar todos os produtos ou somente um em específico. É interessante salientar que quando for cadastrar um produto você pode escolher a quantidade que deseja colocar em stock.

A rota `cart` é responsável por adicionar um determinado produto com uma determinada quantidade em seu carrinho. Alem de ser possível de visualizar o mesmo. Os administradores podem visualizar todos os carrinhos, diferente dos usuários comuns que conseguem visualizar apenas o seu próprio.

tem uma rota `/api/cart/item_id`, esta rota foi criada especificamente assim, pois  o usuário pode adicionar em seu carrinho mais de uma quantidade de um mesmo produto. E esta rota é destinada a deletar este item.