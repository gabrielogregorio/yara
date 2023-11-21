import { useState } from 'react';
import { ApiService } from './ApiService';

export const useFetchAsk = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState('');

  const fetchAsk = async (message: string): Promise<string> => {
    setIsLoading(true);
    setError('');

    return ApiService.post('/', {
      message,
    })
      .then((response) => {
        return response.data.body || '';
      })
      .catch(() => {
        setError('Ops, aconteceu algum erro desconhecido');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { fetchAsk, error, isLoading };
};
