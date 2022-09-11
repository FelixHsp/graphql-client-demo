
import {
  ApolloClient,
  gql,
  useQuery,
} from '@apollo/client';

import { cache } from './cache';

const client = new ApolloClient({
  cache,
  uri: 'http://localhost:4000/graphql',
  headers: {
    'client-name': 'Space Explorer [web]',
    'client-version': '1.0.0',
  },
  resolvers: {},
});

const useLaunches = (pageSize = 10, after?: string) => {
  const getLaunchesGql = gql(`
    query Launches($pageSize: Int) {
      launches(pageSize: $pageSize) {
        cursor
        hasMore
        launches {
          id
          site
          mission {
            name
            missionPatch
          }
          rocket {
            id
            name
            type
          }
        }
      }
    }
  `);

  return useQuery(getLaunchesGql, { variables: { pageSize, after } });
};

export { client, useLaunches };
