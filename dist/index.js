"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useQuery = void 0;
const react_1 = require("react");
const useQuery = ({ queryFn }) => {
    const [data, setData] = (0, react_1.useState)();
    const [error, setError] = (0, react_1.useState)();
    const [loading, setLoading] = (0, react_1.useState)(false);
    const fetchData = async () => {
        try {
            setLoading(true);
            const data = await queryFn();
            setData(data);
            setError(undefined);
        }
        catch (error) {
            setError(error);
            setData(undefined);
        }
        finally {
            setLoading(false);
        }
    };
    (0, react_1.useEffect)(() => {
        fetchData();
    }, []);
    return { data, error, loading };
};
exports.useQuery = useQuery;
