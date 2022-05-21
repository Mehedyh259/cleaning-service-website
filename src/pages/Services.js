import React, { useEffect, useState } from 'react';
import fetcher from '../api';

const Services = () => {
    const [services, setServices] = useState([]);


    useEffect(() => {
        (async () => {
            const res = await fetcher.get("/service");
            setServices(res.data)

        })()
    }, [])

    console.log(services);

    return (
        <div className='mt-16'>
            <h2>this is services</h2>
        </div>
    );
};

export default Services;