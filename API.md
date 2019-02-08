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
Attribute    | Data Type | Validation             |  
------------ | --------- | ---------------------- |
id           | int       | primary key            |
name         | string    | required: > 5 chars    |
brand_id     | int       | required: foreign key  |
published    | date      | required               |

#### View
Attribute        | Data Type | Validation                |  
---------------- | --------- | ------------------------- |
id               | int       | primary key               |
video_id         | int       | required, foreign key     |
total_view_count | int       | serial int                |
viewed           | date      | optional: defaults to now |

### Brands
Attribute        | Data Type | Validation                |  
---------------- | --------- | ------------------------- |
id               | int       | primary key               |
name             | string    | required: > 5 chars       |
published        | date      | optional: defaults to now |


### Routes

- `post '/videos'`
- `get '/videos/:id'`
- `post '/videos/:videoId/views'`
