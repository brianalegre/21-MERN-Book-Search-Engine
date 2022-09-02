# 21-MERN-Book-Search-Engine

## Table of Contents 📑
- [Description](#description)
- [Application Preview](#application-preview)
- [Installation](#installation)
- [Links](#links)
- [Criteria](#criteria)
- [Technologies](#technologies)
- [Questions](#questions)
- [License](#license)

## Description
Take starter code with a fully functioning Google Books API search engine built with a RESTful API, and refactor it to be a GraphQL API built with Apollo Server

## Application Preview
<p align="left">
    <img alt="SitePreview" src="./client/public/images/SitePreview.png">
</p>

## Installation
- Copy the repository to your system
- Create .env file
    - SET MONGODB_URI to mongoDB URI
- ** In connection.js, comment out 'require('dotenv').config()'
    - This will use local mongodb rather than mongodb atlas
- npm install
- npm run dev

## Links
-   Github Repository:
    - https://github.com/brianalegre/21-MERN-Book-Search-Engine
-   Heroku Deployed:
    - https://alegre-book-search-engine.herokuapp.com/


## Criteria
- Set up an Apollo Server to use GraphQL queries and mutations to fetch and modify data, replacing the existing RESTful API.

- Modify the existing authentication middleware so that it works in the context of a GraphQL API.

- Include schema settings for resolvers and typeDefs as outlined in the Challenge instructions.

- Create an Apollo Provider so that requests can communicate with an Apollo Server.

- Application must be deployed to Heroku.

## Technologies
- MongoDB
- Express
- React
- Node
- GrpahQL

## Questions
Questions? Concerns?  Contact Me Below:
- Github Username: brianalegre
- Github Link: https://github.com/brianalegre 
- Email: brialegre@yahoo.com

## License
- Copyright 2022 Brian Alegre
- Licensed under the: [MIT License](https://opensource.org/licenses/MIT) 

