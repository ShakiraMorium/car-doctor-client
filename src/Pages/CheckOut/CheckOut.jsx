import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const CheckOut = () => {
    const service = useLoaderData()
    const { title, price, _id, } = service;
    const {user} = useContext(AuthContext);

    const handleCheckOut = event =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const checkOuts = {
            customerName: name,
            email,
            date,
            img,
            service:_id,
            price: price
        }
        console.log(checkOuts);

        fetch('http://localhost:5000/checkOuts',{
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(checkOuts)
        })
        .then(res => res.json())
        .then(checkOuts=>{console.log(checkOuts);})
        if(data.insertedId){
            alert('service checkout successfully')
        }
    } 

    return (
        <div>
            <h2 className='text-center text-3xl'>Book Service:{title}</h2>
                  
                    <form onSubmit={handleCheckOut}>
                         <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" defaultValue={user?.displayName} name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <input type="date" name="date" className="input input-bordered" required />
                                
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Due amount</span>
                                </label>
                                <input type="text" defaultValue={'$'+ price} className="input input-bordered" required />
                                
                            </div>
                            <div className="form-control mt-6">
                                <input className='btn btn-primary btn-block' type="submit" value= "Order Confirm"/>
                            </div>
                        </div>
                    </form>
                    </div>
             
            
    );
};

export default CheckOut;