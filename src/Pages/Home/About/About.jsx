import person from '../../../assets/parts/parts.jpg';
import person2 from '../../../assets/parts/person.jpg';

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative '>
                    <img src={person2} className="  w-3/4 rounded-lg shadow-2xl" />
                    <img src={person} className=" rounded-lg shadow-2xl w-1/2 absolute right-5 top-1/2 border-white border-8" />
                </div>
                <div className='lg:w-1/2 p-4'>
                    <h3 className="text-xl text-red-400 font-bold">About Us</h3>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <p className="py-6 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
            </div>
        </div>
    );
};

export default About;