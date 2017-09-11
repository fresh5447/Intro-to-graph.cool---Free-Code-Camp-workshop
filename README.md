## What is Graph.Cool?

Server-as-a-Service solution

a graphql server based on graphql spec

## Benefits

  - fast prototyping
  - extremely flexible
  - scalable
  - integrations
    - stripe, auth0, algolia
  - dev tools
    - sandbox
    - graphcool CLI
      - `npm install -g graphcool`
  - graph view

## Terminology

  - schema: The blueprint for your entire database.
    - You can manage your Schema locally in a graphcool.schema file,
      or in the console using the GUI, or both.
  - type: Similar to a schema or model. It is the blueprint for future data.
  - field: A property of the type. (String, Int, Boolean, Float, DateTime, JSON)
  - node: An actual piece of data. Similar to a document (mongo) or record (relational)
  - node edges: To create relationships, the edges of the nodes are exposed to each other. Relationships implement 1-1, 1-to-many etc.
  query: Fetch resources. Can additionally apply a filter, to specific which resources to respond with.

## Up and Running
  - [create an account](https://www.graph.cool/)
  - Create a new project - Movie Buff
  - Create a couple `types`
    - movie (title, year)
  - Explore the sandbox
  ```
    query {
      allMovies {
        title
      }
    }
  ```

```
  mutation {
    createMovie(title: "Fo", year: 1997) {
      title
    }
  }
```

  - Let's create an `actor` type, that will have a relationship to movies.
  `addToActorOnMovie(actorsActorId: ID!, moviesMovieId: ID!):AddToActorOnMoviePayload
`
  - Make a new Actor
  ```
    mutation {
      createActor(name:"The Actor") {
        name
      }
    }
  ```

  - Use `addToActorOnMovies` mutation to add actor to movie.

  - Explore the code generator

  
