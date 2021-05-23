import { useEffect, useRef, useState } from "react";


export const useFetch = (url) => {
   const isMounted = useRef(true);
   const [state, setState] = useState({data: null, loading: true, error: null});

   useEffect(() => {
      return () => isMounted.current = false;
   }, [])

   useEffect(() => {
        setState({loading: true, error: null, data: null});

        fetch(url)
            .then(res => res.json())
            .then(data => {
               if (isMounted.current) {
                  setState({loading: false, data: data, error: null})
               } 
            })
            .catch(() => {
               setState({data: null, loading: false, error: 'Error'})
            });
            
   }, [url])

   return state;
}
