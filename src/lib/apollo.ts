import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4o3ixx80cji01xx4yiv59sj/master",
  cache: new InMemoryCache(),
});
