import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        const abortCont = new AbortController()
        //setTimeOut used for simulation to see the loading message
        // setTimeout(() => {
            fetch(url, {signal: abortCont.signal})
                .then((res) => {
                    if(!res.ok){
                        throw Error('could not fetch data for the resource')
                    }
                    return res.json();
                })
                .then((data) => {
                    setData(data);
                    setIsLoading(false)
                    setError(null)
                })
                .catch(err => {
                    if(err.name === 'AbortError'){
                        console.log('fetch aborted')
                    } else {
                        console.log('fetch is not aborted')
                        console.log(err.message)
                        setIsLoading(false)
                        setError(err.message)
                    }
                })
        // }, 1000)
        return () => abortCont.abort()
        }, [url]);

    return { data, isLoading, error }
}

export default useFetch;