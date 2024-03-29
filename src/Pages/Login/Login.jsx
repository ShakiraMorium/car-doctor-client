import { Link } from 'react-router-dom';
import img from '../../assets/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import axios from 'axios';

const Login = () => {

    const { logIn } = useContext(AuthContext); 

    const handleForm = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log( email, password)


       logIn(email, password)
            .then(result => {
                const loggedIn = result.user;
                console.log(loggedIn);
                const user= {email}
                // navigate(location?.state ? location?.state : '/')
                // get access token with axios//

                axios.post('http://localhost:5000/jwt',user)
                .then(res =>{console.log(res.data)});

            })
            .catch(error => console.log(error));
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row ">
                <div className="mr-12 w-1/2">

                    <img src={img} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 font-bold">
                    <form onSubmit={handleForm} className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login !</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value='Login'></input>
                        </div>
                    </form>
                    <p className='text-center mb-4'>New to Car Doctor! <Link className="text-orange-600 font-bold"to="/signup">Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;