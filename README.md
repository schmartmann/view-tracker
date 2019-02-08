# View Tracker API

### Installation

#### Dependencies
First, install dependencies with either `npm install` or `yarn`.

#### Database
If you don't have PostgreSQL installed, you can use [ Homebrew ] ( https://github.com/petere/homebrew-postgresql )to install it.

Next, set up the database:
 
- In the root of the project, run this `$ createdb view_tracker` to create a psql database called 'view-tracker'.
- Next, load the schema: `$ psql -f create.sql`
- Finally, seed the database: `$ psql -f db/seeds.sql`

Lastly, create a `.env` file in the app root, and add the db address:
`DATABASE_URL=postgres://<your_user_name_here>@localhost:5432/view_tracker`

#### Running
Finally, to run the app, use `npm start` or `yarn start`. The app uses the `nodemon` package, so it will hot reload on file changes. Also `rs` will force-reload the server. 

### Usage
Check out [ API.md ]( https://github.com/schmartmann/view-tracker/blob/develop/API.md ) for information on the API's use cases.
