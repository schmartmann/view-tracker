# View Tracker API

### Installation

#### Dependencies
First, install dependencies with either `npm install` or `yarn`.

#### Database
If you don't have PostgreSQL installed, you can use [ Homebrew ] ( https://github.com/petere/homebrew-postgresql )to install it.

Next, set up the database:
 
- In the root of the project, run this `$ createdb view-tracker` to create a psql database called 'view-tracker'.
- Next, load the schema: `$ psql -f db/create.sql`
- Finally, seed the database: `$ psql -f db/seeds.sql`

#### Running
Finally, to run the app, use `npm start` or `yarn start`. The app uses the `nodemon` package, so it will hot reload on file changes. Also `rs` will force-reload the server. 
