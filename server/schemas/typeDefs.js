const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]!
  }

  type Book {
    _id: ID
    bookAuthor: String
    bookDescription: String
    bookId: String
    bookImage: String
    bookLink: String
    bookTitle: string
  }


  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    # savedBooks(savedBooks: String): [Book] ??
    # book(bookId: ID!): Book ??
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addBook(userId: ID!, bookId: String!): Book
    removeBook(userId: ID!, bookId: String!): Book
  }
`;

module.exports = typeDefs;
