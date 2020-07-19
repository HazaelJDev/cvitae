import { useEffect, useState } from 'react';
const api = 'https://cvitaeh.herokuapp.com/api/V1/info';

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