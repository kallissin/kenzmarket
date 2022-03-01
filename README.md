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


