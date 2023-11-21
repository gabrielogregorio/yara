import { useEffect, useState } from 'react';
import { ApiService } from './ApiService';

const TIME_IN_MS_TO_EXIT_SUCCESS = 2000;
export const useFetchStartApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const fetchAsk = () => {
    setIsLoading(true);
    setError('');
    setSuccess(false);

    ApiService.get('/')
      .then(() => {
        setSuccess(true);

        setTimeout(() => {
          setSuccess(false);
        }, TIME_IN_MS_TO_EXIT_SUCCESS);
      })
      .catch(() => {
        setError('Ops, aconteceu algum erro desconhecido');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchAsk();
  }, []);

  return { fetchAsk, error, isLoading, success };
};
