import { useEffect, useState } from 'react';
import axios from 'axios';
const api = 'https://apitest-b3778.firebaseapp.com/api/v1/info';


const config = { 
    headers: {
        'Access-Control-Allow-Origin': "*"
    }
};
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