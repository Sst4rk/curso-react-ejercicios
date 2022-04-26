import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch(url);
                if (!res.ok) {
                    let err = new Error('Error en la Peticion Fetch');
                    err.status = res.status || '00';
                    err.statusText =
                        res.statusText ||
                        'Ocurrio un Error con la Peticion Fetch';
                    throw err;
                }

                const json = await res.json();

                if (!signal.aborted) {
                    setData(json);
                    setError(null);
                }
            } catch (err) {
                if (!signal.aborded) {
                    setData(null);
                    setError(err);
                }
            } finally {
                if (!signal.aborded) {
                    setLoading(false);
                }
            }
        };

        fetchData();

        return () => abortController.abort();
    }, [url]);

    return { data, error, loading };
};
