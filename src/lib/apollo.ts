import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4uaqqks0qrb01ukefg9300w/master",
  cache: new InMemoryCache(),
});
