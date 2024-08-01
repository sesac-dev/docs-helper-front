import { getDocsList, postSaveDocs } from '@/services/docs/api';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useDocs = () => {
  const useGetDocsList = () => {
    return useQuery({
      queryKey: ['my', 'docs'],
      queryFn: () => getDocsList(),
    });
  };

  const usePostSaveDocs = () => {
    return useMutation({
      mutationKey: ['my', 'save', 'docs'],
      mutationFn: (docs: FormData) => postSaveDocs(docs),
    });
  };

  return {
    useGetDocsList,
    usePostSaveDocs,
  };
};