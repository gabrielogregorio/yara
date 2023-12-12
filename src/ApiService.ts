import { ApolloClient, InMemoryCache } from '@apollo/client';
import { envs } from './env';

export const client = new ApolloClient({
  uri: envs.API_YARA,
  cache: new InMemoryCache(),
});
