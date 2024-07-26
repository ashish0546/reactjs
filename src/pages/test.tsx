// import { ApolloClient, HttpLink, InMemoryCache, from } from "@apollo/client";
// import { onError } from "@apollo/client/link/error";

// const errorLink = onError(({ graphQLErrors, networkError }) => {
//   if (graphQLErrors)
//     graphQLErrors.forEach(({ message, locations, path }) =>
//       console.log(
//         `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
//       )
//     );
//   if (networkError) console.error(`[Network error]: ${networkError}`);
// });

// const httpLink = new HttpLink({ uri: 'http://localhost:4000/graphql' })

// const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   link: from([errorLink, httpLink]),
// });
// =============================================
// onError(({ graphQLErrors, networkError, operation, forward }) => {
//   if (graphQLErrors) {
//     for (let err of graphQLErrors) {
//       switch (err.extensions.code) {
//         // Apollo Server sets code to UNAUTHENTICATED
//         // when an AuthenticationError is thrown in a resolver
//         case "UNAUTHENTICATED":
//           // Modify the operation context with a new token
//           const oldHeaders = operation.getContext().headers;
//           operation.setContext({
//             headers: {
//               ...oldHeaders,
//               authorization: getNewToken(),
//             },
//           });
//           // Retry the request, returning the new observable
//           return forward(operation);
//       }
//     }
//   }

//   // To retry on network errors, we recommend the RetryLink
//   // instead of the onError link. This just logs the error.
//   if (networkError) {
//     console.log(`[Network error]: ${networkError}`);
//   }
// });
// ==============================================
// import { gql, useLazyQuery } from "@apollo/client";

// const GET_GREETING = gql`
//   query GetGreeting($language: String!) {
//     greeting(language: $language) {
//       message
//     }
//   }
// `;

// function Hello() {
//   const [loadGreeting, { called, loading, data }] = useLazyQuery(
//     GET_GREETING,
//     { variables: { language: "english" } }
//   );
//   if (called && loading) return <p>Loading ...</p>
//   if (!called) {
//     return <button onClick={() => loadGreeting()}>Load greeting</button>
//   }
//   return <h1>Hello {data.greeting.message}!</h1>;
// }