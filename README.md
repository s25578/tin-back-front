# TIN backend + frontend

> a) An application that uses a database (either a relational one, such as postgres, or a non-relational one, such as MongoDB). The data has to be displayed in the form of a table or something similar. Some modifying operations should be possible, such as upserting the data. A minimum of two tables that are connected is required. (5 points).

This project uses PostgresSQL. Full CRUD on backend. Read all, create, delete on frontent is possible. Two tables connected (`predictions` points to `symbols`).

> b) An app that asynchronously queries the backend asking for new information and updating the webiste accordingly (without reloading the entire page). The data has to be generated on the backend either randomly, read from file or otherwise changed over time. (5 points)

The `TOP10 Cryptocurrency` sections updating asynchronously, by getting data about current prices from Binance API.

## Demo

![tutorial.gif](tutorial.gif)

## Quickstart

The simplest way to run the application using docker compose:

```
cd tin-back-front
docker compose up -d --build
```

This will run the backend and database and setup all automatically. 

Then the backend will be available at http://localhost:3000/.

Frontend consist of simple files, so just open `frontend/index.html` in the browser.

## Seeding

To create tables and seed with data run:

```
docker exec -it tin-back-front-backend-1  bash -c "node src/initializeDb.js && node src/seeders/symbolsSeeder.js && node src/seeders/predictionsSeeder.js"
```

You should get:

```
Database & tables created!
Symbols seeded successfully.
Predictions seeded successfully.
```
