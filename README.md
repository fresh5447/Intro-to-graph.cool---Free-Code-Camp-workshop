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

----
### On to the repo
----
  React Router 4 based architecture.
  `git clone https://github.com/fresh5447/Intro-to-graph.cool---Free-Code-Camp-workshop.git`
  ` cd Intro-to-graph.cool---Free-Code-Camp-workshop && yarn install` // or use `npm install`

  `Create a file called .env`
  Add these variables to the file:
```
  REACT_APP_GRAPH_COOL_URL=*****
```
Replace the *** with your graph cool endpoint.
Run another npm install.

We have added
  - apollo-client
  - graphql-tag
  - react-apollo

Apollo is an amazing tool that allows our react-application to make queries and mutations to our graph.cool db. It gives us a HOC, which gives our components the integration.
