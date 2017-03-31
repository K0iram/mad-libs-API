# MAD LIBS API

### By Mario Kennedy

  
  
An API to store templates and page data and allow users to register and play/save mad libs.

- [FRONT END REPO](https://github.com/mario7746/wicked-mad-libs)
- [DEPLOYED HEROKU SITE](https://murmuring-depths-64110.herokuapp.com/)
- [DEPLOYED APP](https://wicked-mad-libs.herokuapp.com)

## Dependencies

Install with `npm install`.

-   [`express`](http://expressjs.com/)
-   [`mongoose`](http://mongoosejs.com/)
-   [`nodemon`](https://nodemon.io/)

## Installation

1.  Fork and clone this repository.
1.  Install dependencies with `npm install`.
1.  Set a SECRET_KEY in the environment.
1.  Run the API server with `nodemon`.

For development and testing, set the SECRET_KEY from the root of your
 repository using

```sh
echo SECRET_KEY=$(/usr/local/opt/openssl/bin/openssl rand -base64 66 | tr -d '\n') >>.env
```

In order to make requests from your deployed client application, you will need
to set `CLIENT_ORIGIN` in the environment (e.g. `heroku config:set
CLIENT_ORIGIN=https://<github-username>.github.io`).

## My Process

My approach to this project started with brain storming ideas I thought would be fun to build. After deciding on a mad lib game I came up with how my backend was going to be structured. My ERD is users have many pages made thru templates.

By using the scaffold generator described below I was able to essentially have the backend up and running in just a few hours.
I created my own data to see my delevopment database with and was able to start testing immediatly


## Scaffolding

For this project, I used [Andrew Goode's](https://github.com/akgoode) scaffold generator. The scaffold script allowed me to create templates for a controller and a model for whichever resource I needed. It expects a pluralized form of the  resource, and it will accept attributes. 

There is more information on Andrew's generator [here](https://github.com/akgoode/express-api-generator).


## Technologies Used:
- MongoDB
- Mongoose
- Node.js
- Express.js


## API End-Points

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| PATCH  | `/change-password/:id` | `users#changepw`  |
| DELETE | `/sign-out/:id`        | `users#signout`   |
| GET    | `/pages`               | `pages#index`     |
| POST   | `/pages`               | `pages#create`    |
| GET    | `/templates`           | `templates#index` |
| DELETE | `/pages/:id`           | `pages#destroy`   |

---
