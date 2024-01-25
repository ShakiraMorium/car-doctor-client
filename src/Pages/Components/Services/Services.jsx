import  { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className='mt-4'>
            <div className='text-center'>
                <h2 className='text-xl font-bold text-center text-orange-600'>Service Area</h2>
                <h3 className='text-5xl  font-bold ml-6 '>Our Services</h3>
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Repudiandae consequuntur neque quidem non pariatur laborum labore, eligendi in tempora consectetur.</p>
            </div>
            <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
               {
                services.map(service => <ServiceCard
                key={service._id}
                service={service}
                ></ServiceCard>)
               }
            </div>
        </div>
    );
};

export default Services;