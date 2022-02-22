# TASK SCHEDULER

This is an TASK SCHEDULER API

## Installation

Install my-project with npm

```bash
  npm install my-project
  cd
```

## Deployment

To deploy this project run

```bash
  npm run deploy
```

## Developing

To deploy this project run

```bash
  npm run start:dev
```

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.

## Authors

-   [Salman Thoriq Al Farisyi](https://gitlab.com/salmanthoriq95)
-   [Fikran Jabbart](https://gitlab.com/fikranjabbart)
-   [Panca Sena](https://gitlab.com/pancasena)
