/*

- How to create a custom GraphQL server with GraphQL Yoga

Test:

curl http://localhost:1337/v1/functions/graphql-yoga \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{"query":"{\n    hello\n}","variables":{}}'

Docs:

https://www.the-guild.dev/graphql/yoga-server/docs
*/

import { createSchema } from 'graphql-yoga'
 
export const schema = createSchema({
  typeDefs: /* GraphQL */ `
    type Query {
      hello: String
    }
  `,
  resolvers: {
    Query: {
      hello: () => 'Hello from Yoga!'
    }
  }
})

export default schema