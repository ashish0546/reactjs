import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { setContext } from "apollo-link-context";

// GitHub GraphQL API endpoint
const httpLink = new HttpLink({
  uri: 'https://api.github.com/graphql'
})

// Middleware to add the GitHub token to headers
const authLink = setContext((_, { headers }) => {
  const token = process.env.GITHUB_ACCESS_TOKEN
  return {
    headers: {
      ...headers, 
    }
  }

})