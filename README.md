# Local Maps Stores - API

Esta é uma API para cadastro e obtenção de estabelecimentos com localização.


## Install

    npm install

## Run the api

    npm run dev


# REST API

A API possui os seguintes endpoints:

## Buscar todos estabelecimentos:

### Request

`GET /stores`

    curl -i -H 'Accept: application/json' http://localhost:3000/stores

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 200 OK
    Connection: keep-alive
    Content-Type: application/json
    Content-Length: 180

    [
		{
		"name": "teste",
		"description": "testando a loja",
		"category": "Restaurante",
		"contact": "31973100788",
		"lat": 12121221,
		"long": 551551,
		"id": "47764bf5-4e9c-4de3-baee-de291a340b88"
		}
	]

## Cadastrar um novo estabelecimento

### Request

`POST /stores`

```
curl --request POST \
  --url http://localhost:3000/stores \
  --header 'Content-Type: application/json' \
  --data '{
	"name": "teste",
	"description": "testando a loja",
	"category": "Restaurante",
	"contact": "31973100788",
	"lat": 12121221,
	"long": 551551
}'
````

### Response

    HTTP/1.1 201 Created
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 201 Created
    Connection: close
    Content-Type: application/json
    Location: /thing/1
    Content-Length: 180

    {
	"name": "teste",
	"description": "testando a loja",
	"category": "Restaurante",
	"contact": "31973100788",
	"lat": 12121221,
	"long": 551551
	}