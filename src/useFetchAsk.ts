import { useLazyQuery, gql } from '@apollo/client';

const QUERY = gql`
  query Ask($message: String!) {
    ask(message: $message) {
      body
    }
  }
`;

interface IChatAsk {
  ask: { body: string };
}

export const useFetchAsk = () => {
  const [askQuery, { loading, error }] = useLazyQuery<IChatAsk>(QUERY, {
    fetchPolicy: 'network-only',
  });

  const fetchAsk = async (message: string) => {
    const result = await askQuery({ variables: { message } });
    if (result.data?.ask.body) {
      return result.data.ask.body;
    }

    throw new Error(`error, da is invalid ${JSON.stringify(result)}`);
  };

  return { fetchAsk, error: error ? error.message : '', isLoading: loading };
};
