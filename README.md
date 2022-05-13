# ReclamaGov - API

Esta é uma API para cadastro e obtenção de pontos de melhoria das cidades.

## Tecnologias usadas:

- Node
- Express

## Install

    npm install

## Run the api

    npm run dev

# REST API

A API possui os seguintes endpoints:

## Buscar todos pontos de melhoria:

### Request

`GET /requirements`

    curl -i -H 'Accept: application/json' http://localhost:3000/requirements

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 200 OK
    Connection: keep-alive
    Content-Type: application/json
    Content-Length: 180

    [
    	{
    	"local_name": "teste",
    	"description": "testando",
    	"category": "Segurança",
    	"contact": "31973100788",
    	"lat": 12121221,
    	"long": 551551,
    	"id": "47764bf5-4e9c-4de3-baee-de291a340b88"
    	}
    ]

## Cadastrar um novo pedido de melhoria

### Request

`POST /requirements`

```
curl --request POST \
  --url http://localhost:3000/requirements \
  --header 'Content-Type: application/json' \
  --data '{
	"local_name": "teste",
	"description": "testando a loja",
	"category": "Segurança",
	"contact": "31973100788",
	"lat": 12121221,
	"long": 551551
}'
```

### Response

    HTTP/1.1 201 Created
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 201 Created
    Connection: close
    Content-Type: application/json
    Location: /requirements/1
    Content-Length: 180

    {
    "local_name": "teste",
    "description": "testando a loja",
    "category": "Restaurante",
    "contact": "31973100788",
    "lat": 12121221,
    "long": 551551
    }
