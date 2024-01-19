import { FcNext } from "react-icons/fc";

const ServiceCard = ({ service }) => {

    const { _id, title, img, price, } = service
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{title}</h2>
                <p className='text-orange-500 text-xl'>${price}</p>
                <div><button className="btn bg-orange-600 mt-5">Buy Now <FcNext className=" item-end mt-1 " /></button>
                
                </div>
                 
               
                   
                    
                

            </div>
        </div>
    )
};

export default ServiceCard;