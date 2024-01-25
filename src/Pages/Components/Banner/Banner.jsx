import img1 from '../../../assets/banner/1.jpg';
import img2 from '../../../assets/banner/2.jpg';
import img3 from '../../../assets/banner/3.jpg';
import img4 from '../../../assets/banner/4.jpg';

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full ">
                <img src={img1} className="w-full rounded-xl" />
                <div className="absolute rounded-xl h-full flex items-center pl-6 left-0 top-0  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='text-white space-y-7 w-1/3'>
                        <h1 className='font-bold text-6xl '>Affordabe Price For Car Servicing</h1>
                        <p className='text-sm '>There are many varieation of passage of available but majority have suffered aiteration in some for car</p>
                        <div>
                            <button className='btn btn-error mr-5'>Discover More</button>
                            <button className='btn btn-outline btn-warning'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className='absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0'>
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                    
                    
            </div>
            
                    
                
            <div id="slide2" className="carousel-item relative w-full ">
                <img src={img2} className="w-full rounded-xl" />
                <div className="absolute rounded-xl h-full flex items-center pl-6 left-0 top-0  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='text-white space-y-7 w-1/3'>
                        <h1 className='font-bold text-6xl '>Affordabe Price For Car Servicing</h1>
                        <p className='text-sm '>There are many varieation of passage of available but majority have suffered aiteration in some for car</p>
                        <div>
                            <button className='btn btn-error mr-5'>Discover More</button>
                            <button className='btn btn-outline btn-warning'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className='absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0'>
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
                    
                    
            </div>
            <div id="slide3" className="carousel-item relative w-full ">
                <img src={img3} className="w-full rounded-xl" />
                <div className="absolute rounded-xl h-full flex items-center pl-6 left-0 top-0  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='text-white space-y-7 w-1/3'>
                        <h1 className='font-bold text-6xl '>Affordabe Price For Car Servicing</h1>
                        <p className='text-sm '>There are many varieation of passage of available but majority have suffered aiteration in some for car</p>
                        <div>
                            <button className='btn btn-error mr-5'>Discover More</button>
                            <button className='btn btn-outline btn-warning'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className='absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0'>
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
                    
                    
            </div>
            <div id="slide4" className="carousel-item relative w-full ">
                <img src={img4} className="w-full rounded-xl" />
                <div className="absolute rounded-xl h-full flex items-center pl-6 left-0 top-0  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='text-white space-y-7 w-1/3'>
                        <h1 className='font-bold text-6xl '>Affordabe Price For Car Servicing</h1>
                        <p className='text-sm '>There are many varieation of passage of available but majority have suffered aiteration in some for car</p>
                        <div>
                            <button className='btn btn-error mr-5'>Discover More</button>
                            <button className='btn btn-outline btn-warning'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className='absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0'>
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
                    
                    
            </div>
        </div>
    );
};

export default Banner;