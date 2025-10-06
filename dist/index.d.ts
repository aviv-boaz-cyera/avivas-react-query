type QueryOptions<T> = {
    queryFn: () => Promise<T>;
};
type QueryResult<T> = {
    data: T | undefined;
    error: Error | undefined;
    loading: boolean;
};
export declare const useQuery: <T>({ queryFn }: QueryOptions<T>) => QueryResult<T>;
export {};
