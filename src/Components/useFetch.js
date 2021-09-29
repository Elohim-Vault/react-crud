const { useState, useEffect } = require("react");

function useFetch(url) {
    const [data, setData] = useState();
    const [error, setError] =  useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        fetch(url)
        .then(request => {
            if (!request)
            {
                throw Error('Algo deu errado...');
            }
            request.json();
        })
        .then(data => {
            setData(data);
            setIsPending(false);
        })
        .catch(error => {
            if (error.name != 'AbortError')
            {
                setIsPending(false);
                setError(error.message);
            }
        });
    }, [url]);
}

export default useFetch;