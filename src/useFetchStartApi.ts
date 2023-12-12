import { useEffect, useState } from 'react';
import { useLazyQuery, gql } from '@apollo/client';

const ASK_QUERY = gql`
  query {
    ask(message: "Olá") {
      body
    }
  }
`;

const TIME_IN_MS_TO_EXIT_SUCCESS = 2000;

export const useFetchStartApi = () => {
  const [askQuery, { loading, error, data }] = useLazyQuery(ASK_QUERY);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    askQuery()
      .then(() => {})
      .catch(() => {});
  }, [askQuery]);

  useEffect(() => {
    if (data) {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, TIME_IN_MS_TO_EXIT_SUCCESS);
    }
  }, [data]);

  const fetchAsk = () => {
    askQuery()
      .then(() => {})
      .catch(() => {});
  };

  return { fetchAsk, error: error ? error.message : '', isLoading: loading, success };
};
