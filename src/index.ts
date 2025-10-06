import { useEffect, useState } from "react";

type QueryOptions<T> = {
  queryFn: () => Promise<T>;
};

type QueryResult<T> = {
  data: T | undefined;
  error: Error | undefined;
  loading: boolean;
};

export const useQuery = <T>({ queryFn }: QueryOptions<T>): QueryResult<T> => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<Error>();
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await queryFn();

      setData(data);
      setError(undefined);
    } catch (error) {
      setError(error as Error);
      setData(undefined);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, error, loading };
};
