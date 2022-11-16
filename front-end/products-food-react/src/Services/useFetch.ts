import { useEffect, useState } from 'react';
import axios from 'axios';

export function useFetch<T = unknown>(url: string){
    const [data,setData] = useState<T | null>(null);
    const [isFetching,seIsFetching] = useState(true); 
    useEffect(() => {
        axios.get(url)
        .then(response =>{
        setData(response.data.products);
        console.log(response.data);
        }).finally(() =>{
            seIsFetching(false);
        })
    },[])
    return { data, isFetching }
}
