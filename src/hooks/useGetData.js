import { useEffect, useState } from 'react';
import axios from 'axios';
const api = 'https://cvitaeh.herokuapp.com/api/V1/info';
/* var r = new Request('https://pokeapi.co/api/v2/pokemon/ditto', {
    method: 'GET',
    mode: 'cors',
    credentials: 'omit',
    cache: 'default',
    referrerPolicy: 'no-referrer'
}); */

const useGetData = () => {
    const [data,setData] = useState([]);

    useEffect(()=>{
        fetch(api)            
            .then(response => response.json())
            .then(info => setData(info))
            .catch(err => console.log("Surgio un error: "+err));
    }, []);
    
    return data;
};

export default useGetData;