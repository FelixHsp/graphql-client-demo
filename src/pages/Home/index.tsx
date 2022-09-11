import {
  ApolloProvider,
} from '@apollo/client';
import { client, useLaunches } from './services';


const Home = () => {
  const { data } = useLaunches(20);
  console.log(data);

  return null;
};

const HomeWrapper = () => {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  )
};

export default HomeWrapper;
