# View Tracker API

### Introduction

View Tracker is an Express-based, nodeJS REST API, with a PostgreSQL database.  

### Installation

If you don't have PostgreSQL installed, you can use [ Homebrew ] ( https://github.com/petere/homebrew-postgresql )to install it.

Next, set up the database:
 
- In the root of the project, run this `$ createdb view-tracker` to create a psql database called 'view-tracker'.
- Next, load the schema: `$ psql -f db/create.sql`
- Finally, seed the database: `$ psql -f db/seeds.sql`

### Models

#### Video
Attribute    | Data Type | Validation   |  
------------ | --------- | ------------ |
id           | int       | primary key  |
name         | string    | required, > 5 chars  |
brand_id     | int       | foreign key  |
published     | date      | required |

### Routes

- `post '/videos'`
- `get '/videos/:id'`
- `post '/videos/:videoId/views'`
